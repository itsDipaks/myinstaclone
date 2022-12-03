import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getallpost } from '../ReduxStore/Feeds/feeds.action'
import "../CompliedSassCss/css/Home.css"
const Home = () => {
const dispatch=useDispatch()
const data=useSelector((store)=>store.Feeds.data)

useEffect(()=>{
dispatch(Getallpost())
},[])

  return (
    <div>
      {/* {data.map((el)=><h1>{el.title}</h1>)} */}
<div className='feeddiv'>

<div className='feeduserinfo'>

<img  src="https://avatars.githubusercontent.com/u/96649241?v=4" alt="" />
<p>dipak</p>
</div>

<div className='feedimg'>

</div>
<div className='feedbottom'>

</div>

</div>
    </div>
  )
}

export default Home