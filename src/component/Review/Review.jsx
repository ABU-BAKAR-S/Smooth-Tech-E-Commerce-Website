import React from "react";

import { IoPersonCircleOutline } from "react-icons/io5";

import Rating from "../rating";

import style from "./review.module.css";

export default function Review({ review }) {
  const { rating, comment, date, reviewerName, reviewerEmail } = review;
  return (
    <div className={style.card}>
      <div className={style.card_header}>
        <div className={style.card_head_left}>
          <IoPersonCircleOutline className={style.person} />
          <div>
            <p> {reviewerName} </p>
            <small> {reviewerEmail} </small>
          </div>
        </div>
        <p> {date.split("T")[0]} </p>
      </div>
      <div className={style.card_desc}>
        <p> {comment} </p>
        <Rating rating={rating} />
      </div>
    </div>
  );
}
