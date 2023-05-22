const initialState = {
    loading: false,
    users: [],
    myUser: {},
    error: ""
}

const usersReducer = (state=initialState, action) => {
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
            case "SET_LOGIN_USER":
                console.log("aaaaa",action.payload);
                return {
                loading: false,
                myUser: action.payload,
                users: []
            }            
        case "FETCH_USERS_FAILURE":
            return {
                loading: false,
                users: [],
                myUser: {},
                error: action.payload
            }   
        default:
             return state    
    }
}

export default usersReducer;
