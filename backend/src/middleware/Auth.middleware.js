var jwt = require("jsonwebtoken");
require("dotenv").config();

const Authenticate = (req, res, next) => {
  const {token} = req.headers;
  if (token) {
    jwt.verify(token, process.env.PRIVATEKEY, function (err, decoded) {
      if (decoded) {
        const user_id  = decoded.user_id
        req.body.user_id = user_id
        next();
      } else {
        res.status(401).json({msg: "Authentication Faild", err: err});
      }
    });
  } else {
    res.status(204).send({msg: "Plaease Provide token"});
  }
};

module.exports = {Authenticate};
