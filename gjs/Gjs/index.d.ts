/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */

import type * as Gjs from "./Gjs";
    
      import type * as Gtk30 from "./Gtk-3.0";
    
    
      import type * as Xlib20 from "./xlib-2.0";
    
    
      import type * as Gdk30 from "./Gdk-3.0";
    
    
      import type * as Atk10 from "./Atk-1.0";
    
    
      import type * as GObject20 from "./GObject-2.0";
    
    
      import type * as Cairo10 from "./cairo-1.0";
    
    
      import type * as Pango10 from "./Pango-1.0";
    
    
      import type * as Gio20 from "./Gio-2.0";
    
    
      import type * as GdkPixbuf20 from "./GdkPixbuf-2.0";
    
    
      import type * as GLib20 from "./GLib-2.0";
    
    
      import type * as HarfBuzz00 from "./HarfBuzz-0.0";
    
    
      import type * as GModule20 from "./GModule-2.0";
    

declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]

    const imports: typeof Gjs & {
        gi: {
            Gtk:              typeof Gtk30
            xlib:              typeof Xlib20
            Gdk:              typeof Gdk30
            Atk:              typeof Atk10
            GObject:              typeof GObject20
            cairo:              typeof Cairo10
            Pango:              typeof Pango10
            Gio:              typeof Gio20
            GdkPixbuf:              typeof GdkPixbuf20
            GLib:              typeof GLib20
            HarfBuzz:              typeof HarfBuzz00
            GModule:              typeof GModule20
        }
        versions: {
            Gtk:              '3.0'
            xlib:              '2.0'
            Gdk:              '3.0'
            Atk:              '1.0'
            GObject:              '2.0'
            cairo:              '1.0'
            Pango:              '1.0'
            Gio:              '2.0'
            GdkPixbuf:              '2.0'
            GLib:              '2.0'
            HarfBuzz:              '0.0'
            GModule:              '2.0'
        }
        searchPath: string[];
    }
}

export { imports }
export default imports