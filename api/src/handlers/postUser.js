const { User } = require('../db');

async function postUser(req, res) {
    try {
        var user = req.body;
        var userCreated = await User.findOrCreate({
            where: {
                firstName:user.firstName,
                lastName:user.lastName,
                userName:user.userName,
                password:user.password,
                email:user.email,
            },
        });
        res.json(userCreated);

    } catch(error){return res.sendStatus(400).send(error)}
};

module.exports = postUser;
