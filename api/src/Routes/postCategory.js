const { Router } = require("express");
const { postCategory } = require("../handlers/postCategory");
const router = Router();

router.post("/", postCategory);

module.exports = router;
