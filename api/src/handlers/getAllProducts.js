const { Product, Categories } = require("../db");


const getAllproducts = async (req, res, next) => {
    var name = req.query.name;
    var precio = req.query.precio;
    var categoria = req.query.categoria;
<<<<<<< HEAD
    var bodega = req.query.bodega
    
=======
    var bodega = req.query.bodega;
    var order = req.query.order;
>>>>>>> 8026d652b1f0d55e748b7f43484733f13a1efab8
    try {
        if (order) {
            if (precio === 'Ascendant') {
                var asc = await Product.findAll({
                    order: sequelize.literal('precio ASC')
                })
                res.send(asc)
            }
            if (precio === 'Descendant') {
                var desc = await Product.findAll({
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

            const productDB = await Product.findAll({
                attributes: { exclude: ["createdAt", "updatedAt", 'price'] },
                include: {
                    model: Categories,
                    attributes: ["name"],
                    through: {
                        attributes: []
                    },
                },
            });

            res.send(productDB);
        };

    } catch (error) {
        next(error)
    };



};



module.exports = {
    getAllproducts,
}