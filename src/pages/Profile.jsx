import React, { useContext } from "react";

import { ProductsContext } from "../context";
import { Header } from "../layouts/header/Header";

import style from "./profile.module.css";
import { Form } from "../layouts/form/Form";

export const Profile = () => {
  const { isLoggedIn, loggedIn } = useContext(ProductsContext);

  if (!isLoggedIn) {
    return <Form />;
  } else {
    return (
      <>
        <Header title="My Account" />
        <div style={{ textAlign: "center" }}>
          <h4> Nothing is Added Yet </h4>
          {isLoggedIn ? (
            <button
              className={style.btn}
              onClick={() => {
                loggedIn(false);
              }}
            >
              Log Out
            </button>
          ) : (
            <button
              className={style.btn}
              onClick={() => {
                loggedIn(true);
              }}
            >
              Log In
            </button>
          )}
        </div>
      </>
    );
  }
};
