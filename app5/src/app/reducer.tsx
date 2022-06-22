import { actionTypes } from "app/actions";
import defaultState from "./defaultState";

type State = {
  title: string;
  label: string;
  clicks: number;
  quit: boolean;
};

type Action = {
  type: string;
  payload?: any;
  error?: any;
};

/**
 *
 */
export default (state = defaultState, action: Action): State => {
  switch (action.type) {
    case "click": {
      return {
        ...state,
        clicks: state.clicks + 1,
      };
    }
    case "window:action:one": {
      return {
        ...state,
        label: action.type,
      };
    }
    case actionTypes.QUIT: {
      return {
        ...state,
        label: action.type,
        quit: true,
      };
    }
    default:
      return state;
  }
};
