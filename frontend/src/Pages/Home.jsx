import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Getallpost} from "../ReduxStore/Feeds/feeds.action";
import "../CompliedSassCss/css/Home.css";
import {BsSuitHeart} from "react-icons/bs";
import {FaRegComment} from "react-icons/fa";
import {FiSend} from "react-icons/fi";
import {MdOutlineKeyboardArrowDown} from "react-icons/md";
import {useState} from "react";
import Tooltip from "@mui/material/Tooltip";
import {AddComment} from "../ReduxStore/Comment/comment.action";
import {IconButton} from "@mui/material";
import { baseUrl } from "../utils/Baseurl";
import UserStory from "../Components/UserStory";

const Home = () => {
  const [comment, setcomment] = useState("");
  const [descriptionstate, setdescriptionstate] = useState(false);
  const showdescription = () => {
    setdescriptionstate(descriptionstate ? false : true);
  };
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Feeds.data);
  console.log(data);
  const addcomment = (id) => {
    dispatch(AddComment(comment));
    console.log(id)
  };
  useEffect(() => {
    dispatch(Getallpost());
  }, []);
  return (
    <>
   <UserStory/>
    <div className="homepagediv">
      {data && data.map((el) => (
        <div className="feeddiv">
          <div className="feeduserinfo">
            <img
              src={`${baseUrl}/static/${el.profileImagePath}`}
              alt="profile"
            />
            <p>{el.username}</p>
         
          </div>

          <div className="feedimg">
            <img
              src={`${baseUrl}/static/${el.feedsData.imagepath}`}
              alt="feed"
            />
          </div>

          <div className="feedbottom">
            <div className="icondiv">
              <Tooltip title="Like">
                <IconButton>
                  <BsSuitHeart className="likeicon" />
                </IconButton>
              </Tooltip>
            </div>

            <div className="postinfo">
              <p className="showmore" onClick={showdescription}>
                SeeMore <MdOutlineKeyboardArrowDown />
              </p>

              {descriptionstate ? (
                <div className="description">
                  <p> Description : {el.feedsData.description}</p>
                  <p>
                    {" "}
                    PostedOn:{el.feedsData.postCreatedDate} Time:
                    {el.feedsData.postCreatedTime}
                  </p>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="addcommentdiv">
              <input
                type="text"
                placeholder="Write Comment Heare"
                onChange={(e) => setcomment(e.target.value)}
              />

              <Tooltip title="Post Comment">
                <IconButton>
                  <FiSend className="addcommentbtn" onClick={()=>addcomment(el.feedsData._id)} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;
