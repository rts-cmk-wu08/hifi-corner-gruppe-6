 import CartPageHeader from "../components/CartPage/CartPageHeader";
 import CartPagePayProcess from "../components/CartPage/CartPagePayProcess";
 import CartPageProducts from "../components/CartPage/CartPageProducts"
 import "../components/CartPage/CartPage.css";


 const CartPage=()=> {
     return (<div className="CartPage"> <CartPagePayProcess /> <CartPageHeader /> <CartPageProducts /> </div>);
 }

 export default CartPage;