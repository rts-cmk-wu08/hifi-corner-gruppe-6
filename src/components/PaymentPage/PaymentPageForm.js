import React,{useEffect, useState}from 'react';
import { useNavigate } from "react-router-dom";
import PaymentPageOverview from './PaymentPageOverview';
import PaymentPageCardOptions from "./PaymentPageCardOptions"

function PaymentPageForm(){
  const navigate = useNavigate();
  // setValues allow us to change values in the form
  const [values, setValues] = useState({ 
    fullName: "",
    city: "",
    postalCode: "",
    address: "",
    email: "",
    phoneNumber: ""
  });

  const subsribe = document.getElementById('subscribe');
  const accept = document.getElementById('accept-terms');


  //if

  const [submitted, setSubmitted] = useState(false) // telling if the form is submitted or not
  //if submitted is true, go to next page
  const [valid, setValid] = useState(false)


  //updated values everytime changes is made in the form field
  const handleFullNameInputChange = (event) =>{
    setValues({...values, fullName: event.target.value})
  }

   const handleCityInputChange = (event) =>{
    setValues({...values, city: event.target.value})
  }

   const handlePostalCodeInputChange = (event) =>{
    setValues({...values, postalCode: event.target.value})
  }

   const handleAddressInputChange = (event) =>{
    setValues({...values, address: event.target.value})
  }
   const handleEmailInputChange = (event) =>{
    setValues({...values, email: event.target.value})
  }
   const handlePhoneNumberInputChange = (event) =>{
    setValues({...values, phoneNumber: event.target.value})

    const handleAcceptTermsChange = (event) =>{
      setValues({...values, accept: event.target})
    }
  }
  //  this will stop the refresh
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(values.fullName && values.city && values.postalCode && values.email && values.phoneNumber && accept.checked){
      setValid(true);
    }

    //saving form data in the browser storage
     //storing input name
    localStorage.setItem("invoice", JSON.stringify(values)) //converte values to json
    setSubmitted(true);
  }





  return(

     <div className='PaymentPageForm'>
        <h2 className='PaymentPageHeader'>Your info</h2>


<div className='PaymentContainer'>
    <div className='PaymentContainerBox'>

        <form id="form2" onSubmit={handleSubmit}>
          {/* location to end when clicking in button */}
          {submitted && valid && navigate("/InvoicePage") } 
          
      <label>Fullname <span className='red'>*</span> <br/>
      
        <input className='pageFormInput'
        onChange={handleFullNameInputChange}
        
        value={values.fullName}
        
          />
          {submitted && !values.fullName ?<span className='red'>Please enter Full name</span>: null }
         
    
      </label><br/>

      <div className='alignCityAndPostCode'>
<label>City <span className='red'>*</span>
        <input className='cityInput'
          onChange={handleCityInputChange}
        value={values.city}
        />
        {submitted && !values.city ? <span className='red'>Please enter City</span>: null}
        
      </label>

        <label className='postalCodeLabel'>Postal code <span className='red'>*</span> 
        <input className='postalCodeInput'
          onChange={handlePostalCodeInputChange}
        value={values.postalCode}
        />
       {submitted && !values.postalCode ? <span className='red'>Please enter Postal Code</span>: null} 
      </label> <br/>
      </div>
      

      <label>Address <span className='red'>*</span> <br/>
        <input className='pageFormInput'
          onChange={handleAddressInputChange}
        value={values.address}
        
        />
         {submitted && !values.address ? <span className='red'>Please enter address</span>: null}
      </label> <br/>

      <label>E-mail <span className='red'>*</span> <br/>
        <input className='pageFormInput'
          onChange={handleEmailInputChange}
        value={values.email}
        />
        {submitted && !values.email ? <span className='red'>Please enter E-mail</span>: null}
      </label> <br/>

      <label>Phone nr. <span className='red'>*</span> <br/>
        <input className='pageFormInput'
          onChange={handlePhoneNumberInputChange}
        value={values.phoneNumber}
        />
        {submitted && !values.phoneNumber ? <span className='red'>Please enter Phone nr.</span>: null}
      </label> <br/>
<button className="checkoutButton" type='submit' >Checkout</button>
    </form>

</div>
{/* Payment overview box */}
    
   
    {/* <PaymentPageCardOptions /> */}
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
          
          <input type="radio" id="subsribe" /><label htmlFor="radio-button">Subscribe to newsletter</label> <br />

          
          <input type="radio" id="accept-terms" name="accept" required/>
          
          <label htmlFor="radio-button">I accept the terms of trade (read in new window)</label>
          {/* skriv error message om accept terms ej är ibockad */}
          <div id="error_message"></div>
       </div>
      

            
        </div>
       
    </div>

 
    </div>
       
    
</div> 
    
    
    
</div>
        
        </div>
  );
}

export default PaymentPageForm;