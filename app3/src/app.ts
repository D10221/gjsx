import * as gtk from "@local/gjs";
// @ts-ignore
import xml from "./app.xml";

try {
  gtk.init(null);
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

  gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  gtk.main_quit();
}
