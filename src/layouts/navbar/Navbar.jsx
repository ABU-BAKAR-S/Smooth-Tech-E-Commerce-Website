import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IoHomeOutline, IoSearch, IoHomeSharp } from "react-icons/io5";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingCart } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

import logo from "../../assets/logo.png";
import style from "./navbar.module.css";
import { ProductsContext } from "../../context";

export const Navbar = () => {
  const { pathname } = useLocation();

  const { searchItem } = useContext(ProductsContext);

  const [searchProduct, setSearchProduct] = useState("");

  const home = pathname === "/" ? <IoHomeSharp /> : <IoHomeOutline />;
  const wishlist = pathname === "/wishlist" ? <FaHeart /> : <FaRegHeart />;
  const cart = pathname === "/cart" ? <FaShoppingCart /> : <BsCart3 />;
  const profile = pathname === "/profile" ? <BsPersonCircle /> : <VscAccount />;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    searchItem(searchProduct.toLowerCase());
  }, [searchProduct, searchItem]);

  return (
    <nav className={style.navbar}>
      <div className={style.logoDiv}>
        <NavLink to={"/"}>
          <img src={logo} alt="logo" className={style.logo} />
        </NavLink>
      </div>

      <div className={style.searchSection}>
        <form onSubmit={handleSubmit}>
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
        <NavLink to="/">{home}</NavLink>
        <NavLink to="/wishlist">{wishlist}</NavLink>
        <NavLink to="/cart">{cart}</NavLink>
        <NavLink to="/profile">{profile}</NavLink>
      </div>

      <div className={style.mobileMenu}>
        <NavLink to="/">
          {home} <span>Home</span>
        </NavLink>
        <NavLink to="/wishlist">
          {wishlist}
          <span>Wishlist</span>
        </NavLink>
        <NavLink to="/cart">
          {cart} <span>Cart</span>
        </NavLink>
        <NavLink to="/profile">
          {profile} <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};
