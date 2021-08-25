const { Product, Categories,Wineries } = require("../db");
const { Op } = require("sequelize");

const postProduct = async (req,res,next) => {
    const {name, price, description, image, stock, categories, winery} = req.body;

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
        
        if(winery){
        const wineryToAsign=await Wineries.findOrCreate({where:{name:winery}})

        addProduct[0].setWinery(wineryToAsign[0])    
        }
        
        
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
            return res.status(200).json({message:'Successfully created product'})
        }else{
            return res.status(200).json({message:'The product already exists'})
        }
       
    } catch (error) {
        next(error);
    }
}
module.exports = {
    postProduct,

};