const PaymentPageDeliveryMethod = () => {
    return ( <div className="deliveryMethodContainer">
        <h2>Select your prefered delivery method</h2>
        <div className="deliveryOptions">
            <div className="method-options">
                <button className="btn-method">Home delivery</button>
                <button className="btn-method">Click-and-collect</button>
                <button className="btn-method">Postoffice</button>
</div>
                 <div className="shipped">
            <h3>Your order will be shipped to</h3>
                <p>61 Church St</p>
                <p>Berwick-upon-Tweed</p>
                <p>Northumberland</p>
                <p>TD15 1EE</p>
                <p>United Kingdom</p>
        </div>



                
            
        </div>
    </div> );
}
 
export default PaymentPageDeliveryMethod;