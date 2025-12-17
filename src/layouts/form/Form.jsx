import React, { useContext, useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import smooth from "../../assets/smooth.png";

import style from "./form.module.css";
import { ProductsContext } from "../../context";
import { toast } from "react-toastify";

const notify = (text) => {
  toast.success(text);
};

export const Form = () => {
  const { loggedIn } = useContext(ProductsContext);
  const [formstate, setFormState] = useState("Log In");

  const loginSchema = Yup.object({
    email: Yup.string().email("invalid email").required(),
    password: Yup.string().required(),
  });

  const signupSchema = Yup.object({
    userName: Yup.string()
      .min(4, "minimum 4 characters")
      .max(20, "maximum 20 characters")
      .required(),
    email: Yup.string().email("invalid email").required(),
    password: Yup.string().required(),
    phone: Yup.string().length(11, "enter 11 digit number").required(),
  });

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      phone: "",
    },
    validationSchema: formstate === "Log In" ? loginSchema : signupSchema,
    onSubmit: () => {
      notify("Welcome To Smooth Tech");
      loggedIn(true);
    },
  });
  return (
    <>
      <div className={style.container}>
        <div className={style.formBox}>
          <div className={style.brand}>
            <img src={smooth} alt="logo" className={style.logoIcon} />{" "}
            <h3>Smooth Tech </h3>
          </div>
          <h2>{formstate} </h2>
          {formstate === "Log In" ? (
            <form onSubmit={formik.handleSubmit} className={style.form}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <span> {formik.errors.email} </span>
              ) : null}
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <span> {formik.errors.password} </span>
              ) : null}
              <br />

              <button type="submit">Submit</button>
              <p>
                Don't have account?{" "}
                <span onClick={() => setFormState("Sign Up")}>Sign Up!</span>{" "}
              </p>
            </form>
          ) : (
            <form onSubmit={formik.handleSubmit} className={style.form}>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.userName && formik.errors.userName ? (
                <span> {formik.errors.userName} </span>
              ) : null}
              <br />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <span> {formik.errors.email} </span>
              ) : null}
              <br />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.password && formik.errors.password ? (
                <span> {formik.errors.password} </span>
              ) : null}
              <br />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <span> {formik.errors.phone} </span>
              ) : null}
              <br />
              <button type="submit">Submit</button>
              <p>
                Already have an account?{" "}
                <span onClick={() => setFormState("Log In")}>Log in!</span>{" "}
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
