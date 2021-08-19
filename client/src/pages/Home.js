//REACT
import React from "react";
import { useEffect } from "react";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

//LAYOUT
import LayoutPrimary from "../layouts/layout-primary";

//COMPONENTS
import SimpleForm from "../components/SimpleForm/SimpleForm";
import Pagination from "components/pagination/pagination";
import Filtros from "../components/FIltros/filtros";
import ReverseFilter from "../components/FIltros/filtros";
import { ReactComponent as Arrow } from "assets/images/arrow.svg";
import AllProducts from "../components/allProducts/allproducts";
import Cart from "components/cart/Cart";

//ACTIONS
import {
  addProductToDBCart,
  clearAddedProductToDB,
  clearCart,
  getOrderlines,
  getUser,
  unifyCarts
} from "actions";

//BACKGROUND
import background from "assets/images/vendimia.jpeg";

const Home = props => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const cart = useSelector(state => state.cart);
  const userDB = useSelector(state => state.user);
  const cartDB = useSelector(state => state.cartDB);
  const addProductLogged = useSelector(state => state.addProductToDB);

  useEffect(() => {
    if (isAuthenticated && !userDB) {
      dispatch(getUser(user));
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (isAuthenticated && userDB && cart.length) {
      dispatch(unifyCarts(user.sub, cart));
      alert("Agregamos los productos de tu carrito !");
      dispatch(clearCart());
    }
  }, [userDB]);

  useEffect(() => {
    if (isAuthenticated && userDB) {
      dispatch(getOrderlines(userDB.order.id));
    }
  }, [cartDB, addProductLogged, userDB]);

  return (
    <LayoutPrimary>
      <div
        className="catalogo__container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          backgroundSize: "cover"
        }}
      >
        <div className="container">
          <h1>we have more than 90 varieties of wines</h1>
        </div>
      </div>
      <div id="catalogo">
        <h1 className="catalogo__title">Catalog</h1>
        <div>
          <Filtros />
          <ReverseFilter />
          <SimpleForm />
        </div>
        <AllProducts />
      </div>
      <div className="paginacion">
        <Pagination />
      </div>
    </LayoutPrimary>
  );
};

export default Home;
