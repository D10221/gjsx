import { Window, main_quit } from "@local/gjs";
/**
 *
 * @param window
 */
export default function start(window: Window) {
  window.connect("delete-event", () => main_quit());
  window.show_all();
}
