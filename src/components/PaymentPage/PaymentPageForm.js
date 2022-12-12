import React,{useState}from 'react';

function PaymentPageForm(){
  const [values, setValues] = useState({
    fullName: "",
    city: "",
    postalCode: "",
    address: "",
    email: "",
    phoneNumber: ""
  })

  return(

     <div className='PaymentPageForm'>
        <h2 className='PaymentPageHeader'>Your info</h2>


<div className='PaymentContainer'>
    <div className='PaymentContainerBox'>

        <form>
      <label>Fullname <span className='red'>*</span> <br/>
        <input
        value={values.fullName}
          />
         
    
      </label><br/>

      <label>City <span className='red'>*</span><br/>
        <input className='cityLabel'
        value={values.city}
        />
      </label>

        <label>Postal code <span className='red'>*</span> 
        <input className='postalCodeLabel'
        value={values.postalCode}
        
        />
      </label> <br/>

      <label>Address <span className='red'>*</span> <br/>
        <input
        value={values.address}
        
        />
      </label> <br/>

      <label>E-mail <span className='red'>*</span> <br/>
        <input
        
        />
      </label> <br/>

      <label>Phone nr. <span className='red'>*</span> <br/>
        <input
        />
      </label> <br/>

    </form>

    </div>
    <div className='PaymentContainerBox'>
        <div className='PaymentOverview'>
            <h3>Payment Overview</h3>

        </div>
        <p>Text</p>
        <p>Text</p>
        <button type='submit'>Checkout</button>
        
    </div>
    
</div>
        
        </div>
  );
}

export default PaymentPageForm;