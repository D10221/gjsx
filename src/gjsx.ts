const Gtk = imports.gi.Gtk;
/**
 *
 */
export  function h(
  element: string,
  attributes: { [key: string]: any },
  ...children: any[]
) {
  return {
    element,
    attributes,
    children,
  };
}
/**
 *
 */
export function render({
  element,
  attributes,
  children,
}: {
  element: "string";
  attributes: { [key: string]: any };
  children: any[];
}) {
  const el = new Gtk[capitalize(element)]();  
  const { signals, ...atts } = attributes;
  Object.keys(atts).map((key) => (el[key] = atts[key]));
  if (children) {
    children.map((child) => el.add(render(child)));
  }
  if (signals) {
    Object.keys(signals).map((signal) => {
      el.connect(signal, signals[signal]);
    });
  }
  return el;
}
/**
 *
 * @param element
 * @returns
 */
function capitalize(element: string) {
  return element[0].toUpperCase() + element.substring(1);
}