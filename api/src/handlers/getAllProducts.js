const { Product, Categories } = require("../db");
const { SetDataInitial } = require('../initialContents/SetDataInitial');
const { products } = require('../initialContents/DataWines');

const getAllproducts = async (req, res, next) => {
    var name = req.query.name;
    var precio = req.query.precio;
    var categoria = req.query.categoria;
    var bodega = req.query.bodega
    try {
        console.log(products[0]);
        await SetDataInitial(products);
        const ProductDB = await Product.findAll({
            attributes:{exclude : ["createdAt","updatedAt"]},
        });
        // {
           
        //     include: {
        //         model: Categories,
        //         attributes: ["name", "varietal", "type"],
        //         through: {
        //             attributes: []
        //         }
        //     }
        // });

        // const resultAllProduct = [];
        // ProductDB.forEach((p)=>{
        //     let obj = {
        //         name: p.name,
        //         img: p.img,
        //         description: p.description,
        //         bodega: p.bodega,
        //         precio: p.precio
        //     }
        //     resultAllProduct.push(obj);
        // })

        res.send(ProductDB);

    } catch (error) {
        next(error)
    }


}


module.exports = {
    getAllproducts,

};