import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import HeaderBar from "./components/headerBar";
import "@fontsource/open-sans";
import "./assets/css/style.scss";
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

reportWebVitals();
