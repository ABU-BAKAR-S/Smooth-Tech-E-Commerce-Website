import {} from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { ProductDetails } from "./component/ProductDetails/ProductDetails";
import { Navbar } from "./layouts/navbar/Navbar";
import { Newsletter } from "./layouts/newsLetter/Newsletter";
import { Footer } from "./layouts/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
