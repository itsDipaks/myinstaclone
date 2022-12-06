import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import "../CompliedSassCss/css/Profile.css"
import { Logout } from '../ReduxStore/Auth/auth.action';
import { AiOutlineHeart,AiOutlineDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { useEffect } from 'react';
import { GetUsersFeeds } from '../ReduxStore/Feeds/feeds.action';
import { useState } from 'react';
const Profile = () => {
// const [data,setdata]=useState([])
  const dispatch = useDispatch();
  const handeldlogout = () => {
    dispatch(Logout());
  };

  useEffect(()=>{
dispatch(GetUsersFeeds())
  },[])

  const feedsData=useSelector((store)=>store.Feeds.data)
console.log(feedsData)
  return (
    <>
      
<div className='userinfodiv'>
<div className='imgdiv'>
<img src="https://avatars.githubusercontent.com/u/96649241?v=4" alt="" />
</div>


<div className='infodiv'>

<div className='namediv'>
  <h2>Dipak Pawar</h2>
  <button onClick={handeldlogout}>Logout</button>
</div>

<div className='followers'>
<p>58 <span>Posts</span></p>
<p>100 <span>Followers</span></p>
<p>10 <span>Following</span></p>
</div>

<p>Email : <span>itsdipakspawar4206@gmail.com</span></p>
<p>Mobile Number : <span>8600405446</span></p>
<p>Date Of Birth : <span>20/05/1998</span></p>
</div>

</div>





<div className='postdiv'>
  {feedsData.map((el)=>
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