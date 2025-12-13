import React, { useContext, useState } from "react";

import { RxCrossCircled } from "react-icons/rx";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import style from "./cart.module.css";
import { ProductsContext } from "../context";
import { CartItem } from "./CartItem";
import { Header } from "../layouts/header/Header";
import { useScrollToTop } from "../component/customHook/useScrollToTop";

export const Cart = () => {
  useScrollToTop();

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(ProductsContext);

  const [couponCode, setCouponCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  /*
  if (couponCode.toUpperCase() === "SMOOTHTECH10") {
  setDiscount(10);
  toast.success("Coupon applied!");
} else {
  toast.error("Invalid coupon code");
}
  */

  const applyCouponCode = () => {
    if (couponCode.trim().toUpperCase() === "SMOOTHTECH10") {
      setDiscountPercent(10); // $10 discount
    } else {
      setDiscountPercent(0);
    }
  };
  const totalItem = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subTotal = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  const shippingFee = 10;
  const discountAmount = ((subTotal * discountPercent) / 100).toFixed(2);
  const taxes = (subTotal * 0.08).toFixed(2);

  const totalPrice = (
    Number(subTotal) -
    Number(discountAmount) +
    Number(taxes) +
    shippingFee
  ).toFixed(2);

  const clearShoppingCart = () => {
    clearCart();
  };

  return (
    <>
      <Header title="Shopping Cart" />
      <article>
        {cart && cart.length ? (
          <div className={style.cartWrapper}>
            <div className={style.productTable}>
              <div className={style.tableHeader}>
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
              </div>

              {cart.map((cartItem) => {
                const { id, thumbnail, title, brand, price, quantity } =
                  cartItem;
                return (
                  <div key={id} className={style.cartItem}>
                    <button
                      onClick={() => {
                        removeFromCart(id);
                      }}
                      className={style.removeBtn}
                    >
                      <RxCrossCircled />
                    </button>

                    <div className={style.productBox}>
                      <img
                        src={thumbnail}
                        alt={title}
                        className={style.productImg}
                      />
                      <div>
                        <h4>{title} </h4>
                        <p> {brand} </p>
                      </div>
                    </div>

                    <span className={style.price}>${price} </span>

                    <div className={style.qtyBox}>
                      <button
                        onClick={() => {
                          decreaseQuantity(id);
                        }}
                        disabled={quantity === 1 ? true : false}
                      >
                        <CiCircleMinus />
                      </button>
                      <span> {quantity} </span>
                      <button
                        onClick={() => {
                          increaseQuantity(id);
                        }}
                        disabled={quantity === 5 ? true : false}
                      >
                        <CiCirclePlus />
                      </button>
                    </div>

                    <span className={style.subtotal}>
                      ${(price * quantity).toFixed(2)}{" "}
                    </span>
                  </div>
                );
              })}

              <div className={style.actionRow}>
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => {
                    setCouponCode(e.target.value);
                  }}
                  className={style.couponInput}
                  placeholder="SMOOTHTECH10"
                />
                <button className={style.applyBtn} onClick={applyCouponCode}>
                  Apply Coupon
                </button>
                <button className={style.clearCart} onClick={clearShoppingCart}>
                  Clear Shopping Cart
                </button>
              </div>
            </div>

            <div className={style.orderSummary}>
              <h3>Order Summary</h3>
              <div className={style.summaryRow}>
                <span>Items</span>
                <span> {totalItem} </span>
              </div>
              <div className={style.summaryRow}>
                <span>Sub Total</span>
                <span>${subTotal}</span>
              </div>
              <div className={style.summaryRow}>
                <span>Shipping</span>
                <span>${shippingFee}</span>
              </div>
              <div className={style.summaryRow}>
                <span>Taxes</span>
                <span>${taxes} </span>
              </div>
              <div className={style.summaryRow}>
                <span>Coupon Discount</span>
                <span className={style.discount}>- ${discountAmount}</span>
              </div>

              <div className={style.totalRow}>
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>

              <button className={style.checkoutBtn}>Proceed to Checkout</button>
            </div>
          </div>
        ) : (
          "Nothing to show"
        )}
      </article>
    </>
  );
};
