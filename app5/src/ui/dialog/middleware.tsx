import { Dispatch } from "redux";
import dialog, { DialogProps } from "./factory";

export default ({
  callback,
  ...props
}: {
  callback: (response: number, close:()=> any) => any
} & DialogProps) => (store: any) => (next: Dispatch) => async (action: any) => {
  switch (action.type) {
    case "window:action:quit": {
      const response = dialog(props);
      await callback(response.run(), ()=> response.close());
      return; 
    }
    default: return next(action);
  }
};
