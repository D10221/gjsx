import Gtk from "./gjs/Gtk-3.0.js"; 

Gtk.init(null);
const title = "Hellow World";
let i = 0;
function clicked(sender: Gtk.Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}
//
const window = new Gtk.Window();
window.connect("delete-event", () => Gtk.main_quit());
window.title = title;
window.border_width = 100;

const box = new Gtk.Box();

const button1 = new Gtk.Button();
button1.connect("clicked", clicked);
button1.label = "Click me!";
box.add(button1);

const button2 = new Gtk.Button();
button2.connect("clicked", clicked);
button2.label = "Click me!";
box.add(button2);

window.add(box);

window.show_all();
// mainloop start until quit
Gtk.main();
