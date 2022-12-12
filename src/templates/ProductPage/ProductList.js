import Productitems from "../../components/ProductPage/Productitems.js";
import Sortby from "../../components/ProductPage/Sortby.js";
import "../../templates/ProductPage/ProductList.css"

const Productlist = () => {
    return ( 
        <div>
            <h2 className="titlepl">PRODUCTS</h2>
            <div className="place">
            <Sortby/>
            <Productitems/>
            </div>
            {/* <Productitem/> */}
        </div>
     );
}
 
export default Productlist;