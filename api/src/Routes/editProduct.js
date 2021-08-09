const { Router } = require('express');
const {editProduct} = require("../handlers/editProduct")
const router = Router();

router.put("/:id", editProduct);


module.exports = router;