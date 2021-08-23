const { User } = require('../db')


async function editUser(req, res, next) {

    const { userId } = req.params

    const { blocked, adress, admin } = req.body

    try {

        let userToEdit = await User.findOne({ where: { id:userId }})

        if(blocked){
            userToEdit["blocked"]=blocked
        }     
        if(adress){
            userToEdit["adress"]=adress
        }     
        if(admin){
            userToEdit["admin"]=admin
        }     
            
        await userToEdit.save()
        res.send({ msg: `The user ${userId} was edited successfully.` });
        
    } catch (error) {
        next(error)
    };
};


module.exports = {
    editUser,
}