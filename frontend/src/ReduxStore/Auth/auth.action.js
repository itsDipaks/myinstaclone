import {
  GET_AUTH_LOADING,
  GET_AUTH_SUCESS,
  GET_AUTH_ERROR,
  GET_AUTH_LOGOUT,
} from "./auth.types";
import axios from "axios";
import {baseUrl} from "../../utils/Baseurl";

export const LoginApi = (cred) => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, cred);
    console.log(response);
    dispatch({
      type: GET_AUTH_SUCESS,
      payload: response.data,
    });
    return response.data;
  } catch (err) {
    dispatch({
      type: GET_AUTH_ERROR,
    });
  }
};

export const SignupApi = (cred) => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, cred);

    dispatch({
      type: GET_AUTH_SUCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_AUTH_ERROR,
    });
  }
};

export const Logout = () => ({type: GET_AUTH_LOGOUT});
