const { Product, Categories } = require("../db");
//const axios = require("axios");

const getAllproducts = async (req, res, next) => {
    var name = req.query.name;
    var precio = req.query.precio;
    var categoria = req.query.categoria;
    var bodega = req.query.bodega
    if (order) {
        if (precio === 'Ascendant'){
            var asc = await Prodcut.findAll({
                order: sequelize.literal('precio ASC')
            })
            res.send(asc)
        } 
        if (precio === 'Descendant') {
            var desc = await Prodcut.findAll({
                order: sequelize.literal('precio DESC')
            })
            res.send(desc)
        }
        else if (categoria) {
            var findOne = await Categories.findAll({
                where: {
                    categoria: categoria,
                }
            })
            if(findOne.length === 0){
                return res.status(404).send('Error: Name of continent is invalid')
            } else return res.json(findOne)
        }
    }
    else{
    try {
        const ProductDB = await Product.findAll({
           
            include: {
                model: Categories,
                attributes: ["name", "varietal", "type"],
                through: {
                    attributes: []
                }
            }
        });

        const resultAllProduct = [];
        ProductDB.forEach((p)=>{
            let obj = {
                name: p.name,
                img: p.img,
                description: p.description,
                harvest: p.harvest,
                precio: p.precio
            }
            resultAllProduct.push(obj);
        })

        res.send(resultAllProduct);

    } catch (error) {
        next(error)
    }

    }
}


module.exports = {
    getAllproducts,

};