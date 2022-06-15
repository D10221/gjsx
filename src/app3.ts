import "../@types/Gjs";
import Gtk, { Builder, Button, Window } from "../@types/Gjs/Gtk-3.0";
// @ts-ignore
import xml from "./app3.xml";

try {
  Gtk.init(null);
  const title = "Hellow World";
  let i = 0;
  function clicked(sender: Button) {
    sender.label = `Clicks=${++i}`;
    window.title = title + " Click!";
  }

  const builder = Builder.new_from_string(xml, xml.length);
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
