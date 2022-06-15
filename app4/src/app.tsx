/**
 *  jsx-xml doesnt work here , is for Node
 *   ;) But you get the gist ?  
 */
import "@local/gjs";
import Gtk from "@local/gjs/@types/Gjs/Gtk-3.0.js"; 
/** @jsx JSXXML */
import { render, JSXXML } from "jsx-xml";

try {
  Gtk.init(null);
  const builder = build(
    render(
      <interface>
        <requires lib="gtk+" version="3.18" />
        <object class="GtkWindow" id="MainWindow">
          <property name="can_focus">False</property>
          <property name="title" translatable="yes">
            Example Window
          </property>
          <property name="default_width">480</property>
          <property name="default_height">240</property>
          <child>
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
          </child>
        </object>
      </interface>
    )
  );

  const title = "Hellow World";
  let i = 0;
  function clicked(sender: Button) {
    sender.label = `Clicks=${++i}`;
    window.title = title + " Click!";
  }

  const window = builder.get_object("MainWindow") as Window;
  window.connect("delete-event", () => Gtk.main_quit());

  const button1 = builder.get_object("_button1") as Button;
  button1.connect("clicked", clicked);

  const label = builder.get_object("_label1") as Label;

  window.show_all();

  Gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  Gtk.main_quit();
}

// declare namespace JSX {
//   interface IntrinsicElements {
//     object: any;
//     property: any;
//     child: any;
//     packing: any;
//   }
// }

function build(string: string) {
  return Builder.new_from_string(string, string?.length);
}
