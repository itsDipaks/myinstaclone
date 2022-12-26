// const {connection} = require("../config/db");
const {FeedsModel} = require("../models/Feeds.model");
const {UserModel} = require("../models/User.model");
const GetallFeeds = async (req, res) => {
  try {
    const data = await UserModel.aggregate([
      {
        '$lookup': {
          'from': 'feeds', 
          'localField': 'user_id', 
          'foreignField': '_id:objectId', 
          'as': 'feedsData'
        }
      }, {
        '$unwind': {
          'path': '$feedsData'
        }
      }, {
        '$project': {
          'name': true, 
          'email': true, 
          'username': true, 
          'profileImagePath': true, 
          'feedsData._id': true, 
          'feedsData.title': true, 
          'feedsData.imagepath': true, 
          'feedsData.description': true, 
          'feedsData.postCreatedDate': true, 
          'feedsData.postCreatedTime': true
        }
      }
    ]);
    return res.send(data)
  } catch (err) {
    res.status(404).send({msg: "Not Found !!", err});
    console.log(err);
  }
};

const GetUserFeeds = async (req, res) => {
  const {user_id} = req.body;
  try {
    const Userfeeds = await FeedsModel.find({user_id});
    // const feedimage=Userfeeds.imagepath
    res.status(201).send(Userfeeds);
  } catch (error) {
    res.status(404).json({msg: "Not Found !!", error});
  }
};




const Getalluser = async (req, res) => {
  const UsersDatas = await UserModel.find();
console.log(UsersDatas)
  try {
    if (UsersDatas) {
      res.send(UsersDatas);
    } else {
      res.send({msg: "All Users Data Not Found", err});
    }
  } catch (err) {
    res.send({msg: "Something Wents Wrong", err});
  }
}

const GetFeedsController = {GetallFeeds, GetUserFeeds,Getalluser};

module.exports = {GetFeedsController};
