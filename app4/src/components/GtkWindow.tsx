import { Window } from "@local/gjs/types/gjs/Gtk-3.0";
import { jsxml, render } from "@local/jsxml";

type PropsOf<T, K extends keyof T = keyof T> = Record<K, T[K]>;

type GtkWindowProps = Omit<Partial<PropsOf<Window>>, "add"> & {
  children?: any;
  id?: string;
};

export default function GtkWindow({ children, id, ...props }: GtkWindowProps) {
  return (
    <object class="GtkWindow" id={id}>
      {Object.entries(props).map(([key, value]) => {
        return <property name={key}>{value}</property>;
      })}
      <child>{children}</child>
    </object>
  );
}
