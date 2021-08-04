const { Router } = require('express');
const router = Router();



const getAllProductsRouter = require("./getAllProducts");
const productDetail=require("./productDetail");
const getProductByNameRouter=require("./getProductByName");
router.use("/allproducts", getAllProductsRouter);
router.use("/product",productDetail);
router.use("/productSearch",getProductByNameRouter);



module.exports = router;
