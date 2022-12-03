import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { LoginApi } from "../ReduxStore/Auth/auth.action";
import "../CompliedSassCss/css/Login.css"
import { Link } from "react-router-dom";
const Login = () => {
const dispatch=useDispatch()
const [formdata,setformdata]=useState({})
const handeldsubmit=(e)=>{
e.preventDefault()

// console.log(formdata)
dispatch(LoginApi(formdata))

}

const data=useSelector((store)=>store.Auth.token)
console.log(data.token)
const handeldinputs=(e)=>{
  const {name,value}=e.target
  // console.log(name,value)

  setformdata({
    ...formdata,[name]:value
  })
}

  return (
    <>

      <div className="loginouterdiv">

<div className="logindiv">
  <img src="https://i.imgur.com/zqpwkLQ.png" alt="" />
<form action="" onSubmit={handeldsubmit}>
        <input type="text" placeholder="Enter Email" name="email" onChange={handeldinputs} />
        <input type="text" placeholder="Enter Password" name="password" onChange={handeldinputs} />
        <input type="submit" value="Login" />
      </form>
      <p>New here ? <span><Link to={"/signup"}>Signup</Link></span></p>
</div>
    
      </div>
   
    </>
  );
};

export default Login;
