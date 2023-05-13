import { combineReducers } from 'redux';
import usersReduser from './Users/userReducer';

const rootReducer = combineReducers({
    usersState: usersReduser
})

export default rootReducer;