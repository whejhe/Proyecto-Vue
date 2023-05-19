const express = require('express');
const router = express.Router();
const { createGrupo, updateGrupo, deleteGrupo } = require('../controllers/grupoController');
const jsonParser = require('body-parser').json()

router.post('/',createGrupo);
router.put('/:id', updateGrupo);
router.delete('/:id',deleteGrupo);

module.exports = router;
