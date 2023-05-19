const express = require('express');
const router = express.Router();
const {getUsers,getUserById,createUser, updateUser, deleteUser} = require('../controllers/user.controllers') 
const {register,login,logout} = require('../controllers/authController')
const jsonParser = require('body-parser').json()



//router.get('/user',getUsers);
router.get('/user',getUsers);
router.get('/userId/:id',getUserById);
router.post('/crearUsuario',jsonParser,createUser);
router.post('/actualizarUsuario/:id',jsonParser, updateUser);
router.delete('/borrarUsuario/:id',jsonParser,deleteUser);


router.post('/register',jsonParser,register);
router.post('/login',jsonParser,login);
router.post('/logout',jsonParser,logout);

module.exports = router;