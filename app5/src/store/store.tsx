import { legacy_createStore, applyMiddleware, Middleware, } from "redux";
import defaultState from "./defaultState";
import reducer from "./reducer";
/**
 * 
 */
export default (...middleware: Middleware[]) => legacy_createStore(
    reducer,
    defaultState,
    applyMiddleware(...middleware)
);
