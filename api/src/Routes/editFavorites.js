const { Router } = require('express');
const { editFavorites} = require("../handlers/editFavorites")
const router = Router();

router.post("/:userId", editFavorites);


module.exports = router;