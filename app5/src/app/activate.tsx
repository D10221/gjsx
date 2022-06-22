import createStore from "store";
import mainWindow from "ui/main-window";
import type * as gtk from "@local/gjs";
import middleware from "./middleware";
import reducer from "./reducer";
/**
 * application activate signal callback
 */
export default (app: gtk.Application) => {
  const { Gtk } = imports.gi;
  let win = app.active_window;
  if (!win) {
    const store = createStore({}, { app: reducer }, ...middleware());
    win = mainWindow(store);
    win.connect("delete-event", () => {
      Gtk.main_quit(); //exit app
    });
  }
  win.present();
}