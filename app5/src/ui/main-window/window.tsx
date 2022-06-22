import {
  GtkApplicationWindow,
  GtkBox,
  GtkButton,
  GtkHeaderBar,
  GtkLabel,
  GtkMenuButton,
  Packing,
} from "@local/gjsxml";
import { jsxml, render } from "@local/jsxml";
import { build } from "@local/gjsxml";
import { Store } from "redux";
/**
 * @params state
 */
export default (store: Store) => {
  const { title } = store.getState();
  return build(
    render(
      <interface>
        <requires lib="gtk+" version="3.24" />
        <GtkApplicationWindow
          id="MainWindow"
          can_focus={false}
          title={title}
          default_width={480}
          default_height={240}
        >
          <child type="titlebar">
            <GtkHeaderBar
              id="header"
              show_close_button={true}
              visible={true}
              title={title}
              subtitle={title + " subtitle"}
            >
              <child>
                <GtkMenuButton
                  id="menu-button"
                  visible={true}
                  can_focus={true}
                  focus_on_click={true}
                  receives_default={true}
                ></GtkMenuButton>
              </child>
            </GtkHeaderBar>
          </child>
          <child>
            <GtkBox
              visible={true}
              can_focus={false}
              margin_left={4}
              margin_right={4}
              margin_bottom={4}
              //@ts-ignore
              orientation={"vertical"}
            >
              <child>
                <GtkLabel
                  id="_label1"
                  visible={true}
                  can_focus={false}
                  label="Hello World"
                />
                <Packing expand={true} fill={true} position={0} />
              </child>
              <child>
                <GtkButton
                  id="_button1"
                  visible={true}
                  can_focus={false}
                  receives_default={true}
                  label={"Click Me"}
                />
                <Packing position={1} />
              </child>
            </GtkBox>
          </child>
        </GtkApplicationWindow>
      </interface>
    )
  );
};
