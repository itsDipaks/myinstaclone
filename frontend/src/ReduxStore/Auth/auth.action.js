import {GET_AUTH_LOADING, GET_AUTH_SUCESS, GET_AUTH_ERROR} from "./auth.types";
require("dotenv").config

const baseUrl=process.env.BASEAPI


export const LoginApi = (cred) => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  try {
    const response = await axios.post(`${baseUrl}/login`, cred);
    dispatch({
      type: GET_AUTH_SUCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_AUTH_ERROR,
      payload: err,
    });
  }
};

export const SignupApi = (cred) => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  try {
    const response = await axios.post(`${baseUrl}/signup`, cred);
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
