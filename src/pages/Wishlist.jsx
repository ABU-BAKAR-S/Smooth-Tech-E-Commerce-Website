import React, { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import style from "./wishlist.module.css";
import { ProductsContext } from "../context";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "../layouts/header/Header";
import { useScrollToTop } from "../component/customHook/useScrollToTop";

export const Wishlist = () => {
  useScrollToTop();

  const { wishlist, addToCart, removeFromWishlist } =
    useContext(ProductsContext);

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
                      onClick={() => removeFromWishlist(id)}
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

                    <motion.button
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className={style.addBtn}
                      onClick={() => addToCart(id)}
                      disabled={!availabilityStatus}
                    >
                      Add to Cart
                    </motion.button>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <div className={style.actionRow}>
              <input
                type="text"
                value="https://www.example.com/wishlist"
                className={style.copyInput}
                readOnly
              />

              <button
                className={style.copyBtn}
                onClick={() =>
                  navigator.clipboard.writeText(
                    "https://www.example.com/wishlist"
                  )
                }
              >
                Copy Link
              </button>

              <button className={style.clearBtn}>Clear Wishlist</button>

              <button className={style.addAllBtn}>Add All to Cart</button>
            </div>
          </div>
        ) : (
          "Nothing to show"
        )}
      </article>
    </>
  );
};
