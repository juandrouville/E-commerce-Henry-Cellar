import React from "react"
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";


export function Checkout({  data }) {
    let history = useHistory()

    useEffect(() => {
        const script = document.createElement("script")

        const attr_data_preference = document.createAttribute("data-preference-id")
        attr_data_preference.value = data.id

        script.src = "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
        script.setAttributeNode(attr_data_preference)


        document.getElementById("form1").appendChild(script)

        return () => {

           history.push('http://localhost:3000/user/finalizarcompra')
        }
    }, [data])

    return (
        <div>
            <form id="form1">
             </form>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Checkout)