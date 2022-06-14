import Gtk from "../@types/Gjs/Gtk-3.0";
// import imports from "../@types/Gjs/index"
// imports.gi.versions.Gtk = "3.0";
/**
 *
 */
export type Signals = {
  [key: string]: (...args: any[]) => any;
};
/**
 *
 */
export type Props = { [key: string]: any; signals?: Signals };
/**
 *
 */
export type VirtualWidget = {
  widget: string;
  props: Props;
  children?: any[] | null | undefined;
};
/**
 * Widget Tree Builder
 */
export default function v(elName: keyof typeof Gtk, props: Props = {}, ...children: any[]): VirtualWidget {
  const el = new (Gtk as any)[capitalize(elName)]();
  const { signals, ...attributes } = props || {};
  if (attributes) {
    for (let key of Object.keys(attributes)) {
      el[key] = attributes[key]
    }
  }
  if (signals) {
    for (let signal of Object.keys(signals)) {
      el.connect(signal, signals[signal]);
    }
  }
  if (children) {
    for (let child of children) {
      el.add(child);
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
