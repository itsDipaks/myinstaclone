import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logout } from "../ReduxStore/Auth/auth.action";
import "../CompliedSassCss/css/navbar.css";
import {
  AiOutlineInstagram,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai";
import { IconButton, Tooltip } from "@mui/material";
import { baseUrl } from "../utils/Baseurl";
import { useEffect } from "react";
import { Getprofile } from "../ReduxStore/Profile/profile.action";

const Navbar = () => {
  const links = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/login", name: "Login" },
    { id: 3, path: "/signup", name: "Signup" },
    { id: 4, path: "/profile", name: "Profile" },
    { id: 4, path: "/feeds", name: "feeds" },
  ];
  const dispatch = useDispatch();
  const handeldlogout = () => {
    dispatch(Logout());
  };
  const navigate=useNavigate()
  useEffect(()=>{
    dispatch(Getprofile())
  },[])
  const profileData = useSelector((store) => store.Profile.data);
console.log(profileData)

const Backtohome=()=>{
navigate("/")
}
  return (
    <>
      <nav className="nav_wrapper">
        <a href="">
          <AiOutlineInstagram className="icon" />
        </a>

        <div className="serchbox">
          <input type="text" placeholder="Search" />
          <AiOutlineSearch className="icon" />
        </div>
        <div className="lastdiv">
          <Link to="/">
            {" "}
            <a href="">
              <AiOutlineHome className="icon" onClick={Backtohome}/>
            </a>
          </Link>
          <Tooltip title="Profile" className='profilebtn' >
  <IconButton>
          <Link to="/profile">
            {" "}
            <img
              src="https://avatars.githubusercontent.com/u/96649241?s=64&v=4"
              alt="profile"
            />
          </Link>
          </IconButton>
          </Tooltip>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;
