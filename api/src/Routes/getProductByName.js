const { Router } = require('express');
const {getProductByName} = require("../handlers/getProductByName")
const router = Router();

router.get("/:name", getProductByName);


module.exports = router;