import React from "react";
import { useState, useEffect } from "react";
import Checkout from "./Checkout";
import axios from "axios";
import { connect } from "react-redux";
// import state from "sweetalert/typings/modules/state"
// import { checkout } from "../../../../api/src/app"

const mapStateToProps = state => {
  return {
    cart: state.cart,
    orderlines: state.orderlines
  };
};
export function MercadoPago({ orderlines }) {
  const [datos, setDatos] = useState("");
  //  var obj = {data: [
  //   {title: "producto 1", quantity: 1, price: 5},
  //   {title: "producto 2", quantity: 1, price: 5}
  // ]}

  // console.log(cart)
  var obj = orderlines.map(i => ({
    title: i.name,
    unit_price: parseInt(i.price, 10),
    quantity: i.quantity,
    ordenId: i.orderId,
    id: i.id
  }));

  var obj1 = { data: obj };

  useEffect(() => {
    if (orderlines.length) {
      axios
        .post(
          "http://localhost:3001/mercadopago/" + orderlines[0].orderId,
          obj1
        )
        .then(data => {
          console.log(data);
          setDatos(data.data);
          console.info("contenido de data:", data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [orderlines]);

  return <div>{!datos ? <h1>Cargando..</h1> : <Checkout data={datos} />}</div>;
}

export default connect(mapStateToProps)(MercadoPago);
