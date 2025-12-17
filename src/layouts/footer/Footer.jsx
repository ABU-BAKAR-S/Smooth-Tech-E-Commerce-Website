import React from "react";

import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import smooth from "../../assets/smooth.png";
import style from "./footer.module.css";

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const socialContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const socialItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <motion.div
        className={style.footerTop}
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={style.footerGrid}>
          {/* Brand */}
          <motion.div className={style.footerBrand} variants={fadeLeft}>
            <div className={style.brand}>
              <img src={smooth} alt="logo" className={style.logoIcon} />

              <h3>Smooth Tech.</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium esse ratione, excepturi rerum, corporis iste iusto
              nihil modi cumque, mollitia ad architecto. Nisi, eos laborum!
              Similique in itaque voluptatem qui!
            </p>

            <motion.div
              className={style.socialIcons}
              variants={socialContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a
                href="#"
                variants={socialItem}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF />
              </motion.a>
              <motion.a
                href="#"
                variants={socialItem}
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="#"
                variants={socialItem}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="#"
                variants={socialItem}
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div className={style.footerCol} variants={fadeUp}>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Career</li>
            </ul>
          </motion.div>

          <motion.div className={style.footerCol} variants={fadeUp}>
            <h4>Customer Services</h4>
            <ul>
              <li>My Account</li>
              <li>Track Your Order</li>
              <li>Return</li>
              <li>FAQ</li>
            </ul>
          </motion.div>

          <motion.div className={style.footerCol} variants={fadeUp}>
            <h4>Our Information</h4>
            <ul>
              <li>Privacy</li>
              <li>User Terms & Condition</li>
              <li>Return Policy</li>
            </ul>
          </motion.div>

          <motion.div className={style.footerCol} variants={fadeUp}>
            <h4>Contact Info</h4>
            <ul>
              <li>+123-456-789</li>
              <li>smoothtech@gmail.com</li>
              <li>Dhour, Turag, Dhaka-1230</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={style.footerBottom}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <p>
          Copyright © 2025 Smooth Tech | Website Design. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};
