import { combineReducers } from "redux";

import { useReducer } from "react";

const rootReducer = combineReducers({
  userData: useReducer,
});
export default rootReducer;

