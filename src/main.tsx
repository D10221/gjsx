
import { v, b, Gtk } from "./gjsx";

Gtk.init(null);

let i = 0;
function clicked(sender: any) {
  sender.label = `Clicks=${++i}`
}
//
const widget = b(
  <window
    title="Hellow World"
    border_width={100}
    signals={{ "delete-event": () => Gtk.main_quit() }}
  >
    <button label="Click me!" signals={{ clicked }} />
  </window>
);
widget.show_all();
// mainloop start until quit
Gtk.main();
