 import CartPagePayProcess from "../components/CartPage/CartPagePayProcess";
 import PaymentPageForm from "../components/PaymentPage/PaymentPageForm";
 import PaymentPageOverview from "../components/PaymentPage/PaymentPageOverview";
  import "../components/PaymentPage/PaymentPage.css";

const PaymentPage = () => {
    return ( 

        <div className="PaymentPage">
            <CartPagePayProcess />
            <PaymentPageForm />
            <PaymentPageOverview />
        </div>
        

     );
}
 
export default PaymentPage;