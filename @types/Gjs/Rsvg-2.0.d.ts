/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Rsvg-2.0
 */

import type * as Gjs from './Gjs';
import type * as cairo from './cairo-1.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';

/**
 * An enumeration representing possible errors
 */
export enum Error {
    /**
     * the request failed
     */
    FAILED,
}
/**
 * Units for the #RsvgLength struct.  These have the same meaning as <ulink
 * url="https://www.w3.org/TR/CSS21/syndata.html#length-units">CSS length
 * units</ulink>.
 */
export enum Unit {
    /**
     * percentage values; where <literal>1.0</literal> means 100%.
     */
    PERCENT,
    /**
     * pixels
     */
    PX,
    /**
     * em, or the current font size
     */
    EM,
    /**
     * x-height of the current font
     */
    EX,
    /**
     * inches
     */
    IN,
    /**
     * centimeters
     */
    CM,
    /**
     * millimeters
     */
    MM,
    /**
     * points, or 1/72 inch
     */
    PT,
    /**
     * picas, or 1/6 inch (12 points)
     */
    PC,
}
/**
 * @bitfield 
 */
export enum HandleFlags {
    /**
     * No flags are set.
     */
    FLAGS_NONE,
    /**
     * Disable safety limits in the XML parser.
     *   Libxml2 has <ulink
     *   url="https://gitlab.gnome.org/GNOME/libxml2/blob/master/include/libxml/parserInternals.h">several
     *   limits</ulink> designed to keep malicious XML content from consuming too
     *   much memory while parsing.  For security reasons, this should only be used
     *   for trusted input!
     *   Since: 2.40.3
     */
    FLAG_UNLIMITED,
    /**
     * Use this if the Cairo surface to which you
     *  are rendering is a PDF, PostScript, SVG, or Win32 Printing surface.  This
     *  will make librsvg and Cairo use the original, compressed data for images in
     *  the final output, instead of passing uncompressed images.  This will make a
     *  Keeps the image data when loading images, for use by cairo when painting to
     *  e.g. a PDF surface.  For example, this will make the a resulting PDF file
     *  smaller and faster.  Please see <ulink
     *  url="https://www.cairographics.org/manual/cairo-cairo-surface-t.html#cairo-surface-set-mime-data">the
     *  Cairo documentation</ulink> for details.
     *  Since: 2.40.3
     */
    FLAG_KEEP_IMAGE_DATA,
}
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const VERSION: string
export function cleanup(): void
export function error_quark(): GLib.Quark
export function set_default_dpi(dpi: number): void
export function set_default_dpi_x_y(dpi_x: number, dpi_y: number): void
export interface Handle_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Rsvg-2.0.Rsvg.Handle */
    base_uri?: string | null
    dpi_x?: number | null
    dpi_y?: number | null
    /**
     * Flags from #RsvgHandleFlags.
     */
    flags?: HandleFlags | null
}
/**
 * Lets you load SVG data and render it.
 */
