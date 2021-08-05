const { Product, Categories } = require("../db");
const { SetDataInitial } = require('../initialContents/SetDataInitial');
const { products } = require('../initialContents/DataWines');

const getAllproducts = async (req, res, next) => {
    var name = req.query.name;
    var precio = req.query.precio;
    var categoria = req.query.categoria;
    var bodega = req.query.bodega
    try {
        if (order) {
            if (precio === 'Ascendant') {
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
                if (findOne.length === 0) {
                    return res.status(404).send('Error: Name of continent is invalid')
                } else return res.json(findOne)
            }
        } else {
            // await SetDataInitial(products);
            const productDB = await Product.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", 'price'] },
                include:{
                    model:Categories,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    },
            }});
            
            res.send(productDB);
        }; 

    } catch (error) {
            next(error)

        };

};


module.exports = {
    getAllproducts,
}