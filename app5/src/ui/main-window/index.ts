import { Store } from "redux";
import connect from "./connect";
import window from "./window";
/**
 * pipe?
 */
export default (store: Store) => connect(window(store))(store);
