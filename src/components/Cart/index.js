import React, { useState, useEffect } from "react";
import "./style.min.css";
import { Link } from "react-router-dom";
import { useCart } from "../CartContext";
import CartCard from "../CartCard";
import CartEmpty from "../Icons/CartEmpty";
const Cart = () => {
  const [loading, setLoading] = useState(true);
  const cart = useCart();
  const total = Object.keys(cart.cart).reduce((prev, curr) => {
    return prev + cart.cart[curr].quantity * cart.cart[curr].product.price;
  }, 0);

  const remove = (id) => () => {
    cart.removeFromCart(id);
  };

  const changeQuantity = (id) => (evt) => {
    cart.changeQuantity(id, Number(evt.target.value));
  };
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading === false ? (
        <div className="main-cart-container">
          {Object.keys(cart.cart).length > 0 && (
            <div className="cart-card">
              <div className="cart-header">
                <p>PRODUTO</p>
                <p>QTD</p>
                <p>SUBTOTAL</p>
              </div>
            </div>
          )}
          <div className="article-container">
            {Object.keys(cart.cart).map((key) => {
              const { product, quantity } = cart.cart[key];

              return (
                <CartCard
                  key={key}
                  imageCard={product.image}
                  price={product.price}
                  title={product.title}
                  id={product.id}
                  subtotal={product.price * quantity}
                  quantity={quantity}
                  remove={remove(key)}
                  changeQuantity={changeQuantity(key)}
                />
              );
            })}
          </div>

          {Object.keys(cart.cart).length > 0 && (
            <div>
              <hr />
              <div className="cart-content total-content">
                <Link to="/completed">
                  <button className="button-container">FINALIZAR PEDIDO</button>
                </Link>

                <p>
                  <span>TOTAL</span>R$ {parseFloat(total.toFixed(2))}
                </p>
              </div>
            </div>
          )}

          {Object.keys(cart.cart).length === 0 && (
            <div className="cart-content">
              <h1>Parece que não há nada por aqui :(</h1>
              <CartEmpty />
              <hr />
              <Link to="/">
                <button className="button-container">VOLTAR</button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Cart;
