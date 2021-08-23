const { Router } = require("express");
const { removeProduct } = require("../handlers/removeProduct.js");
const router = Router();

router.delete("/:id", removeProduct);

module.exports = router;
