import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editOrder, getAllOrders  } from "../../actions/index";

import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
//import ProductsAdmin from "../productsAdmin/ProductsAdmin";

import LayoutPrimary from "layouts/layout-primary";
import Materialtable from "material-table";
import { forwardRef } from "react";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import ArrowDownward from "@material-ui/icons/ArrowDownward";

const tableIcons = {
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    ArrowDownward: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    ))
  };

export default function Orders() {

    // FALTA DEFINIR BIEN LOS POSIBLES ESTADOS DE ORDENES EN EL MODELO ORDER.STATE TYPE ARRAY...
    // FALTA DEFINIR EL TOTAL EN BD CUANDO EL ADMIN APRUEBA COMPRA (EN EL BACK)

   const history = useHistory();
   const dispatch = useDispatch()
   
   const allOrders=useSelector(state=>state.allOrders)

   useEffect(()=>{dispatch(getAllOrders())},[dispatch])

  const handleStateChange=e=>{
     dispatch(editOrder(e.target.id,e.target.value))

  }

  const columns = [
    { title: "Id", field: "id" },
    {
      title: "State",
      field: "state",

      render: rowData => (
         
        <select  onChange={handleStateChange} id={rowData.id} defaultValue={rowData.state} >
        <option value="pending">Pending</option>    
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
        <option value="sent">Sent</option>
        <option value="recieved">Recieved</option>
        <option value="finished">Finished PRUEBA</option>
        </select>
      )

    },
    { title: "User", field: "user.userName" },
    // { title: "Description", field: "description" },
    { title: "Shipping Method", field: "shippingMethod"},
    { title: "Payment Method", field: "paymentMethod" }
    ];

    return (
        <div>
            <LayoutPrimary>
            <div className="all_products_container">
            <NavLink
          to="/AdminPanel"
          refresh="true"
          className="back_to_admin_panel"
        >
          <RiIcons.RiAdminLine />

          <h3 className="h3">Back to AdminPanel</h3>
        </NavLink>
        <Materialtable
          title="All Orders"
          columns={columns}
          data={allOrders}
          icons={tableIcons}
          options={{
            actionsColumnIndex: -1,
            detailPanelIndex: -1,
            headerStyle: {
              backgroundColor: "#420000",
              color: "#FFF",
              zIndex: "1"
            },

            pageSize: 9,
          }}
          detailPanel={[
            {
              icon: ArrowDownward,
              tooltip: "Show description",

              render: rowData => {

                return (
                  <div
                    style={{
                      fontSize: 20,
                      textAlign: "left",
                      color: "white",

                      backgroundColor: "#43A047"

                    }}
                  >
                   <h3>{rowData.user.firstName} {rowData.user.lastName}</h3> 
                   <p>{rowData.user.email}</p> 
                   {rowData.orderlines.length ?
                   <div>
                    <ul>
                    {rowData.orderlines.map(orderline=>
                    <li><pre>{orderline.product.name} Unit Price: $ {orderline.product.price} Amount: {orderline.amount} Subtotal: $ {orderline.product.price*orderline.amount}</pre>                    
                    </li>
                
                    )}
                    </ul><br></br>
                    <span>Total: $ {rowData.orderlines.reduce((a,b)=>a+(b.product.price*b.amount),0)}</span>
                    </div>:null}
                  </div>
                );

              }
            }

          ]}
        />
      </div>
            </LayoutPrimary>
        </div>
    )
}
