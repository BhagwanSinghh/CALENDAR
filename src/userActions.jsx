// import React from "react";
// import axios from "axios";

// export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
// export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
// export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// export const fetchUsersRequest=()=>{
//     return {
//         type: FETCH_USERS_REQUEST
//     }
// }
// export const fetchUsersSuccess=users=>{
//     return {
//         type: FETCH_USERS_REQUEST,
//         payload:users
//     }
// }
// export const fetchUsersFailure=error=>{
//     return {
//         type: FETCH_USERS_REQUEST,
//         payload:error
//     }
// }

// export const fetchUsers=()=>{
//     return(dispatch)=>{
//         dispatch(fetchUsersRequest())
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then(response=>{
//             const users = response.data 
//             dispatch(fetchUsersSuccess(users))
//         })
//         .catch(error=>{
//             const errorMsg=error.message 
//             dispatch(fetchUsersFailure(errorMsg))
//         })
//     }
// }