export class Handle {
    /* Own properties of Rsvg-2.0.Rsvg.Handle */
    base_uri: string
    /**
     * SVG's description.
     */
    readonly desc: string
    dpi_x: number
    dpi_y: number
    /**
     * Exact width, in pixels, of the rendered SVG before calling the size callback
     * as specified by rsvg_handle_set_size_callback().
     */
    readonly em: number
    /**
     * Exact height, in pixels, of the rendered SVG before calling the size callback
     * as specified by rsvg_handle_set_size_callback().
     */
    readonly ex: number
    /**
     * Flags from #RsvgHandleFlags.
     */
    readonly flags: HandleFlags
    /**
     * Height, in pixels, of the rendered SVG after calling the size callback
     * as specified by rsvg_handle_set_size_callback().
     */
    readonly height: number
    /**
     * SVG's metadata
     */
    readonly metadata: string
    /**
     * SVG's title.
     */
    readonly title: string
    /**
     * Width, in pixels, of the rendered SVG after calling the size callback
     * as specified by rsvg_handle_set_size_callback().
     */
    readonly width: number
    /* Own fields of Rsvg-2.0.Rsvg.Handle */
    parent: GObject.Object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Rsvg-2.0.Rsvg.Handle */
    /**
     * Closes `handle,` to indicate that loading the image is complete.  This will
     * return %TRUE if the loader closed successfully and the SVG data was parsed
     * correctly.  Note that `handle` isn't freed until `g_object_unref` is called.
     */
    close(): boolean
    /**
     * Gets the base uri for this #RsvgHandle.
     */
    get_base_uri(): string
    /**
     * Get the SVG's size. Do not call from within the size_func callback, because
     * an infinite loop will occur.
     * 
     * This function depends on the #RsvgHandle's DPI to compute dimensions in
     * pixels, so you should call rsvg_handle_set_dpi() beforehand.
     */
    get_dimensions(): /* dimension_data */ DimensionData
    /**
     * Get the size of a subelement of the SVG file. Do not call from within the
     * size_func callback, because an infinite loop will occur.
     * 
     * This function depends on the #RsvgHandle's DPI to compute dimensions in
     * pixels, so you should call rsvg_handle_set_dpi() beforehand.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to use the whole SVG.
     */
    get_dimensions_sub(id: string | null): [ /* returnType */ boolean, /* dimension_data */ DimensionData ]
    /**
     * Computes the ink rectangle and logical rectangle of a single SVG element.
     * 
     * While `rsvg_handle_get_geometry_for_layer` computes the geometry of an SVG element subtree with
     * its transformation matrix, this other function will compute the element's geometry
     * as if it were being rendered under an identity transformation by itself.  That is,
     * the resulting geometry is as if the element got extracted by itself from the SVG.
     * 
     * This function is the counterpart to `rsvg_handle_render_element`.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * 
     * The "ink rectangle" is the bounding box that would be painted
     * for fully- stroked and filled elements.
     * 
     * The "logical rectangle" just takes into account the unstroked
     * paths and text outlines.
     * 
     * Note that these bounds are not minimum bounds; for example,
     * clipping paths are not taken into account.
     * 
     * You can pass #NULL for the `id` if you want to measure all
     * the elements in the SVG, i.e. to measure everything from the
     * root element.
     * 
     * This operation is not constant-time, as it involves going through all
     * the child elements.
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section <ulink url="#API-ordering">API ordering</ulink> for details.
     * 
     * Panics: this function will panic if the `handle` is not fully-loaded.
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to compute the geometry for the whole SVG.
     */
    get_geometry_for_element(id: string | null): [ /* returnType */ boolean, /* out_ink_rect */ Rectangle, /* out_logical_rect */ Rectangle ]
    /**
     * Computes the ink rectangle and logical rectangle of an SVG element, or the
     * whole SVG, as if the whole SVG were rendered to a specific viewport.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * 
     * The "ink rectangle" is the bounding box that would be painted
     * for fully- stroked and filled elements.
     * 
     * The "logical rectangle" just takes into account the unstroked
     * paths and text outlines.
     * 
     * Note that these bounds are not minimum bounds; for example,
     * clipping paths are not taken into account.
     * 
     * You can pass #NULL for the `id` if you want to measure all
     * the elements in the SVG, i.e. to measure everything from the
     * root element.
     * 
     * This operation is not constant-time, as it involves going through all
     * the child elements.
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section <ulink url="#API-ordering">API ordering</ulink> for details.
     * 
     * Panics: this function will panic if the `handle` is not fully-loaded.
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to compute the geometry for the whole SVG.
     * @param viewport Viewport size at which the whole SVG would be fitted.
     */
    get_geometry_for_layer(id: string | null, viewport: Rectangle): [ /* returnType */ boolean, /* out_ink_rect */ Rectangle, /* out_logical_rect */ Rectangle ]
    /**
     * Queries the <literal>width</literal>, <literal>height</literal>, and
     * <literal>viewBox</literal> attributes in an SVG document.
     * 
     * If you are calling this function to compute a scaling factor to render the SVG,
     * consider simply using rsvg_handle_render_document() instead; it will do the
     * scaling computations automatically.
     * 
     * As an example, the following SVG element has a <literal>width</literal> of 100 pixels and a <literal>height</literal> of 400 pixels, but no <literal>viewBox</literal>:
     * 
     * |[
     * <svg xmlns="http://www.w3.org/2000/svg" width="100" height="400">
     * ```
     * 
     * 
     * Conversely, the following element has a <literal>viewBox</literal>, but no <literal>width</literal> or <literal>height</literal>:
     * 
     * |[
     * <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 400">
     * ```
     * 
     * 
     * Note that the #RsvgLength return values have #RsvgUnits in them; you should
     * not assume that they are always in pixels.  For example, the following SVG element
     * will return a width value whose <literal>units</literal> field is RSVG_UNIT_MM.
     * 
     * |[
     * <svg xmlns="http://www.w3.org/2000/svg" width="210mm" height="297mm">
     * ```
     * 
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section <ulink url="#API-ordering">API ordering</ulink> for details.
     * 
     * Panics: this function will panic if the `handle` is not fully-loaded.
     */
    get_intrinsic_dimensions(): [ /* out_has_width */ boolean, /* out_width */ Length, /* out_has_height */ boolean, /* out_height */ Length, /* out_has_viewbox */ boolean, /* out_viewbox */ Rectangle ]
    /**
     * Returns the pixbuf loaded by `handle`.  The pixbuf returned will be reffed, so
     * the caller of this function must assume that ref.  If insufficient data has
     * been read to create the pixbuf, or an error occurred in loading, then %NULL
     * will be returned.  Note that the pixbuf may not be complete until
     * `rsvg_handle_close` has been called.
     * 
     * This function depends on the #RsvgHandle's DPI to compute dimensions in
     * pixels, so you should call rsvg_handle_set_dpi() beforehand.
     */
    get_pixbuf(): GdkPixbuf.Pixbuf | null
    /**
     * Creates a #GdkPixbuf the same size as the entire SVG loaded into `handle,` but
     * only renders the sub-element that has the specified `id` (and all its
     * sub-sub-elements recursively).  If `id` is #NULL, this function renders the
     * whole SVG.
     * 
     * This function depends on the #RsvgHandle's DPI to compute dimensions in
     * pixels, so you should call rsvg_handle_set_dpi() beforehand.
     * 
     * If you need to render an image which is only big enough to fit a particular
     * sub-element of the SVG, consider using rsvg_handle_render_cairo_sub(), upon a
     * surface that is just the size returned by rsvg_handle_get_dimensions_sub().
     * You will need to offset the rendering by the amount returned in
     * rsvg_handle_get_position_sub().
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to use the whole SVG.
     */
    get_pixbuf_sub(id: string | null): GdkPixbuf.Pixbuf | null
    /**
     * Get the position of a subelement of the SVG file. Do not call from within
     * the size_func callback, because an infinite loop will occur.
     * 
     * This function depends on the #RsvgHandle's DPI to compute dimensions in
     * pixels, so you should call rsvg_handle_set_dpi() beforehand.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to use the whole SVG.
     */
    get_position_sub(id: string | null): [ /* returnType */ boolean, /* position_data */ PositionData ]
    /**
     * Checks whether the element `id` exists in the SVG document.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.
     */
    has_sub(id: string): boolean
    /**
     * Do not call this function.  This is intended for librsvg's internal
     * test suite only.
     * @param testing Whether to enable testing mode
     */
    internal_set_testing(testing: boolean): void
    /**
     * Reads `stream` and writes the data from it to `handle`.
     * 
     * Before calling this function, you may need to call rsvg_handle_set_base_uri()
     * or rsvg_handle_set_base_gfile() to set the "base file" for resolving
     * references to external resources.  SVG elements like
     * <literal>&lt;image&gt;</literal> which reference external resources will be
     * resolved relative to the location you specify with those functions.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the cancellable object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be
     * returned.
     * @param stream a #GInputStream
     * @param cancellable a #GCancellable, or %NULL
     */
    read_stream_sync(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Draws a loaded SVG handle to a Cairo context.  Drawing will occur with
     * respect to the `cr'`s current transformation:  for example, if the `cr` has a
     * rotated current transformation matrix, the whole SVG will be rotated in the
     * rendered version.
     * 
     * This function depends on the #RsvgHandle's DPI to compute dimensions in
     * pixels, so you should call rsvg_handle_set_dpi() beforehand.
     * 
     * Note that `cr` must be a Cairo context that is not in an error state, that is,
     * cairo_status() must return #CAIRO_STATUS_SUCCESS for it.  Cairo can set a
     * context to be in an error state in various situations, for example, if it was
     * passed an invalid matrix or if it was created for an invalid surface.
     * @param cr A Cairo context
     */
    render_cairo(cr: cairo.Context): boolean
    /**
     * Draws a subset of a loaded SVG handle to a Cairo context.  Drawing will occur with
     * respect to the `cr'`s current transformation:  for example, if the `cr` has a
     * rotated current transformation matrix, the whole SVG will be rotated in the
     * rendered version.
     * 
     * This function depends on the #RsvgHandle's DPI to compute dimensions in
     * pixels, so you should call rsvg_handle_set_dpi() beforehand.
     * 
     * Note that `cr` must be a Cairo context that is not in an error state, that is,
     * cairo_status() must return #CAIRO_STATUS_SUCCESS for it.  Cairo can set a
     * context to be in an error state in various situations, for example, if it was
     * passed an invalid matrix or if it was created for an invalid surface.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * @param cr A Cairo context
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to render the whole SVG.
     */
    render_cairo_sub(cr: cairo.Context, id: string | null): boolean
    /**
     * Renders the whole SVG document fitted to a viewport.
     * 
     * The `viewport` gives the position and size at which the whole SVG
     * document will be rendered.
     * 
     * The `cr` must be in a #CAIRO_STATUS_SUCCESS state, or this function will not
     * render anything, and instead will return an error.
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section <ulink url="#API-ordering">API ordering</ulink> for details.
     * 
     * Panics: this function will panic if the `handle` is not fully-loaded.
     * @param cr A Cairo context
     * @param viewport Viewport size at which the whole SVG would be fitted.
     */
    render_document(cr: cairo.Context, viewport: Rectangle): boolean
    /**
     * Renders a single SVG element to a given viewport
     * 
     * This function can be used to extract individual element subtrees and render them,
     * scaled to a given `element_viewport`.  This is useful for applications which have
     * reusable objects in an SVG and want to render them individually; for example, an
     * SVG full of icons that are meant to be be rendered independently of each other.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * 
     * You can pass #NULL for the `id` if you want to render all
     * the elements in the SVG, i.e. to render everything from the
     * root element.
     * 
     * The `element_viewport` gives the position and size at which the named element will
     * be rendered.  FIXME: mention proportional scaling.
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section <ulink url="#API-ordering">API ordering</ulink> for details.
     * 
     * Panics: this function will panic if the `handle` is not fully-loaded.
     * @param cr A Cairo context
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to render the whole SVG document tree.
     * @param element_viewport Viewport size in which to fit the element
     */
    render_element(cr: cairo.Context, id: string | null, element_viewport: Rectangle): boolean
    /**
     * Renders a single SVG element in the same place as for a whole SVG document.
     * 
     * This is equivalent to rsvg_handle_render_document(), but it renders only a
     * single element and its children, as if they composed an individual layer in
     * the SVG.  The element is rendered with the same transformation matrix as it
     * has within the whole SVG document.  Applications can use this to re-render a
     * single element and repaint it on top of a previously-rendered document, for
     * example.
     * 
     * Element IDs should look like an URL fragment identifier; for example, pass
     * "##foo" (hash <literal>foo</literal>) to get the geometry of the element that
     * has an <literal>id="foo"</literal> attribute.
     * 
     * You can pass #NULL for the `id` if you want to render all
     * the elements in the SVG, i.e. to render everything from the
     * root element.
     * 
     * API ordering: This function must be called on a fully-loaded `handle`.  See
     * the section <ulink url="#API-ordering">API ordering</ulink> for details.
     * 
     * Panics: this function will panic if the `handle` is not fully-loaded.
     * @param cr A Cairo context
     * @param id An element's id within the SVG, starting with "##" (a single hash character), for example, "##layer1".  This notation corresponds to a URL's fragment ID.  Alternatively, pass %NULL to render the whole SVG document tree.
     * @param viewport Viewport size at which the whole SVG would be fitted.
     */
    render_layer(cr: cairo.Context, id: string | null, viewport: Rectangle): boolean
    /**
     * Set the base URI for `handle` from `file`.
     * 
     * Note: This function may only be called before rsvg_handle_write() or
     * rsvg_handle_read_stream_sync() have been called.
     * @param base_file a #GFile
     */
    set_base_gfile(base_file: Gio.File): void
    /**
     * Set the base URI for this SVG.
     * 
     * Note: This function may only be called before rsvg_handle_write() or
     * rsvg_handle_read_stream_sync() have been called.
     * @param base_uri The base uri
     */
    set_base_uri(base_uri: string): void
    /**
     * Sets the DPI at which the `handle` will be rendered. Common values are
     * 75, 90, and 300 DPI.
     * 
     * Passing a number <= 0 to `dpi` will reset the DPI to whatever the default
     * value happens to be, but since rsvg_set_default_dpi() is deprecated, please
     * do not pass values <= 0 to this function.
     * @param dpi Dots Per Inch (i.e. as Pixels Per Inch)
     */
    set_dpi(dpi: number): void
    /**
     * Sets the DPI at which the `handle` will be rendered. Common values are
     * 75, 90, and 300 DPI.
     * 
     * Passing a number <= 0 to `dpi` will reset the DPI to whatever the default
     * value happens to be, but since rsvg_set_default_dpi_x_y() is deprecated,
     * please do not pass values <= 0 to this function.
     * @param dpi_x Dots Per Inch (i.e. Pixels Per Inch)
     * @param dpi_y Dots Per Inch (i.e. Pixels Per Inch)
     */
    set_dpi_x_y(dpi_x: number, dpi_y: number): void
    /**
     * Sets a CSS stylesheet to use for an SVG document.
     * 
     * The `css_len` argument is mandatory; this function will not compute the length
     * of the `css` string.  This is because a provided stylesheet, which the calling
     * program could read from a file, can have nul characters in it.
     * 
     * During the CSS cascade, the specified stylesheet will be used with a "User"
     * <ulink
     * url="https://drafts.csswg.org/css-cascade-3/#cascading-origins">origin</ulink>.
     * 
     * Note that ``import`` rules will not be resolved, except for `data:` URLs.
     * @param css String with CSS data; must be valid UTF-8.
     */
    set_stylesheet(css: Uint8Array): boolean
    /**
     * Loads the next `count` bytes of the image.
     * 
     * Before calling this function for the first time, you may need to call
     * rsvg_handle_set_base_uri() or rsvg_handle_set_base_gfile() to set the "base
     * file" for resolving references to external resources.  SVG elements like
     * <literal>&lt;image&gt;</literal> which reference external resources will be
     * resolved relative to the location you specify with those functions.
     * @param buf pointer to svg data
     */
    write(buf: Uint8Array): boolean
    /* Extended methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`. Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * |[
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * A #GObject can have multiple bindings.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     * @param source_property the property on `source` to bind
     * @param target the target #GObject
     * @param target_property the property on `target` to bind
     * @param flags flags to pass to #GBinding
     * @param transform_to a #GClosure wrapping the transformation function     from the `source` to the `target,` or %NULL to use the default
     * @param transform_from a #GClosure wrapping the transformation function     from the `target` to the `source,` or %NULL to use the default
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.TClosure, transform_from: GObject.TClosure): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param property_name the name of the property to get
     * @param value return location for the property value
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     * @param quark A #GQuark, naming the user data pointer
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     * @param names the names of each property to get
     * @param values the values of each property to get
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @param property_name the name of a property installed on the class of `object`.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     * @param pspec the #GParamSpec of a property installed on the class of `object`.
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    set_data(key: string, data: object | null): void
    /**
     * Sets a property on an object.
     * @param property_name the name of the property to set
     * @param value the value
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     * @param key name of the key
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrive the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     * @param quark A #GQuark, naming the user data pointer
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     * @param closure #GClosure to watch
     */
    watch_closure(closure: GObject.TClosure): void
    /* Extended virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     * @virtual 
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Extended signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @signal 
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::base-uri", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-uri", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::desc", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desc", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dpi-x", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-x", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dpi-y", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dpi-y", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::em", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::em", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ex", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ex", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::flags", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::flags", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::metadata", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::metadata", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Handle, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Handle_ConstructProps)
    _init (config?: Handle_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Handle
    static new_from_data(data: Uint8Array): Handle
    static new_from_file(filename: string): Handle
    static new_from_gfile_sync(file: Gio.File, flags: HandleFlags, cancellable: Gio.Cancellable | null): Handle
    static new_from_stream_sync(input_stream: Gio.InputStream, base_file: Gio.File | null, flags: HandleFlags, cancellable: Gio.Cancellable | null): Handle
    static new_with_flags(flags: HandleFlags): Handle
    static $gtype: GObject.GType<Handle>
}
/**
 * Dimensions of an SVG image from rsvg_handle_get_dimensions(), or an
 * individual element from rsvg_handle_get_dimensions_sub().  Please see
 * the deprecation documentation for those functions.
 */
export class DimensionData {
    /* Own fields of Rsvg-2.0.Rsvg.DimensionData */
    /**
     * SVG's width, in pixels
     */
    width: number
    /**
     * SVG's height, in pixels
     */
    height: number
    /**
     * SVG's original width, unmodified by #RsvgSizeFunc
     */
    em: number
    /**
     * SVG's original height, unmodified by #RsvgSizeFunc
     */
    ex: number
    static name: string
}
/**
 * Class structure for #RsvgHandle.
 */
export abstract class HandleClass {
    /* Own fields of Rsvg-2.0.Rsvg.HandleClass */
    /**
     * parent class
     */
    parent: GObject.ObjectClass
    static name: string
}
/**
 * #RsvgLength values are used in rsvg_handle_get_intrinsic_dimensions(), for
 * example, to return the CSS length values of the <literal>width</literal> and
 * <literal>height</literal> attributes of an <literal>&lt;svg&gt;</literal>
 * element.
 * 
 * This is equivalent to <ulink
 * url="https://www.w3.org/TR/CSS21/syndata.html#length-units">CSS lengths</ulink>.
 * 
 * It is up to the calling application to convert lengths in non-pixel units
 * (i.e. those where the `unit` field is not #RSVG_UNIT_PX) into something
 * meaningful to the application.  For example, if your application knows the
 * dots-per-inch (DPI) it is using, it can convert lengths with `unit` in
 * #RSVG_UNIT_IN or other physical units.
 */
export class Length {
    /* Own fields of Rsvg-2.0.Rsvg.Length */
    /**
     * numeric part of the length
     */
    length: number
    /**
     * unit part of the length
     */
    unit: Unit
    static name: string
}
/**
 * Position of an SVG fragment from rsvg_handle_get_position_sub().  Please
 * the deprecation documentation for that function.
 */
export class PositionData {
    /* Own fields of Rsvg-2.0.Rsvg.PositionData */
    /**
     * position on the x axis
     */
    x: number
    /**
     * position on the y axis
     */
    y: number
    static name: string
}
/**
 * A data structure for holding a rectangle.
 */
export class Rectangle {
    /* Own fields of Rsvg-2.0.Rsvg.Rectangle */
    /**
     * X coordinate of the left side of the rectangle
     */
    x: number
    /**
     * Y coordinate of the the top side of the rectangle
     */
    y: number
    /**
     * width of the rectangle
     */
    width: number
    /**
     * height of the rectangle
     */
    height: number
    static name: string
}