#!/usr/bin/env -S gjs
import Gtk from "gi://Gtk?version=3.0";
import xml from "./ui.xml";

try {
  Gtk.init(null);
  let i = 0;
  function clicked(sender: Gtk.Button) {
    sender.label = `Clicks=${++i}`;
  }
  const builder = Gtk.Builder.new_from_string(xml, xml.length);
  const window = builder.get_object("MainWindow") as Gtk.Window;
  const button1 = builder.get_object("_button1") as Gtk.Button;
  window.connect("delete-event", () => Gtk.main_quit());
  button1.connect("clicked", clicked);

  window.show_all();
  Gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  Gtk.main_quit();
}
