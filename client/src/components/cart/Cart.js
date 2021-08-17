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
} from "../../actions/index";
import { useAuth0 } from "@auth0/auth0-react";
import LayoutPrimary from "layouts/layout-primary";

const Cart = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  let cart = useSelector((state) => state.cart);
  let userDB=useSelector(state=>state.user)
  let orderlines=useSelector(state=>state.orderlines)

  // useEffect(()=>{
  //   if(isAuthenticated && userDB){
  //      dispatch(getOrderlines(userDB.order.id))
  //   }
  // },[dispatch,isAuthenticated])

  console.log(orderlines)

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

  

  const { loginWithRedirect } = useAuth0();

  // const [open, setOpen] = useState();

  // const OpenCart = () => {
  //   setOpen(!open);
  // };

  let result =[]

  isAuthenticated && orderlines.length ? result=orderlines : result=cart

  let total = result.reduce(function(acc, curr) {
    return acc + curr.quantity * curr.price;
  }, 0);
 
  return (
    <LayoutPrimary>
    <div>
      <h2 className="cart__title">Shopping Cart</h2>
      <div>
        {result ? (
          result.map((item, index) => {
            return (
              <div className="cart__item">
                <CartItem
                  key={index}
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

      <div className="total">
        <h3>TOTAL:${total}</h3>
        <div className="log__buttons">
          <button onClick={(e) => clearcart(e)}>Clear Cart</button>
          <div>
            {isAuthenticated ? (
              <>
                <button>Buy</button>
              </>
            ) : (
              <button onClick={() => loginWithRedirect()}>Login to buy</button>
            )}
          </div>
        </div>
      </div>
    </div>
    </LayoutPrimary>
  );
};

export default Cart;
