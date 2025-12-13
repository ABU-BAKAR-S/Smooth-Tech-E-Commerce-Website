import React from "react";

import style from "./header.module.css";

export const Header = ({ title }) => {
  return (
    <div className={style.header}>
      <h1>{title} </h1>
    </div>
  );
};
