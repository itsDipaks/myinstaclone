import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { LoginApi } from "../ReduxStore/Auth/auth.action";
import "../CompliedSassCss/css/Login.css"
import { Link, useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
const Login = () => {
const dispatch=useDispatch()
const [formdata,setformdata]=useState({})

const {loading,error}=useSelector((store)=>store.Auth)
const handeldsubmit=(e)=>{
e.preventDefault()
dispatch(LoginApi(formdata))
}

const navigate=useNavigate()
// const [open, setOpen] = React.useState(false);

// if(loading){
//   setOpen(true)
// }else{
//   setOpen(false)
// }
// const handleClose = () => {
//   setOpen(false);
// };
// const handleToggle = () => {
//   setOpen(!open);
// };


const handeldinputs=(e)=>{
  const {name,value}=e.target
  // console.log(name,value)

  setformdata({
    ...formdata,[name]:value
  })
}

  return (
    <>
{/* { */}

{/* <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={loading}
  // onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>} */}
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
