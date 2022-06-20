import * as gtk from "@local/gjs";

gtk.init(null);
const title = "Hellow World";
let i = 0;
function clicked(sender: gtk.Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}
//
const window = new gtk.Window();
window.connect("delete-event", () => gtk.main_quit());
window.title = title;
window.border_width = 100;

const box = new gtk.Box();

const button1 = new gtk.Button();
button1.connect("clicked", clicked);
button1.label = "Click me!";
box.add(button1);

const button2 = new gtk.Button();
button2.connect("clicked", clicked);
button2.label = "Click me!";
box.add(button2);

window.add(box);

window.show_all();
// mainloop start until quit
gtk.main();
