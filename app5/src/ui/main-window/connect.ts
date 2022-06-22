import type * as Gtk from "@local/gjs";
import type * as Gio from "@local/gjs/Gjs/Gio-2.0";
import type { Store } from "redux";
import { addAction, getObject } from "@local/gjsxml";
import menu from "./menu";
/**
 * @param context
 */
export default (builder: Gtk.Builder) => (store: Store) => {
  // helper
  // UI
  const button = getObject<Gtk.Button>(builder, "_button1");
  const menuButton = getObject<Gtk.MenuButton>(builder, "menu-button");
  const window = getObject<Gtk.ApplicationWindow>(builder, "MainWindow");
  const label1 = getObject<Gtk.Label>(builder, "_label1");
  const menuModel = getObject<Gio.MenuModel>(menu, "menu");
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
  addAction(window, "quit", (action) =>
    store.dispatch({ type: `window:action:${action.name}` })
  );
  // Attach menu
  menuButton.set_menu_model(menuModel);
  return window;
};

