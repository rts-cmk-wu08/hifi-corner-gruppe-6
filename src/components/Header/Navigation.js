import { HiShoppingCart } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import "../Header/Navigation.css"
import { useQuery } from "react-query";
import axios from "axios";
import React,{useRef} from "react"
import {useEffect, useState} from "react"

const Navigation = () => {
    const product = new useQuery(["products"], () =>{
        return axios("http://localhost:4000/category")
                .then( (res) =>{
                    return res.data
                })
    })
    const dropdownShowHide = useRef()
    const showHideFn = (e) => {
      const accordion = dropdownShowHide.current
      accordion.classList.toggle("showHide")
      console.log(accordion.classList.contains("showHide"))
    }
    const cartShowHide2 = useRef()
    const showHideFn2 = (e) =>{
      const accordion2 = cartShowHide2.current
      console.log(e.currentTarget.classList)
      console.log(accordion2.classList)
      accordion2.classList.toggle("showHide")
    }
    const [count, setCount] = useState(0)
    const handleIncrease = () => count < 10 && setCount(count + 1)
    const handleDecrease = () => {if (count > 0) setCount(count -1)}

    if (product.isError) {
        console.log("error")
        
    }
    if (product.isLoading) {
        console.log("loading")
        
    }
    return (
        <>
        <nav className="navbar">
          
            <ul className="navi">
              <img src="images/logo.png" alt="logo" />
              
              <div className="shop">
                <div onClick={showHideFn}>
                  <a className="menu" href="#">SHOP</a>
                  <div className="showHide products" ref={dropdownShowHide}>
                    <ul className="item">
                      <p>Browse Categories</p>
                      <li><a href="">CD Players</a></li>
                      <li><a href="">DVD Players</a></li>
                      <li><a href="">Preamps</a></li>
                      <li><a href="">Speakers</a></li>
                      <li><a href="">Turntables</a></li>
                      <li><a href="">Integrated Amplifiers</a></li>
                      <li><a href="">Power Amplifiers</a></li>
                      <li><a href="">Tube Amplifiers</a></li>
                    </ul>
                  </div>
                </div>
                
              
                <div className="menu"><li><a href="#">ABOUT US</a></li></div>
                <div className="menu"><li><a href="#">CONTACT US</a></li></div>
              </div>
            </ul>
          
      
            <div className="container">
              <div>
              <form className="searchbar" action="">
                <input className="sch" type="text" placeholder="Search product..."/>
                <button className="btn" type="submit"><FaSearch/></button>
              </form>
              </div>
            
              <div className="navicons">
                <a className="person" href="#"><BsFillPersonFill/></a>
                  <div>
                    <div onClick={showHideFn2}><a className="addtocart" href="#">
                      <HiShoppingCart/></a>
                    </div>
                    <div ref={cartShowHide2} className="showHide cart">
                      <h3>Cart (amount of items)</h3>
                      <div>
                      <p>{count}</p>
                      <button onClick={handleIncrease}>+</button>
                      <button onClick={handleDecrease}>-</button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
       
        </nav>

        
        </>
    );
}
 
export default Navigation;