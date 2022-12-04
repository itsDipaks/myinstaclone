// import {GET_AUTH_LOADING, GET_AUTH_ERROR, GET_AUTH_SUCESS, GET_AUTH_LOGOUT} from "./auth.types";
// let token=localStorage.getItem("token") || ""
// const initialstate = {
//   loading: false,
//   token: token,
//   error: false,
//   user_id:"vgggg"
// };
// // console.log(initialstate)
// export const Authreducer = (state = initialstate, {payload, type}) => {
//   switch (type) {
//     case GET_AUTH_LOADING: {
//       return {
//         ...state,
//         loading: true,
//         error: false,
//       };
//     }
//     case GET_AUTH_SUCESS: {
//       if(payload.tokenn){
//         localStorage.setItem("token",payload.token)
//         console.log(payload[0])
//         // console.log(payload.user_id)
//         // localStorage.setItem("user_id",payload.user_id)
//       }
//       return {
//         ...state,
//         loading: false,
//         error: false,
//         token:payload.token,
//         user_id:payload.user_id

//       };
  
//     }
//     case GET_AUTH_ERROR: {
//       return {
//         ...state,
//         loading: false,
//         error: true
//       };
//     }
//     case GET_AUTH_LOGOUT: {
// localStorage.removeItem("token")
//       return {
//         ...state,
//         loading: false,
//         error: true,
//         token:""
//       };
//     }
//     default:{
//       return state
//     }
//   }
// };



import {GET_AUTH_LOADING, GET_AUTH_ERROR, GET_AUTH_SUCESS, GET_AUTH_LOGOUT} from "./auth.types";
let token=localStorage.getItem("token") || ""
const initialstate = {
  loading: false,
  token: token,
  error: false
};
// console.log(initialstate)
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
      if(payload.token){
        localStorage.setItem("token",payload.token)
        console.log(payload.user_id)
        localStorage.setItem("user_id",JSON.stringify( payload.user_id))
      }
      return {
        ...state,
        loading: false,
        error: false,
        token:payload
      };
  
    }
    case GET_AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        error: true
      };
    }
    case GET_AUTH_LOGOUT: {
localStorage.removeItem("token")
      return {
        ...state,
        loading: false,
        error: true,
        token:""
      };
    }
    default:{
      return state
    }
  }
};