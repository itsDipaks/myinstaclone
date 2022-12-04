import axios from "axios";
import {
  FEEDS_GET_LOADING,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERROR,
} from "./feeds.type";

export const Postfeeds = (formData) => async (dispatch) => {
  dispatch({
    type: FEEDS_GET_LOADING,
  });
  let token=localStorage.getItem("token")
  try {
    const response = await axios.post("http://localhost:8100/feeds/addpost",formData,{ headers: {
      'Content-Type': 'multipart/form-data',
      "token":token
    }});
    dispatch({type: FEEDS_GET_SUCCESS, payload:response.data});
    return response.data
  } catch (error) {
    dispatch({
      type: FEEDS_GET_ERROR,
    });
    // console.log(error)
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





