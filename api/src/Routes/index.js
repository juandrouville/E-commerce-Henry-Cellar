const { Router } = require('express');
const router = Router();
const getAllProductsRouter = require("./getAllProducts");
const productDetail=require("./productDetail");
router.use("/allproducts", getAllProductsRouter);
router.use("/product",productDetail);


module.exports = router;
