import axios from "axios"
import { GET_AUTH_LOADING } from "../Auth/auth.types"
import { GET_PROFILE_SUCCESS } from "./Profile.type"

export const Getprofile=(userid)=>async(dispatch)=>{

    dispatch({
        type:GET_AUTH_LOADING
    })
    try{
        const response=await axios.get(`http://localhost:8100/profile/${userid}`)
dispatch({
    type:GET_PROFILE_SUCCESS,
    payload:response.data
})
    }catch(err){

    }
}