import React from "react";

import { IoIosStarOutline, IoIosStar, IoIosStarHalf } from "react-icons/io";

export default function Rating({ rating }) {
  return (
    <div className="product_rating">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;

        if (starValue <= fullStars) {
          return <IoIosStar key={index} className="star_icon" />;
        }

        if (starValue === fullStars + 1 && hasHalfStar) {
          return <IoIosStarHalf key={index} className="star_icon" />;
        }

        return <IoIosStarOutline key={index} className="star_icon" />;
      })}
      (<span>{rating}</span>)
    </div>
  );
}
