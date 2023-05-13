import axios from 'axios'

const fetchUsersRecquest = () => {
    return {
        type: "FETCH_USERS_REQUEST"
    }
}

const fetchUsersSuccess = users => {
    return {
        type: "FETCH_USERS_SUCCESS",
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: "FETCH_USERS_FAILURE",
        payload: error
    }
}

export const fetchUsers = () => {
    return async(dispatch) => {
        dispatch(fetchUsersRecquest());
        await axios.get("http://localhost:3000/users/1")
            .then(response => {
                const users = response.data;
                console.log("iii",users)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}
