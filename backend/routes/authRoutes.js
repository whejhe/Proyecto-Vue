const express = require('express');
const route = express.Router();
const authController = require('../controllers/authController');
const user = require('../controllers/user.controllers')
const {verifyToken} = require ('../middleware/auth');

route.post('/login',verifyToken,authController.login);
route.post('/register',authController.register);
route.post('/profile',verifyToken,user.updateUser);

module.exports = route;

