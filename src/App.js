import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Product from './components/Product/Product'
import MoreInfofaq from './templates/MoreInfo/MoreInfoFaq'
import HomePage from './pages/HomePage'
import Footer from "./templates/Footer";
import ProductDetails from "./pages/ProductDetails"
import Login from './pages/Login'

export default function App() {
  
  return (
    <div className='app'>
      <Api.Provider value={value}>
        <Routes>
          {/* <Route path='/' element={<Home />} />*/}
          <Route path='/' element={<HomePage/>} /> 
          <Route path='/product' element={<Product />} />
          <Route path='/productdetails:id' element={<ProductDetails />} />
          {/* <Route path='/productcomparison' element={<Home />} />
          <Route path='/cart' element={<Home />} />
          <Route path='/payment' element={<Home />} />
          <Route path='/invoice' element={<Home />} />
          <Route path='/login' element={<Home />} />
          <Route path='/create' element={<Home />} />
          <Route path='/profile' element={<Home />} />
          <Route path='/orders' element={<Home />} />
          <Route path='/contact' element={<Home />} />
          <Route path='/about' element={<Home />} /> */}
          <Route path='/moreinfo' element={<MoreInfofaq />} />
          <Route path='/footer' element={<Footer />} />
        </Routes>
      </Api.Provider>
    </div>
  )
}