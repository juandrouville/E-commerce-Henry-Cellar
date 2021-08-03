const { Router } = require('express');
const {getAllproducts} = require("../handlers/products")
const router = Router();

router.get("/", getAllproducts);


module.exports = router;