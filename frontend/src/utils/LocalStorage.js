// export const saveToken=(key,data)=>{
//     try{
//         const data= localStorage.setItem(key,JSON.stringify(data))
//         // data=JSON.parse(data)
//         // return data
//     }catch(err){

//         return undefined;

//     }

// }

// export const getToken=(key)=>{
//     const data=localStorage.getItem(key)
//     data=JSON.parse(data)
//     return data
// }

export const getToken = (key) => {
    try {
        let data = localStorage.getItem(key);
        data = JSON.parse(data)
        return data;
    }catch(error){
        return null;
    }
}


export const saveToken = (key, data) =>{
    localStorage.setItem(key,JSON.stringify(data));
}