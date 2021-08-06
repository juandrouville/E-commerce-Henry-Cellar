const { Router } = require('express');
const router = Router();



const getAllProductsRouter = require("./getAllProducts");
const productDetail=require("./productDetail");
const getProductByNameRouter=require("./getProductByName");
const postProduct=require("./postProduct");
const editProduct=require('./editProduct');
const getAllCategories  = require('./getAllCategories');

router.use("/allproducts", getAllProductsRouter);
router.use("/product",productDetail);
router.use("/productSearch",getProductByNameRouter);
router.use("/postproduct",postProduct);
router.use("/editProduct",editProduct);
router.use("/categories",getAllCategories);



module.exports = router;
