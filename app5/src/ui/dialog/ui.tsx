import { render, jsxml } from "@local/jsxml";

export default render(
  <interface>
    <object class="GtkMessageDialog" id="dialog">
      <property name="can-focus">False</property>
      <property name="type-hint">dialog</property>
      <child internal-child="vbox">
        <object class="GtkBox" id="dialog1">
          <property name="can-focus">False</property>
          <property name="orientation">vertical</property>
          <property name="spacing">2</property>
          <child internal-child="action_area">
            <object class="GtkButtonBox">
              <property name="can-focus">False</property>
              <property name="homogeneous">True</property>
              <property name="layout-style">end</property>
              <child>
                <placeholder />
              </child>
              <child>
                <placeholder />
              </child>
            </object>
            <packing>
              <property name="expand">False</property>
              <property name="fill">False</property>
              <property name="position">0</property>
            </packing>
          </child>
        </object>
      </child>
    </object>
  </interface>
);
