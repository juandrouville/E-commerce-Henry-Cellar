import react from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
import { useHistory } from "react-router-dom";

export default function DetailOrder() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);

    let history = useHistory();



    return (
        <LayoutPrimary>
            <div className="historyContainer" >
                {order.length ? (
                    order.map((i) => {
                        return (

                            <div>
                                {i.orderlines.map((o) => {
                                    return (

                                        <div className="divclass">
                                           
                                            <p className="porder">Product: {o.product.name} </p>
                                            <p className="porder">unit price: ${o.product.price}  x {o.amount}</p>
                                            <p className="porder">Subtotal: $ {o.product.price * o.amount}</p>

                                            {i.state === "received" ?(

                                            <button className="buttonClass" onClick={() => history.push(`/product-detail/${o.product.id}`)}>your opinion</button>
                                             ) :( null  )  
                                        }




                                        </div>
                                    )
                                })}
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