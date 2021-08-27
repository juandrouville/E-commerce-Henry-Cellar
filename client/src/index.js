// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./Store/index.js";
import axios from "axios";

//Auth0
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

// Styles
import "assets/styles/main.scss";

// Pages 👇🏻
import ProductDetail from "./components/productDetail/ProductDetail";
import Home from "pages/Home.js";
import LandingPage from "pages/LandingPage.js";
import PostProduct from "pages/PostForm.js";
import profile from "components/Profile/profile.js";
import Cart from "./components/cart/Cart";
import Prueba from "../src/pages/PruebaDeComponentes";
import Favourtie from "../src/pages/Favourite";
import AdminPanel from "../src/pages/AdminPanel";
import AuthNav from "../src/components/auth-Nav/auth-nav";
import ContactUs from "../src/components/ContactUs/ContactUs";
import AboutUs from "../src/components/AboutUs/AboutUs";
import dotenv from "dotenv";
import MercadoPago from "../src/components/mercadopago/MercadoPago";
import finalcompra from "../src/components/Compra/finalcompra";
// import Carousel from "../src/components/carousel/carousel";
import AllProductsAdmin from "components/allProductsAdmin/AllProductsAdmin";
import AllUsersAdmin from "components/allUsersAdmin/AllUsersAdmin";
import EditProduct from "components/Edit/Edit";
import Orders from "components/allOrdersAdmin/Orders";
import PageReview from "../src/pages/review";
import DetailOrder from "../src/components/detailOrder/detailOrder";

import PostReview from "../src/components/PostReview/PostReview"

import PostCategory from "../src/pages/postCategory";

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Auth0ProviderWithHistory>
        <Route exact path="/postreview/:id" component={PostReview} />
        <Route exact path="/orderdetail" component={DetailOrder} />
        <Route exact path="/review" component={PageReview} />
        <Route exact path="/mycart" component={Cart} />
        <Route exact path="/favourite" component={Favourtie} />
        <Route exact path="/prueba" component={Prueba} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/AuthNav" component={AuthNav} />
        <Route exact path="/ContactUs" component={ContactUs} />
        <Route exact path="/product-detail/:id" component={ProductDetail} />
        <Route path="/admin" component={AdminPanel} />
        <Route exact path="/admin/create" component={PostProduct} />
        <Route exact path="/admin/newCategory" component={PostCategory} />
        <Route exact path="/admin/products" component={AllProductsAdmin} />
        <Route exact path="/admin/users" component={AllUsersAdmin} />
        <Route exact path="/admin/orders" component={Orders} />
        <Route
          path="/admin/editProduct/:id"
          render={({ match }) => <EditProduct id={match.params.id} />}
        />
        <Route path="/profile" component={profile} />
        <Route exact path="/user/pagar" component={MercadoPago} />
        <Route exact path="/user/finalizarcompra" component={finalcompra} />
        <Route path="/aboutUs" component={AboutUs} />
      </Auth0ProviderWithHistory>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
