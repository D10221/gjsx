import { Builder } from "@local/gjs/types/gjs/Gtk-3.0";
import type * as GObject from "@local/gjs/types/gjs/GObject-2.0";

export function build(string: string) {
  return Builder.new_from_string(string, string?.length);
}
/**
 * nah
 */
export function getObject(builder: Builder) {
  return <T extends GObject.Object = GObject.Object>(name: string) =>
    builder.get_object(name) as T;
}
