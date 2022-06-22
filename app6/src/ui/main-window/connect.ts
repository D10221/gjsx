import type * as Gtk from "@local/gjs";
import type * as Gio from "@local/gjs/Gjs/Gio-2.0";
import type { Store } from "redux";
import menu from "./menu";
import { addAction, getObject } from "@local/gjsxml";
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
 * connect: builder -> store -> GObject
 */
export default (builder: Gtk.Builder) => (store: Store) => {
  const window = getObject<Gtk.ApplicationWindow>(builder, "mainWindow");
  const button1 = getObject<Gtk.Button>(builder, "button1");
  const menuButton = getObject<Gtk.MenuButton>(builder, "menu-button");
  const menuModel = getObject<Gio.MenuModel>(menu, "menu");
  menuButton.set_menu_model(menuModel);
  //
  const setState = (store: Store) => () => {
    const { title, clicks } = store.getState();
    window.title = title;
    button1.label = clicks == 0 ? "Click me!" : `Clicks=${clicks}`;
  };
  store.subscribe(setState(store));
  //
  button1.connect("clicked", () => store.dispatch(actions.click()));

  addAction(window, "about", (action) => log(`action.name:${action.name}`));

  addAction(window, "quit", (_) => window.emit("delete-event", null));

  store.dispatch(actions.noop());
  return window;
};
