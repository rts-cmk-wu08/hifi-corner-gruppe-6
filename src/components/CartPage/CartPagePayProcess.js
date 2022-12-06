
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faCreditCard} from  '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'
import "./CartPage.css"



const CartPagePayProcess = () => {
    return ( 
        <div className="CartPagePayProcess">
            
            <div className="CartPagePayProcessBox">
<FontAwesomeIcon icon={faShoppingCart}/>
            </div>

            <div className="CartPagePayProcessBox">
<FontAwesomeIcon icon={faCreditCard}/>
            </div>
            <div className="CartPagePayProcessBox">
<FontAwesomeIcon icon={faReceipt}/>
            </div>
            
            
            
            
        </div>
        
     );
}
 
export default CartPagePayProcess;