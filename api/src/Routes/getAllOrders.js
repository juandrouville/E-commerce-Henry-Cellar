const { Router } = require('express');
const {getAllOrders} = require("../handlers/getAllOrders");
const router = Router();

router.get("/", getAllOrders);


module.exports = router;