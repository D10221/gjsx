import { createStore } from "redux";
import defaultState from "./defaultState";
import  reducer  from "./reducer";
/**
 * 
 */
export default createStore(reducer, defaultState);
