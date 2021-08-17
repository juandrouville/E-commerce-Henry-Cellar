const { Router } = require('express');
const {getOrderlines} = require("../handlers/getOrderlines")
const router = Router();

router.get("/:cartId",getOrderlines);

module.exports = router;
