const express = require('express');
const router = express.Router();
const {getProfiles,getProfileById,createProfile, updateProfile, deleteProfile} = require('../controllers/profileControllers');
const jsonParser = require('body-parser').json();
const verifyToken = require('../middleware/auth')

router.get('/profile',getProfiles);
router.get('/profile/:id',getProfileById);
router.post('/crearPerfil',jsonParser,createProfile);
router.post('/actualizarPerfil/:id',jsonParser,updateProfile);
router.delete('/borrarPerfil/:id',jsonParser,deleteProfile);

module.exports = router;