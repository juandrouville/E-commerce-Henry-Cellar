const {Recipe, Diet} = require("../db");
const axios = require("axios");

const getAllproducts = async (req, res, next)=>{
    var name = req.query.name;
    var precio = req.query.precio;
    var categoria = req.query.categoria;
    var bodega = req.query.bodega

    


}


module.exports = {
    getAllproducts,
    
};