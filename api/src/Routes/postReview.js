const { Router } = require('express');
const { postReview } = require("../handlers/postReview")
const router = Router();

router.post("/", postReview);

module.exports = router;