const { Product } = require('../db');
const { Categories } = require('../db');
const { Review } = require('../db');

async function getProductDetail(req, res, next) {
    const { id } = req.params
    try {
        const product = await Product.findOne({
            where: { id },
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: {
                model: Categories,
                attributes: ["name"],
                through: {
                    attributes: []
                },
            },
            //include: Review,
        });
            

        res.json(product);

    } catch (error) {

        next(error)
    };

};



module.exports = { 
    getProductDetail, 
}