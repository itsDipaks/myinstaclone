import { GET_PROFILE_LOADING,GET_PROFILE_SUCCESS,GET_PROFILE_ERROR } from "./Profile.type";
const initialstate={
    loading:false,
    error:false,
    data:[]
}

export const ProfileReducer=(state=initialstate,{type,payload})=>{

    switch(type){
        case GET_PROFILE_LOADING:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case GET_PROFILE_SUCCESS:{
            return{
                ...state,
                loading:false,
                error:false,
                data:payload
            }
        }
        case GET_PROFILE_ERROR:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        default:return state
        
    }
}