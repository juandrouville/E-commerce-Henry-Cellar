const { Product } = require("../db");

async function removeProduct(req, res) {
  try {
    const productToRemove = await Product.findByPk(req.params.id);

    await productToRemove.destroy();

    res.send(`The item has been removed!`);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  removeProduct,
};
