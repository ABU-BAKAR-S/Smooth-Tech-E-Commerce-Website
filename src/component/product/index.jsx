import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FaRegHeart, FaHeart } from "react-icons/fa";

import { BsHandbag } from "react-icons/bs";
import { MdOutlineZoomOutMap } from "react-icons/md";
import Rating from "../rating";
import { TruncateString } from "../truncateString";
import { ProductsContext } from "../../context";

export const Product = ({ product }) => {
  const { wishlist, addToWishlist } = useContext(ProductsContext);
  const { id, title, price, rating, images, discountPercentage } = product;

  const isInWishlist = wishlist.some((item) => item.id === id);

  return (
    <div className="product">
      <Link to={`/product/${id}`} state={{ product }} className="link_product">
        <div className="product_img">
          <img src={images[0]} alt="" />
        </div>

        <div className="product_desc">
          <h5 className="product_title">
            {" "}
            <TruncateString str={title} num={25} />{" "}
          </h5>
          <p className="product_price"> ${price} </p>
          <Rating rating={rating} />
        </div>

        <div className="product_discount">
          {Math.floor(discountPercentage)}% Off
        </div>
      </Link>
      <div className="hover_on">
        {isInWishlist ? (
          <FaHeart className={isInWishlist ? "colored" : "hover_icon"} />
        ) : (
          <Link to={"/wishlist"}>
            <FaRegHeart
              className={isInWishlist ? "colored" : "hover_icon"}
              onClick={() => {
                addToWishlist(id);
              }}
            />
          </Link>
        )}

        <MdOutlineZoomOutMap className="hover_icon" />
      </div>
    </div>
  );
};
