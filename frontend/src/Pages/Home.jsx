import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Getallpost } from '../ReduxStore/Feeds/feeds.action'

const Home = () => {
const dispatch=useDispatch()
const data=useSelector((store)=>store.Feeds.data)

useEffect(()=>{
dispatch(Getallpost())
},[])

  return (
    <div>
      {data.map((el)=><h1>{el.title}</h1>)}

    </div>
  )
}

export default Home