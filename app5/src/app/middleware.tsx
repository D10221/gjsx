import * as dialog from "ui/dialog";
import { actionTypes } from "app/actions"
/**
 * application middleware
 */
export default function () {
  const { Gtk } = imports.gi;
  return [dialog.middleware({
    actionType: actionTypes.QUIT,
    callback: (response, close) => {
      if (response === Gtk.ResponseType.YES) {
        Gtk.main_quit(); //exit app
      } else {
        close();
      }
    },
    title: "Quit",
    text: "Really?",
    buttons: { yes: Gtk.ResponseType.YES, no: Gtk.ResponseType.NO }
  })];
}
