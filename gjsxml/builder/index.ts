import { Builder, ApplicationWindow } from "@local/gjs/";
import type * as Gio from "@local/gjs/Gjs/Gio-2.0";
import type * as GLib from "@local/gjs/Gjs/GLib-2.0";
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
 * 
 * @param configure 
 * @param xml 
 * @returns 
 */
export function factory<T extends GObject.Object>(
  configure: (builder: Builder) => T,
  xml: string
) {
  return configure(build(xml));
}
/**
 * nah?
 */
export function getObject(builder: Builder) {
  return <T extends GObject.Object = GObject.Object>(name: string) =>
    builder.get_object(name) as T;
}
/**
 *
 * @param window
 * @param callback
 */
export function addAction(
  window: ApplicationWindow,
  actionName: string,
  callback: ($obj: Gio.SimpleAction, parameter: GLib.Variant | null) => void
) {
  // @ts-ignore
  imports.gi.versions.Gio = "2.0";
  const Gio = imports.gi.Gio;
  const action = Gio.SimpleAction.new(actionName, null);
  action.connect("activate", callback);
  window.add_action(action);
}
