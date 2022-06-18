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
import { jsxml, render } from "@local/jsxml";
import {
  GtkBox,
  GtkButton,
  GtkLabel,
  GtkWindow,
  GtkPacking,
} from "@local/gjs/components";

export default (
  <interface>
    <requires lib="gtk+" version="3.18" />
    <GtkWindow
      id="MainWindow"
      can_focus={false}
      title="Hello World #4"
      default_width={480}
      default_height={240}
    >
      <GtkPacking padding={0}>
        <GtkBox
          visible={true}
          can_focus={false}
          margin_left={4}
          margin_right={4}
          margin_bottom={4}
          //@ts-ignore
          orientation={"vertical"}
        >
          <GtkPacking expand={true} fill={true} position={0}>
            <GtkLabel
              id="_label1"
              visible={true}
              can_focus={false}
              label="Hello World"
            />
          </GtkPacking>
          <GtkPacking position={1}>
            <GtkButton
              id="_button1"
              visible={true}
              can_focus={false}
              receives_default={true}
              label={"Click Me"}
            />
          </GtkPacking>
        </GtkBox>
      </GtkPacking>
    </GtkWindow>
  </interface>
);
