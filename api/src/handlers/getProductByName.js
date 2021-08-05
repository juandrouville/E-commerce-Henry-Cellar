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
            attributes: []
        },
    },
    });

    console.log(productSearch);
    res.json(productSearch);
    if (productSearch.length === 0) {
      res.status(404).send({ message: "Nothing found in our Database" });
    } else {
      res.send(productSearch);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProductByName,
};
