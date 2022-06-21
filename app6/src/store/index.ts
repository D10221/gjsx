import { createStore } from "redux";
/**
 * 
 * @param state 
 * @param action 
 * @returns 
 */
const reducer = (state: typeof initialState, action: { type: string, payload?: any, error?: any }) => {
    switch (action.type) {
        case "click": {
            return {
                ...state,
                clicks: state.clicks+1
            }
        }
        default: return state;
    }
};
/**
 * 
 */
const initialState = {
    clicks: 0,
    title: "Hellow World"
};
/**
 * 
 */
const store = createStore(reducer, initialState);
export default store;