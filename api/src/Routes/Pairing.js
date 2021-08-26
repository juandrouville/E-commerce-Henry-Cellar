const { Router } = require('express');
const { pairing } = require("../handlers/Pairing.js");
const router = Router();

router.get("/", pairing);


module.exports = router;