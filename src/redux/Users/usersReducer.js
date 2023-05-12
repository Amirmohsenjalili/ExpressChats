const initialState = {
    loading: false,
    users: [],
    error: ""
}

const usersReduser = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_USERS_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_USERS_SUCCESS":
            return {
                loading: false,
                users: action.payload
            }    
        case "FETCH_USERS_FAILURE":
            return {
                loading: false,
                error: action.payload
            }   
        default: return state    
    }
}

export default usersReduser;

// import { SET_DATA } from './usersAction';

// const initialState = {
//   data: null
// };

// const dataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_DATA:
//       return {
//         ...state,
//         data: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default dataReducer;