import Gtk from "../@types/Gjs/Gtk-3.0";
import v from "../lib/gjsx";

Gtk.init(null);

let i = 0;
function clicked(sender: any) {
  sender.label = `Clicks=${++i}`;
}
//
const widget = (
  <window     
    title="Hellow World"
    border_width={100}
    signals={{ "destroy": () => Gtk.main_quit() }}
  >
    <box>
      <button label="Click me!" signals={{ clicked: clicked }} />
      <button label="Click me!" signals={{ clicked, }} />
    </box>
  </window>
);
widget.show_all();
// mainloop start until quit
Gtk.main();
