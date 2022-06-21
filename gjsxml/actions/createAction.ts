import * as Gio from "@local/gjs/Gjs/Gio-2.0";
import * as GLib from "@local/gjs/Gjs/GLib-2.0";

export function createAction(actionName: string, handler: (simpleAction: Gio.SimpleAction, parameter: GLib.Variant | null) => void) {
  // @ts-ignore
  imports.gi.versions.Gio = "2.0";
  const Gio = imports.gi.Gio;
  const action = Gio.SimpleAction.new(actionName, null);
  // Leaking connect return
  action.connect("activate", handler);
  return action;
}
