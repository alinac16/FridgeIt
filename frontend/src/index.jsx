import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./stylesheets/main.scss";
// import reportWebVitals from './reportWebVitals';

import "onsenui/css/onsenui.css";
import "onsenui/css/onsen-css-components.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
