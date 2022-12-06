
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {faCreditCard} from  '@fortawesome/free-solid-svg-icons'
import { faReceipt } from '@fortawesome/free-solid-svg-icons'



const CartPagePayProcess = () => {
    return ( 
        <div className="CartPagePayProcess">
            <FontAwesomeIcon icon={faShoppingCart}/>
            <FontAwesomeIcon icon={faCreditCard}/>
            <FontAwesomeIcon icon={faReceipt}/>
            
        </div>
        
     );
}
 
export default CartPagePayProcess;