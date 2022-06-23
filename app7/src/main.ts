#!/usr/bin/env -S gjs
import type * as gio from "gi://Gio";
import type * as gtk from "gi://Gtk?version=3.0";
import xml from "./ui.xml";
imports.gi.versions.Gtk = "3.0";
const { Gtk } = imports.gi;
try {
  Gtk.init(null);
  const title = "Hellow World";
  let i = 0;
  function clicked(sender: gtk.Button) {
    sender.label = `Clicks=${++i}`;
    window.title = title + " Click!";
  }
    
  const builder = imports.gi.Gtk.Builder.new_from_string(xml, xml.length);
  const window = builder.get_object("MainWindow") as gtk.Window;
  window.connect("delete-event", () => imports.gi.Gtk.main_quit());

  const button1 = builder.get_object("_button1") as gtk.Button;
  button1.connect("clicked", clicked);

  window.show_all();
  Gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  Gtk.main_quit();
}
