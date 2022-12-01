var jwt = require("jsonwebtoken");
require("dotenv").config();

const privateKey = process.env.PRIVATEKEY;

const Authenticate = (req, res, next) => {
  const {token} = req.headers;
  // console.log(token)
  if (token) {
    jwt.verify(token, privateKey, function (err, decoded) {
      if (decoded) {
        next();
      } else {
        res.status(401).send({msg: "Authentication Faild", err: err});
      }
    });
  } else {
    res.status(204).send({msg: "Plaease Provide token"});
  }
};

module.exports = {Authenticate};
