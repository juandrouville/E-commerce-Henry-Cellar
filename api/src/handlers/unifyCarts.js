const { Order } = require("../db");
const { Orderline } = require("../db");
const { Product } = require("../db");
const { User } = require("../db");

async function unifyCarts(req, res, next) {
  try {
    const { userId } = req.params;
    const localStorageCart = req.body;

    const orderOpenOfUser = await Order.findOne({
      where: { state: "pending", userId: userId }, include:[Orderline]
    });

    for(let i=0;i<localStorageCart.length;i++){

      let estado="No esta"

      for(let j=0;j<orderOpenOfUser.orderlines.length;j++){

        if(localStorageCart[i].id===orderOpenOfUser.orderlines[j].productId){
           estado="Si esta"
           let oldAmount=orderOpenOfUser.orderlines[j].amount
           orderOpenOfUser.orderlines[j]["amount"]=oldAmount+1
           await orderOpenOfUser.orderlines[j].save()
        }
      }
      if(estado==="No esta") {

        let itemOrderLine = await Orderline.create({ amount: localStorageCart[i].quantity });

        let productOfOrderline = await Product.findOne({
        where: { id: localStorageCart[i].id },
        });
        
        itemOrderLine.setProduct(productOfOrderline);
        
        itemOrderLine.setOrder(orderOpenOfUser);
      }
    }

    res.send('Actualizamos tu carrito')

  } catch (error) {
    next(error);
  }
}

module.exports = {
  unifyCarts,
};
