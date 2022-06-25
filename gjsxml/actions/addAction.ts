import { ApplicationWindow } from "gi://Gtk?version=3.0";
import type Gio from "gi://Gio?version=2.0";
import type GLib from "gi://GLib?version=2.0";
import { createAction } from "./createAction";
/**
 *
 * @param window
 * @param handler
 * @retuns unsubscribe
 */
export function addAction(
  window: ApplicationWindow,
  actionName: string,
  handler: (
    simpleAction: Gio.SimpleAction,
    parameter: GLib.Variant | null
  ) => void
) {
  window.add_action(createAction(actionName, handler));
  return () => window.remove_action(actionName);
}
