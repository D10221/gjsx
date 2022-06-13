declare function log(...args: any[]): void;

declare namespace imports {
  var gi: {
    Gtk: {
      init(x: any): void,
      main(): void,
      main_quit(): void,
      [key: string]: any,
    }
  };
}
declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: any
  }
}