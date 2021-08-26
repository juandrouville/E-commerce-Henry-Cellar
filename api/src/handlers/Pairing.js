const { Pairing  } = require('../db');


async function pairing (req , res){
    try{
        var pairing = await Pairing.findAll({
            attributes: { 
                attributes: ["name"],
                exclude: ["createdAt", "updatedAt"] },
                through: {
                    attributes: []
                },
            });
            
            res.json(pairing);
    } catch (error){return res.sendStatus(400).send(error)};
};

module.exports = {
    pairing,
};
        