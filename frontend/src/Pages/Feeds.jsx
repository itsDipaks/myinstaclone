import React, { useState } from 'react'
import { useRef } from 'react'

const Feeds = () => {
const [Feeddata,SetFeeddata]=useState({})

const imaghandeler=useRef()


  const handeldsubmit=(e)=>{
e.preventDefault()

const formdata=new FormData()
formdata.append("title",Feeddata.title)
formdata.append("description",Feeddata.description)
formdata.append("tags",Feeddata.tags)


formdata.append("image",imaghandeler.current.files[0])
  }

  const handeldchange=(e)=>{
const {name,value}=e.target
SetFeeddata({
  ...Feeddata,[name]:value
})


  }
  return (
    <div>

      <form onSubmit={handeldsubmit}>

        <input type="text" onChange={handeldchange} name='title' placeholder='Please Enter Title' />
        <input type="text" onChange={handeldchange} name='description' placeholder='Please Enter Description ' />
        <input type="text" onChange={handeldchange} name='tags' placeholder='Please Enter Tags ' />
        <input type="file" ref={imaghandeler}   />
        <input type="submit" />
      </form>
      

    </div>
  )
}

export default Feeds