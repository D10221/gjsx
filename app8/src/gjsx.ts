import gtk from "gi://Gtk?version=3.0";
/**
 * Widget Tree Builder
 */
export default function gjsx(
  x: any,
  props: { connect?: any } | null | undefined,
  ...children: any[]
) {
  if (typeof x === "function") {
    return x({
      ...(props || {}),
      children: children || [],
    });
  }
  if (typeof x === "string") {
    const { connect, ...xprops } = props || {};
    const el = contruct(x, xprops);
    // @ts-ignore
    if (connect) {
      for (let signal of keys(connect)) {
        // @ts-ignore
        el.connect(signal, connect[signal]);
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
  throw new Error("Expected string|function");
}
function contruct(x: any, props: {}): any {
  const className = capitalize(x as any);
  log(`className=${className}`);
  const Class = (gtk as any)[className];
  log(`${Class.name}`);
  if (props) return new Class(props);
  return new Class();
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
