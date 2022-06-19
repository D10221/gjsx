import jsxml from "@local/jsxml";
import GtkObjectProperty from "./GtkObjectProperty";
import { WindowProps } from "@local/gjsxml/proptypes/Gtk-3.0";
/**
 *
 */
type GtkWindowProps = WindowProps & {
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
