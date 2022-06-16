import * as gtk from "@local/gjs/types/gjs/Gtk-3.0";
import v from "./gjsx";

gtk.init(null);

const title = "Hellow World";
let i = 0;
function clicked(sender: gtk.Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}
//
const window: gtk.Window = (
  <window
    title={title}
    border_width={100}
    signals={{ destroy: () => gtk.main_quit() }}
  >
    <box>
      <button label="Click me!" signals={{ clicked }} />
      <button label="Click me!" signals={{ clicked }} />
    </box>
  </window>
);
window.show_all();
// mainloop start until quit
gtk.main();
