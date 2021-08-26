const { Orderline } = require('../db');
const { Product } = require("../db")

async function getOneOrderline(req, res, next) {
    const { id } = req.params
    try {


        const orderline = await Orderline.findAll({
            where: {
                orderId: id
            },

            attributes: { exclude: ["createdAt", "updatedAt"] },

            include: [
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