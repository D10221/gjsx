import Gtk, { Box, Builder, Button, Window } from "../@types/Gjs/Gtk-3.0";

Gtk.init(null);
const title = "Hellow World";
let i = 0;
function clicked(sender: Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}
var builder = new Builder();
//
const window = new Window();
window.connect("delete-event", () => Gtk.main_quit());
window.title = title;
window.border_width = 100;

const box = new Box();

const button1 = new Button();
button1.connect("clicked", clicked);
button1.label = "Click me!";
box.add(button1);

const button2 = new Button();
button2.connect("clicked", clicked);
button2.label = "Click me!";
box.add(button2);

window.add(box);

window.show_all();
// mainloop start until quit
Gtk.main();
