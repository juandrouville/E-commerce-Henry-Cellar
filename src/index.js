// Libraries
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'

// Styles
import 'assets/styles/main.scss'

// Pages 👇🏻
import Home from 'pages/index.js'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
  </Router>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
