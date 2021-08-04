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
        
        res.send(productSearch);
    } catch (error) {
        res.status(400).json({ message: "Nothing found" });
        console.log("error", error);
    }
}

module.exports = {
    getProductByName,
};