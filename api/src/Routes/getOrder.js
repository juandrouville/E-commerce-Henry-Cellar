const { Router } = require('express');
const {getOrder} = require("../handlers/getOrder");
const router = Router();

router.get("/", getOrder);


module.exports = router;