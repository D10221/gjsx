import type * as gtk from "@local/gjs";
import type * as gio from "@local/gjs/Gjs/Gio-2.0";
import type { Store } from "redux";
import { addAction, getObject } from "@local/gjsxml";
import menu from "./menu";
import { actions } from "app/actions";
/**
 * @param context
 */
export default (builder: gtk.Builder) => (store: Store) => {
  // helper
  // UI
  const button = getObject<gtk.Button>(builder, "_button1");
  const menuButton = getObject<gtk.MenuButton>(builder, "menu-button");
  const window = getObject<gtk.ApplicationWindow>(builder, "MainWindow");
  const label1 = getObject<gtk.Label>(builder, "_label1");
  const menuModel = getObject<gio.MenuModel>(menu, "menu");
  // State change subscription
  store.subscribe(() => {
    const { app: { title, label, clicks } } = store.getState();
    window.title = title;
    label1.label = label;
    button.label = clicks == 0 ? "Click me!" : `clicks=${clicks}`;
  });
  // connect dispatch
  button.connect("clicked", () => store.dispatch({ type: "click" }));
  addAction(window, "one", (action) =>
    store.dispatch({ type: `window:action:${action.name}` })
  );
  addAction(window, "quit", (_action) =>
    store.dispatch(actions.quit())
  );
  // Attach menu
  menuButton.set_menu_model(menuModel);
  store.dispatch({ type: "noop" })
  return window;
};

