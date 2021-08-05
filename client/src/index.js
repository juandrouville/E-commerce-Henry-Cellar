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
import Home from "pages/Home.js";
import NavBar from "components/NavBar/NavBar.js";
ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
