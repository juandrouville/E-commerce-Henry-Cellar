import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutPrimary from "layouts/layout-primary";
// import { useAuth0 } from "@auth0/auth0-react";
import {
    getDbOrder,

} from "../../actions/index";


export default function HistoryUser() {
    const dispatch = useDispatch();
    const order = useSelector((state) => state.order);
    const user = useSelector((state) => state.user);


    // const { isAuthenticated } = useAuth0();



    useEffect(() => {

        dispatch(getDbOrder())

    }, [dispatch])

    return (
        <LayoutPrimary>

            <div className="historyContainer">
                <h2>my purchase history</h2>


                <div >
                    {order.length ? (
                        order.map((i) => {
                            return (

                                <div className="divMap">

                                    <h3>order number: {i.id}</h3>
                                    <h3>state: {i.state}</h3>
                                    {i.orderlines.length ?
                                        i.orderlines.map((i) => {
                                            return (
                                                <h3>producto: {i.productId} amount: {i.amount}</h3>
                                            )
                                        }) : null}
                                    <h2>total: ${i.total}</h2>

                                </div>
                            )
                        })


                    ) : (
                        <h2 className="empty_cart"> cargando... </h2>
                    )}
                </div>
            </div>
        </LayoutPrimary>
    );
}