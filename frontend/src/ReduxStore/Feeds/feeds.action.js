import axios from "axios";
import {
  FEEDS_GET_LOADING,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERROR,
} from "./feeds.type";

export const Postfeeds = (feedformdata) => async (dispatch) => {
 console.log(feedformdata)
  dispatch({
    type: FEEDS_GET_LOADING,
  });
  try {
    const response = await axios.post("http://localhost:8100/feeds/addpost",feedformdata,{
      headers:{"Content-Type":"multipart/form-data"}
    });
console.log(response)
    dispatch({type: FEEDS_GET_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({
      type: FEEDS_GET_ERROR,
    });
    console.log(error)
  }
};


















export const Getallpost=()=>async(dispatch)=>{
dispatch({
  type:FEEDS_GET_LOADING
})
try{
const response=await axios.get("http://localhost:8100/feeds/allfeeds")
dispatch({
  type:FEEDS_GET_SUCCESS,
  payload:response.data
})
}catch(err){
dispatch({
  type:FEEDS_GET_ERROR
})
}

}
export const GetUserpost=()=>async(dispatch)=>{
dispatch({
  type:FEEDS_GET_LOADING
})
try{
const response=await axios.get("http://localhost:8100/feeds/userfeeds")
dispatch({
  type:FEEDS_GET_SUCCESS,
  payload:response.data
})
}catch(err){
dispatch({
  type:FEEDS_GET_ERROR
})
}
}





