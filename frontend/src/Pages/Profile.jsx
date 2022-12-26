import React from "react";
import {useDispatch, useSelector} from "react-redux";
import "../CompliedSassCss/css/Profile.css";
import {Logout} from "../ReduxStore/Auth/auth.action";
import {AiOutlineHeart, AiOutlineDelete} from "react-icons/ai";
import {FiEdit} from "react-icons/fi";
import {useEffect} from "react";
import {Deletepost, GetUsersFeeds} from "../ReduxStore/Feeds/feeds.action";
import {Getprofile} from "../ReduxStore/Profile/profile.action";
import menicon from "../StaticData/Profileman.png";
import {MdOutlinePostAdd} from "react-icons/md";
import {Link} from "react-router-dom";
import {IconButton, Tooltip} from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {useState} from "react";
import { baseUrl } from "../utils/Baseurl";
import DrawerFeeds from "../Components/DrawerFeeds";
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
  const dispatch = useDispatch();
  const [singlepost, setsinglepost] = useState({});
  const [open, setOpen] = React.useState(false);
  const Onpageload = () => {
    dispatch(GetUsersFeeds());
    dispatch(Getprofile());
  };
  const handeldlogout = () => {
    dispatch(Logout());
  };

// .......................Modal Opening......................
  const handleOpen = (el) => {
    setsinglepost(el);
    setOpen(true);
    console.log(el);
  };
  const handleClose = () => setOpen(false);

//  ....................Feeds Add Drawer........................

const openfeedDrawer=()=>{

}



  useEffect(() => {
    Onpageload();
  }, []);





  const deletepost = (id) => {
  dispatch(Deletepost(id))
  };



  const editpost=(id,payload)=>{

  }
  const [opendr,setopendr]=useState(false)
  const [close,setclose]=useState(false)

  const profileData = useSelector((store) => store.Profile.data);
  const feedsData = useSelector((store) => store.Feeds.data);

 
  return (
    <>
      {profileData && profileData.map((el) => (
        <div className="userinfodiv">
          <div className="imgdiv">
            <img src={`${baseUrl}/static/${profileData[0].profileImagePath}`} />
          </div>

          <div className="infodiv">
            <Tooltip title="Add Post" className="addpost">
              <IconButton>
                <Link to={"/feeds"}>
                  {/* <MdOutlinePostAdd onClick={openfeedDrawer} /> */}
                </Link>
              </IconButton>
            </Tooltip>
              <DrawerFeeds data={openfeedDrawer}/>
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
              <FiEdit onClick={() => handleOpen(el)} className="icon" />
              <AiOutlineDelete onClick={() => handleOpen(el)} className="icon" />
            </div>
          </div>
        ))}
      </div>

      <Modal  open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className="hoverdiv">
            <div className="modelimgdiv">
            <img
              src={`http://localhost:8100/static/${singlepost.imagepath}`}
              alt=""
            />

            <p> Description : {singlepost.description}</p>
            <p>Posted-on: {singlepost.postCreatedDate} at {singlepost.postCreatedTime}</p>
            {/* <p>Tags : {singlepost.tags.map((tag)=><span>{tag}</span>)}</p> */}
            </div>
          
            <div className="infodiv">
              <h1>{singlepost.name}</h1>
              <AiOutlineHeart />
              <AiOutlineDelete onClick={() => deletepost(singlepost._id)} />
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Profile;
