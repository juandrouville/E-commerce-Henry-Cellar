const { Order } = require("../db");
const { Orderline } = require("../db");
const { Product } = require("../db");
const { User } = require("../db");

async function unifyCarts(req, res, next) {
  try {
    const { userId } = req.body;
    const localStorageCart = req.body;

    const orderOpenOfUser = await Order.findOne({
      where: { state: "pending", userId: userId },
    });

    localStorageCart.forEach(async (item) => {
      let itemOrderLine = await Orderline.create({ amount: item.quantity });

      let productOfOrderline = await Product.findOne({
        where: { id: item.id },
      });

      itemOrderLine.setProduct(productOfOrderline);

      itemOrderLine.setOrder(orderOpenOfUser);

      // result.push(itemOrderLine)
    });

    //res.json(result)
  } catch (error) {
    next(error);
  }
}

module.exports = {
  unifyCarts,
};
