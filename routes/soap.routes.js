const express = require('express');
const router = express.Router();
const { obtenerMonedaPorPais } = require('../controllers/soap.controller');

router.get('/moneda', obtenerMonedaPorPais);

module.exports = router;
