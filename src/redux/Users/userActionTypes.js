import axios from 'axios'

const fetchUsersRequest = () => {
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

const setLoginUser = myUser => {
    return {
        type: "SET_LOGIN_USER",
        payload: myUser
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
        dispatch(fetchUsersRequest());
        await axios.get("http://localhost:3000/users")
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
                setLoginUser()
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}
