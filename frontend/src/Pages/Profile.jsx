import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../CompliedSassCss/css/Profile.css"
import { Logout } from '../ReduxStore/Auth/auth.action';
import { AiOutlineHeart,AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useEffect } from 'react';
import { GetUsersFeeds } from '../ReduxStore/Feeds/feeds.action';
import { Getprofile } from '../ReduxStore/Profile/profile.action';
import menicon from "../StaticData/Profileman.png"
import womenicon from "../StaticData/Profilewomen.png"
const Profile = () => {
  const dispatch = useDispatch();
  const handeldlogout = () => {
    dispatch(Logout());
  };
const olpageload=()=>{
  dispatch(GetUsersFeeds())
dispatch(Getprofile())
}
  useEffect(()=>{
    olpageload()
  },[])
const profileData=useSelector((store)=>store.Profile.data)
console.log(profileData)
  const feedsData=useSelector((store)=>store.Feeds.data)
// console.log(feedsData)
  return (
    <>
      {profileData.map((el)=>
<div className='userinfodiv'>




<div className='imgdiv'>
<img src={el.Profileimg?el.Profileimg:menicon }/> 
</div>


<div className='infodiv'>

<div className='namediv'>
  <h2>{el.name}</h2>
  <button onClick={handeldlogout}>Logout</button>
</div>

<div className='followers'>
<p>58 <span>Posts</span></p>
<p>100 <span>Followers</span></p>
<p>10 <span>Following</span></p>
</div>

<p>Email : <span>{el.email}</span></p>
<p>Mobile Number : <span>{el.mobile}</span></p>
</div>

</div>
)}




<div className='postdiv'>
  {feedsData.map(el=>
<div className='postimgdiv'>
  <img src={`http://localhost:8100/static/${el.imagepath}`} alt="post" />
<div className='posticon'>
<AiOutlineHeart/>
<FiEdit/>
<AiOutlineDelete/>

</div>
</div>
 )}
</div>
    </>
  )
}

export default Profile