const PaymentPageOverview = () => {
    return ( 
        <div className='PaymentContainerBox'>
        <div className='PaymentOverview'>
            <h3>Payment Overview</h3>
<ul>
          <li>Auralic Aries G2.1 Streamer</li>
          <li>Auralic Aries G2.1 Streamer</li>
        </ul>
        <ul>
          <li>Pris 1</li>
          <li>Pris 2</li>
        </ul>
    

        <div className="AcceptTerms">
             <input type="radio" value="Male" name="gender" /> Subscribe to newsletter
            <label>
            <input type="radio" value="option3" />
            I accept the terms of trade (read in new window)
          </label>
            
        </div>
        </div>
        
    </div>

    
     );
}
 
export default PaymentPageOverview;