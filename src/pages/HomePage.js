import React from "react"
import Homeinfo from "../templates/HomePage/HomeInfo";
import Hero from "../components/HomePage/Hero";
import PopularProducts from "../components/HomePage/PopularProducts";


const Homepage = () => {

    return (
        <>
            <Hero />
            <PopularProducts />
            <Homeinfo/>
        </>
     );
}
 
export default Homepage;