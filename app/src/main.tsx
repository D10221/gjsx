import "@local/gjs";
import {
  Button,
  Window,
  Label,
  init,
  main,
  main_quit,
} from "@local/gjs/types/gjs/Gtk-3.0";
import build from "./builder";
import { jsxml, render } from "@local/jsxml/src";
import App from "./app";

init(null);

const xml = render(<App />);
log(xml)
const builder = build(xml);

const title = "Hellow World";
let i = 0;
function clicked(sender: Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}

const window: Window = builder.get_object("MainWindow") as Window;
window.connect("delete-event", () => main_quit());

const button1 = builder.get_object("_button1") as Button;
button1.connect("clicked", clicked);

const label = builder.get_object("_label1") as Label;

window.show_all();

main(); // mainloop start until quit
