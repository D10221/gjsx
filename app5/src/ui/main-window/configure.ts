import {
  ApplicationWindow,
  Builder,
  Button,
  Label,
  MenuButton,
} from "@local/gjs";
import { MenuModel } from "@local/gjs/Gjs/Gio-2.0";
import { addAction, build, getObjectFty } from "@local/gjsxml";
import type { Store } from "redux";
import appMenu from "./menu";
/**
 * @param context
 */
export default ({ store, builder }: { store: Store; builder: Builder }) => {
  // helper
  const getObj = getObjectFty(builder);
  // UI
  const button = getObj<Button>("_button1");
  const menuButton = getObj<MenuButton>("menu-button");
  const window = getObj<ApplicationWindow>("MainWindow");
  const label1 = getObj<Label>("_label1");
  // State change subscription
  store.subscribe(() => {
    const { title, label, clicks } = store.getState();
    window.title = title;
    label1.label = label;
    button.label = clicks == 0 ? "Click me!" : `clicks=${clicks}`;
  });
  // connect dispatch
  button.connect("clicked", () => store.dispatch({ type: "click" }));
  addAction(window, "one", (action) =>
    store.dispatch({ type: `window:action:${action.name}` })
  );
  addAction(window, "two", (action) =>
    store.dispatch({ type: `window:action:${action.name}` })
  );
  // Attach menu
  menuButton.set_menu_model(build(appMenu).get_object("menu") as MenuModel);
  return window;
};
