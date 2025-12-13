import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import smooth from "../../assets/smooth.png";
import style from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.footerGrid}>
          {/* Brand */}
          <div className={style.footerBrand}>
            <div className={style.brand}>
              <img src={smooth} alt="logo" className={style.logoIcon} />

              <h3>Smooth Tech.</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <div className={style.socialIcons}>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className={style.footerCol}>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Career</li>
            </ul>
          </div>

          {/* Customer Services */}
          <div className={style.footerCol}>
            <h4>Customer Services</h4>
            <ul>
              <li>My Account</li>
              <li>Track Your Order</li>
              <li>Return</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Information */}
          <div className={style.footerCol}>
            <h4>Our Information</h4>
            <ul>
              <li>Privacy</li>
              <li>User Terms & Condition</li>
              <li>Return Policy</li>
            </ul>
          </div>

          {/* Contact */}
          <div className={style.footerCol}>
            <h4>Contact Info</h4>
            <ul>
              <li>+123-456-789</li>
              <li>example@gmail.com</li>
              <li>6502 Preston Rd. Inglewood, Maine 98380</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={style.footerBottom}>
        <p>
          Copyright © 2025 Smooth Tech | Website Design. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
