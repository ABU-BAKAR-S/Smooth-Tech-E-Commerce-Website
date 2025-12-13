import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";

import logo from "../../assets/logo.png";
import style from "./navbar.module.css";

export const Navbar = () => {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <nav className={style.navbar}>
      <div className={style.logoDiv}>
        <img src={logo} alt="logo" className={style.logo} />
      </div>

      <div className={style.searchSection}>
        <form>
          <input
            type="text"
            placeholder="Search"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <button type="submit">
            <IoSearch />
          </button>
        </form>
      </div>

      <div className={style.navIcons}>
        <NavLink to="/" className="navLink">
          <IoHomeOutline />
        </NavLink>
        <NavLink to="/wishlist">
          <FaRegHeart />
        </NavLink>
        <NavLink to="/cart">
          <BsCart3 />
        </NavLink>
        <NavLink to="/profile">
          <VscAccount />
        </NavLink>
      </div>

      <div className={style.mobileMenu}>
        <NavLink to="/">
          <IoHomeOutline /> Home
        </NavLink>
        <NavLink to="/wishlist">
          <FaRegHeart /> Wishlist
        </NavLink>
        <NavLink to="/cart">
          <BsCart3 /> Cart
        </NavLink>
        <NavLink to="/profile">
          <VscAccount /> Profile
        </NavLink>
      </div>
    </nav>
  );
};
