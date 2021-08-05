const { Product, Categories } = require("../db");
const { Op } = require("sequelize");

const postProduct = async (req,res,next) => {
    const {name, price, description, image, stock, categories} = req.body;

    try {
        if(!name || !price || name==="" || price===""){
            return res.json({messege: "name and price are required fields"})
        }
        const addProduct = await Product.findOrCreate({
            where:{
                    
                name: name,
                price:price,
                description: description,
                image: image,
                stock: stock
            }
                
        })

        
        if(categories && categories.length>0){
            categories.forEach(async (name)=>{
                const categorie = await Categories.findOne({
                    where:{
                        name: {
                            [Op.iLike]: `%${name}%`,
                        },
                    }
                });
                await categorie.addProduct(addProduct[0])
            
            })
        }   
        if (addProduct[1]===true) {
            return res.status(200).json({messege:'Successfully created product'})
        }else{
            return res.status(200).json({messege:'The product already exists'})
        }
       
    } catch (error) {
        next(error);
    }
}
module.exports = {
    postProduct,

};