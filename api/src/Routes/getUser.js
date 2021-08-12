const { Router } = require('express');
const {getUser} = require("../handlers/getUser")
const router = Router();

router.post("/:id",getUser);

module.exports = router;