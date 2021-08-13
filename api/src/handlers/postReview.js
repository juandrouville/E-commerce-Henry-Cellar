const { Product, Review } = require("../db");

async function postReview( req , res ){
    try{
        console.log('entro a post review');
        var score = req.body.score;
        var commentary = req.body.commentary;
        var productId = req.body.productId;
        var userId = req.body.userId;

        var product = await Product.findByPk(productId);
        var review = await Review.create({
                score:score,
                commentary:commentary,
        });
        console.log(review);
        var response = await review.setProduct(product);
        res.json(response);


    } catch(error){ return res.send(error)};
};

module.exports = {
    postReview,

};