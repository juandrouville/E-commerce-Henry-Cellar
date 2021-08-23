import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
        <div>
            <h2>historial de compras</h2>
            
           
            <div>
                {order.length ? (
                    order.map((i)=>{
                        return(

                            <div>
                              <h2>state:{i.state}</h2>
                              <h2>total:{i.total}</h2>
                              {i.orderlines.length ? 
                               i.orderlines.map((i) => {
                                   return(
                                    <h2>amount:{i.amount}</h2>   
                                   )
                               }) : null }
                              
                            </div>
                        )
                    })
                        
                    
                ) : (
                    <h2 className="empty_cart"> cargando... </h2>
                )}
            </div>
        </div>
    );
}