import Gtk from "gi://Gtk?version=3.0";
import GObject from "gi://GObject?version=2.0";
/**
 *
 * @param xml
 * @returns
 */
export function build(xml: string) {
  return Gtk.Builder.new_from_string(xml, xml.length);
}
export function getObject<T extends GObject.Object = GObject.Object>(
  builder: Gtk.Builder,
  name: string
) {
  return builder.get_object(name) as T;
}
