import Gtk from "gi://Gtk?version=3.0";
import GObject from "gi://GObject?version=2.0";
/**
 *
 * @param xml
 * @returns
 */
export function builder(xml: string) {
  log(xml)
  return Gtk.Builder.new_from_string(xml, xml.length);
}
/**
 *
 * @param Object id
 * @param builder
 * @returns lots of things
 */
export function build<T extends GObject.Object = GObject.Object>(
  id: string,
  builder: Gtk.Builder
): [Gtk.Builder, T, <C extends GObject.Object>(name: string) => C] {
  return [
    builder,
    getObject<T>(builder, id),
    (n: string) => getObject(builder, n),
  ];
}
export function getObject<T extends GObject.Object = GObject.Object>(
  builder: Gtk.Builder,
  name: string
) {
  return builder.get_object(name) as T;
}
