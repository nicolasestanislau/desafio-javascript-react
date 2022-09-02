import React from "react";
import "./style.scss";
import { useCart } from "../CartContext";
/* const cart = useContext(CartContext);
const add = () => {
  cart.addToCart({
    id: id,
  });
}; */
const Card = ({ id, image, title, price }) => {
  const cartList = useCart();
  const itemsCount = Object.keys(cartList.cart).length;
  const add = (product) => () => {
    cartList.addToCart(product);
  };

  return (
    <>
      {/* <pre>{JSON.stringify(cartList.cart, null, 2)}</pre> */}
      <div className="card-container" id={id}>
        <img className="image-container" src={image} alt={title} />
        <h1>{title}</h1>
        <p className="card-price">{price}</p>
        <button
          onClick={add({ image, title, price, id })}
          className="button-container"
        >
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.091 5.46182H7.22433V3.76182H8.92433V2.62848H7.22433V0.928482H6.091V2.62848H4.391V3.76182H6.091V5.46182ZM3.82433 10.5618C3.201 10.5618 2.69667 11.0718 2.69667 11.6951C2.69667 12.3185 3.201 12.8285 3.82433 12.8285C4.44767 12.8285 4.95767 12.3185 4.95767 11.6951C4.95767 11.0718 4.44767 10.5618 3.82433 10.5618ZM9.491 10.5618C8.86767 10.5618 8.36333 11.0718 8.36333 11.6951C8.36333 12.3185 8.86767 12.8285 9.491 12.8285C10.1143 12.8285 10.6243 12.3185 10.6243 11.6951C10.6243 11.0718 10.1143 10.5618 9.491 10.5618ZM3.92067 8.72015L3.93767 8.65215L4.44767 7.72848H8.66933C9.09433 7.72848 9.46833 7.49615 9.661 7.14482L11.8483 3.17248L10.8623 2.62848H10.8567L10.2333 3.76182L8.66933 6.59515H4.69133L4.61767 6.44215L3.34833 3.76182L2.81 2.62848L2.27733 1.49515H0.424332V2.62848H1.55767L3.59767 6.92948L2.83267 8.31782C2.742 8.47648 2.691 8.66348 2.691 8.86182C2.691 9.48515 3.201 9.99515 3.82433 9.99515H10.6243V8.86182H4.06233C3.98867 8.86182 3.92067 8.79948 3.92067 8.72015Z"
              fill="white"
            />
          </svg>
          <p>{itemsCount}</p>
          <p>ADICIONAR AO CARRINHO</p>
        </button>
      </div>
    </>
  );
};

export default Card;
