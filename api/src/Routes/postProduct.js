const { Router } = require('express');
const {postProduct} = require("../handlers/postProduct")
const router = Router();

router.post("/", postProduct);

module.exports = router;