const { User  } = require('../db');


async function getAllUsers(req , res , next){
    try{
        var allUsers = await User.findAll({
            attributes: { 
                exclude: ["createdAt", "updatedAt"] 
            },
            }
            );
            
        res.json(allUsers);

    } catch (error){

        next(error)
    };
};

module.exports = {
    getAllUsers,
};
     