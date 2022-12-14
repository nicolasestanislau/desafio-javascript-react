import React from "react";
import "./style.min.css";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
const HeaderBar = () => {
  const cart = useCart();
  //const itemsCount = Object.keys(cart.cart).length;
  const itemsCount = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity;
  }, 0);
  return (
    <header className="header-container">
      <Link to="/">
        <h1>Movies</h1>
      </Link>

      <Link to="/carrinho">
        <div className="cart-container">
          <div className="textCart-container">
            <p>Meu Carrinho</p>
            <p>{itemsCount} itens</p>
          </div>
          <div>
            <svg
              width="31"
              height="26"
              viewBox="0 0 31 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5476 10L16.7109 1.25334C16.5862 1.07673 16.4202 0.933357 16.2274 0.835739C16.0346 0.73812 15.8209 0.68923 15.6048 0.693339C15.1784 0.693339 14.752 0.880006 14.4988 1.26667L8.66204 10H2.27894C1.54602 10 0.94635 10.6 0.94635 11.3333C0.94635 11.4533 0.959676 11.5733 0.999654 11.6933L4.38443 24.0533C4.69093 25.1733 5.71702 26 6.943 26H24.2667C25.4926 26 26.5187 25.1733 26.8386 24.0533L30.2233 11.6933L30.2633 11.3333C30.2633 10.6 29.6636 10 28.9307 10H22.5476ZM11.6071 10L15.6048 4.13334L19.6026 10H11.6071ZM15.6048 20.6667C14.139 20.6667 12.9397 19.4667 12.9397 18C12.9397 16.5333 14.139 15.3333 15.6048 15.3333C17.0707 15.3333 18.27 16.5333 18.27 18C18.27 19.4667 17.0707 20.6667 15.6048 20.6667Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </Link>
    </header>
  );
};

export default HeaderBar;
