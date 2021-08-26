import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllOrders, editOrder, getAllOrders  } from "../../actions/index";

import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
//import ProductsAdmin from "../productsAdmin/ProductsAdmin";

import LayoutPrimary from "layouts/layout-primary";
import Materialtable from "material-table";
import { forwardRef } from "react";
import Edit from "@material-ui/icons/Edit";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const tableIcons = {
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    ArrowDownward: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    ))
  };



export default function Orders() {


   const history = useHistory();
   const dispatch = useDispatch()
   
   const allOrders=useSelector(state=>state.allOrders)

   useEffect(()=>{
     dispatch(getAllOrders())
     return ()=>{
       dispatch(clearAllOrders())
     }
    },[dispatch])

  const handleStateChange=async(e,rowData)=>{
     dispatch(editOrder(e.target.id,{state:e.target.value}))
     try {
       await emailjs.send('service_7hulls6',"template_jrogisn",rowData,"user_BJC5R9YmSgfq18FKCkmzN")
       toast.success(`An email was sent to the user ${rowData.user.firstName} ${rowData.user.lastName}`)
     } catch (error) {
       console.log(error)
     }
  }

  const columns = [
    { title: "Id", field: "id", filtering: false },
    {
      title: "State",
      field: "state", 

      render: rowData => (
         
        <select  onChange={(e)=>handleStateChange(e,rowData)} id={rowData.id} defaultValue={rowData.state}>
        <option value="pending">Pending</option>    
        <option value="accepted">Accepted</option>
        <option value="rejected">Rejected</option>
        <option value="sent">Sent</option>
        <option value="received">Received</option>
        </select>
      )

    },
    { title: "User", field: "user.userName" , filtering: false },
    // { title: "Description", field: "description" },
    { title: "Shipping Method", field: "shippingMethod", filtering: false },
    { title: "Payment Method", field: "paymentMethod" , filtering: false },
    { title: "User adress", field: "user.adress", filtering: false  }
    ];

    return (
        
        <div className="all_orders_container">
        <Materialtable
          title="All Orders"
          columns={columns}
          data={allOrders}
          icons={tableIcons}
          options={{
            filtering: true,
            actionsColumnIndex: -1,
            detailPanelIndex: -1,
            headerStyle: {
              backgroundColor: "#420000",
              color: "#FFF",
              zIndex: "1"
            },

            pageSize: 10,
          }}
          detailPanel={[
            {
              icon: ArrowDownward,
              tooltip: "Show description",

              render: rowData => {
                let totalOfOrder=rowData.orderlines.reduce((a,b)=>a+(b.product.price*b.amount),0)
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
                    <span>Total: $ {totalOfOrder}</span>
                    </div>:null}
                  </div>
                );

              }
            }

          ]}
        />
      </div> 
    )
}
