const { Router } = require('express');
const {editUser} = require("../handlers/editUser")
const router = Router();

router.put("/:userId", editUser);


module.exports = router;