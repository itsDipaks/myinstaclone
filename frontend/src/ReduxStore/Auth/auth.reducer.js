import {GET_AUTH_LOADING, GET_AUTH_ERROR, GET_AUTH_SUCESS} from "./auth.types";
const token = localStorage.getItem("token");
const initialstate = {
  loading: false,
  error: false,
  Token: token,
};
export const Authreducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case GET_AUTH_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_AUTH_SUCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        Token: token,
      };
    }
    case GET_AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
  }
};
