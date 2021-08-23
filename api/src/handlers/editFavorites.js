const { Product } = require('../db')
const { User } = require('../db')

async function editFavorites(req, res, next) {
    
    try {
        
        const {userId}=req.params
        const productId=req.body.productId
        const remove=req.body.remove
        const userSearched= await User.findByPk(userId,{include:"Favorites"})
        const productSearched=await Product.findByPk(productId)
        
        if(remove===false){

            let estado="No esta"
            
            for(let i=0;i<userSearched.Favorites.length;i++){
                if(userSearched.Favorites[i].id===productId){
                    estado="Si esta"
                    res.send(`El producto ${productId} ya se encontraba en tus favoritos`)
                }
            }
            if(estado==="No esta"){
                userSearched.addFavorites(productSearched)
                
                res.send(`El producto ${productId} fue añadido a favoritos`)
            }


        } else {

            let estado="No esta"

            for(let i=0;i<userSearched.Favorites.length;i++){
                if(userSearched.Favorites[i].id===productId){
                    estado="Si esta"
                    userSearched.removeFavorites(productSearched)
                    res.send(`El producto ${productId} fue removido de tus favoritos`)
                }
            }
            if(estado==="No esta"){
                res.send(`No puedes remover el producto ${productId} ya que no esta en tus favoritos`)
            }
        }

    } catch (error) {

        next(error)
    };

};



module.exports = {
    editFavorites,
}