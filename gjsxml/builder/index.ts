import type  * as Gtk from "@local/gjs/";
import type * as GObject from "@local/gjs/Gjs/GObject-2.0";
/**
 *
 * @param string
 * @returns
 */
export function build(string: string) {  
  return imports.gi.Gtk.Builder.new_from_string(string, string?.length);
}
/**
 * nah?
 */
export function getObjectFty(builder: Gtk.Builder) {
  return <T extends GObject.Object = GObject.Object>(name: string) =>
    builder.get_object(name) as T;
}
/**
 * nah?
 */
export function getObject<T extends GObject.Object = GObject.Object>(
  builder: Gtk.Builder,
  name: string
) {
  return builder.get_object(name) as T;
}
