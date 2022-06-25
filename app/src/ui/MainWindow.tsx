import Gtk from "gi://Gtk?version=3.0";
import { builder, build } from "@local/gjsxml/builder";
import { GtkApplicationWindow } from "@local/gjsxml/components";
import jsx, { render } from "@local/gjsxml/jsx";
/**
 * 
 */
export type MainwindowOptions = {
  id: string;
  children: any;
  header: any;
  windowProps?: Partial<Gtk.ApplicationWindow.ConstructorProperties>;
};
/**
 *
 * @param param0
 * @returns
 */
export default function MainWindow({
  id,
  children,
  header,
  windowProps,
}: MainwindowOptions) {
  return build<Gtk.ApplicationWindow>(
    id,
    builder(
      render(
        <interface>
          <requires lib="gtk+" version="3.20" />
          <GtkApplicationWindow id={id} {...{ ...(windowProps || {}) }}>
            {header}
            {children}
          </GtkApplicationWindow>
        </interface>
      )
    )
  );
}
