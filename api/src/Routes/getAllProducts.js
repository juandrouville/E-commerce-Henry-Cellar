const { Router } = require('express');
const {getAllproducts} = require("../handlers/getAllProducts")
const router = Router();

router.get("/", getAllproducts);


module.exports = router;