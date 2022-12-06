 import CartPageHeader from "../components/CartPage/CartPageHeader";
 import CartPagePayProcess from "../components/CartPage/CartPagePayProcess";
 import "../components/CartPage/CartPage.css";
  

const CartPage = () => {
    return ( 
        <div className="CartPage">
            <CartPageHeader />
            <CartPagePayProcess />

        </div>
     );
}
 
export default CartPage;