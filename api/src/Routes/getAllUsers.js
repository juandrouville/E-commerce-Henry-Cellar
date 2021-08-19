const { Router } = require('express');
const {getAllUsers} = require("../handlers/getAllUsers")
const router = Router();

router.get("/", getAllUsers);


module.exports = router;