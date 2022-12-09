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
    // console.log(data);
    return res.send(data)
  } catch (err) {
    res.status(404).send({msg: "Not Found !!", err});
    console.log(err);
  }
};

const GetUserFeeds = async (req, res) => {
  const user_id = req.params.user_id;
  console.log(user_id);
  try {
    const Userfeeds = await FeedsModel.find({user_id});

    // const feedimage=Userfeeds.imagepath
    res.status(201).send(Userfeeds);
  } catch (error) {
    res.status(404).json({msg: "Not Found !!", error});
  }
};

const GetFeedsController = {GetallFeeds, GetUserFeeds};

module.exports = {GetFeedsController};
