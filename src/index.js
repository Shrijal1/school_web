import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/app.scss";
import App from "./App";
import GenericNavbar from "./components/GenericNavbar";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
