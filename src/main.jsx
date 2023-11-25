import { render } from "preact";
import App from "./app";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />,
  document.getElementById("app")
);
