import React,{useState}from 'react';
import { useLocation } from "react-router-dom";

function PaymentPageForm(){
  // setValues allow us to change values in the form
  const [values, setValues] = useState({ 
    fullName: "",
    city: "",
    postalCode: "",
    address: "",
    email: "",
    phoneNumber: ""
  });

  const [submitted, setSubmitted] = useState(false) // telling if the form is submitted or not
  //if submitted is true, go to next page


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
  }
  //  this will stop the refresh
  const handleSubmit = (event) =>{
    event.preventDefault();
    setSubmitted(true);
  }

  // // location
  // const location = useLocation();

  return(

     <div className='PaymentPageForm'>
        <h2 className='PaymentPageHeader'>Your info</h2>


<div className='PaymentContainer'>
    <div className='PaymentContainerBox'>

        <form onSubmit={handleSubmit}>
          {submitted ? /*add code to get on the next page (invoice page)*/ window.location.href="./InvoicePage.js": null} 
      <label>Fullname <span className='red'>*</span> <br/>
      
        <input
        onChange={handleFullNameInputChange}
        
        value={values.fullName}
        
          />
          <span>Please enter Full name</span>
         
    
      </label><br/>

      <label>City <span className='red'>*</span><br/>
        <input className='cityLabel'
          onChange={handleCityInputChange}
        value={values.city}
        />
        <span>Please enter City</span>
        
      </label>

        <label>Postal code <span className='red'>*</span> 
        <input className='postalCodeLabel'
          onChange={handlePostalCodeInputChange}
        value={values.postalCode}
        />
        <span>Please enter Postal Code</span>
      </label> <br/>

      <label>Address <span className='red'>*</span> <br/>
        <input
          onChange={handleAddressInputChange}
        value={values.address}
        
        />
      </label> <br/>

      <label>E-mail <span className='red'>*</span> <br/>
        <input
          onChange={handleEmailInputChange}
        value={values.email}
        />
        <span>Please enter E-mail</span>
      </label> <br/>

      <label>Phone nr. <span className='red'>*</span> <br/>
        <input
          onChange={handlePhoneNumberInputChange}
        value={values.phoneNumber}
        />
        <span>Please enter Phone nr.</span>
      </label> <br/>
<button type='submit'>Checkout</button>
    </form>

    </div>
    <div className='PaymentContainerBox'>
        <div className='PaymentOverview'>
            <h3>Payment Overview</h3>

        </div>
        <p>Text</p>
        <p>Text</p>
        {/* <button type='submit'>Checkout</button> */}
        
    </div>
    
</div>
        
        </div>
  );
}

export default PaymentPageForm;