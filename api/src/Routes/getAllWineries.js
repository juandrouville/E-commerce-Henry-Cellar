const { Router } = require('express');
const {getAllWineries} = require("../handlers/GetAllWineries");
const router = Router();

router.get("/", getAllWineries);


module.exports = router;