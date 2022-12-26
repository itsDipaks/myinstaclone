import {Drawer} from "@mui/material";
import {Box} from "@mui/system";
import React, {useRef, useState} from "react";
import {AiOutlineCloseSquare} from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Postfeeds } from "../ReduxStore/Feeds/feeds.action";

const DrawerFeeds = () => {
  const [open, setopen] = useState(false);
  const [close, setclose] = useState(false);

  const opendraw = () => {
    setopen(true);
    setclose(false);
  };
  const closeDrawer = () => {
    setclose(true);
    setopen(false);
  };
  const closeonkey = () => {
    setclose(true);
    setopen(false);
  };


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
    <div onKeyDown={closeonkey}>
      <button onClick={opendraw}>open</button>
      <Drawer anchor="right" open={open} onClose={close}>
        <Box
          sx={{
            width: 800,
            height: 300,
            backgroundColor: "primary.dark",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          {/* <AiOutlineCloseSquare onClick={()=>closeDrawer()} /> */}



          <div>
          <form onSubmit={handeldsubmit}>

<input type="text" onChange={handeldchange} name='title' placeholder='Please Enter Title' />
<input type="text" onChange={handeldchange} name='description' placeholder='Please Enter Description ' />
<input type="text" onChange={handeldchange} name='tags' placeholder='Please Enter Tags ' />
<input type="file" ref={imaghandeler}   />
<input type="submit" value={"new post"} />
</form>

          </div>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerFeeds;
