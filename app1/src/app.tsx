import Gtk, { Button, Window } from "@local/gjs/@types/Gjs/Gtk-3.0.js";
import v from "./gjsx";

Gtk.init(null);

const title = "Hellow World";
let i = 0;
function clicked(sender: Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}
//
const window: Window = (
  <window
    title={title}
    border_width={100}
    signals={{ destroy: () => Gtk.main_quit() }}
  >
    <box>
      <button label="Click me!" signals={{ clicked }} />
      <button label="Click me!" signals={{ clicked }} />
    </box>
  </window>
);
window.show_all();
// mainloop start until quit
Gtk.main();
