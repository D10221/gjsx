import { legacy_createStore, applyMiddleware, Middleware, combineReducers } from "redux";
/**
 * 
 */
export default (defaultState: {}, reducers: {}, ...middleware: Middleware[]) => legacy_createStore(
    combineReducers(reducers,),
    defaultState,
    applyMiddleware(...middleware)
);
