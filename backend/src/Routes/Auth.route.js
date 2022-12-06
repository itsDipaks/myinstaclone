const {Router} = require("express");
const {UserModel} = require("../models/User.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config;
const AuthRouter = Router();

const privateKey = process.env.PRIVATEKEY;

AuthRouter.post("/signup", async (req, res) => {
  const {email} = req.body;
  const checkExist = await UserModel.findOne({email});
  if (checkExist) {
    res
      .status(502)
      .send({msg: "User Already Exist With this Email Plase Login !!"});
  } else {
    const {name, username, password, country, mobile, gender} = req.body;
    bcrypt.hash(password, 4, async function (err, hashedpassword) {
      if (err) {
        res.send({msg: "Something wents wrong ", err: err});
      } else {

        try{
          const setuser = new UserModel({
            email,
            name,
            username,
            password: hashedpassword,
            country,
            mobile,
            gender,
          });
          await setuser.save()
          res.status(201).json({msg: "Signup Sucessfully"});
        }catch(err){
          res.status(500).json({msg: "something wents wrong to uploading the data"});
        }
      }
    });
  }
});


AuthRouter.post("/login", async (req, res) => {
  const {email, password} = req.body;
  console.log("fire")
  const Checkuser = await UserModel.findOne({email});
  if (!Checkuser) {
    res.status(401).send({msg: "User Not Found Please Signup !! "});
  } else {
    const hashedpassword = Checkuser.password;
    bcrypt.compare(password, hashedpassword, function (err, result) {
      if (result) {
        const user_id = Checkuser._id;
        var token = jwt.sign({user_id}, privateKey);
        res.status(200).send( {"token":token,"user_id":user_id});
      } else {
        res
          .status(404)
          .send({
            msg: "Authentication Faild please Check your Password",
            err: err,
          });
      }
    });
  }
});

module.exports = {AuthRouter};
