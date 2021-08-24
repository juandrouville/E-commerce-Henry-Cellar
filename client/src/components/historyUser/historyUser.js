import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import PostReview from "components/PostReview/PostReview";
import Materialtable from "material-table";
import {
    getDbOrder,

} from "../../actions/index";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Edit from "@material-ui/icons/Edit";
import { forwardRef } from "react";

const tableIcons = {
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    ArrowDownward: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    ))
  };

export default function HistoryUser() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    const user = useSelector((state) => state.user);


    // const { isAuthenticated } = useAuth0();

    
    useEffect(() => {
        
        dispatch(getDbOrder())
        
    }, [dispatch])
    

    const columns= [
        {
            title: "order number",
            field: "id"
        },
        {
            title: "State",
            field: "state"
        },
        {
            title: "Total",
            field: "total",
            type: "numeric"
        },
        // {
        //     title: "Detail",
        //     field: "detail"
        // }
    ]
   
        

    return (
        <LayoutPrimary>
            <div className="all_orders_container">
            <Materialtable
                title="My Purchase History"
                columns={columns}
                data={order}
                icons={tableIcons}
                options={{
                    // filtering: true,
                    // actionsColumnIndex: -1,
                    // detailPanelIndex: -1,
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
        </LayoutPrimary>
    );
}
                // <h2>My Purchase History</h2>


                // <div >
                //     {order.length ? (
                //         order.map((i) => {
                //             return (

                //                 <div className="divMap">

                //                     <h3>Order number: {i.id}</h3>
                //                     <h3>State: {i.state}</h3>
                //                     {i.orderlines.length ?
                //                         i.orderlines.map((i) => {
                //                             return (
                //                                 <div className="divclass">
                //                                 <h3>Product: {i.product.name} amount: {i.amount} unit price: ${i.product.price} Subtotal: $ {i.product.price*i.amount} </h3>
                //                                 {/* <Link to="/review"> 
                //                                 <button ><PostReview productId={i.product.id} /></button>
                //                                 </Link> */}
                //                                 <PostReview productId={i.product.id} />
                //                                 </div>
                //                             )
                //                         }) 
                                    
                //                     : null}
                //                     <h2>Total: $ {i.orderlines.reduce((a,b)=>a+(b.product.price*b.amount),0)}</h2>


                //                 </div>
                //             )
                //         })


                //     ) : (
                //         <h2 className="empty_cart"> cargando... </h2>
                //     )}
                // </div>