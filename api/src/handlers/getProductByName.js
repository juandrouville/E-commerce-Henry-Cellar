const { Product, Categories } = require("../db");
const { Op } = require("sequelize");

const getProductByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const productSearch = await Product.findAll({
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
    res.status(404).send({ message: "Something went wrong" });
  }
};

module.exports = {
  getProductByName,
};
