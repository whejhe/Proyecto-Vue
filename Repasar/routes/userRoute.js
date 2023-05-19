const express = require('express');
const router = express.Router();
const {getUsers,getUserById,createUser, updateUser, deleteUser, getImage} = require('../controllers/userController') 
const {register,login,logout,profile} = require('../controllers/authController');
const jsonParser = require('body-parser').json()



//router.get('/user',getUsers);
router.get('/user',getUsers);
router.get('/userId/:id',getUserById);
router.get('/image/:id',getImage);
router.post('/crearUsuario',jsonParser,createUser);
router.delete('/borrarUsuario/:id',jsonParser,deleteUser);

router.post('/register',jsonParser,register);
router.post('/login',jsonParser,login);
router.post('/logout',jsonParser,logout);
router.post('/profile',jsonParser,profile);
router.post('/profile/update',jsonParser,updateUser);


module.exports = router;