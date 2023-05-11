// import axios from 'axios'

// const fetchUsersRecquest = () => {
//     return {
//         type: "FETCH_USERS_REQUEST"
//     }
// }

// const fetchUsersSuccess = user => {
//     return {
//         type: "FETCH_USERS_SUCCESS",
//         payload: users
//     }
// }

// const fetchUsersFailure = error => {
//     return {
//         type: "FETCH_USERS_FAILURE",
//         payload: error
//     }
// }

// export const fetchUsers = () => {
//     return (dispatch) => {
//         dispatch(fetchUsersRecquest());
//         axios.get("https://fakestoreapi.com/users")
//             .then(response => {
//                 const users = response.data;
//                 dispatch(fetchUsersSuccess(users))
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(fetchUsersFailure(errorMsg))
//             })
//     }
// }

export const SET_DATA = 'SET_DATA';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
});