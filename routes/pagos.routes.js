const express = require('express');
const router = express.Router();
const { iniciarPago } = require('../controllers/pagos.controller');

router.post('/iniciar', iniciarPago);

module.exports = router;
