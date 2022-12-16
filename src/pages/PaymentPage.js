 import CartPagePayProcess from "../components/CartPage/CartPagePayProcess";
 import PaymentPageForm from "../components/PaymentPage/PaymentPageForm";
 import PaymentPageOverview from "../components/PaymentPage/PaymentPageOverview";
  import "../components/PaymentPage/PaymentPage.css";
  import PaymentPageDeliveryMethod from "../components/PaymentPage/PaymentPageDeliveryMethod";

const PaymentPage = () => {
    return ( 

        <div className="PaymentPage">
            <CartPagePayProcess />
            <PaymentPageForm />

            <PaymentPageDeliveryMethod />
            
        </div>
        

     );
}
 
export default PaymentPage;