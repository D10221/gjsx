import { Store } from "redux"
import configure from "./configure"
import ui from "./ui.xml"
/**
 * 
 */
export default ({ store }: { store: Store }) => {
    return configure({ builder: imports.gi.Gtk.Builder.new_from_string(ui, ui.length), store })
}