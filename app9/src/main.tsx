#!/usr/bin/env -S gjs -m
import Gtk from "gi://Gtk?version=3.0";
import Gio from "gi://Gio?version=2.0";
import { addAction } from "gjsxml/actions";
import { build, getObject } from "gjsxml/builder.js";
import {
  GtkApplicationWindow,
  GtkHeaderBar,
  GtkMenuButton,
} from "gjsxml/components";
import jsx, { render } from "gjsxml/jsx";
import pkg from "../package.json";

try {
  const app = new Gtk.Application({
    application_id: pkg.application_id,
    flags: imports.gi.Gio.ApplicationFlags.FLAGS_NONE,
  });
  let window: Gtk.ApplicationWindow;
  app.connect("activate", (app: Gtk.Application) => {
    if (!app.active_window) {
      const builder = build(
        render(
          <interface>
            <requires lib="gtk+" version="3.20" />
            <GtkApplicationWindow id="main-window">
              <property name="can_focus">False</property>
              <property name="title" translatable="yes">
                {pkg.name}
              </property>
              <property name="default_width">480</property>
              <property name="default_height">240</property>
              <child type="titlebar">
                <GtkHeaderBar
                  id="header"
                  show_close_button={true}
                  visible={true}
                  title={pkg.name}
                  subtitle={pkg.description}
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
            </GtkApplicationWindow>
          </interface>
        )
      );
      window = getObject<Gtk.ApplicationWindow>(builder, "main-window");
      const appMenu = getObject<Gio.MenuModel>(AppMenu(), "menu");
      const menuButton = getObject<Gtk.MenuButton>(builder, "menu-button");
      menuButton.set_menu_model(appMenu);
      window.connect("delete-event", () => {
        Gtk.main_quit(); //exit app
      });
      addAction(window, "quit", (action) => {
        log(`window.action.name: ${action.name}`);
        window.close();
      });
    }
    window.present();
  });
  app.run(null);
  Gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  Gtk.main_quit();
}
/**
 *
 * @returns menu model builder
 */
function AppMenu() {
  return build(
    render(
      <interface>
        <menu id="menu">
          <section>
            <item>
              <attribute name="label">_Quit</attribute>
              <attribute name="action">win.quit</attribute>
            </item>
          </section>
        </menu>
      </interface>
    )
  );
}
