import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RxCrossCircled } from "react-icons/rx";
import { BsCartXFill, BsFillCartCheckFill } from "react-icons/bs";

import { ProductsContext } from "../context";
import { Header } from "../layouts/header/Header";
import { useScrollToTop } from "../component/customHook/useScrollToTop";
import style from "./wishlist.module.css";
import no_item from "../assets/no_item.jpg";
import { toast } from "react-toastify";

const notify = (text) => {
  toast.success(text);
};

export const Wishlist = () => {
  useScrollToTop();

  const {
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    removeFromWishlist,
    clearWishlist,
  } = useContext(ProductsContext);

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => addToCart(item));
    notify("All Items Added To Cart");
  };

  return (
    <>
      <Header title="Wishlist" />
      <article>
        {wishlist && wishlist.length ? (
          <div className={style.wishlistWrapper}>
            <div className={style.tableHeader}>
              <span>Product</span>
              <span>Price</span>
              <span>Brand</span>
              <span>Stock Status</span>
              <span></span>
            </div>

            {/* AnimatePresence enables exit animation when item is removed */}
            <AnimatePresence mode="popLayout">
              {wishlist.map((item) => {
                const {
                  id,
                  thumbnail,
                  title,
                  weight,
                  price,
                  brand,
                  availabilityStatus,
                } = item;
                const isItemInCart = cart.some((item) => item.id === id);
                return (
                  <motion.div
                    key={id}
                    className={style.wishlistItem}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                  >
                    <button
                      onClick={() => {
                        removeFromWishlist(id);
                        notify("Successfully Removed From wishlist");
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
                        <Link to={`/product/${id}`} state={{ item }}>
                          <h4>{title}</h4>
                        </Link>
                        <p>{weight}g</p>
                      </div>
                    </div>

                    <span className={style.price}>${price}</span>

                    <span className={style.brand}>
                      {brand ? brand : "No Brand"}
                    </span>

                    <span
                      className={
                        availabilityStatus ? style.inStock : style.outStock
                      }
                    >
                      {availabilityStatus ? availabilityStatus : "Out of Stock"}
                    </span>

                    {isItemInCart ? (
                      <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={style.addBtn}
                        onClick={() => {
                          removeFromCart(id);
                          notify("Successfully Removed From Cart");
                        }}
                        disabled={!availabilityStatus}
                      >
                        Remove From Cart
                      </motion.button>
                    ) : (
                      <motion.button
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className={style.addBtn}
                        onClick={() => {
                          addToCart(item);
                          notify("Successfully Added To Cart");
                        }}
                        disabled={!availabilityStatus}
                      >
                        Add to Cart
                      </motion.button>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <div className={style.actionRow}>
              <input
                type="text"
                value="https://smooth-tech.netlify.app/wishlist"
                className={style.copyInput}
                readOnly
              />

              <button
                className={style.copyBtn}
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://smooth-tech.netlify.app/wishlist"
                  )
                }
              >
                Copy Link
              </button>

              <button
                className={style.clearBtn}
                onClick={() => {
                  clearWishlist();
                  notify("All Items Are Removed");
                }}
              >
                Clear Wishlist
              </button>

              <button className={style.addAllBtn} onClick={handleAddAllToCart}>
                Add All to Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="showing_empty">
            <img src={no_item} alt="no item img" className="showing_img" />

            <Link to={"/"} className="showing_btn">
              {" "}
              Continue Shopping{" "}
            </Link>
          </div>
        )}
      </article>
    </>
  );
};
