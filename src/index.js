import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/app.scss";
import App from "./App";
import GenericNavbar from "./components/GenericNavbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
