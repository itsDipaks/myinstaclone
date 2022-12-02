import React from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom";
import { Logout } from "../ReduxStore/Auth/auth.action";
const Navbar = () => {
  const links = [
    {id:1,path: "/", name: "Home"},
    {id:2,path: "/login", name: "Login"},
    {id:3,path: "/signup", name: "Signup"},
    {id:4,path: "/profile", name: "Profile"},
  ];
const dispatch=useDispatch()
  const handeldlogout=()=>{
dispatch(Logout())
  }
  return (


    <div>
        {links.map((li)=><ul key={li.id}><li ><Link to={li.path}>{li.name}</Link></li></ul>)}
<button onClick={handeldlogout}>Logout</button>
    </div>
  );
};

export default Navbar;
