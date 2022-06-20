/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */

import type * as Gjs from "./Gjs";
    
      import type * as AppIndicator301 from "./AppIndicator3-0.1";
    
    
      import type * as Atk10 from "./Atk-1.0";
    
    
      import type * as Atspi20 from "./Atspi-2.0";
    
    
      import type * as Cally10 from "./Cally-1.0";
    
    
      import type * as ClutterGdk10 from "./ClutterGdk-1.0";
    
    
      import type * as ClutterX1110 from "./ClutterX11-1.0";
    
    
      import type * as Cogl20 from "./Cogl-2.0";
    
    
      import type * as CoglPango20 from "./CoglPango-2.0";
    
    
      import type * as DBus10 from "./DBus-1.0";
    
    
      import type * as DBusGLib10 from "./DBusGLib-1.0";
    
    
      import type * as Dbusmenu04 from "./Dbusmenu-0.4";
    
    
      import type * as GIRepository20 from "./GIRepository-2.0";
    
    
      import type * as GL10 from "./GL-1.0";
    
    
      import type * as GLib20 from "./GLib-2.0";
    
    
      import type * as GModule20 from "./GModule-2.0";
    
    
      import type * as GObject20 from "./GObject-2.0";
    
    
      import type * as GUdev10 from "./GUdev-1.0";
    
    
      import type * as Gdk30 from "./Gdk-3.0";
    
    
      import type * as GdkPixbuf20 from "./GdkPixbuf-2.0";
    
    
      import type * as GdkPixdata20 from "./GdkPixdata-2.0";
    
    
      import type * as GdkX1130 from "./GdkX11-3.0";
    
    
      import type * as Gio20 from "./Gio-2.0";
    
    
      import type * as Gst10 from "./Gst-1.0";
    
    
      import type * as GstBase10 from "./GstBase-1.0";
    
    
      import type * as GstCheck10 from "./GstCheck-1.0";
    
    
      import type * as GstController10 from "./GstController-1.0";
    
    
      import type * as GstNet10 from "./GstNet-1.0";
    
    
      import type * as Gtk30 from "./Gtk-3.0";
    
    
      import type * as GtkClutter10 from "./GtkClutter-1.0";
    
    
      import type * as HarfBuzz00 from "./HarfBuzz-0.0";
    
    
      import type * as JavaScriptCore40 from "./JavaScriptCore-4.0";
    
    
      import type * as Json10 from "./Json-1.0";
    
    
      import type * as Pango10 from "./Pango-1.0";
    
    
      import type * as PangoCairo10 from "./PangoCairo-1.0";
    
    
      import type * as PangoFT210 from "./PangoFT2-1.0";
    
    
      import type * as PangoFc10 from "./PangoFc-1.0";
    
    
      import type * as PangoOT10 from "./PangoOT-1.0";
    
    
      import type * as PangoXft10 from "./PangoXft-1.0";
    
    
      import type * as Rsvg20 from "./Rsvg-2.0";
    
    
      import type * as Soup24 from "./Soup-2.4";
    
    
      import type * as Vulkan10 from "./Vulkan-1.0";
    
    
      import type * as WebKit240 from "./WebKit2-4.0";
    
    
      import type * as WebKit2WebExtension40 from "./WebKit2WebExtension-4.0";
    
    
      import type * as Cairo10 from "./cairo-1.0";
    
    
      import type * as Fontconfig20 from "./fontconfig-2.0";
    
    
      import type * as Freetype220 from "./freetype2-2.0";
    
    
      import type * as Libxml220 from "./libxml2-2.0";
    
    
      import type * as Win3210 from "./win32-1.0";
    
    
      import type * as Xfixes40 from "./xfixes-4.0";
    
    
      import type * as Xft20 from "./xft-2.0";
    
    
      import type * as Xlib20 from "./xlib-2.0";
    
    
      import type * as Xrandr13 from "./xrandr-1.3";
    

declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]

    const imports: typeof Gjs & {
        gi: {
            AppIndicator3:              typeof AppIndicator301
            Atk:              typeof Atk10
            Atspi:              typeof Atspi20
            Cally:              typeof Cally10
            ClutterGdk:              typeof ClutterGdk10
            ClutterX11:              typeof ClutterX1110
            Cogl:              typeof Cogl20
            CoglPango:              typeof CoglPango20
            DBus:              typeof DBus10
            DBusGLib:              typeof DBusGLib10
            Dbusmenu:              typeof Dbusmenu04
            GIRepository:              typeof GIRepository20
            GL:              typeof GL10
            GLib:              typeof GLib20
            GModule:              typeof GModule20
            GObject:              typeof GObject20
            GUdev:              typeof GUdev10
            Gdk:              typeof Gdk30
            GdkPixbuf:              typeof GdkPixbuf20
            GdkPixdata:              typeof GdkPixdata20
            GdkX11:              typeof GdkX1130
            Gio:              typeof Gio20
            Gst:              typeof Gst10
            GstBase:              typeof GstBase10
            GstCheck:              typeof GstCheck10
            GstController:              typeof GstController10
            GstNet:              typeof GstNet10
            Gtk:              typeof Gtk30
            GtkClutter:              typeof GtkClutter10
            HarfBuzz:              typeof HarfBuzz00
            JavaScriptCore:              typeof JavaScriptCore40
            Json:              typeof Json10
            Pango:              typeof Pango10
            PangoCairo:              typeof PangoCairo10
            PangoFT2:              typeof PangoFT210
            PangoFc:              typeof PangoFc10
            PangoOT:              typeof PangoOT10
            PangoXft:              typeof PangoXft10
            Rsvg:              typeof Rsvg20
            Soup:              typeof Soup24
            Vulkan:              typeof Vulkan10
            WebKit2:              typeof WebKit240
            WebKit2WebExtension:              typeof WebKit2WebExtension40
            cairo:              typeof Cairo10
            fontconfig:              typeof Fontconfig20
            freetype2:              typeof Freetype220
            libxml2:              typeof Libxml220
            win32:              typeof Win3210
            xfixes:              typeof Xfixes40
            xft:              typeof Xft20
            xlib:              typeof Xlib20
            xrandr:              typeof Xrandr13
        }
        versions: {
            AppIndicator3:              '0.1'
            Atk:              '1.0'
            Atspi:              '2.0'
            Cally:              '1.0'
            ClutterGdk:              '1.0'
            ClutterX11:              '1.0'
            Cogl:              '2.0'
            CoglPango:              '2.0'
            DBus:              '1.0'
            DBusGLib:              '1.0'
            Dbusmenu:              '0.4'
            GIRepository:              '2.0'
            GL:              '1.0'
            GLib:              '2.0'
            GModule:              '2.0'
            GObject:              '2.0'
            GUdev:              '1.0'
            Gdk:              '3.0'
            GdkPixbuf:              '2.0'
            GdkPixdata:              '2.0'
            GdkX11:              '3.0'
            Gio:              '2.0'
            Gst:              '1.0'
            GstBase:              '1.0'
            GstCheck:              '1.0'
            GstController:              '1.0'
            GstNet:              '1.0'
            Gtk:              '3.0'
            GtkClutter:              '1.0'
            HarfBuzz:              '0.0'
            JavaScriptCore:              '4.0'
            Json:              '1.0'
            Pango:              '1.0'
            PangoCairo:              '1.0'
            PangoFT2:              '1.0'
            PangoFc:              '1.0'
            PangoOT:              '1.0'
            PangoXft:              '1.0'
            Rsvg:              '2.0'
            Soup:              '2.4'
            Vulkan:              '1.0'
            WebKit2:              '4.0'
            WebKit2WebExtension:              '4.0'
            cairo:              '1.0'
            fontconfig:              '2.0'
            freetype2:              '2.0'
            libxml2:              '2.0'
            win32:              '1.0'
            xfixes:              '4.0'
            xft:              '2.0'
            xlib:              '2.0'
            xrandr:              '1.3'
        }
        searchPath: string[];
    }
}

export { imports }
export default imports