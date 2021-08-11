const { Product } = require('../db')
const { Categories } = require('../db')

async function editProduct(req, res, next) {

    const { id } = req.params

    const { name, price, description, image, stock, categories } = req.body;

    let productValues = { name: name, description: description, price: price, image: image, stock: stock }

    try {
        let productToEdit = await Product.findOne({ where: { id } })
        

        for (let property in productValues) {
            productToEdit[property]=productValues[property]
        }
        
        productToEdit.setCategories() // limpio las categorias viejas

        categories.forEach(async(category)=>{
           let model=await Categories.findOne({where:{name:category}})
           console.log(model)
           await productToEdit.addCategories(model)
        }
        )

        await productToEdit.save()  // guardo los cambios de la instancia

        res.send({ msg: "The product was edited successfully." });

    } catch (error) {

        next(error)
    };

};



module.exports = {
    editProduct,
}