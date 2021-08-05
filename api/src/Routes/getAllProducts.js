const { Router } = require('express');
const {getAllproducts, getProductoById} = require("../handlers/getAllProducts")
const router = Router();

router.get("/", getAllproducts);
router.get("/:id", getProductoById);

module.exports = router;