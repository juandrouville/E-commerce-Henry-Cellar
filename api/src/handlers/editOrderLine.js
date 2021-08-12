const { Orderline } = require('../db')
const { Product } = require('../db')

async function editOrderLine(req, res, next) {

    const { id } = req.params
    const {amount}=req.body
    try {
       let orderLineToEdit=await Orderline.findOne({where:{id},includes:Product})
    //   res.json(orderLineToEdit)
    //    orderLineToEdit.amount=amount
    //    orderLineToEdit.subTotal=orderLineToEdit.pro

    } catch (error) {

    };

};



module.exports = {
    editOrderLine,
}