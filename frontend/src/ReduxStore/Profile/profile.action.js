import axios from "axios";
import {baseUrl} from "../../utils/Baseurl";
import {getlocalsdata} from "../../utils/LocalStorage";
import {GET_AUTH_LOADING} from "../Auth/auth.types";
import {GET_PROFILE_ERROR, GET_PROFILE_SUCCESS} from "./Profile.type";

export const Getprofile = () => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  const user_id = getlocalsdata("user_id");
  const token = getlocalsdata("token");
  console.log(user_id);
  try {
    const response = await axios.get(`${baseUrl}/profile/${user_id}`,{
        headers: {
          token: token,
        },});
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROFILE_ERROR,
    });
  }
};

export const AllUsersProfile = () => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  const token = getlocalsdata("token");
  try {
    const response = await axios.get(`${baseUrl}/feeds/getallusersdata`,{
        headers: {
          token: token,
        },});
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PROFILE_ERROR,
    });
  }
};


