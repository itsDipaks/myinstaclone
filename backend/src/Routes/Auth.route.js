const {Router} = require("express");
const {UserModel} = require("../models/User.model");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config;
const AuthRouter = Router();

const privateKey = process.env.PRIVATEKEY;

AuthRouter.post("/signup", async (req, res) => {
  const {email} = req.body;
  const checkExist = await UserModel.findOne({email: email});
  if (checkExist) {
    res
      .status(502)
      .send({msg: "User Already Exist With this Email Plase Login !!"});
  } else {
    const {name, username, password, country, mobile, gender} = req.body;
    // try {
    bcrypt.hash(password, 4, async function (err, hashedpassword) {
      if (err) {
        res.send({msg: "Something wents wrong ", err: err});
      } else {
        const setuser = new UserModel({
          email,
          name,
          username,
          password: hashedpassword,
          country,
          mobile,
          gender,
        });
        await setuser.save((err, success) => {
          if (err) {
            res
              .status(500)
              .send({msg: "something wents wrong to uploading the data"});
          } else {
            res.status(201).send({msg: "Signup Sucessfully",user:success["_doc"]});
          }
        });
      }
    });
  }
});

AuthRouter.post("/login", async (req, res) => {
  const {email, password, username} = req.body;
  const Checkuser = await UserModel.findOne({email, username});
  if (!Checkuser) {
    res.status(404).send({msg: "User Not Found Please Signup !! "});
  } else {
    const hashedpassword = Checkuser.password;
    bcrypt.compare(password, hashedpassword, function (err, result) {
      if (result) {
        const id = Checkuser._id;
        var token = jwt.sign({id: id}, privateKey);
        res.status(201).send({msg: "Login Sucesefull", Token: token});
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
