import { combineReducers } from 'redux';
import usersReducer from './Users/userReducer';

const rootReducer = combineReducers({
    usersState: usersReducer
})

export default rootReducer;