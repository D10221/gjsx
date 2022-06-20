import { build } from "@local/gjsxml";
import { Store } from "../../redux";
import configure from "./configure";
import ui from "./ui";
/**
 * 
 */
export default (store: Store<any, any>) =>
  configure({ store, builder: build(ui(store)) });
