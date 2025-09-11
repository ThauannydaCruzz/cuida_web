const express = require('express');
const { registerCidadao, loginCidadao } = require('../controllers/publicController');

const router = express.Router();

router.post('/cadastro-cidadao', registerCidadao);
router.post('/login-cidadao', loginCidadao);

module.exports = router;