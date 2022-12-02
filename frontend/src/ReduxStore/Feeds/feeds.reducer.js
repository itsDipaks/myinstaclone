import {
  FEEDS_GET_LOADING,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERROR,
} from "./feeds.type";
const initialstate = {
  loading: false,
  error: false,
  data: [],
};

export const FeedsReducer = (state = initialstate, {type, payload}) => {
  switch (type) {
    case FEEDS_GET_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case FEEDS_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case FEEDS_GET_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
