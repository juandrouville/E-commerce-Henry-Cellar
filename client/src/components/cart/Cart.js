import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import {
  clearCart,
  removeOneProduct,
  removeAllProduct,
} from "../../actions/index";
import Layout from "layouts/layout-primary";
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);

  // cart sent to LocalStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const delFromCart = (id, all = false) => {
    if (all) {
      dispatch(removeAllProduct(id));
    } else {
      dispatch(removeOneProduct(id));
    }
  };
  const clearcart = () => {
    dispatch(clearCart());
  };
  let total = cart.reduce(function (acc, curr) {
    return acc + curr.quantity * curr.price;
  }, 0);

  //Authentication
  const { user } = useAuth0();
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  return (
    <Layout>
      <div>
        <h2>Shopping Cart</h2>
        <div>
          {cart ? (
            cart.map((item, index) => {
              return (
                <div>
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
        <div></div>
        <button onClick={(e) => clearcart(e)}>Clear Cart</button>
      </div>
      <div>
        {isAuthenticated ? (
          <>
            <button>Buy</button>
          </>
        ) : (
          <button onClick={() => loginWithRedirect()}>
            Must Log In to buy
          </button>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
