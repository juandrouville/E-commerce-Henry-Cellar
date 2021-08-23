const { Order  } = require('../db');
const { User  } = require('../db');
const { Orderline } =require('../db')
const { Product }=require('../db')

async function getAllOrders(req , res, next){
    try{
        var allOrders = await Order.findAll({include:
        [
            {model:User,attributes:{exclude: ["createdAt", "updatedAt"]}},
            {model:Orderline,attributes:{exclude: ["createdAt", "updatedAt"]},include:
               {model:Product,attributes:{exclude: ["createdAt", "updatedAt","description","image","stock","wineryId"]}}}
        ],
         attributes:{exclude: ["createdAt", "updatedAt"]}})          
        res.json(allOrders);

    } catch (error){
        next(error)
    };
};

module.exports = {
    getAllOrders,
};