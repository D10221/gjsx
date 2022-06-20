//@ts-ignore
imports.gi.versions.Gtk="3.0"
import type { Button, Window } from "@local/gjs"
const Gtk = imports.gi.Gtk;
// @ts-ignore
import xml from "./app.xml";

try {
  Gtk.init(null);
  const title = "Hellow World";
  let i = 0;
  function clicked(sender: Button) {
    sender.label = `Clicks=${++i}`;
    window.title = title + " Click!";
  }

  const builder = Gtk.Builder.new_from_string(xml, xml.length);
  const window = builder.get_object("MainWindow") as Window;
  window.connect("delete-event", () => Gtk.main_quit());

  const button1 = builder.get_object("_button1") as Button;
  button1.connect("clicked", clicked);

  window.show_all();

  Gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  Gtk.main_quit();
}
