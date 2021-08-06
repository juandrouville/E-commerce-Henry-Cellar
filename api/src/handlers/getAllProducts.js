const { Product, Categories, Wineries } = require("../db");


const getAllproducts = async (req, res, next) => {
    var name = req.query.name;
    var precio = req.query.precio;
    var categoria = req.query.categoria;
    var bodega = req.query.bodega;
    try {
        if (precio) {
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
                var findOne = await Product.findAll({
                    include: {
                        model: Wineries,
                        where: {
                            categoria
                        }
                    }}
                    )
                     
                if (findOne.length === 0) {
                    return res.status(404).send('Error: Name of category is invalid')
                } else return res.json(findOne)
            }
            else if (bodega) {
                var findOne = await Product.findAll({
                        include: {
                            model: Wineries,
                            where: {
                                bodega
                                }
                            }}
                            )
                
                if (findOne.length === 0) {
                    return res.status(404).send('Error: Name of CELLAR is invalid')
                } else return res.json(findOne)
            }
        } else {

            const productDB = await Product.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"] },
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
const getProductoById = async (req, res) => {
    try {
      const producto = await Productos.findById(req.params.id);
      res.json(producto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "fallo en el servidor" });
    }
  };


module.exports = {
    getAllproducts,
    getProductoById
}