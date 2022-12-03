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
          <Link to="/profile">
            {" "}
            <img
              src="https://avatars.githubusercontent.com/u/96649241?v=4"
              alt=""
            />
          </Link>
        </div>
      </nav>
      {/* <div style={{width:"70%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginBottom:"1rem",fontSize:"2rem",border:"1rem solid red"}}>
        {links.map((li)=><ul  key={li.id}><li style={{listStyle:"none"}}><Link to={li.path}>{li.name}</Link></li></ul>)}
<button onClick={handeldlogout}>Logout</button>
    </div>
<h1 className="tag">Dipak Pawar</h1> */}
    </>
  );
};

export default Navbar;
