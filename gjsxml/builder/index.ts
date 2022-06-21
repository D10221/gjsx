import { Builder } from "@local/gjs/";
import type * as GObject from "@local/gjs/Gjs/GObject-2.0";
/**
 *
 * @param string
 * @returns
 */
export function build(string: string) {
  return Builder.new_from_string(string, string?.length);
}
/**
 * nah?
 */
export function getObjectFty(builder: Builder) {
  return <T extends GObject.Object = GObject.Object>(name: string) =>
    builder.get_object(name) as T;
}
/**
 * nah?
 */
export function getObject<T extends GObject.Object = GObject.Object>(
  builder: Builder,
  name: string
) {
  return builder.get_object(name) as T;
}
