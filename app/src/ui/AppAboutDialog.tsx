import Gtk from "gi://Gtk?version=3.0";
import { builder, build } from "@local/gjsxml/builder";
import jsx, { render } from "@local/gjsxml/jsx.js";
/**
 *
 */
export type AppAboutDialogProps = {
  id: string;
  copyright: string;
  comments: string;
  website: string;
  authors: string;
  programName: string;
  version: string;
};
/**
 * AppAboutDialog
 * @returns [builder, element, getObject]
 */
export default ({
  id,
  copyright,
  comments,
  website,
  authors,
  programName,
  version,
}: AppAboutDialogProps) =>
  build<Gtk.AboutDialog>(
    id,
    builder(
      render(
        <interface>
          <object class="GtkAboutDialog" id={id}>
            <property name="can-focus">False</property>
            <property name="type-hint">dialog</property>
            <property name="program-name">{programName}</property>
            <property name="version">{version}</property>
            <property name="copyright" translatable="yes">
              {copyright}
            </property>
            <property name="comments" translatable="yes">
              {comments}
            </property>
            <property name="website">{website}</property>
            <property name="authors">{authors}</property>
            <property name="license-type">mit-x11</property>
            <child internal-child="vbox">
              <object class="GtkBox">
                <property name="can-focus">False</property>
                <property name="orientation">vertical</property>
                <property name="spacing">2</property>
                <child internal-child="action_area">
                  <object class="GtkButtonBox">
                    <property name="can-focus">False</property>
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
                <child>
                  <placeholder />
                </child>
              </object>
            </child>
          </object>
        </interface>
      )
    )
  );
