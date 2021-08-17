const { Order  } = require('../db');
const {Orderline}=require('../db');
const {Product}=require('../db')
const {User}=require('../db')

async function addProductToDBCart(req , res,next){
    try{
    const {userId}=req.params
    const productId=req.body.productId

    console.log(userId)
    console.log(productId)
    
    const orderOfUser=await Order.findOne({where:{state:"pending",userId:userId},include:[Orderline]})

     

   let estado ="No esta"

    orderOfUser.orderlines.forEach(async(orderline)=>{
        if(orderline.productId===productId){
            const orderlineWithThatProduct=await Orderline.findOne({where:{id:orderline.id}})
            let oldAmount=orderlineWithThatProduct.amount
            orderlineWithThatProduct["amount"]=oldAmount+1
            await orderlineWithThatProduct.save()
        }
    })

    for(let i=0;i<orderOfUser.orderlines.length;i++){
        if(orderOfUser.orderlines[i].productId===productId){
          estado="Si esta"
        }
    }
  
    if(estado==="No esta"){

        let itemOrderLine=await Orderline.create({amount:1})
    
        let productOfOrderline=await Product.findOne({where:{id:productId}})
    
        itemOrderLine.setProduct(productOfOrderline)
    
        itemOrderLine.setOrder(orderOfUser)

    }
 
   res.send("Product successfully added to your cart on our database.")
       
    } catch (error){

       next(error)

    };
};

module.exports = {
    addProductToDBCart,
};