import { combineReducers } from "redux";
import reducer from "./reducer.js";

const reducers = combineReducers({ account: reducer });
export default reducers;