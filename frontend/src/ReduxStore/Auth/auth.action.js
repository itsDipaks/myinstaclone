import {GET_AUTH_LOADING, GET_AUTH_SUCESS, GET_AUTH_ERROR} from "./auth.types";
import axios from "axios"

export const LoginApi = (cred) => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  try {
    const response = await axios.post(`http://localhost:8100/auth/login`, cred);
    dispatch({
      type: GET_AUTH_SUCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: GET_AUTH_ERROR,
      // payload: err,
    });
  }
};

export const SignupApi = (cred) => async (dispatch) => {
  dispatch({
    type: GET_AUTH_LOADING,
  });
  try {
    const response = await axios.post(`http://localhost:8100/auth/signup`, cred);
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





// import axios from "axios";
// import {
//   AUTH_LOADING_ERROR,
//   AUTH_LOADING_LOADING,
//   AUTH_LOADING_SUCCESS,
// } from "./auth.type";

// export const loginApi = (creds) => async (dispatch) => {
//   dispatch({
//     type:AUTH_LOADING_LOADING
//   })
  
//     try {
//     const response = await axios.post("https://reqres.in/api/login", creds);

//     dispatch({
//         type:AUTH_LOADING_SUCCESS,payload:response.data
//     })

// } catch (err) {
//     dispatch({
//         type:AUTH_LOADING_ERROR,payload:err
//     })
//     console.group(err);
//   }
// };
