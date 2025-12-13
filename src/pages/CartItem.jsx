import React from "react";

import { RxCrossCircled } from "react-icons/rx";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import style from "./cart.module.css";

export const CartItem = ({ cartItem, quantity, setQuantity }) => {
  const { thumbnail, title, brand, price } = cartItem;
  return (
    <div className={style.cartItem}>
      <button className={style.removeBtn}>
        <RxCrossCircled />
      </button>

      <div className={style.productBox}>
        <img src={thumbnail} alt={title} className={style.productImg} />
        <div>
          <h4>{title} </h4>
          <p> {brand} </p>
        </div>
      </div>

      <span className={style.price}>${price} </span>

      <div className={style.qtyBox}>
        <button
          onClick={() => {
            setQuantity((quantity) => quantity - 1);
          }}
          disabled={quantity === 1 ? true : false}
        >
          <CiCircleMinus />
        </button>
        <span> {quantity} </span>
        <button
          onClick={() => {
            setQuantity((quantity) => quantity + 1);
          }}
          disabled={quantity === 5 ? true : false}
        >
          <CiCirclePlus />
        </button>
      </div>

      <span className={style.subtotal}>${(price * quantity).toFixed(2)} </span>
    </div>
  );
};
