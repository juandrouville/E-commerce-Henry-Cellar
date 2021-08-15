const { Order  } = require('../db');
const {Orderline}=require('../db');
const {Product}=require('../db')
const {User}=require('../db')

async function unifyCarts(req , res,next){
    try{
       const {userId}=req.params
       const localStorageCart=req.body

       const orderOpenOfUser=await Order.findOne({where:{state:"pending",userId:userId}})      

       localStorageCart.forEach(async(item)=>{

       let itemOrderLine=await Orderline.create({amount:item.quantity,productId:item.id})

       itemOrderLine.setOrder(orderOpenOfUser)
       console.log(itemOrderLine)
       })
       
    } catch (error){
       next(error)
    };
};

module.exports = {
    unifyCarts,
};
            
     