const { Router } = require('express');
const router = Router();
// const productsRouter = require("./products");
const productDetail=require("./productDetail")


// router.use("/products", productsRouter);
router.use("/product",productDetail)



module.exports = router;
