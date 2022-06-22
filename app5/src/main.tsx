#!/usr/bin/env gjs
import { main, main_quit, init, Application } from "@local/gjs";
import mainWindow from "./ui/main-window";
import store from "./store";

init(null);

const app = new Application({
  application_id: "org.local.app4",
});
app.connect("activate", (app: Application) => {
  let win = app.active_window;
  if (!win) {
    win = mainWindow(store);
    win.connect("delete-event", () => {
      main_quit(); //exit app
    });
  }
  win.present();
});
app.run(null);
main(); // mainloop start until quit
