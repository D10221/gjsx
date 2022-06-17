import { Window } from "@local/gjs/types/gjs/Gtk-3.0";
import jsxml from "@local/jsxml";
import GtkObjectProperty from "./GtkObjectProperty";
/**
 *
 */
type GtkWindowProps = Omit<Partial<Pick<Window, keyof Window>>, "add"> & {
  children?: any;
  id?: string;
};
/**
 *
 */
export default function GtkWindow({ children, id, ...props }: GtkWindowProps) {
  return (
    <object class="GtkWindow" id={id}>
      {Object.entries(props).map(([key, value]) => (
        <GtkObjectProperty key={key} value={value} />
      ))}
      <child>{children}</child>
    </object>
  );
}
