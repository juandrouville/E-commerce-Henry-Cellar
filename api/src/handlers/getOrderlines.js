const { Orderline } = require('../db');
const { Product  } = require('../db');
const { Order }=require('../db')

async function getOrderlines(req , res, next){
    try{

        const {cartId}=req.params

        var orderlinesOfOrder = await Orderline.findAll({where:{orderId:cartId},include:[Product]})

        // paso los datos de la estructura de la BD a la del front:
            
   let result =[]

      orderlinesOfOrder.forEach(orderline=>{
        result.push({
            id:orderline.product.id,
            name:orderline.product.name,
            price:orderline.product.price,
            quantity:orderline.amount,
            orderlineId:orderline.id
        })
       })

       res.json(result)

    } catch (error){

        next(error)   
    };
};

module.exports = {
    getOrderlines,
};