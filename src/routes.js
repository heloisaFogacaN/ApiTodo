const express = require('express');
const router = express.Router();

const registraUsuarioRotas = require('./usuarios/controllers/usuarios-controller.js')
router.use(registraUsuarioRotas());

const registraCardsPermitionsRotas = require('./usuarios/controllers/cardsPermitions-controller.js')
router.use(registraCardsPermitionsRotas());

const registraPropriedadesRotas = require('./usuarios/controllers/properties-controller.js')
router.use(registraPropriedadesRotas());

module.exports = router;