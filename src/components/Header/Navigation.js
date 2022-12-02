import { BsFillCartFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Navigation = () => {
    return (
        <>
        <nav>
        <ul>
            <img src="" alt="" />
            <li><a href="#">SHOP</a></li>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">CONTACT US</a></li>
        </ul>
        <form>
            <input type="text" placeholder="Search product..."/>
            <input type="submit" value="send" />
        </form>
        <ul>
            <li><a href="#"><BsFillCartFill/></a></li>
            <li><a href="#"><BsFillPersonFill/></a></li>
        </ul>
        </nav>
        
        </>
    );
}
 
export default Navigation;