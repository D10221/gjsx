import redux from "../redux";
import defaultState from "./defaultState";
import  reducer  from "./reducer";
/**
 * 
 */
export default redux(reducer, defaultState);
