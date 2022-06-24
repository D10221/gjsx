import Gtk from "gi://Gtk?version=3.0";
import gjsx from "./gjsx";

Gtk.init(null);

const title = "Hellow World";
let i = 0;
function clicked(sender: Gtk.Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
  const a = <aboutDialog></aboutDialog>;
  a.present();
}
//
const window: Gtk.Window = (
  <window
    title={title}
    border_width={100}
    connect={{ destroy: () => Gtk.main_quit() }}
  >
    <box>
      <button label="Click me!" connect={{ clicked }} />
      <button label="Click me!" connect={{ clicked }} />
    </box>
  </window>
);
window.show_all();
// mainloop start until quit
Gtk.main();
