const { Router } = require('express');
const { mercadop, pagos } = require('../handlers/mercadopago');
const router = Router();

router.post("/:id",mercadop);

router.get("/",pagos);

module.exports = router;