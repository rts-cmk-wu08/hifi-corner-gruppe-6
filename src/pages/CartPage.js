 import CartPageHeader from "../components/CartPage/CartPageHeader";
 import CartPagePayProcess from "../components/CartPage/CartPagePayProcess";
 import "../components/CartPage/CartPage.css";
  

const CartPage = () => {
    return ( 
        <div className="CartPage">
            
            <CartPagePayProcess />
            <CartPageHeader />

        </div>
     );
}
 
export default CartPage;