#!/usr/bin/env -S gjs -m
import Gtk from "gi://Gtk?version=3.0";
import { addAction } from "@local/gjsxml/actions";
import jsx, { fragment } from "@local/gjsxml/jsx";
import pkg from "../package.json";
import { AppMenu } from "ui/AppMenu";
import MainWindow from "ui/MainWindow";
import AppHeaderBar from "ui/AppHeaderBar.js";
import AppMenuButton from "ui/AppMenuButton.js";
import { GtkBox, GtkButton, GtkLabel } from "@local/gjsxml/components.js";
import AppAboutDialog from "ui/AppAboutDialog";

try {
  const app = new Gtk.Application({
    application_id: pkg.application_id,
    flags: imports.gi.Gio.ApplicationFlags.FLAGS_NONE,
  });

  app.connect("activate", (app: Gtk.Application) => {
    if (!app.active_window) {
      const [, window, getObject] = MainWindow({
        version: "3.20",
        id: "main-window",
        windowProps: {
          default_width: 480,
          default_height: 240,
        },
        children: (
          <child>
            <GtkBox
              visible={true}
              can_focus={false}
              orientation={Gtk.Orientation.VERTICAL}
            >
              <child>
                <GtkLabel
                  id="_label1"
                  visible={true}
                  can_focus={false}
                  label="Hello World!"
                />
                <packing>
                  <property name="expand">True</property>
                  <property name="fill">True</property>
                  <property name="position">0</property>
                </packing>
              </child>
              <child>
                <GtkButton
                  id="_button1"
                  label="Click me!"
                  visible={true}
                  can_focus={true}
                  receives_default={true}
                  expand={false}
                ></GtkButton>
                <packing>
                  <property name="fill">True</property>
                  <property name="position">1</property>
                </packing>
              </child>
            </GtkBox>
          </child>
        ),
      });

      const menuButton = getObject<Gtk.MenuButton>(
        "app-header-bar-menu-button"
      );
      // TODO: prefix , suffix children ids?
      //    ... or use {children}
      const [, appMenu] = AppMenu({ id: "app-header-bar-menu", target: "win" });
      menuButton!.set_menu_model(appMenu);

      // add win.* action, matches appmenu.target
      addAction(window!, "quit", (action) => {
        log(`window.action.${action.name}`);
        window!.close();
      });

      addAction(window!, "about", (action) => {
        log(`window.action.${action.name}`);
        const [, aboutDialog] = AppAboutDialog({
          id: "about-dialog",
          authors: pkg.author,
          comments: pkg.comments,
          copyright: pkg.copyright,
          website: pkg.homepage,
          programName: pkg.friendlyName,
          version: `v${pkg.version}`,
        });
        aboutDialog!.present();
      });

      // App logic
      const _button1 = getObject<Gtk.Button>("_button1");
      let clicks = 0;
      _button1!.connect("clicked", (button) => {
        button.label = `Clicks=${++clicks}`;
      });

      window!.connect("delete-event", () => {
        Gtk.main_quit(); //exit app
      });
      window!.present();
    }
  });
  app.run(null);
  Gtk.main(); // mainloop start until quit
} catch (error) {
  log(error);
  Gtk.main_quit();
}
