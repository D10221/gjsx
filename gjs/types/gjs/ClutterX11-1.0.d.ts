/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterX11-1.0
 */

import type * as Gjs from './Gjs';
import type * as xlib from './xlib-2.0';
import type * as Clutter from './Clutter-1.0';
import type * as cairo from './cairo-1.0';
import type * as Json from './Json-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GL from './GL-1.0';
import type * as CoglPango from './CoglPango-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as Cogl from './Cogl-1.0';
import type * as Atk from './Atk-1.0';

/**
 * Return values for the #ClutterX11FilterFunc function.
 */
export enum FilterReturn {
    /**
     * The event was not handled, continues the
     *   processing
     */
    CONTINUE,
    /**
     * Native event translated into a Clutter
     *   event, stops the processing
     */
    TRANSLATE,
    /**
     * Remove the event, stops the processing
     */
    REMOVE,
}
export function disable_event_retrieval(): void
export function enable_xinput(): void
export function event_get_key_group(event: any): number
export function event_sequence_get_touch_detail(sequence: any): number
export function get_default_display(): xlib.Display
export function get_default_screen(): number
export function get_input_devices(): any[]
export function get_stage_from_window(win: xlib.Window): any
export function get_use_argb_visual(): boolean
export function get_use_stereo_stage(): boolean
export function handle_event(xevent: xlib.XEvent): FilterReturn
export function has_composite_extension(): boolean
export function has_event_retrieval(): boolean
export function has_xinput(): boolean
export function set_display(xdpy: xlib.Display): void
export function set_stage_foreign(stage: any, xwindow: xlib.Window): boolean
export function set_use_argb_visual(use_argb: boolean): void
export function set_use_stereo_stage(use_stereo: boolean): void
export function trap_x_errors(): void
export function untrap_x_errors(): number
/**
 * Filter function for X11 native events.
 */
export interface FilterFunc {
    (xev: xlib.XEvent, cev: any): FilterReturn
}
export class TexturePixmap {
    /* Properties of ClutterX11-1.0.ClutterX11.TexturePixmap */
    automatic_updates: boolean
    readonly destroyed: boolean
    pixmap: number
    readonly pixmap_depth: number
    readonly pixmap_height: number
    readonly pixmap_width: number
    window: number
    readonly window_mapped: boolean
    readonly window_override_redirect: boolean
    window_redirect_automatic: boolean
    readonly window_x: number
    readonly window_y: number
    /* Methods of ClutterX11-1.0.ClutterX11.TexturePixmap */
    /**
     * Enables or disables the automatic updates ot `texture` in case the backing
     * pixmap or window is damaged
     * @param setting %TRUE to enable automatic updates
     */
    set_automatic(setting: boolean): void
    /**
     * Sets the X Pixmap to which the texture should be bound.
     * @param pixmap the X Pixmap to which the texture should be bound
     */
    set_pixmap(pixmap: xlib.Pixmap): void
    /**
     * Sets up a suitable pixmap for the window, using the composite and damage
     * extensions if possible, and then calls
     * clutter_x11_texture_pixmap_set_pixmap().
     * 
     * If you want to display a window in a #ClutterTexture, you probably want
     * this function, or its older sister, clutter_glx_texture_pixmap_set_window().
     * 
     * This function has no effect unless the XComposite extension is available.
     * @param window the X window to which the texture should be bound
     * @param automatic %TRUE for automatic window updates, %FALSE for manual.
     */
    set_window(window: xlib.Window, automatic: boolean): void
    /**
     * Resets the texture's pixmap from its window, perhaps in response to the
     * pixmap's invalidation as the window changed size.
     */
    sync_window(): void
    /**
     * Performs the actual binding of texture to the current content of
     * the pixmap. Can be called to update the texture if the pixmap
     * content has changed.
     * @param x the X coordinate of the area to update
     * @param y the Y coordinate of the area to update
     * @param width the width of the area to update
     * @param height the height of the area to update
     */
    update_area(x: number, y: number, width: number, height: number): void
    /* Virtual methods of ClutterX11-1.0.ClutterX11.TexturePixmap */
    /**
     * Performs the actual binding of texture to the current content of
     * the pixmap. Can be called to update the texture if the pixmap
     * content has changed.
     * @param x the X coordinate of the area to update
     * @param y the Y coordinate of the area to update
     * @param width the width of the area to update
     * @param height the height of the area to update
     */
    vfunc_update_area(x: number, y: number, width: number, height: number): void
    /* Signals of ClutterX11-1.0.ClutterX11.TexturePixmap */
    /**
     * ::queue-damage-redraw is emitted to notify that some sub-region
     * of the texture has been changed (either by an automatic damage
     * update or by an explicit call to
     * clutter_x11_texture_pixmap_update_area). This usually means a
     * redraw needs to be queued for the actor.
     * 
     * The default handler will queue a clipped redraw in response to
     * the damage, using the assumption that the pixmap is being painted
     * to a rectangle covering the transformed allocation of the actor.
     * If you sub-class and change the paint method so this isn't true
     * then you must also provide your own damage signal handler to
     * queue a redraw that blocks this default behaviour.
     * @param x The top left x position of the damage region
     * @param y The top left y position of the damage region
     * @param width The width of the damage region
     * @param height The height of the damage region
     */
    connect(sigName: "queue-damage-redraw", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "queue-damage-redraw", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "queue-damage-redraw", x: number, y: number, width: number, height: number): void
    /**
     * The ::update-area signal is emitted to ask the texture to update its
     * content from its source pixmap.
     * @param x X coordinate of the area to update
     * @param y Y coordinate of the area to update
     * @param width width of the area to update
     * @param height height of the area to update
     */
    connect(sigName: "update-area", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "update-area", callback: (($obj: TexturePixmap, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "update-area", x: number, y: number, width: number, height: number): void
    static name: string
    static new(): TexturePixmap
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): TexturePixmap
    static new_with_pixmap(pixmap: xlib.Pixmap): TexturePixmap
    static new_with_window(window: xlib.Window): TexturePixmap
}
export abstract class TexturePixmapClass {
    /* Fields of ClutterX11-1.0.ClutterX11.TexturePixmapClass */
    update_area: (texture: TexturePixmap, x: number, y: number, width: number, height: number) => void
    static name: string
}
export class TexturePixmapPrivate {
    static name: string
}
export class XInputDevice {
    static name: string
}