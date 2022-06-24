import Gtk from "gi://Gtk?version=3.0";
/**
 *
 */
declare global {

  namespace JSX {

    type ConnectCallBack<T> = (sender: T, ...args: any[]) => void;

    type Maybe<T> = T | null | undefined;

    type IntrinsicElement<T, P, K extends keyof P = keyof P> = Partial<
      Record<K, P[K]>
    > & {
      $connect?: Maybe<Partial<Record<K, ConnectCallBack<T>>>>;
      $ref?: (x: T) => void;
    };

    interface IntrinsicElements {
      aboutDialog: IntrinsicElement<
        Gtk.AboutDialog,
        Gtk.AboutDialog.ConstructorProperties
      >;
      box: IntrinsicElement<Gtk.Box, Gtk.Box.ConstructorProperties>;
      button: IntrinsicElement<Gtk.Button, Gtk.Button.ConstructorProperties>;
      label: IntrinsicElement<Gtk.Label, Gtk.Label.ConstructorProperties>;
      window: IntrinsicElement<Gtk.Window, Gtk.Window.ConstructorProperties>;
    }
  }
}
