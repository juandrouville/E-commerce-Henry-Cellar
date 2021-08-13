const { Router } = require('express');
const router = Router();



const getAllProductsRouter = require("./getAllProducts");
const productDetail=require("./productDetail");
const getProductByNameRouter=require("./getProductByName");
const postProduct=require("./postProduct");
const editProduct=require('./editProduct');
const getAllCategories  = require('./getAllCategories');
const getAllWineries  = require('./getAllWineries');
const editOrderLine=require('./editOrderLine')
const getUser=require('./getUser')
const unifyCarts=require('./unifyCarts');
const postReview = require('./postReview');


router.use("/allproducts", getAllProductsRouter);
router.use("/product",productDetail);
router.use("/productSearch",getProductByNameRouter);
router.use("/postproduct",postProduct);
router.use("/editProduct",editProduct);
router.use("/categories",getAllCategories);
router.use("/wineries",getAllWineries);
router.use("/getUser",getUser);
<<<<<<< HEAD
router.use('/editOrderLine',editOrderLine)
router.use('/unifyCarts',unifyCarts)
=======
router.use('/editOrderLine',editOrderLine);
router.use('/postReview',postReview);

>>>>>>> 77c3c65dc1e8f953f36f7105f214cb7f6f7b2328


module.exports = router;
