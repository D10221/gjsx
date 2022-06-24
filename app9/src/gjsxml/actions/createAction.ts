import type Gio from "gi://Gio?version=2.0";
import type GLib from "gi://GLib?version=2.0";

export function createAction(
  actionName: string,
  handler: (
    simpleAction: Gio.SimpleAction,
    parameter: GLib.Variant | null
  ) => void
) {
  const Gio = imports.gi.Gio;
  const action = Gio.SimpleAction.new(actionName, null);
  // Leaking connect return
  action.connect("activate", handler);
  return action;
}
