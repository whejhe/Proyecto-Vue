const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { verifyToken } = require('../middleware/verifyToken')
const authController = require('../controllers/authController');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

route.post('/verifyToken',verifyToken,(req,res)=>{
    res.sendStatus(200);
})

route.post('/login',authController.login);
route.post('/register',authController.register);

module.exports = route;

