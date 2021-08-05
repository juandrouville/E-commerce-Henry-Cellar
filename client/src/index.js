// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Store from "./Store/index.js";

// Styles
import "assets/styles/main.scss";

// Pages 👇🏻
import Home from "pages/index.js";
import menu from "components/menu/index.js";
import ProductDetail from "components/productDetail/ProductDetail";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route path="/" component={menu} />
      <Route exact path="/" component={Home} />
      <Route exact path="/product-detail" component={ProductDetail} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
