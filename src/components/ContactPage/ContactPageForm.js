const ContactPageForm = () => {
  return (
    <form action="" method="get">
      {" "}
      <label htmlFor="">
        Full name <span className="red">*</span>{" "}
      </label>{" "}
      <br /> <input type="text" /> <br />{" "}
      <label htmlFor="">
        E-mail <span className="red">*</span>
      </label>{" "}
      <br /> <input type="text" /> <br />{" "}
      <label htmlFor="">
        Subject <span className="red">*</span>
      </label>{" "}
      <br /> <input type="text" /> <br />{" "}
      <label htmlFor="">
        Message <span className="red">*</span>
      </label>{" "}
      <br /> <textarea name="" id="" cols="100" rows="7"></textarea> <br />
      <button>Submit</button>{" "}
    </form>
  );
};

export default ContactPageForm;
