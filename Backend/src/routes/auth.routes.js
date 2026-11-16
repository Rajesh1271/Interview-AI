const express = require('express');
const authcontroller = require('../controllers/auth.controller')
const authmiddleware = require('../middlewares/auth.middleware')

const authRouter = express.Router()

/**
 * @route POST /api/auth/register
 * @desc Register a new user
 * @access Public
 */
authRouter.post('/register' , authcontroller.registerUsercontroller)


/** 
 * @route POST /api/auth/login
 * @desc Login a user with email and password
 * @access Public
 */
authRouter.post('/login' , authcontroller.loginUsercontroller)


/* @route GET /api/auth/logout
 * @desc clear token from user cookie and  add the token in blacklist
 * @access Public
 */
authRouter.get('/logout' , authcontroller.logoutUsercontroller)



/**
 *  @route GET /api/auth/get-me
 * @desc Get the details of the logged-in user
 * @access Private
 */
authRouter.get('/get-me' , authmiddleware.authUser, authcontroller.getMecontroller)  




module.exports = authRouter