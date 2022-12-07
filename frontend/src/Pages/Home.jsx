import React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Getallpost} from "../ReduxStore/Feeds/feeds.action";
import "../CompliedSassCss/css/Home.css";
import { BsSuitHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import { useState } from "react";
import Tooltip from '@mui/material/Tooltip';

const Home = () => {
  const [isopen,setisopen]=useState(true)

const opencomment=()=>{
setisopen(isopen?false:true)
}
  const dispatch = useDispatch();
  const data = useSelector((store) => store.Feeds.data);

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
            <p>dipak</p>
          </div>

          <div className="feedimg">
            <img src={`http://localhost:8100/static/${el.imagepath}`} alt="" />
          </div>

          <div className="feedbottom">
            <div className="icondiv">
            <BsSuitHeart className="likeicon"/>
            <Tooltip title="Comment" arrow>
            <FaRegComment className="commenticon" onClick={opencomment}/>
</Tooltip>

            </div>


{isopen?
<div className="addcommentdiv">
  <input type="text" placeholder="Write Comment Heare" />
  <FiSend className="addcommentbtn"/>
</div>:""}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
