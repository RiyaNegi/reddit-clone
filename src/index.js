import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import App from "./components/common/App";
import "./index.css";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
