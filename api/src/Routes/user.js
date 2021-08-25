const { Router } = require('express');

const { tarjeta, compra } = require('../handlers/users.js');
const router = Router();

router.post("/tarjeta/:id",tarjeta)
router.post("/compra/:id",compra)


module.exports =router