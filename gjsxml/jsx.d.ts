declare global {
  namespace JSX {
    /**
     * Gtk Builder XML schema
     * based on : https://gitlab.gnome.org/GNOME/gtk/-/blob/gtk-3-24/gtk/gtkbuilder.rnc
     * see "./gtkbuilder.rnc"
     */
    interface IntrinsicElements {
      interface: {
        domain?: string;
        // children: ( requires | object | template | menu )
      };
      requires: {
        lib: "gtk+";
        version: import("./gtk-types").GtkInterfaceRequireVersion; // TODO
        // no children
      };
      object: {
        class: import("./GtkClass").GtkClass;
        id?: string; //xsd:ID
        "type-func"?: string;
        // "constructor"?: string;
        // children: (property | signal | child | ANY)
      };
      template: {
        class: string;
        parent: string;
        // children: property | signal | child | ANY
      };
      property: {
        name: string;
        translatable?: "yes" | "no";
        comments?: string;
        context?: string;
        "bind-source"?: string;
        "bind-property"?: string;
        "bind-flags"?: string;
        // children: text ?
      };
      signal: {
        name: string;
        handler: string;
        after?: string;
        swapped?: string;
        object?: string;
        last_modification_time?: string;
        // children empty
      };
      packing: {};
      child: {
        type?: string;
        "internal-child"?: string;
        // children: (object | ANY)*
      };
      menu: {
        id: string; // { xsd:ID },
        domain?: string;
        // children: (item | submenu | section) *
      };
      item: {
        id?: string; // { xsd:ID } ?,
        // children: (attribute_ | link) *
      };
      attribute: {
        name: string;
        type?: string;
        translatable?: "yes" | "no";
        context?: string;
        comments?: string;
        // children:text ?
      };
      ink: {
        id?: string; //{ xsd:ID } ?,
        name: string; // { text },
        // children: item *
      };
      submenu: {
        id?: string; //  { xsd:ID } ?,
        // children: (attribute_ | item | submenu | section) *
      };
      section: {
        id?: string; // { xsd:ID } ?,
        // children: (attribute_ | item | submenu | section) *
      };
      /**
       * glade?
       */
      placeholder: {
        // ??
      };
    }
  }
}
/**
 * from "jsx-xml/index.d.ts"
 */
function jsx(
  type: string,
  attr: null | object,
  ...children: import("jsx-xml").JSXNode[]
): import("jsx-xml").JsxElement;

export default jsx;

export function render(
  xml: import("jsx-xml").JsxElement,
  options?: import("jsx-xml").Options
): string;

export function fragment(
  props: import("jsx-xml").FragmentProps
): import("jsx-xml").FragmentNode;
