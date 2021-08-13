const { Router } = require('express');
const {unifyCarts} = require("../handlers/unifyCarts")
const router = Router();

router.post("/:userId", unifyCarts);

module.exports = router;