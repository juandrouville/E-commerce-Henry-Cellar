const { Orderline } = require('../db');
const { Product } = require("../db")
const { Order } =require("../db")

async function getOneOrderline(req, res, next) {
    const { id } = req.params
    try {


        const orderline = await Orderline.findAll({
            where: {
                orderId: id
            },

            attributes: { exclude: ["createdAt", "updatedAt"] },

            include: [
                {model:Order,attributes:{exclude: ["createdAt", "updatedAt"]}},
                {model:Product,attributes:{exclude: ["createdAt", "updatedAt","description","image","stock","wineryId"]}}
            ],    
        });
        res.json(orderline)




    } catch (error) {

        next(error)
    };
};

module.exports = {
    getOneOrderline,
};