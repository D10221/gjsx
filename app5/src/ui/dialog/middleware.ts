import { Dispatch } from "redux";
import dialog, { DialogProps } from "./factory";
/**
 * dialog middleware
 */
export default ({
  callback,
  actionType,
  ...props
}: {
  callback: (response: number, close: () => any) => any,
  actionType: string
} & DialogProps) => (store: any) => (next: Dispatch) => async (action: any) => {
  switch (action.type) {
    case actionType: {
      const response = dialog(props);
      await callback(response.run(), () => response.close());
      return;
    }
    default: return next(action);
  }
};
