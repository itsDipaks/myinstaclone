import React from "react";
import {Routes, Route} from "react-router-dom";
import RequiredAuth from "../Hoc/RequiredAuth";
import Feeds from "../Pages/Feeds";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Signup from "../Pages/Signup";
const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={
          <RequiredAuth>
         <Profile />
         </RequiredAuth>

       } />
        <Route path="/feeds" element={<Feeds />} />
      </Routes>
    </div>
  );
};

export default Allroutes;
