import React from "react";

import style from "./news.module.css";

export const Newsletter = () => {
  return (
    <div className={style.newsletter}>
      <p>Our Newsletter</p>
      <h2>
        Subscribe to Our Newsletter to <br />
        Get <span>Updates on Our Latest Offers </span>
      </h2>
      <small>
        Get 25% off on your first order just by subscribing to our newsletter
      </small>
      <form>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <br />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};
