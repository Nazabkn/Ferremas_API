const express = require('express');
const router = express.Router();
const {
  obtenerMonedaPorPais,
  obtenerCapitalPorPais,
  obtenerInfoPaisCompleta
} = require('../controllers/soap.controller');

router.get('/moneda', obtenerMonedaPorPais);
router.get('/capital', obtenerCapitalPorPais);
router.get('/pais', obtenerInfoPaisCompleta);

module.exports = router;
