import react, { useState } from "react"

const ContactPageForm = () => {

  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  // Hold form data
  const [formDetails, setFormDetails] = useState();
  // If false: Shows the form
  // If true: shows the form submitted
  const [sent, setSent] = useState(false);


  const submitHandler = (event) => {
    event.preventDefault()
    
    // Temporary Object for form details
    const tempFormDetails = {
      formName: fullName,
      formEmail: email,
      formSubject: subject,
      formMessage: message
    }

    // Update formDetails
    setFormDetails(tempFormDetails)
    // Show the submitted data
    setSent(true)
  }

  // If length < 2: Allow
  const fullNameHandler = (e) => {
    if (e.target.value.length < 2) {
      e.target.style.borderBottom = "2px solid red"
    }
    else {
      e.target.style.borderBottom = "2px solid green"
    }
    setFullName(e.target.value)
  }

  // If length < 4 & text includes "@" and "."
  const emailHandler = (e) => {
    if (e.target.value.length < 4) {
      e.target.style.borderBottom = "2px solid red"
    }
    else {
      if (e.target.value.includes("@") && e.target.value.includes(".")) {
        e.target.style.borderBottom = "2px solid green"
      }
      else {
        e.target.style.borderBottom = "2px solid red"
      }
    }
    setEmail(e.target.value)
  }
  const subjectHandler = (e) => {
    if (e.target.value.length < 4) {
      e.target.style.borderBottom = "2px solid red"
    }
    else {
      e.target.style.borderBottom = "2px solid green"
    }
    setSubject(e.target.value)
  }
  const messageHandler = (e) => {
    if (e.target.value.length < 4) {
      e.target.style.borderBottom = "2px solid red"
    }
    else {
      e.target.style.borderBottom = "2px solid green"
    }
    setMessage(e.target.value)
  }


  if (!sent) {
      return (
        <form id="myForm" onSubmit={submitHandler} className="contactForm" action="" method="post">
          <div className="contactForm__input">
            <div className="input__fullNameBox">
              <label htmlFor="">Full Name: </label>
              <input onChange={fullNameHandler} className="fullNameBox__fullName" type="text" name="" id="" />
            </div>
            <div className="input__emailBox">
              <label htmlFor="">Email: </label>
              <input onChange={emailHandler} className="emailBox__email" type="text" name="" id="" />
            </div>
            <div className="input__subjectBox">
              <label htmlFor="">Subject: </label>
              <input onChange={subjectHandler} className="subjectBox__subject" type="text" name="" id="" />
            </div>
            <div className="input__textBox">
              <label htmlFor="">Message: </label>
              <input onChange={messageHandler} className="message" type="text" name="" id="" />
            </div>
          </div>

          <div className="contactForm__button">
            <button form="myForm" type="submit">Submit</button>
          </div>
        </form>
      )
  }
  if (sent) {
    return ( 
      <div className="finalMessage">
        <div className="finalName bg">
          <h2>Full Name: </h2>
          <p>{formDetails.formName}</p>
        </div>
        <div className="finalEmail bg">
          <h2>Email: </h2>
          <p>{formDetails.formEmail}</p>
        </div>
        <div className="finalSubject bg">
          <h2>Subject: </h2>
          <p>{formDetails.formSubject}</p>
        </div>
        <div className="finalText bg">
          <h2>Message: </h2>
          <p>{formDetails.formMessage}</p>
        </div>
      </div> 
    )
  }
};

export default ContactPageForm;
