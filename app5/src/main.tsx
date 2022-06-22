#!/usr/bin/env gjs

import * as dialog from "./ui/dialog";

// @ts-ignore
imports.gi.versions.Gtk = "3.0";
const { Gtk } = imports.gi;
/** */
(async () => {
  Gtk.init(null);
  const { default: getStore } = await import("./store");
  const { default: mainWindow } = await import("./ui/main-window");
  const pkg = await import("../package.json");
  log(`pkg.id=${pkg.id}`);
  //
  const app = new Gtk.Application({
    application_id: pkg.id,
    flags: imports.gi.Gio.ApplicationFlags.FLAGS_NONE,
  });
  app.connect("activate", (app) => {
    let win = app.active_window;
    if (!win) {
      win = mainWindow(getStore(dialog.middleware({
        callback: (response, close) => {
          if (response === Gtk.ResponseType.YES) {
            win.close();
          } else{
            close()
          }
        },
        title: "Quit",
        text: "Really?",
        buttons: { yes: Gtk.ResponseType.YES, no: Gtk.ResponseType.NO }
      })));
      win.connect("delete-event", () => {
        Gtk.main_quit(); //exit app
      });
    }
    win.present();
  });
  app.run(null);
  Gtk.main(); // mainloop start until quit
})();


