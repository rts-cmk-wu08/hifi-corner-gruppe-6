
import React, { useState, createContext} from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product/Product";
import MoreInfofaq from "./templates/MoreInfo/MoreInfoFaq";
import HomePage from "./templates/HomePage/HomeInfo";
import Footer from "./templates/Footer/Footer";
// import Login from './pages/Login'
import ContactPage from './pages/ContactPage'
import AboutUs from './pages/AboutUs'
import CartPage from './pages/CartPage'
import PaymentPage from './pages/PaymentPage'
import InvoicePage from './pages/InvoicePage'
import "./App.css"

import Infofooter from './components/HomePage/InfoFooter'
import Homeinfo from './templates/HomePage/HomeInfo'

import ProductDetails from "./pages/ProductDetails";
import CartProvider from "./Contexts/CartContext";
import CompareProvider from "./Contexts/CompareContext"
import Header from "./pages/HeaderPage";


export default function App() {
  return (

    <CompareProvider>
      <CartProvider>
        <div className="App">
          <Routes >
            <Route path='/header' element={<Header/>}/>
            <Route path='/' element={<HomePage/>} /> 
            <Route path='/product' element={<Product />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
            {/*<Route path='/productcomparison' element={<Home />} />*/}
            <Route path='/cart' element={<CartPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/invoice' element={<InvoicePage />} />
            {/*<Route path='/login' element={<Home />} />
            <Route path='/create' element={<Home />} />
            <Route path='/profile' element={<Home />} />
            <Route path='/orders' element={<Home />} /> 
            <Route path='/contact' element={<ContagePage />} />*/}
            <Route path='/about' element={<AboutUs />} />
            <Route path='/moreinfo' element={<MoreInfofaq />} />
            {/* <Route path='/login' element={<Login />} /> */}
            <Route path='/footer' element={<Footer />} />
          </Routes >
        </div>
      </CartProvider>
    </CompareProvider>

  );
}
