/**
 *
 */
export default (
  state: { title: string; label: string; clicks: number },
  action: import("/home/d10221/code/GTK/gjsx/app5/src/redux").Action
): { label: any; title: string; clicks: number } => {
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
    case "window:action:two": {
      return {
        ...state,
        label: action.type,
      };
    }
    default:
      return state;
  }
};
