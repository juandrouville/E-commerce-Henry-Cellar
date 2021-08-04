const { Router } = require('express');
const { getProductDetail } = require('../handlers/getProductDetail');
const router = Router();

router.get("/:id",getProductDetail)



module.exports =router