 import CartPagePayProcess from "../components/CartPage/CartPagePayProcess";
 import PaymentPageForm from "../components/PaymentPage/PaymentPageForm";
  import "../components/PaymentPage/PaymentPage.css";

const PaymentPage = () => {
    return ( 

        <div className="PaymentPage">
            <CartPagePayProcess />
            <PaymentPageForm />
        </div>
        

     );
}
 
export default PaymentPage;