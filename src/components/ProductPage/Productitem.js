import "../../components/ProductPage/Productitem.css";
import "../../App.css"
import { TbChartCandle } from "react-icons/tb";
import { BsFillCircleFill } from "react-icons/bs";
import {Link} from "react-router-dom";

const Productitem = ({data}) => {
    return ( 
        <Link to={`/productdetails:${data.id}`} className="block">
            <p className="blockcompare">Compare<a href="#"><TbChartCandle/></a></p>
            <div className="blockinfo">
            <img className="griditem" src={data.image.url} alt="" />
            <p className="griditem name">{data.name}</p>
            <p className="bold griditem">£{data.price}</p>
            </div>
            <div className="btn">
            <button>Add to cart</button>
            <p>In stock <span><BsFillCircleFill/></span></p>
            </div>
        </Link>
     );
}
 
export default Productitem;