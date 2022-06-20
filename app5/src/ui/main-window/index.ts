import { build } from "@local/gjsxml";
import { Store } from "redux";
import configure from "./configure";
import ui from "./ui";
/**
 *
 */
export default (store: Store) =>
  configure({ store, builder: build(ui(store)) });
