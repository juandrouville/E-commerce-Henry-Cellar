import react from "react"
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem"

const Cart = () => {

    const cart = useSelector((state) => state.cart);

    const delFromCart = () => {
    }

    const clearCart = () => {
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                {cart ? (
                    cart.map((item, index) => {
                        return (
                            
                            <div>
                                <CartItem key={item} data={item} delFromCart={delFromCart} name={item.name} price={item.price} />
                             </div>
                        
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}

            </div>
            <h3>Cart</h3>
            <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
    );
};

export default Cart;