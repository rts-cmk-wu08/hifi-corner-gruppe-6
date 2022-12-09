import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const PaymentPageForm = () => {


const [fullName, setFullName] = useState();
const [city, setCity] = useState();
const [postalCode, setPostalCode] = useState();
const [address, setAddress] = useState();
const [email, setEmail] = useState();
const [phoneNumber, setPhoneNumber] = useState();

    return ( 
        <div className='PaymentPageForm'>
        <h2 className='PaymentPageHeader'>Your info</h2>


<div className='PaymentContainer'>
    <div className='PaymentContainerBox'>
        <form>
      <label>Fullname <span className='red'>*</span> <br/>
        <input
          type="text" 
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </label><br/>

      <label>City <span className='red'>*</span><br/>
        <input className='cityLabel'
          type="text" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>

        <label>Postal code <span className='red'>*</span> 
        <input className='postalCodeLabel'
          type="number" 
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </label> <br/>

      <label>Address <span className='red'>*</span> <br/>
        <input
          type="text" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label> <br/>

      <label>E-mail <span className='red'>*</span> <br/>
        <input
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label> <br/>

      <label>Phone nr. <span className='red'>*</span> <br/>
        <input
          type="number" 
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
        <button>Checkout</button>
        
    </div>
    
</div>
        
        </div>
        
     );
}
 
export default PaymentPageForm;