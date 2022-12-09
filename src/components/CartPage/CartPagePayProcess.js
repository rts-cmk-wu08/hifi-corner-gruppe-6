
 
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faCreditCard} from  '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
import "./CartPage.css"
import { Link } from 'react-router-dom';


const CartPagePayProcess = () => {

 
    return ( 
        <div className="CartPagePayProcess">
            
            <div className="CartPagePayProcessBox">
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart}/>
              </Link>

            </div>

            <div className="CartPagePayProcessBox">
               <Link to="/payment">
                <FontAwesomeIcon icon={faCreditCard}/>
               </Link>

            </div>

            <div className="CartPagePayProcessBox">
               <Link to="/invoice">
                <FontAwesomeIcon icon={faReceipt}/>
               </Link>

            </div>
            
            
            
            
        </div>
        
     );
}
 
export default CartPagePayProcess;