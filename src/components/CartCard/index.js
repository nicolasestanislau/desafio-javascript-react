import React, { useState } from "react";
import "./style.scss";
const CartCard = ({
  imageCard,
  price,
  title,
  id,
  subtotal,
  quantity,
  remove,
  changeQuantity,
}) => {
  const [mudavalor, setMudavalor] = useState(quantity);
  if(mudavalor == 0) {
    console.log('entro')
  }
  const subtraction = async () => {
    if(mudavalor == 1) {
      return
    }
    await setMudavalor(quantity - 1);

    const el = document.getElementById("new");
    el.focus();
    el.blur();
  };

  const plus = async () => {
    await setMudavalor(quantity + 1);

    const el = document.getElementById("new");
    el.focus();
    el.blur();
  };

  return (
    <>
      <div className="cart-card">
        <div id={id} className="cart-content-checkout">
          <img src={imageCard} alt={title} />
          <div>
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <div className="input-content">
            <svg
              onClick={subtraction}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 8.1V9.9H13.5V8.1H4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z"
                fill="#009EDD"
              />
            </svg>
            <input
              type="number"
              id="new"
              onBlur={changeQuantity}
              value={mudavalor}
              readOnly
            ></input>
            <svg
              onClick={plus}
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.9 4.5H8.1V8.1H4.5V9.9H8.1V13.5H9.9V9.9H13.5V8.1H9.9V4.5ZM9 0C4.032 0 0 4.032 0 9C0 13.968 4.032 18 9 18C13.968 18 18 13.968 18 9C18 4.032 13.968 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2Z"
                fill="#009EDD"
              />
            </svg>
          </div>
          <p>{subtotal}</p>
          <div className="delete-button" onClick={remove}>
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                fill="#009EDD"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartCard;
