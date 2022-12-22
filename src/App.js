import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import MoreInfofaq from "./templates/MoreInfo/MoreInfoFaq";
import HomePage from "./templates/HomePage/HomeInfo";
import Footer from "./templates/Footer/Footer";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import "./App.css";
import Login from ".pages/Login.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path='/productdetails' element={<Home />} />
        <Route path='/productcomparison' element={<Home />} />
        <Route path='/cart' element={<Home />} />
        <Route path='/payment' element={<Home />} />
        <Route path='/invoice' element={<Home />} />*/}
        <Route path='/login' element={<Login />} />
         {/*<Route path='/create' element={<Home />} />
        <Route path='/profile' element={<Home />} />
        <Route path='/orders' element={<Home />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/moreinfo" element={<MoreInfofaq />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}
