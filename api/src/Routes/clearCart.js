const { Router } = require('express');
const {clearCart} = require("../handlers/clearCart")
const router = Router();

router.delete("/:orderId", clearCart);


module.exports = router;
