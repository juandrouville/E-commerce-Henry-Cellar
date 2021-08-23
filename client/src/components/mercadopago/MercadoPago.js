import React from "react"
import { useState, useEffect } from "react"
import Checkout from "./Checkout"
import axios from "axios"
import { connect } from "react-redux"
// import state from "sweetalert/typings/modules/state"
// import { checkout } from "../../../../api/src/app"


const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  }
}
export function MercadoPago(props) {

  const [datos, setDatos] = useState("")
  //  var obj = {data: [
  //   {title: "producto 1", quantity: 1, price: 5},
  //   {title: "producto 2", quantity: 1, price: 5}
  // ]}
  var cart = props.cart
  var obj = cart.map(i => ({
    title: i.nombre,
    unit_price: i.precio,
    quantity: i.cantidad,
    ordenId: i.ordenId,
    id: i.productId
  }))

  var obj1 = { data: obj }

  useEffect(() => {
    axios.post("http://localhost:3001/mercadopago/" + cart[0].ordenId, obj1)
      .then(data => {
        setDatos(data.data)
        console.info("contenido de data:", data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  

  return (
    <div>
      {!datos
        ? <p>aguarde un momento....</p>
        : <Checkout products={obj} data={datos} />
      }
    </div>
  )

}

export default connect(mapStateToProps)(MercadoPago)