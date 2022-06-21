#!/usr/bin/env gjs
//@ts-ignore
imports.gi.versions.Gtk = "3.0"
const Gtk = imports.gi.Gtk;
((async () => {
  try {
    Gtk.init(null);
    const { default: store } = await import("./store");
    const { default: mainWindow } = await import("./ui/main-window");
    const window = mainWindow({ store });
    window.connect("delete-event", () => Gtk.main_quit());
    window.show_all();
    Gtk.main(); // mainloop start until quit
  } catch (error) {
    log(error);
    Gtk.main_quit();
  }
})())