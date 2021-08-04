const { Router } = require('express');
const router = Router();
const getAllProductsRouter = require("./getAllProducts");


router.use("/allproducts", getAllProductsRouter);



module.exports = router;
