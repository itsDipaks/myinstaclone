import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Logout } from "../ReduxStore/Auth/auth.action";
import "../CompliedSassCss/css/navbar.css";
import {
  AiOutlineInstagram,
  AiOutlineSearch,
  AiOutlineHome,
} from "react-icons/ai";
import { IconButton, Tooltip } from "@mui/material";

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
              <AiOutlineHome className="icon" />
            </a>
          </Link>
          <Tooltip title="Profile" className='profilebtn' >
  <IconButton>
          <Link to="/profile">
            {" "}
            <img
              src="https://avatars.githubusercontent.com/u/96649241?v=4"
              alt=""
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
