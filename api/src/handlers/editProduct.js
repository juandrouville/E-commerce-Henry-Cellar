const { Product } = require('../db')
const { Categories } = require('../db')

async function editProduct(req, res, next) {

    const {id}=req.params
    
    const { name, price, description, image, stock, categories } = req.body;

    let productValues={name:name,description:description,price:price,image:image,stock:stock}

    try {
        let productToEdit=Product.findOne({where:{id}})

        for (let property in productValues) {
            productValues[property]  ? productToEdit[property]=productValues[property]:null
        }
        

        categories.forEach(async (category)=>{
                const categorie = await Categories.findOne({
                    where:{
                        name:category
                    }
                });
                await Product.addCategories(categorie)
            }) 
        res.send({msg:"The product was edited successfully."});
    
    } catch (error) {

        next(error)
    };

};



module.exports = { 
    editProduct, 
}