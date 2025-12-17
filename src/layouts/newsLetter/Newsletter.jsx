import React, { useEffect, useRef } from "react";

import { useForm, ValidationError } from "@formspree/react";

import style from "./news.module.css";
import { toast } from "react-toastify";

const notify = (text) => {
  toast.success(text);
};

export const Newsletter = () => {
  const [state, handleSubmit] = useForm("movgojyz");
  const emailRef = useRef(null);

  useEffect(() => {
    if (state.succeeded) {
      notify("Subscription Successful");
      if (emailRef.current) {
        emailRef.current.value = "";
      }
    }
  }, [state.succeeded]);

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
      <form onSubmit={handleSubmit}>
        <input
          ref={emailRef}
          id="email"
          type="email"
          name="email"
          placeholder="Email Address"
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
