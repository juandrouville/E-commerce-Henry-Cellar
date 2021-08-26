const { Router } = require('express');
const {getOneOrderline} = require("../handlers/getOneOrderline");
const router = Router();

router.get("/:id", getOneOrderline);


module.exports = router;