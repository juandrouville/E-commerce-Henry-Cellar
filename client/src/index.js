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
import ProductDetail from "components/productDetail/ProductDetail";
import Home from "pages/Home.js";
import Edit from "components/Edit/Edit";

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/product-detail" component={ProductDetail} />
      <Route
        path="/editProduct/:id"
        render={({ match }) => <Edit id={match.params.id} />}
      />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
