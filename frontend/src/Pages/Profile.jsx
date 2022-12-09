import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "../CompliedSassCss/css/Profile.css";
import {Logout} from "../ReduxStore/Auth/auth.action";
import {AiOutlineHeart, AiOutlineDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import {useEffect} from "react";
import {GetUsersFeeds} from "../ReduxStore/Feeds/feeds.action";
import {Getprofile} from "../ReduxStore/Profile/profile.action";
import menicon from "../StaticData/Profileman.png";
import {MdOutlinePostAdd} from "react-icons/md";
import {Link} from "react-router-dom";
import {IconButton, Tooltip} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  p: 4,
};

const Profile = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const dispatch = useDispatch();
  const handeldlogout = () => {
    dispatch(Logout());
  };
  const olpageload = () => {
    dispatch(GetUsersFeeds());
    dispatch(Getprofile());
  };
  useEffect(() => {
    olpageload();
  }, []);
  const profileData = useSelector((store) => store.Profile.data);
  console.log(profileData);
  const feedsData = useSelector((store) => store.Feeds.data);
  // console.log(feedsData)


  const deletepost=(id)=>{
console.log(id)
  }

  
  return (
    <>
      {profileData.map((el) => (
        <div className="userinfodiv">
          <div className="imgdiv">
            <img src={el.Profileimg ? el.Profileimg : menicon} />
          </div>

          <div className="infodiv">
            <Tooltip title="Add Post" className="addpost">
              <IconButton>
                <Link to={"/feeds"}>
                  <MdOutlinePostAdd />
                </Link>
              </IconButton>
            </Tooltip>

            <div className="namediv">
              <h2>{el.name}</h2>
              <button onClick={handeldlogout}>Logout</button>
            </div>
            <div className="followers">
              <p>
                58 <span>Posts</span>
              </p>
              <p>
                100 <span>Followers</span>
              </p>
              <p>
                10 <span>Following</span>
              </p>
            </div>
            <p>
              Email : <span>{el.email}</span>
            </p>
            <p>
              Mobile Number : <span>{el.mobile}</span>
            </p>
          </div>
        </div>
      ))}

      <div className="postdiv">
        {feedsData.map((el) => (
          <div className="postimgdiv">
            <img
              src={`http://localhost:8100/static/${el.imagepath}`}
              alt="post"
            />
            <div className="posticon">
              <AiOutlineHeart className="icon" />
              <FiEdit onClick={handleOpen} className="icon" />
              <AiOutlineDelete onClick={handleOpen} className="icon" />
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Box sx={style}>
                  <div className="hoverdiv">
                    <img
                      src={`http://localhost:8100/static/${el.imagepath}`}
                      alt=""
                    />
                    <div className="infodiv">
                
               {el.name}
               <AiOutlineHeart />
               <AiOutlineDelete onClick={()=>deletepost(el._id)}/>
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
