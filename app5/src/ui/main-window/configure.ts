import {
  ApplicationWindow,
  Builder,
  Button,
  Label,
  MenuButton,
} from "@local/gjs";
import { MenuModel } from "@local/gjs/Gjs/Gio-2.0";
import { addAction, build, getObject } from "@local/gjsxml";
import { Store } from "../../redux";
import appMenu from "./menu";
/**
 *
 */
export default (store: Store<any, any>, builder: Builder) => {
  const get = getObject(builder);

  const button = get<Button>("_button1");
  const menuButton = get<MenuButton>("menu-button");
  const window = get<ApplicationWindow>("MainWindow");
  const label1 = get<Label>("_label1");
  
  store.subscribe(() => {
    const { title, label, clicks } = store.getState();
    window.title = title;
    label1.label = label;
    button.label = clicks == 0 ? "Click me!" : `clicks=${clicks}`;
  });
  
  button.connect("clicked", () => store.dispatch({ type: "click" }));

  addAction(window, "one", (action) =>
    store.dispatch({ type: `window:action:${action.name}` })
  );
  addAction(window, "two", (action) =>
    store.dispatch({ type: `window:action:${action.name}` })
  );
  // build menu
  menuButton.set_menu_model(build(appMenu).get_object("menu") as MenuModel);
  return window;
};
