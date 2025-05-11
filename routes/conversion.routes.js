const express = require('express');
const router = express.Router();
const { getProductosConvertidos } = require('../controllers/conversion.controller');

router.get('/convertido', getProductosConvertidos);

module.exports = router;
