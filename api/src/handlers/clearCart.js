const { Orderline } = require('../db')


async function clearCart(req, res, next) {

    try {
        
        const { orderId } = req.params
       
        const orderlinesToRemove=await Orderline.findAll({where:{orderId:orderId}})

        orderlinesToRemove.forEach(async (orderline)=>{
            await orderline.destroy()
        })

        res.send(`Todas las orderlines de la orden ${orderId} fueron eliminadas`)

    } catch (error) {

        next(error)

    };

};



module.exports = {
    clearCart,
}