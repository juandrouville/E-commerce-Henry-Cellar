const { Router } = require('express');
const {addProductToDBCart} = require("../handlers/addProductToDBCart")
const router = Router();

router.post("/:userId",addProductToDBCart);

module.exports = router;