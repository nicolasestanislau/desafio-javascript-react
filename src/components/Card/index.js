import React from "react";
import "./style.min.css";
import { useCart } from "../CartContext";
import CartIcon from "../Icons/CartIcon";
const Card = ({ id, image, title, price }) => {
  const cartList = useCart();
  const itemsCount = Object.keys(cartList.cart).length;
  const add = (product) => () => {
    cartList.addToCart(product);
  };

  return (
    <div className="card-container" id={id}>
      <img className="image-container" src={image} alt={title} />
      <h1>{title}</h1>
      <p className="card-price">R$ {price}</p>
      <button
        onClick={add({ image, title, price, id })}
        className="button-container"
      >
        <CartIcon />
        <p>{itemsCount}</p>
        <p>ADICIONAR AO CARRINHO</p>
      </button>
    </div>
  );
};

export default Card;
