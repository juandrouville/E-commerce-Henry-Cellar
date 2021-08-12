const { User } = require('../db');
const { Order } = require('../db');

async function getUser(req, res,next) {
    try {
        const {id}=req.params
       const {given_name,family_name,nickname,picture,email}=req.body
       var userSearched = await User.findOrCreate({
            where: {
                id:id,
                firstName:given_name,
                lastName:family_name,
                userName:nickname,
                image:picture,
                email:email,
            }, attributes: { exclude: ["createdAt", "updatedAt"] }
        });

        const userOrder=await Order.findOrCreate({where:{state:"pending",userId:id},
        attributes: { exclude: ["createdAt", "updatedAt"] }})

        res.json({...userSearched[0],order:userOrder[0]});

    } catch(error){
        next(error)
    }
};

module.exports = {getUser};
