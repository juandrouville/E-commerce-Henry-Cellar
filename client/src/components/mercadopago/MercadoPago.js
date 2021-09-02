import React from "react";
import { useState, useEffect } from "react";
import Checkout from "./Checkout";
import axios from "axios";
import { connect } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
import { BasicTextFields } from "./formData";
import SimpleList from "./ListOfProd";
import { Divider } from "@material-ui/core";
import PaymentDiv from "./PaymentDiv";
import { Toaster } from "react-hot-toast";
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
          "/mercadopago"+ orderlines[0].orderId
          || "http://localhost:3001/mercadopago/" + orderlines[0].orderId,
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

  return (
    <LayoutPrimary>
      <div>
        <Toaster />{" "}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: "100%"
        }}
      >
        <SimpleList />
        <BasicTextFields />
        <PaymentDiv data={datos} />
        <div></div>
      </div>
    </LayoutPrimary>
  );
}

export default connect(mapStateToProps)(MercadoPago);
