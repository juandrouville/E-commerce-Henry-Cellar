const { Router } = require("express");
const router = Router();

const getAllProductsRouter = require("./getAllProducts");
const productDetail = require("./productDetail");
const getProductByNameRouter = require("./getProductByName");
const postProduct = require("./postProduct");
const editProduct = require("./editProduct");
const getAllCategories = require("./getAllCategories");
const getAllWineries = require("./getAllWineries");
const clearCart = require("./clearCart");
const getUser = require("./getUser");
const unifyCarts = require("./unifyCarts");
const postReview = require("./postReview");
const addProductToDBCart = require("./addProductToDBCart");
const getOrderlines = require("./getOrderlines");
const removeOrderline = require("./removeOrderline");
const getAllUsers = require("./getAllUsers");
const getOrder = require("./getOrder");
const getFavorites = require("./getFavorites");
const editFavorites = require("./editFavorites");
const getAllOrders = require("./getAllOrders");
const editOrder = require("./editOrder");
const removeProduct = require("./removeProduct");
const user = require("./user");
const editUser=require('./editUser')
const mercadopago=require("./mercadopago")

router.use("/mercadopago", mercadopago);
router.use("/allproducts", getAllProductsRouter);
router.use("/product", productDetail);
router.use("/productSearch", getProductByNameRouter);
router.use("/postproduct", postProduct);
router.use("/editProduct", editProduct);
router.use("/categories", getAllCategories);
router.use("/wineries", getAllWineries);
router.use("/getUser", getUser);
router.use("/unifyCarts", unifyCarts);
router.use("/postReview", postReview);
router.use("/addProductToDBCart", addProductToDBCart);
router.use("/getOrderlines", getOrderlines);
router.use("/removeOrderline", removeOrderline);
router.use("/clearCart", clearCart);
router.use("/getAllUsers", getAllUsers);
router.use("/getorder", getOrder);
router.use("/getFavorites", getFavorites);
router.use("/editFavorites", editFavorites);
router.use("/getAllOrders", getAllOrders);
router.use("/editOrder", editOrder);
router.use("/editUser", editUser);
router.use("/removeProduct", removeProduct);
router.use("/user", user);

module.exports = router;
