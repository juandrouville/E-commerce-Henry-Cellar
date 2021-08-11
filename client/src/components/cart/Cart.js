import react from "react"
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem"
import {clearCart} from "../../actions/index"

const Cart = () => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const delFromCart = () => {
    }

    const clearcart = () => {
        dispatch(clearCart())
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                {cart ? (
                    cart.map((item, index) => {
                        return (
                            
                            <div>
                                <CartItem key={item} delFromCart={delFromCart} name={item.name} price={item.price} quantity={item.quantity}/>
                             </div>
                        
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}

            </div>
            <h3>Cart</h3>
            <button onClick={(e) => clearcart(e)}>Clear Cart</button>
        </div>
    );
};

export default Cart;