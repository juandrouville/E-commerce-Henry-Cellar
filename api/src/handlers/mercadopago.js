const server = require("express").Router();
const { Order, Orderline, Product } = require("../db");

const mercadopago = require("mercadopago");
const { response } = require("express");

const { ACCESS_TOKEN } = process.env;

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

async function mercadop (req, res, next){
    try{
        const ordenId = req.params.id; 
        const cart = req.body.data;
        const items_ml = cart.map((i) => ({
            title: i.title,
            unit_price: i.unit_price,
            quantity: i.quantity,
          }));
          let preference = {
            items: items_ml,
            external_reference: ordenId,
            payment_methods: {
              excluyed_payment_types: [
                {
                  id: "ata",
                },
              ],
              installments: 3,
            },
            back_urls: {
              success: "http://localhost:3001/mercadopago/pagos",
              failure: "http://localhost:3000/",
              pending: "http://localhost:3000/",
            },
          };
     const res = await mercadopago.preferences.create(preference)
    } catch(error){
        console.log(error);
        res.send(error);
    }  }
  async function pagos (req, res, next){
    const paymentid = req.query.payment_id;
    const paymentstatus = req.query.status;
    const externalreference = req.query.external_reference;
    const merchantorderid = req.query.merchant_order_id;
 
  
    var carrito; 
  
    Orderline.findAll({
      where: {orderId: externalreference}
    })
    .then(respuesta => {
      carrito = respuesta
    
      carrito.map(pos => {
        var ids = pos.productId
    
     
        Product.findOne(
          {where: {id: ids}
        })
        .then(response => {
          var stock = response.stock
          stock = stock - pos.cantidad
          Product.update(
            {stock: stock},
            {where : {id: pos.productId}}
           )
           .then(respuesta =>{console.log("STOCK CAMBIADO")})
           .catch(err => {console.log ("error cambio de stock", err)})
        })
        .catch(err => {console.log("HUBO PROBLEMAS CON EL FIND ONEE", err)})
      })
  
    })
    .catch(err => { console.log("ERROR PARGO MERCADOPAGO EN FINDONE", err)})
  
   
  
    Order.update(
      { estado: "creada", paymentid, paymentstatus, merchantorderid },
      { where: { id: externalreference } }
    )
      .then((Order) => {
        console.info("salvando order");
        console.info("redirect success");
        return res.redirect("http://localhost:3000/user/finalizarcompra");
      })
      .catch((err) => {
        console.error("error al salvar", err);
        return res.redirect("http://localhost:3000/error");
      });
  }
  
  module.exports = {
    pagos,
    mercadop
};