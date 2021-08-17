const { Orderline } = require('../db');
const { Product  } = require('../db');
const { Order }=require('../db')

async function getOrderlines(req , res, next){
    try{

        const {cartId}=req.params

        var orderOfUser = await Order.findByPk(cartId,{include:[Orderline]})

        console.log(orderOfUser.orderlines)

        // paso los datos de la estructura de la BD a la del front:
            
       let result =[]

       orderOfUser.orderlines.forEach(async (orderline)=>{

        let prod=await Product.findOne({where:{id:orderline.dataValues.productId}})

        console.log(prod)
        let obj={
            id:prod.dataValues.id,
            name:prod.dataValues.name,
            price:prod.dataValues.price,
            quantity:prod.dataValues.amount,
        }

        result.push(obj)

       })

       res.json(result)

    } catch (error){

        next(error)   
    };
};

module.exports = {
    getOrderlines,
};