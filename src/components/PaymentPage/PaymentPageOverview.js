// import PaymentPageForm from "./PaymentPageForm";
// import { useState } from "react";
// import { classAccessorProperty } from "@babel/types";

const PaymentPageOverview = () => {
  
    // const [checked] = useState(false)
    /*const accept = document.querySelector("#accept-terms")
    let errortxt =document.querySelector("#error_message");
    if(!accept.checked){
       
      errortxt = "You must accept terms";
      document.getElementById("error_message").innerHTML = "<p>" + errortxt + "</p>";
    }
    */

  


    return ( 
    
   <div className="PaymentPageOverview">


<div className="PaymentContainer">
 <div className='PaymentContainerBox'>
        <div className='PaymentOverview overview'>
            <h3>Payment Overview</h3>

         
        <table>
       
        <tr>
          <td>Auralic Aries G2.1 Streamer</td>
          <td>Pris 1</td>
          
        </tr>
        <tr>
          <td>Auralic Aries G2.1 Streamer</td>
          <td>Pris 2</td>
          
        </tr>
        <tr>
          
          <td className="TotalPrice">Price: £9.598.00</td>
        </tr>
      </table>

      <span className="border-line"></span>

       <table>
        
        <tr>
          <td>Delivery price</td>
          <td>Pris 1</td>
          
        </tr>
        <tr>
          <td>VAT</td>
          <td>Pris 2</td>
          
        </tr>
        <tr>
          
          <td className="TotalPrice">Price: 9.598.00</td>
        </tr>
      </table>

        </div>
        
<div className="AcceptTerms">

          <div className="AcceptTermsOptions">
          
          <input type="radio" id="subsribe" /><label htmlFor="radio-button">Subscribe to newsletter</label>

          
          <input type="radio" id="accept-terms" name="accept" required/>
          
          <label htmlFor="radio-button">I accept the terms of trade (read in new window)</label>
          {/* skriv error message om accept terms ej är ibockad */}
          <div id="error_message"></div>
       </div>
      

            
        </div>
       
    </div>

 
    </div>
       
    
</div> 
    
    
    

    
     );
}
 
export default PaymentPageOverview;