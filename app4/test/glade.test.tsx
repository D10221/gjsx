import jsxml from "../src/jsxml";
import render from "../src/render";

// @ts-ignore
const fs = require("fs"); // not adding NODE types
const expected = fs.readFileSync("test/glade.expected.xml", "utf-8");

const jso = (
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
);
// console.dir(x, { depth: 5 });
let actual = render(jso, { pretty: true, headless: true });
if (actual !== expected) {
  fs.writeFileSync("test/glade.actual.xml", actual);
  throw new Error(
    `actual!=expected\nactual:\n${actual}\nexpected:\n${expected}`
  );
}
console.log("OK");
