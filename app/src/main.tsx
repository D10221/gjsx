#!/usr/bin/env -S gjs -m
import Gtk from "gi://Gtk?version=3.0";
import { addAction } from "@local/gjsxml/actions";
import jsx from "@local/gjsxml/jsx";
import pkg from "../package.json";
import { AppMenu } from "ui/AppMenu";
import MainWindow from "ui/MainWindow";
import AppHeaderBar from "ui/AppHeaderBar.js";
import AppMenuButton from "ui/AppMenuButton.js";

try {
  const app = new Gtk.Application({
    application_id: pkg.application_id,
    flags: imports.gi.Gio.ApplicationFlags.FLAGS_NONE,
  });

  app.connect("activate", (app: Gtk.Application) => {
    if (!app.active_window) {
      const [, window, getObject] = MainWindow({
        id: "main-window",
        windowProps: { default_width: 800, default_height: 600 },
        header: (
          <AppHeaderBar
            id="app-header-bar"
            title={pkg.title}
            subtitle={pkg.description}
          >
            <AppMenuButton id="app-header-bar-menu-button" />
          </AppHeaderBar>
        ),
        children: (
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
        ),
      });

      const menuButton = getObject<Gtk.MenuButton>(
        "app-header-bar-menu-button"
      );
      // TODO: prefix , suffix children ids?
      //    ... or use {children}
      const [, appMenu] = AppMenu({ id: "app-header-bar-menu", target: "win" });
      menuButton.set_menu_model(appMenu);

      // add win.* action, matches appmenu.target
      addAction(window, "quit", (action) => {
        log(`window.action.name: ${action.name}`);
        window.close();
      });

      window.connect("delete-event", () => {
        Gtk.main_quit(); //exit app
      });
      window.present();
    }
  });
  app.run(null);
  Gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  Gtk.main_quit();
}
