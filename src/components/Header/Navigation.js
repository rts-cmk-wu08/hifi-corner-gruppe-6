import { HiShoppingCart } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import "../Header/Navigation.css"
import { useQuery } from "react-query";
import axios from "axios";

const Navigation = () => {
    const product = new useQuery(["products"], () =>{
        return axios("http://localhost:4000/category")
                .then( (res) =>{
                    return res.data
                })
    })

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
            <li><a href="#">SHOP</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
          </ul>
          {/* <form className="searchbar">
            <input type="text" placeholder="Search product..."/>
            <input className="" type="submit" value="send" />
          </form> */}
          <div className="container">
            <form className="searchbar" action="">
                <input type="text" placeholder="Search product..." name="q"/>
                <button type="submit"><FaSearch/></button>
            </form>
            
          <ul className="navicons">
            <li><a href="#"><BsFillPersonFill/></a></li>
            <li><a href="#"><HiShoppingCart/></a></li>
          </ul>
          </div>
        </nav>
        
        </>
    );
}
 
export default Navigation;