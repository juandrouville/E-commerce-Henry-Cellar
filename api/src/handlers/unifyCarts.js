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


    localStorageCart.forEach(async (item) => {

      let estado="No esta"

      orderOpenOfUser.orderlines.forEach(async(orderline)=>{
        if(orderline.productId===item.id){
            const orderlineWithThatProduct=await Orderline.findOne({where:{id:orderline.id}})
            let oldAmount=orderlineWithThatProduct.amount
            orderlineWithThatProduct["amount"]=oldAmount+1
            await orderlineWithThatProduct.save()
        }
      })

      for(let i=0;i<orderOpenOfUser.orderlines.length;i++){
        for(let j=0;j<localStorageCart.length;j++){
          if(orderOpenOfUser.orderlines[i].productId===localStorageCart[j].id){
            estado="Si esta"
          }
        }
      }

      if(estado==="No esta"){
      let itemOrderLine = await Orderline.create({ amount: item.quantity });

      let productOfOrderline = await Product.findOne({
        where: { id: item.id },
      });

      itemOrderLine.setProduct(productOfOrderline);

      itemOrderLine.setOrder(orderOpenOfUser);
       }

      // result.push(itemOrderLine)
    });

    res.send('Actualizamos tu carrito')
  } catch (error) {
    next(error);
  }
}

module.exports = {
  unifyCarts,
};
