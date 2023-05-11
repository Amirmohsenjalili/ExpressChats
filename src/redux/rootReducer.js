import { combineReducers } from "redux";
// import productsReducer from "./Users/usersReducer";
import usersReduser from "./Users/usersReducer";

const rootReducer = combineReducers({
    usersState: usersReduser
})

export default rootReducer;