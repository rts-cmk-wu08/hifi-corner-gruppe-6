import React,{useState}from 'react';
import { useNavigate } from "react-router-dom";
import PaymentPageOverview from './PaymentPageOverview';

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
    setSubmitted(true);
  }

  //radio button




  return(

     <div className='PaymentPageForm'>
        <h2 className='PaymentPageHeader'>Your info</h2>


<div className='PaymentContainer'>
    <div className='PaymentContainerBox'>

        <form id="form2" onSubmit={handleSubmit}>
          {/* location to end when clicking in button */}
          {submitted && valid && navigate("/InvoicePage") } 
          
      <label>Fullname <span className='red'>*</span> <br/>
      
        <input
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
        <input
          onChange={handleAddressInputChange}
        value={values.address}
        
        />
         {submitted && !values.address ? <span className='red'>Please enter address</span>: null}
      </label> <br/>

      <label>E-mail <span className='red'>*</span> <br/>
        <input
          onChange={handleEmailInputChange}
        value={values.email}
        />
        {submitted && !values.email ? <span className='red'>Please enter E-mail</span>: null}
      </label> <br/>

      <label>Phone nr. <span className='red'>*</span> <br/>
        <input
          onChange={handlePhoneNumberInputChange}
        value={values.phoneNumber}
        />
        {submitted && !values.phoneNumber ? <span className='red'>Please enter Phone nr.</span>: null}
      </label> <br/>
<button className="checkoutButton" type='submit' >Checkout</button>
    </form>

</div>
{/* Payment overview box */}
    
    <PaymentPageOverview />
    
</div>
        
        </div>
  );
}

export default PaymentPageForm;