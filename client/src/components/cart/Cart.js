import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem"
import { clearCart, removeOneProduct, removeAllProduct, unifyCarts } from "../../actions/index"
import { useAuth0 } from "@auth0/auth0-react";
import Layout from '../../layouts/layout-primary'


const Cart = () => {
    const dispatch = useDispatch();
    const {isAuthenticated,user}=useAuth0()

    let cart = useSelector((state) => state.cart);

    useEffect(()=>{
        if(isAuthenticated) dispatch(unifyCarts(user.sub,cart))
    },[isAuthenticated,dispatch,cart,user])
     

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
    dispatch(clearCart());
  };
  let total = cart.reduce(function (acc, curr) {
    return acc + curr.quantity * curr.price;
  }, 0);

  
  const { loginWithRedirect } = useAuth0();
  return (
    <Layout>
      <div className="cart_container">
        <h2>Shopping Cart</h2>
        <div>
          {cart ? (
            cart.map((item, index) => {
              return (
                <div className="cart_item">
                  <CartItem
                    key={item}
                    id={item.id}
                    delFromCart={delFromCart}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                  />
                </div>
              );
            })
          ) : (
            <p>Cargando...</p>
          )}
        </div>
        <h3>TOTAL:${total}</h3>
        <div >
        <button onClick={(e) => clearcart(e)}>Clear Cart</button>
        {isAuthenticated ? (
          <>
            <button>Buy</button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()} className="buy_button">
            Must Log In to buy
          </button>
        )}
        </div>
      </div>
      
    </Layout>
  );
};

export default Cart;
