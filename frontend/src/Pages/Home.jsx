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

const Home = () => {
  const [comment, setcomment] = useState("");
  const [descriptionstate, setdescriptionstate] = useState(false);
  const showdescription = () => {
    setdescriptionstate(descriptionstate ? false : true);
  };
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Feeds.data);
  console.log(data);
  const addcomment = () => {
    dispatch(AddComment(comment));
  };
  useEffect(() => {
    dispatch(Getallpost());
  }, []);
  return (
    <div className="homepagediv">
      {data.map((el) => (
        <div className="feeddiv">
          <div className="feeduserinfo">
            <img
              src="https://avatars.githubusercontent.com/u/96649241?v=4"
              alt=""
            />
            <p>{el.name}</p>
            {el.email}
          </div>

          <div className="feedimg">
            <img
              src={`http://localhost:8100/static/${el.result.imagepath}`}
              alt=""
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
                  <p> Description : {el.result.description}</p>
                  <p>
                    {" "}
                    PostedOn:{el.result.postCreatedDate} Time:
                    {el.result.postCreatedTime}
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
                  <FiSend className="addcommentbtn" onClick={addcomment} />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
