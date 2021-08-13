const { Router } = require('express');
const router = Router();



const getAllProductsRouter = require("./getAllProducts");
const productDetail=require("./productDetail");
const getProductByNameRouter=require("./getProductByName");
const postProduct=require("./postProduct");
const editProduct=require('./editProduct');
const getAllCategories  = require('./getAllCategories');
const getAllWineries  = require('./getAllWineries');
const editOrderLine=require('./editOrderLine');
const getUser=require('./getUser');
const postReview = require('./postReview');


router.use("/allproducts", getAllProductsRouter);
router.use("/product",productDetail);
router.use("/productSearch",getProductByNameRouter);
router.use("/postproduct",postProduct);
router.use("/editProduct",editProduct);
router.use("/categories",getAllCategories);
router.use("/wineries",getAllWineries);
router.use("/getUser",getUser);
router.use('/editOrderLine',editOrderLine);
router.use('/postReview',postReview);



module.exports = router;
