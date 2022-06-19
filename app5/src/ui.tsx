import { jsxml } from "@local/jsxml";
import {
  GtkBox,
  GtkButton,
  GtkLabel,
  GtkWindow,
  GtkPacking,
} from "@local/gjsxml";

export default (
  <interface>
    <requires lib="gtk+" version="3.0" />
    <GtkWindow
      id="MainWindow"
      can_focus={false}
      title="Hello World"
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
