import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem/CartItem";
import {
  clearCart,
  removeOneProduct,
  removeAllProduct,
  unifyCarts,
  addProductToDBCart,
  getOrderlines,
  removeOrderline,
  clearCartOfDB,
} from "../../actions/index";
import { useAuth0 } from "@auth0/auth0-react";
import LayoutPrimary from "layouts/layout-primary";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  let cart = useSelector((state) => state.cart);
  let userDB = useSelector((state) => state.user);
  let orderlines = useSelector((state) => state.orderlines);
  let orderlineRemoved = useSelector((state) => state.orderlineRemoved);
  let clearCartOfDataBase = useSelector((state) => state.clearCartOfDB);

  const userData = useSelector((state) => state.user);

  useEffect(() => {
    if (
      isAuthenticated &&
      userDB &&
      (orderlineRemoved || clearCartOfDataBase)
    ) {
      dispatch(getOrderlines(userDB.order.id));
    }
  }, [orderlineRemoved, clearCartOfDataBase]);

  const delFromCart = (
    id,
    all = false,
    orderlineId = false,
    name = undefined
  ) => {
    if (all) {
      if (isAuthenticated) dispatch(removeOrderline(orderlineId, true));
      else dispatch(removeAllProduct(id));
      toast.error(`All "${name}" were successfully removed`);
    } else {
      if (isAuthenticated) dispatch(removeOrderline(orderlineId, false));
      else dispatch(removeOneProduct(id));
      toast.error(`"${name}" successfully removed`);
    }
  };

  const clearcart = () => {
    if (isAuthenticated) dispatch(clearCartOfDB(userDB.order.id));
    else dispatch(clearCart());
    toast.success(`Your cart is now empty !`);
  };

  const { loginWithRedirect } = useAuth0();

  // const [open, setOpen] = useState();

  // const OpenCart = () => {
  //   setOpen(!open);
  // };

  let result = [];

  isAuthenticated && orderlines.length
    ? (result = orderlines)
    : (result = cart);

  let total = result.reduce(function(acc, curr) {
    return acc + curr.quantity * curr.price;
  }, 0);
  let history = useHistory();
  function comprar() {
    if (user.id) {
      // console.log()
      history.push("/user/pagar");
    } else {
      history.push("/user/pagar");
    }
  }
  return (
    <LayoutPrimary>
      <div>
        <Toaster />
      </div>
      <div className="page_cart">
        <div className="cart__container">
          <h2 className="cart__title">Shopping Cart: {result.length} items </h2>
          <div className="cart__subtitles">
            <h2>Image</h2>
            <h2>Name</h2>
            <h2>Unit Price</h2>
            <h2>Quantity</h2>
            <h2>Subtotal</h2>
            <h2> </h2>
          </div>

          {result.length ? (
            result.map((item, index) => {
              return (
                <div className="cart__item">
                  <CartItem
                    className="line"
                    key={index}
                    id={item.id}
                    delFromCart={delFromCart}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    orderlineId={item.orderlineId || null}
                    image={item.image}
                  />
                </div>
              );
            })
          ) : (
            <h2 className="empty_cart">
              {" "}
              Oups &#x1F613; ... your cart is empty !
            </h2>
          )}

          <div className="total">
            <div className="cart_buttons">
              <button
                className="buy_button"
                disabled={result.length === 0 ? true : false}
                onClick={(e) => clearcart(e)}
              >
                Clear Cart
              </button>
            </div>
            {isAuthenticated && !userData.dataValues.blocked ? (
              // {isAuthenticated ? (
              <div>
                {!userData.dataValues.blocked ? (
                <button
                  className="buy_button"
                  onClick={comprar}
                  li
                  disabled={result.length === 0 ? true : false}
                >
                  Buy
                </button>) : (
                  <h2>Sorry, your user is blocked to buy</h2>)}

                <pre> </pre>
              </div>
            ) : (
              <div>
                <button
                  className="buy_button"
                  onClick={() => loginWithRedirect()}
                >
                  Login to buy
                </button>
              </div>
            )}
            <h2>TOTAL: $ {total.toFixed(2)}</h2>
          </div>
        </div>
      </div>
    </LayoutPrimary>
  );
};

export default Cart;
