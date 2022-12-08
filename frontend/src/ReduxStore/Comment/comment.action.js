import axios from "axios";
import {baseUrl} from "../../utils/Baseurl";
import {getlocalsdata} from "../../utils/LocalStorage";
import {
  COMMENT_GET_LOADING,
  COMMENT_GET_SUCCESS,
  COMMENT_GET_ERROR,
} from "./comment.type";

export const AddComment = (cred) => async (dispatch) => {
  dispatch({
    type: COMMENT_GET_LOADING,
  });

  try {
    const user_id = getlocalsdata("user_id") || "";
    const token = getlocalsdata("token") || "";
    const response = await axios.post(`${baseUrl}/comment/addcomment`, cred, {
      headers: {
        token: token,
        user_id: user_id,
      },
    });
    dispatch({
      type: COMMENT_GET_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    dispatch({
      type: COMMENT_GET_ERROR,
    });
  }
};


