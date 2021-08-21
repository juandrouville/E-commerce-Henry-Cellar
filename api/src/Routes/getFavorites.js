const { Router } = require('express');
const {getFavorites} = require("../handlers/getFavorites")
const router = Router();

router.get("/:userId",getFavorites);

module.exports = router;