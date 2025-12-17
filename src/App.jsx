import { useContext } from "react";

import { ToastContainer } from "react-toastify";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { ProductDetails } from "./component/ProductDetails/ProductDetails";
import { Navbar } from "./layouts/navbar/Navbar";
import { Newsletter } from "./layouts/newsLetter/Newsletter";
import { Footer } from "./layouts/footer/Footer";
import { Profile } from "./pages/Profile";
import { Protected } from "./routing/Protected";
import { ProductsContext } from "./context";

function App() {
  const { isLoggedIn } = useContext(ProductsContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/cart"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Cart />
            </Protected>
          }
        />
        <Route
          path="/wishlist"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              {" "}
              <Wishlist />
            </Protected>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Newsletter />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
