const { Orderline  } = require('../db');


async function removeOrderline(req , res, next){
    try{
        
        const {orderlineId}=req.params

        const {removeAll}=req.body

        const orderlineToRemove=await Orderline.findByPk(orderlineId)
        
        if(removeAll){

            await orderlineToRemove.destroy();

            res.send(`The orderline ${orderlineId} was removed.`)
        } else {

            let oldAmount=orderlineToRemove["amount"]

            if(oldAmount===1){

              await orderlineToRemove.destroy();

              res.send(`The orderline ${orderlineId} was removed.`)
            
            } else {

             orderlineToRemove["amount"]=oldAmount-1

             await orderlineToRemove.save()

             res.send(`The orderline ${orderlineId} reduced in one its amount to ${oldAmount-1}.`)
            }
           
        }   

    } catch (error){

        next(error)
    };
};

module.exports = {
    removeOrderline,
};
    