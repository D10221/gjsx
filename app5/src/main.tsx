#!/usr/bin/env gjs
// @ts-ignore
imports.gi.versions.Gtk = "3.0";
/**
 * Main
 */
(async () => {
  const { Gtk } = imports.gi;
  Gtk.init(null);
  const { default: app } = await import("app");
  app.run(null);
  Gtk.main(); // mainloop start until quit
})()


