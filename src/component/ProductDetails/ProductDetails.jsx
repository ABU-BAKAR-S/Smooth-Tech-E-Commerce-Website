import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import { IoShareSocialSharp, IoLocationOutline } from "react-icons/io5";
import { RiTakeawayLine } from "react-icons/ri";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { TbTruckReturn } from "react-icons/tb";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GoShieldSlash } from "react-icons/go";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

import style from "./productDetails.module.css";
import Review from "../Review/Review";
import Rating from "../rating";
import { ProductsContext } from "../../context";
import { Header } from "../../layouts/header/Header";
import { useScrollToTop } from "../customHook/useScrollToTop";

export const ProductDetails = () => {
  useScrollToTop();

  const { cart, addToCart, removeFromCart } = useContext(ProductsContext);

  const location = useLocation();
  const { product } = location.state || {};
  const {
    id,
    images,
    title,
    description,
    rating,
    brand,
    price,
    shippingInformation,
    returnPolicy,
    meta,
    reviews,
    warrantyInformation,
  } = product;

  const isItemInCart = cart.some((item) => item.id === id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(id);
  };

  return (
    <>
      <Header title="Shopping" />
      <div className={style.product_details}>
        <div className={style.product_details_top}>
          <div className={style.product_details_left}>
            <div className={style.product_detail_left_img}>
              <img src={images[0]} alt="" />
              {/* <div className="gallery">
              {product.images.map((img, index) => (
                <img key={index} src={img} alt="" />
              ))}
            </div> */}
            </div>
            <div className={style.product_detail_left_desc}>
              <h2> {title} </h2>
              <p> {description} </p>
              <div className={style.product_details_left_rating}>
                <Rating rating={rating} />
                <div className={style.share_links}>
                  <IoShareSocialSharp className={style.share_link} />
                  <FaRegHeart className={style.share_link} />
                </div>
              </div>
              <div className={style.product_datails_left_brand}>
                Brand:{" "}
                <span className="brand"> {brand ? brand : "No Brand"} </span>
              </div>
              <div className={style.product_details_left_price}>
                <span> $ {price} </span>
              </div>
              {/* <div className={style.product_details_left_quantity}>
                <small>Quantity </small>
                <div>
                  <button
                    onClick={() => {
                      setCountItem((countItem) => countItem - 1);
                    }}
                    disabled={countItem === 1 ? true : false}
                  >
                    {" "}
                    <CiCircleMinus />{" "}
                  </button>{" "}
                  <span className={style.count}> {countItem} </span>{" "}
                  <button
                    onClick={() => {
                      setCountItem((countItem) => countItem + 1);
                    }}
                    disabled={countItem === 5 ? true : false}
                  >
                    {" "}
                    <CiCirclePlus />{" "}
                  </button>
                </div>
              </div> */}
              <div className={style.product_details_left_btns}>
                <Link className={style.cartBtn}>Buy Now</Link>

                {isItemInCart ? (
                  <Link
                    onClick={handleRemoveFromCart}
                    to={"/cart"}
                    className={style.cartBtn}
                  >
                    {" "}
                    Remove From Cart{" "}
                  </Link>
                ) : (
                  <Link
                    onClick={handleAddToCart}
                    to={"/cart"}
                    className={style.cartBtn}
                  >
                    {" "}
                    Add to Cart{" "}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className={style.product_details_right}>
            <div className={style.product_details_right_small_desc}>
              <small>Delivery Option</small>
              <IoMdInformationCircleOutline className={style.info_icon} />
            </div>
            <div className={style.product_details_right_desc}>
              <div className={style.desc_left}>
                <IoLocationOutline className={style.location_icon} />
                <div>
                  <p> Dhaka, Dhaka-North,Dhour,Road No. 7 </p>
                </div>
              </div>
              <a href="#" className={style.change_location_icon}>
                CHANGE
              </a>
            </div>
            <div className={style.product_details_right_desc}>
              <div className={style.desc_left}>
                <RiTakeawayLine className={style.left_icon} />
                <div>
                  <h4>Standard Delivery</h4>
                  <small> {shippingInformation} </small>
                </div>
              </div>
              <p> $10 </p>
            </div>
            <div className={style.product_details_right_desc}>
              <div className={style.desc_left}>
                <GiMoneyStack className={style.left_icon} />{" "}
                <div>
                  <h4>Cash On Delivery Available</h4>
                </div>
              </div>
            </div>
            <div className={style.product_details_right_desc}>
              <small>Return & Warranty</small>
              <IoMdInformationCircleOutline className={style.info_icon} />
            </div>
            <div className={style.product_details_right_desc}>
              <div className={style.desc_left}>
                <TbTruckReturn className={style.left_icon} />
                <div>
                  <h4> {returnPolicy ? returnPolicy : "No Return Policy"} </h4>
                </div>
              </div>
            </div>
            <div className={style.product_details_right_desc}>
              <div className={style.desc_left}>
                {warrantyInformation ? (
                  <IoShieldCheckmarkOutline className={style.left_icon} />
                ) : (
                  <GoShieldSlash className={style.left_icon} />
                )}

                <div>
                  <h4>
                    {" "}
                    {warrantyInformation
                      ? warrantyInformation
                      : "No Warranty Available"}{" "}
                  </h4>
                </div>
              </div>
            </div>
            <div className={style.product_details_right_desc}>
              <div className={style.qr_code}>
                <img src={meta.qrCode} alt="" />
              </div>
            </div>
            <Link to="/" replace>
              Go To Shop
            </Link>
          </div>
        </div>
        <div className={style.product_details_bottom}>
          <h3>Review List</h3>
          <div className={style.cards}>
            {reviews.map((review, index) => (
              <Review key={index} review={review} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
