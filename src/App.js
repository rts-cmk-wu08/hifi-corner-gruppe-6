import React from 'react'
import { Routes, Route } from "react-router-dom"
import Product from './components/Product/Product'

export default function App() {





  
  return (
    <div className='app'>
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/homepage' element={<Home />} /> */}
        <Route path='/product' element={<Product />} />
        {/* <Route path='/productdetails' element={<Home />} />
        <Route path='/productcomparison' element={<Home />} />
        <Route path='/cart' element={<Home />} />
        <Route path='/payment' element={<Home />} />
        <Route path='/invoice' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/create' element={<Home />} />
        <Route path='/profile' element={<Home />} />
        <Route path='/orders' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/moreinfo' element={<Home />} /> */}
      </Routes>
    </div>
  )
}