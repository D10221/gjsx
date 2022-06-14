import Gtk, { Button, Window } from "../@types/Gjs/Gtk-3.0";
import v from "../lib/gjsx";

Gtk.init(null);

let i = 0;
function clicked(sender: Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}
const title = "Hellow World";
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
