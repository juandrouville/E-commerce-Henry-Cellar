const { Order } = require('../db')
const { Orderline } = require('../db');
const { User } = require("../db");
const {Product} = require("../db")

async function getOrder(req, res, next) {
    const { id } = req.params
    try {
        

            const order = await Order.findAll({
                where:{
                    userId : id
                },
    
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include:
            [
                {model:User,attributes:{exclude: ["createdAt", "updatedAt"]}},
                {model:Orderline,attributes:{exclude: ["createdAt", "updatedAt"]},include:
                   {model:Product,attributes:{exclude: ["createdAt", "updatedAt","description","image","stock","wineryId"]}}}
            ],
            });
            res.json(order)
        



    } catch (error) {

        next(error)
    };
};

module.exports = {
    getOrder,
};