const { Router } = require('express');
const {getAllCategories} = require("../handlers/getAllCategories");
const router = Router();

router.get("/", getAllCategories);


module.exports = router;