const {Router} = require("express");
const {Authenticate} = require("../middleware/Auth.middleware");
const {UserModel} = require("../models/User.model");

const UserProfileRouter = Router();


UserProfileRouter.get("/:user_id", Authenticate, async (req, res) => {
  const {user_id} = req.body;
  const UserData = await UserModel.find({_id: user_id});
  if (UserData) {
    res.send(UserData);
  } else {
    res.send({msg: "User Not Found please Check id!!"});
  }
});

module.exports = {UserProfileRouter};
