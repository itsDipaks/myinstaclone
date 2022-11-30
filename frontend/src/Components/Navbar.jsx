import React from "react";
import {Link} from "react-router-dom";
const Navbar = () => {
  const links = [
    {id:1,path: "/", name: "Home"},
    {id:2,path: "/login", name: "Login"},
    {id:3,path: "/signup", name: "Signup"},
    {id:4,path: "/profile", name: "Profile"},
  ];
  return (
    <div>
        {links.map((li)=><ul key={li.id}><li ><Link to={li.path}>{li.name}</Link></li></ul>)}

    </div>
  );
};

export default Navbar;
