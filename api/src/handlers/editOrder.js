const { Order } = require('../db')

async function editOrder(req, res, next) {

    const { orderId } = req.params

    const { paymentMethod, shippingMethod } = req.body;

    const state=req.body.state

    let orderValues = { paymentMethod: paymentMethod,  shippingMethod: shippingMethod}

    try {

        let orderToEdit = await Order.findOne({ where: { id:orderId }})
       
        if(state){

            orderToEdit.state=state
            await orderToEdit.save()
            res.send(`El state de la orden ${orderId} cambio a ${state}`)

        } else {

            for (let property in orderValues) {
                        orderToEdit[property]=orderValues[property]
                    }
                    
                
                    await orderToEdit.save()

            res.send({ msg: "The order was edited successfully." });

        }
        

        

    } catch (error) {

        next(error)
    };

};



module.exports = {
    editOrder,
}