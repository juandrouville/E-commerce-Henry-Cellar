const { User } = require('../db')
const { Product } = require('../db')
const { Order } = require('../db')


async function compra(req, res, next) {
    try {
        const id = req.params.id;
  const { calle, numero, localidad, provincia, codigoPostal } = req.body;

  User.update(
    { calle, numero, localidad, provincia, codigoPostal },
    {
      where: { id },
    })
    .then(update => {
      res.status(200).send(update);
    })
    .catch(err => {
      res.status(400).send(err);
    })

    } catch (error) {
        
    }
    
}
async function tarjeta(req, res, next) {
    try {
        const id = req.params.id;
        const {numeroDeTarjeta, nombreT, fechaDeExpiracion, codigoDeSeguridad, ordenId} = req.body.data
        const {Products} = req.body.stock
      
        User.update(
          { numeroDeTarjeta, nombreT, fechaDeExpiracion, codigoDeSeguridad },
          { where: {id},
        })
        .then(respuesta => {
            Products.map(pos => {
            Product.findOne(
              {where: {id: pos.id}}
            )
            .then(response => {
              var stock = response.dataValues.stock
              stock = stock - pos.quantity
              console.log("SOY STOCK QUE VIENE DEL FIND ONE", stock)
              Product.update(
                {stock: stock},
                {where : {id: pos.id}}
               )
               .then(respuesta =>{console.log("STOCK CAMBIADO")})
               .catch(err => {console.log ("error cambio de stock", err)})
            })
            .catch(err => {console.log("HUBO PROBLEMAS CON EL FIND ONEE", err)})
          })
        })
        .then(respuesta => {
          return Order.update(
            {estado: "accepted"},
            {where: {id: ordenId}}
        )})
        .then(respuesta => {
          console.log("ALLLLLLLLLLGOOOO")
          res.send(respuesta);
        })
        .catch(err => {
          console.log(err)
        })
    } catch (error) {
        
    }
}
module.exports = {
  compra,
  tarjeta
};