import { Window, init, main, main_quit, build } from "@local/gjs";
import { jsxml, render } from "@local/jsxml/src";
import UI from "./ui";
import app from "./app";

init(null);

const xml = render(<UI />);
const builder = build(xml);
app(builder);

const window = builder.get_object("MainWindow") as Window;
window.connect("delete-event", () => main_quit());
window.show_all();

main(); // mainloop start until quit
