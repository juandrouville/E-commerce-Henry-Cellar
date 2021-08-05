const { Router } = require('express');
const {editProduct} = require("../handlers/editProduct")
const router = Router();

router.get("/:id", editProduct);


module.exports = router;