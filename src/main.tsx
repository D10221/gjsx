
const Gtk = imports.gi.Gtk;
Gtk.init(null);

import { h, render } from "./gjsx.js";

const quit = () => Gtk.main_quit();

let i = 0;
function clicked(sender: any){
  sender.label = `Clicks=${++i}`
}

const el = render(
  <window
    title="Hellow World"
    border_width={100}
    signals={{ "delete-event": quit }}
  >
    <button label="Click me!" signals={{ clicked }} />
  </window>
);
el.show_all();
Gtk.main();

