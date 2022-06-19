import { Window, init, main, main_quit } from "@local/gjs";
import { build } from "@local/gjsxml";
import { jsxml, render } from "@local/jsxml/src";
import UI from "./ui";
import configure from "./configure";

init(null);

const { window } = configure(build(render(<UI />)));
window.connect("delete-event", () => main_quit());
window.show_all();

main(); // mainloop start until quit
