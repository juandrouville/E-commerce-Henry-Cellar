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
      include: {
        model: Categories,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    if (productSearch.length === 0) {
      return res.status(404).send({ message: "Nothing found in our Database" });
    } else {
      return res.json(productSearch);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductByName,
};
