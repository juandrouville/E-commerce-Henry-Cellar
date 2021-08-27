import react from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
import { useHistory } from "react-router-dom";

export default function DetailOrder() {
    const dispatch = useDispatch();
    const orderOrderline = useSelector((state) => state.orderOrderline);

    let history = useHistory();



    return (
        <LayoutPrimary>
            <div className="historyPage" >
                {orderOrderline.length ? (
                    orderOrderline.map((o) => {
                        return (



                            <div className="line_order">

                                <p>Product: {o.product.name} </p>
                                <p>unit price: ${o.product.price}  x {o.amount}</p>
                                <p>Subtotal: $ {o.product.price * o.amount}</p>

                                {o.order.state === "received" ? (

                                    <button className="buttonClass" onClick={() => history.push(`/product-detail/${o.product.id}`)}>your opinion</button>
                                ) : (null)
                                } 




                            </div>


                        )
                    })


                ) : (
                    <h2 className="empty_cart"> cargando... </h2>
                )}
            </div>
        </LayoutPrimary>
    );
}