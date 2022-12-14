const PaymentPageOverview = () => {


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
          
          <td class="TotalPrice">Price: total</td>
        </tr>
      </table>

      <hr />

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
          
          <td class="TotalPrice">Price: total</td>
        </tr>
      </table>

        </div>
        

       
    </div>

 <div className="AcceptTerms">
       

    {/* <label>Subscribe to newsletter
             <input type="radio" value="Male" name="gender" /> 
            
            <input type="radio" value="option3" />
            I accept the terms of trade (read in new window)
          </label> */}

          <div>
          <input type="radio" id="radio-button" />
          <label htmlFor="radio-button">Option text</label>
       </div>
      

            
        </div>
    </div>
       
    
</div> 
    
    
    

    
     );
}
 
export default PaymentPageOverview;