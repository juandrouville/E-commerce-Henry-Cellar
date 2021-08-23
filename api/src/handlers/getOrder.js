const { Order } = require('../db')
const { Orderline } = require('../db');
const { User } = require("../db");

async function getOrder(req, res, next) {
    try {



        const order = await Order.findAll({

            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: {
                model: Orderline,
            },
        });


        res.json(order)

    } catch (error) {

        next(error)
    };
};

module.exports = {
    getOrder,
};