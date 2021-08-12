import { useEffect }  from "react"
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem"
import { clearCart, removeOneProduct, removeAllProduct } from "../../actions/index"
import NavBar from "../NavBar/NavBar";


const Cart = () => {
    const dispatch = useDispatch();

    let cart = useSelector((state) => state.cart);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const delFromCart = (id, all = false) => {
        if (all) {
            dispatch(removeAllProduct(id));
        } else {
            dispatch(removeOneProduct(id));
        }
    
    }

    const clearcart = () => {
        dispatch(clearCart())
    }

    let total = cart.reduce(function(acc, curr){
        return acc + curr.quantity * curr.price;
    },0);

    return (
        <div>
            <NavBar />
            <h2>Shopping Cart</h2>
            <div>
                {cart ? (
                    cart.map((item, index) => {
                        return (

                            <div>
                                <CartItem key={item} id={item.id} delFromCart={delFromCart} name={item.name} price={item.price} quantity={item.quantity} />
                            </div>
                            
                        );
                    })
                ) : (
                    <p>Cargando...</p>
                )}

            </div>
            <h3>TOTAL:${total}</h3>
            <div>
                
            </div>
            <button onClick={(e) => clearcart(e)}>Clear Cart</button>
        </div>
    );
};

export default Cart;