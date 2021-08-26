import React from "react";
import { useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import {
//     getDbOrder,
//
// } from "../../actions/index";
=======
import { BsXCircle } from "react-icons/bs";
import {
    getDbOrder,
>>>>>>> Lighuen

// import { useAuth0 } from "@auth0/auth0-react";
// import PostReview from "components/PostReview/PostReview";
// import Materialtable from "material-table";
// import ArrowDownward from "@material-ui/icons/ArrowDownward";
// import Edit from "@material-ui/icons/Edit";
// import { forwardRef } from "react";

// const tableIcons = {
//     Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
//     ArrowDownward: forwardRef((props, ref) => (
//         <ArrowDownward {...props} ref={ref} />
//     ))
// };


export default function HistoryUser() {
<<<<<<< HEAD
  // const dispatch = useDispatch();
  const order = useSelector(state => state.order);
  // const user = useSelector((state) => state.user);

  // const { isAuthenticated } = useAuth0();

  // useEffect(() => {

  //     dispatch(getDbOrder())

  // }, [dispatch])

  //

  return (
    <LayoutPrimary>
      <div className="historyContainer">
        <h2>My Purchase History</h2>
        {order.length ? (
          order.map(i => {
            return (
              <div className="divclass">
                {/* <li>Order number: {i.id} || State: {i.state} || Total: $ {i.orderlines.reduce((a, b) => a + (b.product.price * b.amount), 0)} <Link to="/orderdetail">detail</Link></li> */}
                <p>Order number: {i.id} </p>
                <p>State: {i.state}</p>
                <p>
                  Total: ${" "}
                  {i.orderlines.reduce(
                    (a, b) => a + b.product.price * b.amount,
                    0
                  )}
                </p>
                <Link to="/orderdetail">detail</Link>
              </div>
            );
          })
        ) : (
          <h2 className="empty_cart"> cargando... </h2>
        )}
      </div>
    </LayoutPrimary>
  );
=======
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    const user = useSelector((state) => state.user);
    let orderlines = useSelector((state) => state.orderlines);
    let total = orderlines.reduce(function (acc, curr) {
        return acc + curr.quantity * curr.price;
    }, 0);

    var firstName = user.dataValues.firstName;
    var lastName = user.dataValues.lastName;
    // const { isAuthenticated } = useAuth0();


    // useEffect(() => {

    //     dispatch(getDbOrder())

    // }, [dispatch])


    // 



    return (
        <LayoutPrimary>


            <div className="historyPage" >
                <div className="historyContainer">
                    <h2>Welcome {firstName}  {lastName}</h2>
                    <h3>Purchase History</h3>
                    {total !== 0 ? (
                        <div className="container_order_detail">
                            <div className="header_titles">
                                <p>Order</p>
                                <p>State</p>
                                <p>Total</p>
                                <p>Detail</p>
                            </div>


                        {order.map((i) => { 
                        return (

                            <div className="line_order">
                                <p>{i.id } </p>

                                <p>{i.state}</p>

                                <p> $

                                    {i.orderlines.reduce((a, b) => a + (b.product.price * b.amount), 0)}
                                </p>
                                <Link to="/orderdetail" className="viewDetail" >View</Link>
                            </div>

                            ) 
                        })}
                        </div>


                    ) : (
                        <div className="empty_cart">
                            <BsXCircle size={40} />
                            <h3 className="dontHistory"> You don´t have a history of purchases</h3>
                            <Link to={`/home`}>
                                <button>View Products</button>
                            </Link>
                        </div>
                    )
                    }
                </div>
            </div>
        </LayoutPrimary>
    );
>>>>>>> Lighuen
}

// {i.orderlines.length ?
//     i.orderlines.map((i) => {
//         return (
//             <div className="divclass">
//                 <h3>Product: {i.product.name} amount: {i.amount} unit price: ${i.product.price} Subtotal: $ {i.product.price * i.amount} </h3>
//                 {/* <Link to="/review">
//              <button ><PostReview productId={i.product.id} /></button>
//              </Link> */}
//                 <PostReview productId={i.product.id} />
//             </div>
//         )
//     })

//     : null}
//------------------------------
//const columns= [
//     {
//         title: "order number",
//         field: "id"
//     },
//     {
//         title: "State",
//         field: "state"
//     },
//     {
//         title: "Total",
//         field: "total",
//         type: "numeric"
//     },
//     // {
//     //     title: "Detail",
//     //     field: "detail"
//     // }
// ]
//  <div className="all_orders_container">
// <Materialtable
//     title="My Purchase History"
//     columns={columns}
//     data={order}
//     icons={tableIcons}
//     options={{
//         // filtering: true,
//         // actionsColumnIndex: -1,
//         // detailPanelIndex: -1,
//         headerStyle: {
//           backgroundColor: "#420000",
//           color: "#FFF",
//           zIndex: "1"
//         },

//         pageSize: 9,
//       }}
//     detailPanel={[
//         {

//           icon: ArrowDownward,
//           tooltip: "Show description",

//           render: rowData => {
//             let totalOfOrder=rowData.orderlines.reduce((a,b)=>a+(b.product.price*b.amount),0)
//             return (
//               <div
//                 style={{
//                   fontSize: 20,
//                   textAlign: "left",
//                   color: "white",

//                   backgroundColor: "#43A047"

//                 }}
//               >

//                {rowData.orderlines.length ?
//                <div>
//                 <ul>
//                 {rowData.orderlines.map(orderline=>
//                 <li><pre>{orderline.product.name} Unit Price: $ {orderline.product.price} Amount: {orderline.amount} Subtotal: $ {orderline.product.price*orderline.amount}</pre>
//                 </li>

//                 )}
//                 </ul><br></br>
//                 <span>Total: $ {totalOfOrder}</span>
//                 </div>:null}
//               </div>
//             );

//           }
//         }

//       ]}
// />
// </div>
