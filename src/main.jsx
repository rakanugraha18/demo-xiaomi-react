import { render } from "preact";
import App from "./app";
import "./index.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
