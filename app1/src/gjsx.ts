import Gtk from "@local/gjs/@types/Gjs/Gtk-3.0.js";
// import imports from "../@types/Gjs/index"
// imports.gi.versions.Gtk = "3.0";
/**
 *
 */
export type Signals = {
  [key: string]: (...args: any[]) => any;
};
type Props<T, K extends keyof T> = Record<K, T> & { signals?: Signals };
/**
 * Widget Tree Builder
 */
export default function v<K extends keyof JSX.IntrinsicElements>(
  elementName: K,
  props:
    | Props<JSX.IntrinsicElements[K], keyof JSX.IntrinsicElements[K]>
    | null
    | undefined,
  ...children: any[]
) {
  const el: JSX.IntrinsicElements[K] = new (Gtk as any)[
    capitalize(elementName as any)
  ]();
  if (props) {
    const { signals, ...attributes } = props;
    if (attributes) {
      for (let key of keys(attributes)) {
        // @ts-ignore
        el[key] = attributes[key];
      }
    }
    // @ts-ignore
    if (signals) {
      for (let signal of keys(signals)) {
        // @ts-ignore
        el.connect(signal, signals[signal]);
      }
    }
  }
  if (children) {
    for (let child of children) {
      // @ts-ignore
      el.add(child);
    }
  }
  return el;
}
function keys<T>(t: T): (keyof T)[] {
  return Object.keys(t) as (keyof T)[];
}
/**
 *
 * @param string
 * @returns
 */
function capitalize(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}
