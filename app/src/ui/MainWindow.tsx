import Gtk from "gi://Gtk?version=3.0";
import { builder, build } from "@local/gjsxml/builder";
import { GtkApplicationWindow } from "@local/gjsxml/components";
import jsx, { render } from "@local/gjsxml/jsx";
import { GtkInterfaceRequireVersion } from "@local/gjsxml/gtk-types";
/**
 *
 */
export type MainwindowOptions = {
  /**
   * top level <Object>'s id
   */
  id: string;
  /**
   * window content
   */
  children: any;
<<<<<<< HEAD
  header?: any;
=======
  /**
   * there is no fragment support
   * set here the app header
   */
  header: any;
  /**
   * props to build the window
   */
>>>>>>> a4368c5 (about dialog, from glade)
  windowProps?: Partial<Gtk.ApplicationWindow.ConstructorProperties>;
  /**
   * glade's <interface><require version='?'
   */
  version: GtkInterfaceRequireVersion;
};
/**
 *
 * @param param0
 * @returns
 */
export default function MainWindow({
  id,
  children,
  windowProps,
  version,
}: MainwindowOptions) {
  return build<Gtk.ApplicationWindow>(
    id,
    builder(
      render(
        <interface>
          <requires lib="gtk+" version={version} />
          <GtkApplicationWindow id={id} {...{ ...(windowProps || {}) }}>
            {children}
          </GtkApplicationWindow>
        </interface>
      )
    )
  );
}
