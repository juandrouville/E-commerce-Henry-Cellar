const { Router } = require('express');
const { removeOrderline } = require('../handlers/removeOrderline.js');
const router = Router();

router.delete("/:orderlineId",removeOrderline)



module.exports =router