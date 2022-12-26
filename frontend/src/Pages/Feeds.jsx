import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Postfeeds } from '../ReduxStore/Feeds/feeds.action';
const Feeds = () => {
const [Feeddata,SetFeeddata]=useState({})
const dispatch =useDispatch()
const imaghandeler=useRef()


const handeldchange=(e)=>{
  const {name,value}=e.target
  SetFeeddata({
    ...Feeddata,[name]:value
  })
}

const handeldsubmit=(e)=>{
e.preventDefault()
let formData = new FormData()
formData.append("title",Feeddata.title)
formData.append("description",Feeddata.description)
formData.append("tags",Feeddata.tags)
formData.append("image",imaghandeler.current.files[0])

dispatch(Postfeeds(formData))

}
 
  
  return (
    <div>

      <form onSubmit={handeldsubmit}>

        <input type="text" onChange={handeldchange} name='title' placeholder='Please Enter Title' />
        <input type="text" onChange={handeldchange} name='description' placeholder='Please Enter Description ' />
        <input type="text" onChange={handeldchange} name='tags' placeholder='Please Enter Tags ' />
        <input type="file" ref={imaghandeler}   />
        <input type="submit" value={"new post"} />
      </form>
      

    </div>
  )
}

export default Feeds