import axios from "axios";
import {baseUrl} from "../../utils/Baseurl";
import {getlocalsdata} from "../../utils/LocalStorage";
import {
  FEEDS_GET_LOADING,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERROR,
} from "./feeds.type";

export const Postfeeds = (formData) => async (dispatch) => {
  dispatch({
    type: FEEDS_GET_LOADING,
  });
  let token = getlocalsdata("token") || "";

  const user_id = getlocalsdata("user_id") || "";
  try {
    const response = await axios.post(
      `${baseUrl}/feeds/addpost`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          token: token,
          user_id: user_id,
        },
      }
    );
    dispatch({type: FEEDS_GET_SUCCESS, payload: response.data});
    return response.data;
  } catch (error) {
    dispatch({
      type: FEEDS_GET_ERROR,
    });
    // console.log(error)
  }
};

export const GetUsersFeeds = () => async (dispatch) => {
  dispatch({
    type: FEEDS_GET_LOADING,
  });
  const user_id = getlocalsdata("user_id");
  const token = getlocalsdata("token");
  try {
    const response = await axios.get(`${baseUrl}/feeds/userfeeds/${user_id}`, {
      headers: {
        token: token,
      },
    });
    dispatch({
      type: FEEDS_GET_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FEEDS_GET_ERROR,
    });
  }
};


export const Deletepost=(post_id)=>async(dispatch)=>{
dispatch({
  type:FEEDS_GET_LOADING
})
const user_id = getlocalsdata("user_id");
const token = getlocalsdata("token");
try{
  const response=await axios.delete(`${baseUrl}/feeds/delete/${post_id}`,
{  headers:{
  "token":token,
  "user_id":user_id
  }}
  )

  dispatch({
    type:FEEDS_GET_SUCCESS,
    payload:response.data
  })
}catch(err){
  dispatch({
    type:FEEDS_GET_ERROR,
  })
}
}

export const Getallpost = () => async (dispatch) => {
  dispatch({
    type: FEEDS_GET_LOADING,
  });
  try {
    const response = await axios.get(`${baseUrl}/feeds/allfeeds`);
    dispatch({
      type: FEEDS_GET_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FEEDS_GET_ERROR,
    });
  }
};

export const GetUserpost = () => async (dispatch) => {
  dispatch({
    type: FEEDS_GET_LOADING,
  });
  try {
    const response = await axios.get(`${baseUrl}/feeds/userfeeds`);
    dispatch({
      type: FEEDS_GET_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: FEEDS_GET_ERROR,
    });
  }
};
