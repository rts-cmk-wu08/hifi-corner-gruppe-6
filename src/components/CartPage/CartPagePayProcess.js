
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { FaShoppingCart } from '@fortawesome/free-solid-svg-icons'

 library.add(fab, FaShoppingCart)

const CartPagePayProcess = () => {
    return ( 
        <div className="CartPagePayProcess">
            <FontAwesomeIcon icon={FaShoppingCart}/>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
             <FontAwesomeIcon icon={["fal", "coffee"]} />
        </div>
        
     );
}
 
export default CartPagePayProcess;