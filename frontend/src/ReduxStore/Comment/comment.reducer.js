import { COMMENT_GET_LOADING ,COMMENT_GET_SUCCESS,COMMENT_GET_ERROR} from "./comment.type";

const initialstate={
    loading:false,
    error:false,
    data:[]
}
export const CommentReducer=(state=initialstate,{type,payload})=>{
switch(type){
    case COMMENT_GET_LOADING:{
        return{
            ...state,
            loading:true,
            error:false
        }
    }
    case COMMENT_GET_SUCCESS:{
        return{
...state,
loading:false,
error:false,
data:payload
        }
    }
    case COMMENT_GET_ERROR:{
        return{
...state,
loading:false,
error:true,
        }
    }
    default:{
        return state
    }
}
}

