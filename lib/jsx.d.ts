/**
 *
 */
declare namespace JSX {
  type Maybe<T> = T | null | undefined;

  type IntrinsicElement<T, K extends keyof T = keyof T> = Partial<
    Record<K, T[K]>
  > & {
    signals?: Maybe<Partial<Record<K, Function>>>;
  };

  interface IntrinsicElements {
    window: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Window>;
    box: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Box>;
    button: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Button>;
  }
}
