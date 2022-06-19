import { build } from "@local/gjsxml";
import { init, main } from "@local/gjs";
import { jsxml, render } from "@local/jsxml/src";
import UI from "./ui";
import configure from "./configure";
import start from "./start";

init(null);
start(configure(build(render(<UI />))));
main(); // mainloop start until quit
