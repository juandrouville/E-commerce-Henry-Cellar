const { Router } = require('express');
const router = Router();



const getAllProductsRouter = require("./getAllProducts");
const productDetail=require("./productDetail");
const getProductByNameRouter=require("./getProductByName");
const postProduct=require("./postProduct");
const editProduct=require('./editProduct');
const getAllCategories  = require('./getAllCategories');
const getAllWineries  = require('./getAllWineries');
const clearCart=require('./clearCart')
const getUser=require('./getUser')
const unifyCarts=require('./unifyCarts');
const postReview = require('./postReview');
const addProductToDBCart=require('./addProductToDBCart')
const getOrderlines=require('./getOrderlines')
const removeOrderline=require('./removeOrderline')

router.use("/allproducts", getAllProductsRouter);
router.use("/product",productDetail);
router.use("/productSearch",getProductByNameRouter);
router.use("/postproduct",postProduct);
router.use("/editProduct",editProduct);
router.use("/categories",getAllCategories);
router.use("/wineries",getAllWineries);
router.use("/getUser",getUser);
router.use('/unifyCarts',unifyCarts)
router.use('/postReview',postReview);
router.use('/addProductToDBCart',addProductToDBCart)
router.use('/getOrderlines',getOrderlines)
router.use('/removeOrderline',removeOrderline)
router.use('/clearCart',clearCart)


module.exports = router;
