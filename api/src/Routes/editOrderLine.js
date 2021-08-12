const { Router } = require('express');
const {editOrderLine} = require("../handlers/editOrderLine")
const router = Router();

router.put("/:id", editOrderLine);


module.exports = router;
