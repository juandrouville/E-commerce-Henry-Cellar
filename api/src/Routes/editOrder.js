const { Router } = require('express');
const { editOrder} = require("../handlers/editOrder")
const router = Router();

router.put("/:orderId", editOrder);


module.exports = router;