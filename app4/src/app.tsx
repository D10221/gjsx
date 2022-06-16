import "@local/gjs";
import * as gtk from "@local/gjs/types/gjs/Gtk-3.0";
import { Button, Window, Label } from "@local/gjs/types/gjs/Gtk-3.0";
import build from "./builder";
import { jsxml, render } from "@local/jsxml";
import GtkWindow from "./components/GtkWindow";

gtk.init(null);
const builder = build(
  render(
    <interface>
      <requires lib="gtk+" version="3.18" />
      <GtkWindow
        id="MainWindow"
        can_focus={"False"}
        title="Hello World"
        default_width={480}
        default_height={240}
      >
        <object class="GtkBox">
          <property name="visible">True</property>
          <property name="can_focus">False</property>
          <property name="margin_left">4</property>
          <property name="margin_right">4</property>
          <property name="margin_top">4</property>
          <property name="margin_bottom">4</property>
          <property name="orientation">vertical</property>
          <child>
            <object class="GtkLabel" id="_label1">
              <property name="visible">True</property>
              <property name="can_focus">False</property>
              <property name="label" translatable="yes">
                Hello World!
              </property>
            </object>
            <packing>
              <property name="expand">True</property>
              <property name="fill">True</property>
              <property name="position">0</property>
            </packing>
          </child>
          <child>
            <object class="GtkButton" id="_button1">
              <property name="label" translatable="yes">
                Click me!
              </property>
              <property name="visible">True</property>
              <property name="can_focus">False</property>
              <property name="receives_default">True</property>
            </object>
            <packing>
              <property name="expand">False</property>
              <property name="fill">True</property>
              <property name="position">1</property>
            </packing>
          </child>
        </object>
      </GtkWindow>
    </interface>
  )
);

const title = "Hellow World";
let i = 0;
function clicked(sender: Button) {
  sender.label = `Clicks=${++i}`;
  window.title = title + " Click!";
}

const window: gtk.Window = builder.get_object("MainWindow") as Window;
window.connect("delete-event", () => gtk.main_quit());

const button1 = builder.get_object("_button1") as Button;
button1.connect("clicked", clicked);

const label = builder.get_object("_label1") as Label;

window.show_all();

gtk.main(); // mainloop start until quit
