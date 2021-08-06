const { Router } = require('express');
const { postUser} = require('../handlers/postUser');
const router = Router();

router.get("/",postUser);



module.exports =router