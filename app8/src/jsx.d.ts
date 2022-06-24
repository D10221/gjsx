import Gtk from "gi://Gtk?version=3.0";
/**
 *
 */
declare global {
  namespace JSX {
    type Maybe<T> = T | null | undefined;

    type IntrinsicElement<T, K extends keyof T = keyof T> = Partial<
      Record<K, T[K]>
    > & {
      connect?: Maybe<Partial<Record<K, Function>>>;
    };

    interface IntrinsicElements {
      aboutDialog: IntrinsicElement<Gtk.AboutDialog.ConstructorProperties>;
      box: IntrinsicElement<Gtk.Box.ConstructorProperties>;
      button: IntrinsicElement<Gtk.Button.ConstructorProperties>;
      label: IntrinsicElement<Gtk.Label.ConstructorProperties>;
      window: IntrinsicElement<Gtk.Window.ConstructorProperties>;
    }
  }
}
