import axios from "axios";
import {
  FEEDS_GET_LOADING,
  FEEDS_GET_SUCCESS,
  FEEDS_GET_ERROR,
} from "./feeds.type";

export const Postfeeds = (data) => async (dispatch) => {
  dispatch({
    type: FEEDS_GET_LOADING,
  });
  try {
    const response = await axios.post("http://localhost:8100/feeds/");

    dispatch({type: FEEDS_GET_SUCCESS, payload: response.data});
  } catch (error) {
    dispatch({
      type: FEEDS_GET_ERROR,
    });
  }
};


