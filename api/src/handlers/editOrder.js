const { Order } = require('../db')

async function editOrder(req, res, next) {

    const { id } = req.params

    const { paymentMethod, shippingMethod, } = req.body;

    let orderValues = { paymentMethod: paymentMethod,  shippingMethod: shippingMethod}

    try {
        let orderToEdit = await Order.findOne({ where: { id }})
        

        for (let property in orderValues) {
            orderToEdit[property]=orderValues[property]
        }
        
    
        await orderToEdit.save()

        res.send({ msg: "The order was edited successfully." });

    } catch (error) {

        next(error)
    };

};



module.exports = {
    editOrder,
}