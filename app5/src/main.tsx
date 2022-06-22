#!/usr/bin/env gjs
// @ts-ignore
imports.gi.versions.Gtk = "3.0";
const { Gtk } = imports.gi;
/** */
(async () => {  
  Gtk.init(null);
  const { default: store } = await import("./store");
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
      win = mainWindow(store);      
      win.connect("delete-event", () => {        
        Gtk.main_quit(); //exit app
      });
    }
    win.present();
  });
  app.run(null);
  Gtk.main(); // mainloop start until quit
})();
