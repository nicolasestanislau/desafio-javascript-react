import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import HeaderBar from "./components/headerBar";
import "@fontsource/open-sans";
import "./assets/css/style.min.css";
import { CartProvider } from "./components/CartContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <React.StrictMode>
      <BrowserRouter>
        <HeaderBar />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </CartProvider>
);
