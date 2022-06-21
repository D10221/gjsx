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
export default (state: State, action: Action): State => {
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
    case "window:action:quit": {
      return {
        ...state,
        quit: true,
      };
    }
    default:
      return state;
  }
};
