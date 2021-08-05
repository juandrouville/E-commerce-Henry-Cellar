
const { Product } = require('../db');

async function SetDataInitial(arrayProducts){
    try{

        for(var e in arrayProducts) {
            
            await Product.findOrCreate({
                where:{
                    name:arrayProducts[e].name,
                    image:arrayProducts[e].img,
                    description:arrayProducts[e].description,
                    price:arrayProducts[e].precio,
                    stock:arrayProducts[e].stock,
                },
            });

                
    };
    } catch(error){
        return console.error(error);
    };
};

module.exports = {
    SetDataInitial,
};