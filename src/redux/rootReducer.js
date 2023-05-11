// import { combineReducers } from "redux";
// // import productsReducer from "./Users/usersReducer";
// import usersReduser from "./Users/usersReducer";

// const rootReducer = combineReducers({
//     usersState: usersReduser
// })

// export default rootReducer;

import { combineReducers } from 'redux';
import dataReducer from '../redux/Users/usersReducer';

const rootReducer = combineReducers({
  data: dataReducer
  // Add other reducers here if needed
});

export default rootReducer;