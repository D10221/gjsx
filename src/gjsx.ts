imports.gi.versions.Gtk = "3.0";
export const Gtk = imports.gi.Gtk;
/**
 * 
 */
export type Signals = {
  [key: string]: (...args: any[]) => any;
};
/**
 * 
 */
export type Props = { [key: string]: any, signals?: Signals }
/**
 * 
 */
export type VirtualWidget = {
  widget: string,
  props: Props,
  children?: any[] | null | undefined
}
/**
 * virtual widget
 */
export function v(
  widget: string,
  props: Props,
  ...children: any[]
): VirtualWidget {
  return {
    widget,
    props,
    children,
  };
}
/**
 * virtual widget builder
 */
export function b({
  widget,
  props,
  children,
}: VirtualWidget) {
  const { signals, ...attributes } = props;
  const el: any = Object.keys(attributes)
    .reduce(
      (out, key) => {
        out[key] = attributes[key];
        return out;
      },
      new (Gtk as any)[capitalize(widget)]()
    );
  if (children) {
    for (let child of children) {
      el.add(b(child))
    }
  }
  if (signals) {
    for (let signal of Object.keys(signals)) {
      el.connect(signal, signals[signal]);
    }
  }
  return el;
}
/**
 *
 * @param string
 * @returns
 */
function capitalize(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}