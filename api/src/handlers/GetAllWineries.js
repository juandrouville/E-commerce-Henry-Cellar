const { Wineries  } = require('../db');


async function getAllWineries(req , res){
    try{
        var wineries = await Wineries.findAll({
            attributes: { 
                attributes: ["name"],
                exclude: ["createdAt", "updatedAt"] },
                through: {
                    attributes: []
                },
            });
            
            res.json(wineries);
    } catch (error){return res.sendStatus(400).send(error)};
};

module.exports = {
    getAllWineries,
};
            