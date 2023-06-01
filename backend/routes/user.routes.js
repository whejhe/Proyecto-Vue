const express = require('express');
const router = express.Router();
const {getUsers,getUserById,createUser, updateUser, deleteUser} = require('../controllers/user.controllers') 
const {register,login,logout} = require('../controllers/authController')
const jsonParser = require('body-parser').json()
const users = require('../models/user')



//router.get('/user',getUsers);
router.get('/user',getUsers);
router.get('/userId/:id',getUserById);
router.post('/crearUsuario',jsonParser,createUser);
router.delete('/borrarUsuario/:id',jsonParser,deleteUser);


router.post('/register',jsonParser,register);
router.post('/login',jsonParser,login);
router.post('/logout',jsonParser,logout);
router.put('/profile',jsonParser,updateUser);

module.exports = router;