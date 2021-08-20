import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getDbOrder
} from "../../actions/index";


export default function HistoryUser() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    console.log(order.ordelines)
    useEffect(() => {
        dispatch(getDbOrder())
    }, [dispatch])

    return (
        <div>
            <h2>historial de compras</h2>
            
           
            <div>
                {order.length ? (
                    order.map((i) => {
                        return (
                            <div>
                              <h2>state:{i.state}</h2>
                              <h2>total:{i.total}</h2>
                              <h2>amount:{i.amount}</h2>
                              {/* {order.orderlines.map((a)=>{
                                  return(
                                    <h2>amount:{a.amount}</h2>
                                  )
                              })} */}
                            </div>
                        );
                    })
                ) : (
                    <h2 className="empty_cart"> Oups  &#x1F613; ... your cart is empty !</h2>
                )}
            </div>
        </div>
    );
}