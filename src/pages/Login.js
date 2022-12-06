import { useForm } from "react-hook-form";
import { useState, useEfect } from "react";
import Footer from "../templates/Footer";
const Login = () => {
  const userList = [
    {
      firstName: "Hugo",
      lastName: "Weaving",
      email: "hugo@weaving.com",
      passwordHashed:
        "$2a$05$.0Lu4sap9aK5Ei23H5o4eepEs2c6pT0srYedQEf2ZrfuZEU8/4bo2",
      id: "1",
    },
    {
      firstName: "Cate",
      lastName: "Blanchett",
      email: "cate@blanchett.com",
      passwordHashed:
        "$2a$05$.0Lu4sap9aK5Ei23H5o4eel3tS7c38BBRvnqC6m7AFunw5qGuLvu2",
      id: "2",
    },
    {
      firstName: "Elijah",
      lastName: "Wood",
      email: "elijah@wood.com",
      passwordHashed:
        "$2a$05$.0Lu4sap9aK5Ei23H5o4eeTGS8GwLRaIPo16EbI9S5C5Vt7Btznye",
      id: "3",
    },
    {
      firstName: "Ian",
      lastName: "McKellen",
      email: "ianh@mckellen.com",
      passwordHashed:
        "$2a$05$.0Lu4sap9aK5Ei23H5o4eeFzIwD9A9dYmrY3whKvQ7JnlfYlWktq.",
      id: "4",
    },
    {
      firstName: "Sean",
      lastName: "Bean",
      email: "sean@bean.com",
      passwordHashed:
        "$2a$05$.0Lu4sap9aK5Ei23H5o4eeEN6ZmSUTKOWAgbVwGAgLnx2J9Rn2Q4C",
      id: "5",
    },
    {
      firstName: "Orlando",
      lastName: "Bloom",
      email: "orlando@bloom.com",
      passwordHashed:
        "$2a$05$.0Lu4sap9aK5Ei23H5o4eejnRNmVKKF3RBQfGCRxx.qNiRu/NZHu.",
      id: "6",
    },
  ];
  const { register, handleSubmit, reset } = useForm();
  const [messageLine, updateMessage] = useState("");
  const bcrypt = require("bcryptjs");
  let passwordOk = false;
  const onSubmit = async (data) => {
    const user = userList.find((e) => e.email === data.email);
    if (user && data.password) {
      passwordOk = await bcrypt.compare(data.password, user.passwordHashed);
      console.log(user, passwordOk);
    }
    if (passwordOk) {
      localStorage.setItem(
        "HIFIuserName",
        user.firstName + " " + user.lastName
      );
      localStorage.setItem("HIFIuserId", user.id);
      updateMessage("Login succesfull");
      reset();
    } else if (!!!user) updateMessage("Please enter your correct email-adress");
    else if (!user.password)
      updateMessage("Please enter your correct password");
    else updateMessage("");
    console.log(messageLine);
  };

  return (
    <>
      <section className="loginPage">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
          <h3>REGISTERED CUSTOMERS</h3>
          <p>If you have an account, sign in with your email address.</p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register("password")} />
          <label htmlFor="saveUser">Remember me</label>
          <input type="radio" id="saveUser" {...register("saveuser")} />
          <button type="submit">Sign in</button>
          <p className="messageLine">{messageLine}</p>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Login;
