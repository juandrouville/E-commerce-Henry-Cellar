const { Order  } = require('../db');
const {Orderline}=require('../db');
const {Product}=require('../db')
const {User}=require('../db')

async function addProductToDBCart(req , res,next){
    try{
    const {userId}=req.params
    const productId=req.body.productId
    
    const orderOfUser=await Order.findOne({where:{state:"pending",userId:userId},include:[Orderline]})

    let estado="No esta"
     
    if(orderOfUser.orderlines && orderOfUser.orderlines.length){
    
    for(let i=0;i<orderOfUser.orderlines.length;i++){
        if(orderOfUser.orderlines[i].productId===productId){
            
            estado="Si esta"
            let oldAmount=orderOfUser.orderlines[i].amount
            orderOfUser.orderlines[i]["amount"]=oldAmount+1
            await orderOfUser.orderlines[i].save()
            res.json(orderOfUser.orderlines[i])
        }
    }
    }
    if(estado==="No esta"){
        let itemOrderLine=await Orderline.create({amount:1})
    
        let productOfOrderline=await Product.findOne({where:{id:productId}})
    
        itemOrderLine.setProduct(productOfOrderline)
    
        itemOrderLine.setOrder(orderOfUser)

        res.json(itemOrderLine)
    }
 
       
    } catch (error){

       next(error)

    };
};

module.exports = {
    addProductToDBCart,
};