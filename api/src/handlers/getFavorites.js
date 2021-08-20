const { User } = require('../db');
const { Product } = require('../db');

async function getFavorites(req, res, next) {
    try {

        const { userId } = req.params
        var userSearched = await User.findOne({
            where: {id:userId} ,
            include:"Favorites",
            attributes: { exclude: ["createdAt", "updatedAt"] }
        });

      
     res.send(userSearched.Favorites)

    } catch (error) {
        next(error)
    }
};

module.exports = { getFavorites };