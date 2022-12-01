const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String,required: true},
  username: {type: String, required: true, min: 3, max: 8},
  email: { type: String,required: true},
  password: { type: String,required: true},
  mobile: { type: Number,required: true,min:10},
  country: { type: String,required: true,enum:["india","usa","china","russia"]},
  gender: { type: String,enum:["male","female","Unspecifide"],required: true},
});

const UserModel = mongoose.model("userdata", UserSchema);

module.exports = {UserModel};
