import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {SignupApi} from "../ReduxStore/Auth/auth.action";
import sideimage from "../Images/signup.png";
import "../CompliedSassCss/css/Signup.css";
import {Link} from "react-router-dom";
const Signup = () => {
  const [SignupCred, setSignupCred] = useState({});

  const dispatch = useDispatch();

  const handeldchange = (e) => {
    const {name, value} = e.target;
    setSignupCred({
      ...SignupCred,
      [name]: value,
    });
  };

  const handeldsubmit = (e) => {
    e.preventDefault();
    dispatch(SignupApi(SignupCred));

    console.log(SignupCred);
  };

  return (
    <>
      <div className="signupdiv">
        <div className="signupimg">
          <img src={sideimage} alt="" />
        </div>

        <div className="formdiv">
          <img src="https://i.imgur.com/zqpwkLQ.png" alt="" />
          <form onSubmit={handeldsubmit}>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handeldchange}
            />
            <br />
            <input
              type="text"
              placeholder="Enter UserName"
              name="username"
              onChange={handeldchange}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handeldchange}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              onChange={handeldchange}
            />
            <br />
            <input
              type="text"
              placeholder="Enter Mobile"
              name="mobile"
              onChange={handeldchange}
            />

            <div className="selsectdiv">
              <select name="country" onChange={handeldchange}>
                <option value="india">India</option>
                <option value="usa">USA</option>
                <option value="china">CHINA</option>
                <option value="russia">RUSSIA</option>
              </select>

              <select name="gender" onChange={handeldchange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="Unspecifide">Unspecifide</option>
              </select>
            </div>
            <input type="file" />

            <input type="submit" value="Signup" />
          </form>
          <p>
            Already Have an Account ?{" "}
            <span>
              <Link to={"/login"}>Login</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
