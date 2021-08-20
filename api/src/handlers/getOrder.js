const { Order } = require('../db')
const { User }= require("../db");

async function getOrder(req, res, next) {
    try {

        const { id } = req.params

        const order = await Order.findOne({
            where: { id },
            attributes: { exclude: ["createdAt", "updatedAt"] },
          
        });


        res.json(order)

    } catch (error) {

        next(error)
    };
};

module.exports = {
    getOrder,
};