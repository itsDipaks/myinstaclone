import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { LoginApi } from "../ReduxStore/Auth/auth.action";
const Login = () => {
const dispatch=useDispatch()
const [formdata,setformdata]=useState({})
const handeldsubmit=(e)=>{
e.preventDefault()

console.log(formdata)
dispatch(LoginApi(formdata))

}


const handeldinputs=(e)=>{
  const {name,value}=e.target
  // console.log(name,value)

  setformdata({
    ...formdata,[name]:value
  })
}

  return (
    <div>
      <form action="" onSubmit={handeldsubmit}>
        <input type="text" placeholder="Enter Email" name="email" onChange={handeldinputs} />
        <input type="text" placeholder="Enter Password" name="password" onChange={handeldinputs} />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
