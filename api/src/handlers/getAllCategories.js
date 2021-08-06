const { Categories  } = require('../db');


async function getAllCategories(req , res){
    try{
        var categories = await Categories.findAll({
            attributes: { 
                attributes: ["name"],
                exclude: ["createdAt", "updatedAt"] },
                through: {
                    attributes: []
                },
            });
            
            res.json(categories);
    } catch (error){return res.sendStatus(400).send(error)};
};

module.exports = {
    getAllCategories,
};
            
            
