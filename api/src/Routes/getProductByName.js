const { Router } = require("express");
const { getProductByName } = require("../handlers/getProductByName");
const router = Router();

router.get("/", getProductByName);

module.exports = router;
