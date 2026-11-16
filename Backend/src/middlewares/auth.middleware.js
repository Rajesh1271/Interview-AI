const jwt = require('jsonwebtoken')
const tokenBlacklistModel = require('../models/blacklist.model')



async function authUser(req, res, next) {
    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: 'Token not provided. Please login first.'
        })
    }

const isBlacklisted = await tokenBlacklistModel.findOne({ token })
    if (isBlacklisted) {
        return res.status(401).json({
            message: 'Token is invalid.'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token. Please login again.'
        })
    }
}


module.exports = {authUser}