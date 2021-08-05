const { Product, Categories } = require("../db");
const { Op } = require("sequelize");

const getProductByName = async (req, res, next) => {
    let {name} = req.query;
    try {
        let productSearch = await Product.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            include: [Categories],
        });
        if (productSearch.length === 0) {
            res.status(404).send({ message: "Nothing found in our Database" });
        } else {
        res.send(productSearch);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProductByName,
};