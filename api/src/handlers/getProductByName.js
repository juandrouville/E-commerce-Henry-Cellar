const { Product, Categories } = require("../db");
const { Op } = require("sequelize");

const getProductByName = async (req, res, next) => {
    const name = req.query.name;
    try {
        const productSearch = await Product.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`,
                },
            },
            include: [Categories],
        });
        console.log(productSearch);
        res.json(productSearch);
    } catch (error) {
        res.status(400).json({ message: "Nothing found" });
        console.log("error", error);
    }
}

module.exports = {
    getProductByName,
};