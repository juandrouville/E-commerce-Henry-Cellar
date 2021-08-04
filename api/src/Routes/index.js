const { Router } = require('express');
const router = Router();
<<<<<<< HEAD
const getAllProductsRouter = require("./getAllProducts");


router.use("/allproducts", getAllProductsRouter);
=======
const productsRouter = require("./products");
const productDetail=require("./productDetail")


router.use("/products", productsRouter);
router.use("/product",productDetail)
>>>>>>> fede



module.exports = router;
