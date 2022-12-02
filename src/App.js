import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import ContactPage from "./pages/ContactPage";
import "../src/App.css";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/homepage' element={<Home />} /> */}
        <Route path="/product" element={<Product />} />
        {/* <Route path='/productdetails' element={<Home />} />
        <Route path='/productcomparison' element={<Home />} />
        <Route path='/cart' element={<Home />} />
        <Route path='/payment' element={<Home />} />
        <Route path='/invoice' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/create' element={<Home />} />
        <Route path='/profile' element={<Home />} />
        <Route path='/orders' element={<Home />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        {/* <Route path='/moreinfo' element={<Home />} /> */}
      </Routes>
    </div>
  );
}
