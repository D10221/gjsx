import { Application, ApplicationWindow, Button, MenuButton } from "@local/gjs";
import {
  factory,
  getObject,
  GtkApplicationWindow,
  GtkBox,
  GtkButton,
  GtkHeaderBar,
  GtkLabel,
  GtkMenuButton,
  GtkPacking
} from "@local/gjsxml";
import { jsxml, render } from "@local/jsxml";
import appMenu from "./app-menu";
/**
 *
 */
export default ({ title, app }: { title: string; app?: Application }) => {
  //
  return factory(
    /*configure: */ (builder) => {
      const get = getObject(builder);

      let i = 0;
      function clicked(sender: Button) {
        sender.label = `Clicks=${++i}`;
      }

      get<Button>("_button1").connect("clicked", clicked);

      const menuButton = get<MenuButton>("menu-button");
      const window = builder.get_object("MainWindow") as ApplicationWindow;
      appMenu({ menuButton, window });

      return window;
    },
    /*xml: */ render(
      <interface>
        <requires lib="gtk+" version="3.0" />
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
          <GtkPacking expand={true}>
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
        </GtkApplicationWindow>
      </interface>
    )
  );
};