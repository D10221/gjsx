import type { Builder, Button, Window } from "@local/gjs";
import { Store } from "redux";
/**
 * ???
 */
const actions = {
  click() {
    return { type: "click" };
  },
  noop() {
    return { type: "" };
  },
};
/**
 *
 */
export default ({ builder, store }: { builder: Builder; store: Store }) => {
  const window: Window = builder.get_object("mainWindow") as Window;
  const button1: Button = builder.get_object("button1") as Button;

  const setState = (store: Store) => () => {
    const { title, clicks } = store.getState();
    window.title = title;
    button1.label = clicks == 0 ? "Click me!" : `Clicks=${clicks}`;
  };
  store.subscribe(setState(store));
  button1.connect("clicked", () => store.dispatch(actions.click()));
  store.dispatch(actions.noop());
  return window;
};
