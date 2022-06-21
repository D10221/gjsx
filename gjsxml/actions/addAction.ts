import { ApplicationWindow } from "@local/gjs/";
import * as Gio from "@local/gjs/Gjs/Gio-2.0";
import * as GLib from "@local/gjs/Gjs/GLib-2.0";
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
