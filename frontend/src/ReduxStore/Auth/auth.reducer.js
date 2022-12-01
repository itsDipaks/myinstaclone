import { getToken, saveToken } from "../../utils/LocalStorage";
import {GET_AUTH_LOADING, GET_AUTH_ERROR, GET_AUTH_SUCESS} from "./auth.types";
const token = localStorage.getItem("token");
const initialstate = {
  loading: false,
  token:getToken("token")|| "",
  error: false

};
console.log(initialstate)
export const Authreducer = (state = initialstate, {payload, type}) => {
  switch (type) {
    case GET_AUTH_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_AUTH_SUCESS: {
        const userToken = payload.token;
        saveToken('token', userToken)
      return {
        ...state,
        loading: false,
        error: false,
        token:userToken
      };
    }
    case GET_AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    default:{
      return state
    }
  }
};


