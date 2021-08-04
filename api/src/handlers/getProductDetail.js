const {Product} =require('../db')
const {Categories} =require('../db')

async function getProductDetail(req,res,next){
    const {id}=req.params
    try {
        const product=await Product.findOne({where:{id},include:[Categories]})

        let result={
         name:product.name,
         price:product.price,
         description:product.description,
         image:product.image,
         stock:product.stock,
         harvest:product.harvest || null,
         categories:product.categories
        }

     res.json(result)

    } catch (error) {
        
        next(error)
    }

}

module.exports={getProductDetail}