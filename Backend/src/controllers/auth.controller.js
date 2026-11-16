
const usermodel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenBlacklistModel = require('../models/blacklist.model')


async function registerUsercontroller(req, res) {

    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) {
            return res.status(400).json({
                message: 'Please provide username, email, and password'
            })
        }
        
        const isUserAlreadyExists = await usermodel.findOne({
            $or: [{ username }, { email }]
        })

        if (isUserAlreadyExists) {
            return res.status(400).json({
                message: 'Username or email already exists'
            })
        }

        
        const hash = await bcrypt.hash(password, 10)

        
        const user = await usermodel.create({
            username,
            email,
            password: hash
        })

        
        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie('token', token)

        return res.status(201).json({
            message: 'User registered successfully',
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error('Register Error:', error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}



async function loginUsercontroller(req, res) {

    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: 'Please provide email and password'
            })
        }

        const user = await usermodel.findOne({ email })

        if (!user) {
            return res.status(400).json({
                message: 'Invalid email or password'
            })
        }

        const isPasswordValid = await bcrypt.compare(
            password,
            user.password
        )

        if (!isPasswordValid) {
            return res.status(400).json({
                message: 'Invalid email or password'
            })
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        )

        res.cookie('token', token)

        return res.status(200).json({
            message: 'User logged in successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error('Login Error:', error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}
/**
 * 
 * @name logoutUsercontroller
 * @description clear token from user cookie and add the token in blacklist
 * @access Public
 */

async function logoutUsercontroller(req, res) {
    try {
        const token = req.cookies.token

        // Check whether token exists
        if (!token) {
            return res.status(401).json({
                message: 'Token not found. Please login first.'
            })
        }

        // Add token to blacklist
        await tokenBlacklistModel.create({ token })

        // Clear cookie
        res.clearCookie('token')

        return res.status(200).json({
            message: 'User logged out successfully'
        })

    } catch (error) {
        console.error('Logout Error:', error)

        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}

 /* async function logoutUsercontroller(req, res) {
    const token = req.cookies.token

    if (!token) {
         await tokenBlacklistModel.create({ token })
        res.clearCookie('token')
        res.status(200).json({
            message: 'User logged out successfully'
        })
    }
  }
/*function logoutUsercontroller(req, res) {

    res.clearCookie('token')

    return res.status(200).json({
        message: 'User logged out successfully'
    })
}
*/
/**
 * 
 * @name getMecontroller
 * @description Get the  current details of the logged-in user
 * @access Private
 */

async function getMecontroller(req, res) {

    try {
        const user = await usermodel.findById(req.user.id)


         res.status(200).json({
            message: 'User details fetched successfully',
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (error) {
        console.error('Get Me Error:', error)
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
}


module.exports = {
    registerUsercontroller,
    loginUsercontroller,
    logoutUsercontroller,
    getMecontroller
}
