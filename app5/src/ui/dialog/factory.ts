import { build, getObject } from "@local/gjsxml"
import type * as Gtk from "@local/gjs"
import ui from "./ui"

export type DialogProps = {
    title: string
    text: string
    buttons: Record<string, number>
}

export default ({ title, text, buttons }: DialogProps) => {
    const builder = build(ui)
    const dialog = getObject<Gtk.MessageDialog>(builder, "dialog");
    dialog.title = title;
    dialog.text = text;
    for (const [key, value] of Object.entries(buttons)) {
        dialog.add_button(key, value);
    }
    return dialog
}