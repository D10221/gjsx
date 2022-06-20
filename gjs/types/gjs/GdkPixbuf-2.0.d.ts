/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkPixbuf-2.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

/**
 * This enumeration defines the color spaces that are supported by
 * the gdk-pixbuf library.  Currently only RGB is supported.
 */
export enum Colorspace {
    /**
     * Indicates a red/green/blue additive color space.
     */
    RGB,
}
/**
 * This enumeration describes the different interpolation modes that
 * can be used with the scaling functions. `GDK_INTERP_NEAREST` is
 * the fastest scaling method, but has horrible quality when
 * scaling down. `GDK_INTERP_BILINEAR` is the best choice if you
 * aren't sure what to choose, it has a good speed/quality balance.
 * 
 * **Note**: Cubic filtering is missing from the list; hyperbolic
 * interpolation is just as fast and results in higher quality.
 */
export enum InterpType {
    /**
     * Nearest neighbor sampling; this is the fastest
     *  and lowest quality mode. Quality is normally unacceptable when scaling
     *  down, but may be OK when scaling up.
     */
    NEAREST,
    /**
     * This is an accurate simulation of the PostScript
     *  image operator without any interpolation enabled.  Each pixel is
     *  rendered as a tiny parallelogram of solid color, the edges of which
     *  are implemented with antialiasing.  It resembles nearest neighbor for
     *  enlargement, and bilinear for reduction.
     */
    TILES,
    /**
     * Best quality/speed balance; use this mode by
     *  default. Bilinear interpolation.  For enlargement, it is
     *  equivalent to point-sampling the ideal bilinear-interpolated image.
     *  For reduction, it is equivalent to laying down small tiles and
     *  integrating over the coverage area.
     */
    BILINEAR,
    /**
     * This is the slowest and highest quality
     *  reconstruction function. It is derived from the hyperbolic filters in
     *  Wolberg's "Digital Image Warping", and is formally defined as the
     *  hyperbolic-filter sampling the ideal hyperbolic-filter interpolated
     *  image (the filter is designed to be idempotent for 1:1 pixel mapping).
     *  **Deprecated**: this interpolation filter is deprecated, as in reality
     *  it has a lower quality than the `GDK_INTERP_BILINEAR` filter
     *  (Since: 2.38)
     */
    HYPER,
}
/**
 * These values can be passed to
 * gdk_pixbuf_xlib_render_to_drawable_alpha() to control how the alpha
 * channel of an image should be handled.  This function can create a
 * bilevel clipping mask (black and white) and use it while painting
 * the image.  In the future, when the X Window System gets an alpha
 * channel extension, it will be possible to do full alpha
 * compositing onto arbitrary drawables.  For now both cases fall
 * back to a bilevel clipping mask.
 */
export enum PixbufAlphaMode {
    /**
     * A bilevel clipping mask (black and white)
     *  will be created and used to draw the image.  Pixels below 0.5 opacity
     *  will be considered fully transparent, and all others will be
     *  considered fully opaque.
     */
    BILEVEL,
    /**
     * For now falls back to #GDK_PIXBUF_ALPHA_BILEVEL.
     *  In the future it will do full alpha compositing.
     */
    FULL,
}
/**
 * An error code in the #GDK_PIXBUF_ERROR domain. Many gdk-pixbuf
 * operations can cause errors in this domain, or in the #G_FILE_ERROR
 * domain.
 */
export enum PixbufError {
    /**
     * An image file was broken somehow.
     */
    CORRUPT_IMAGE,
    /**
     * Not enough memory.
     */
    INSUFFICIENT_MEMORY,
    /**
     * A bad option was passed to a pixbuf save module.
     */
    BAD_OPTION,
    /**
     * Unknown image type.
     */
    UNKNOWN_TYPE,
    /**
     * Don't know how to perform the
     *  given operation on the type of image at hand.
     */
    UNSUPPORTED_OPERATION,
    /**
     * Generic failure code, something went wrong.
     */
    FAILED,
    /**
     * Only part of the animation was loaded.
     */
    INCOMPLETE_ANIMATION,
}
/**
 * The possible rotations which can be passed to gdk_pixbuf_rotate_simple().
 * To make them easier to use, their numerical values are the actual degrees.
 */
export enum PixbufRotation {
    /**
     * No rotation.
     */
    NONE,
    /**
     * Rotate by 90 degrees.
     */
    COUNTERCLOCKWISE,
    /**
     * Rotate by 180 degrees.
     */
    UPSIDEDOWN,
    /**
     * Rotate by 270 degrees.
     */
    CLOCKWISE,
}
export const PIXBUF_FEATURES_H: number
/**
 * Major version of gdk-pixbuf library, that is the "0" in
 * "0.8.2" for example.
 */
export const PIXBUF_MAJOR: number
/**
 * Micro version of gdk-pixbuf library, that is the "2" in
 * "0.8.2" for example.
 */
export const PIXBUF_MICRO: number
/**
 * Minor version of gdk-pixbuf library, that is the "8" in
 * "0.8.2" for example.
 */
export const PIXBUF_MINOR: number
/**
 * Contains the full version of the gdk-pixbuf header as a string.
 * This is the version being compiled against; contrast with
 * #gdk_pixbuf_version.
 */
export const PIXBUF_VERSION: string
export function pixbuf_error_quark(): GLib.Quark
/**
 * A function of this type is responsible for freeing the pixel array
 * of a pixbuf.  The gdk_pixbuf_new_from_data() function lets you
 * pass in a pre-allocated pixel array so that a pixbuf can be
 * created from it; in this case you will need to pass in a function
 * of #GdkPixbufDestroyNotify so that the pixel data can be freed
 * when the pixbuf is finalized.
 */
export interface PixbufDestroyNotify {
    (pixels: Uint8Array): void
}
/**
 * Specifies the type of the function passed to
 * gdk_pixbuf_save_to_callback().  It is called once for each block of
 * bytes that is "written" by gdk_pixbuf_save_to_callback().  If
 * successful it should return %TRUE.  If an error occurs it should set
 * `error` and return %FALSE, in which case gdk_pixbuf_save_to_callback()
 * will fail with the same error.
 */
export interface PixbufSaveFunc {
    (buf: Uint8Array): boolean
}
export interface Pixbuf_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    /**
     * The number of bits per sample.
     * Currently only 8 bit per sample are supported.
     */
    bits_per_sample?: number
    colorspace?: Colorspace
    has_alpha?: boolean
    height?: number
    /**
     * The number of samples per pixel.
     * Currently, only 3 or 4 samples per pixel are supported.
     */
    n_channels?: number
    pixel_bytes?: GLib.Bytes
    pixels?: object
    /**
     * The number of bytes between the start of a row and
     * the start of the next row. This number must (obviously)
     * be at least as large as the width of the pixbuf.
     */
    rowstride?: number
    width?: number
}
export class Pixbuf {
    /* Properties of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    /**
     * The number of bits per sample.
     * Currently only 8 bit per sample are supported.
     */
    readonly bits_per_sample: number
    readonly colorspace: Colorspace
    readonly has_alpha: boolean
    readonly height: number
    /**
     * The number of samples per pixel.
     * Currently, only 3 or 4 samples per pixel are supported.
     */
    readonly n_channels: number
    readonly pixel_bytes: GLib.Bytes
    readonly pixels: object
    /**
     * The number of bytes between the start of a row and
     * the start of the next row. This number must (obviously)
     * be at least as large as the width of the pixbuf.
     */
    readonly rowstride: number
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    /**
     * Takes an existing pixbuf and adds an alpha channel to it.
     * If the existing pixbuf already had an alpha channel, the channel
     * values are copied from the original; otherwise, the alpha channel
     * is initialized to 255 (full opacity).
     * 
     * If `substitute_color` is %TRUE, then the color specified by (`r,` `g,` `b)` will be
     * assigned zero opacity. That is, if you pass (255, 255, 255) for the
     * substitute color, all white pixels will become fully transparent.
     * @param substitute_color Whether to set a color to zero opacity.  If this is %FALSE, then the (`r,` `g,` `b)` arguments will be ignored.
     * @param r Red value to substitute.
     * @param g Green value to substitute.
     * @param b Blue value to substitute.
     */
    add_alpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf
    /**
     * Takes an existing pixbuf and checks for the presence of an
     * associated "orientation" option, which may be provided by the
     * jpeg loader (which reads the exif orientation tag) or the
     * tiff loader (which reads the tiff orientation tag, and
     * compensates it for the partial transforms performed by
     * libtiff). If an orientation option/tag is present, the
     * appropriate transform will be performed so that the pixbuf
     * is oriented correctly.
     */
    apply_embedded_orientation(): Pixbuf
    /**
     * Creates a transformation of the source image `src` by scaling by
     * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y`.
     * This gives an image in the coordinates of the destination pixbuf.
     * The rectangle (`dest_x,` `dest_y,` `dest_width,` `dest_height)`
     * is then alpha blended onto the corresponding rectangle of the
     * original destination image.
     * 
     * When the destination rectangle contains parts not in the source
     * image, the data at the edges of the source image is replicated
     * to infinity.
     * 
     * ![](composite.png)
     * @param dest the #GdkPixbuf into which to render the results
     * @param dest_x the left coordinate for region to render
     * @param dest_y the top coordinate for region to render
     * @param dest_width the width of the region to render
     * @param dest_height the height of the region to render
     * @param offset_x the offset in the X direction (currently rounded to an integer)
     * @param offset_y the offset in the Y direction (currently rounded to an integer)
     * @param scale_x the scale factor in the X direction
     * @param scale_y the scale factor in the Y direction
     * @param interp_type the interpolation type for the transformation.
     * @param overall_alpha overall alpha for source image (0..255)
     */
    composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void
    /**
     * Creates a transformation of the source image `src` by scaling by
     * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y,`
     * then alpha blends the rectangle (`dest_x` ,`dest_y,` `dest_width,`
     * `dest_height)` of the resulting image with a checkboard of the
     * colors `color1` and `color2` and renders it onto the destination
     * image.
     * 
     * If the source image has no alpha channel, and `overall_alpha` is 255, a fast
     * path is used which omits the alpha blending and just performs the scaling.
     * 
     * See gdk_pixbuf_composite_color_simple() for a simpler variant of this
     * function suitable for many tasks.
     * @param dest the #GdkPixbuf into which to render the results
     * @param dest_x the left coordinate for region to render
     * @param dest_y the top coordinate for region to render
     * @param dest_width the width of the region to render
     * @param dest_height the height of the region to render
     * @param offset_x the offset in the X direction (currently rounded to an integer)
     * @param offset_y the offset in the Y direction (currently rounded to an integer)
     * @param scale_x the scale factor in the X direction
     * @param scale_y the scale factor in the Y direction
     * @param interp_type the interpolation type for the transformation.
     * @param overall_alpha overall alpha for source image (0..255)
     * @param check_x the X offset for the checkboard (origin of checkboard is at -`check_x,` -`check_y)`
     * @param check_y the Y offset for the checkboard
     * @param check_size the size of checks in the checkboard (must be a power of two)
     * @param color1 the color of check at upper left
     * @param color2 the color of the other check
     */
    composite_color(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void
    /**
     * Creates a new #GdkPixbuf by scaling `src` to `dest_width` x
     * `dest_height` and alpha blending the result with a checkboard of colors
     * `color1` and `color2`.
     * @param dest_width the width of destination image
     * @param dest_height the height of destination image
     * @param interp_type the interpolation type for the transformation.
     * @param overall_alpha overall alpha for source image (0..255)
     * @param check_size the size of checks in the checkboard (must be a power of two)
     * @param color1 the color of check at upper left
     * @param color2 the color of the other check
     */
    composite_color_simple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf | null
    /**
     * Creates a new #GdkPixbuf with a copy of the information in the specified
     * `pixbuf`. Note that this does not copy the options set on the original #GdkPixbuf,
     * use gdk_pixbuf_copy_options() for this.
     */
    copy(): Pixbuf | null
    /**
     * Copies a rectangular area from `src_pixbuf` to `dest_pixbuf`.  Conversion of
     * pixbuf formats is done automatically.
     * 
     * If the source rectangle overlaps the destination rectangle on the
     * same pixbuf, it will be overwritten during the copy operation.
     * Therefore, you can not use this function to scroll a pixbuf.
     * @param src_x Source X coordinate within `src_pixbuf`.
     * @param src_y Source Y coordinate within `src_pixbuf`.
     * @param width Width of the area to copy.
     * @param height Height of the area to copy.
     * @param dest_pixbuf Destination pixbuf.
     * @param dest_x X coordinate within `dest_pixbuf`.
     * @param dest_y Y coordinate within `dest_pixbuf`.
     */
    copy_area(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void
    /**
     * Copy the key/value pair options attached to a #GdkPixbuf to another.
     * This is useful to keep original metadata after having manipulated
     * a file. However be careful to remove metadata which you've already
     * applied, such as the "orientation" option after rotating the image.
     * @param dest_pixbuf the #GdkPixbuf to copy options to
     */
    copy_options(dest_pixbuf: Pixbuf): boolean
    /**
     * Clears a pixbuf to the given RGBA value, converting the RGBA value into
     * the pixbuf's pixel format. The alpha will be ignored if the pixbuf
     * doesn't have an alpha channel.
     * @param pixel RGBA pixel to clear to         (0xffffffff is opaque white, 0x00000000 transparent black)
     */
    fill(pixel: number): void
    /**
     * Flips a pixbuf horizontally or vertically and returns the
     * result in a new pixbuf.
     * @param horizontal %TRUE to flip horizontally, %FALSE to flip vertically
     */
    flip(horizontal: boolean): Pixbuf | null
    /**
     * Queries the number of bits per color sample in a pixbuf.
     */
    get_bits_per_sample(): number
    /**
     * Returns the length of the pixel data, in bytes.
     */
    get_byte_length(): number
    /**
     * Queries the color space of a pixbuf.
     */
    get_colorspace(): Colorspace
    /**
     * Queries whether a pixbuf has an alpha channel (opacity information).
     */
    get_has_alpha(): boolean
    /**
     * Queries the height of a pixbuf.
     */
    get_height(): number
    /**
     * Queries the number of channels of a pixbuf.
     */
    get_n_channels(): number
    /**
     * Looks up `key` in the list of options that may have been attached to the
     * `pixbuf` when it was loaded, or that may have been attached by another
     * function using gdk_pixbuf_set_option().
     * 
     * For instance, the ANI loader provides "Title" and "Artist" options.
     * The ICO, XBM, and XPM loaders provide "x_hot" and "y_hot" hot-spot
     * options for cursor definitions. The PNG loader provides the tEXt ancillary
     * chunk key/value pairs as options. Since 2.12, the TIFF and JPEG loaders
     * return an "orientation" option string that corresponds to the embedded
     * TIFF/Exif orientation tag (if present). Since 2.32, the TIFF loader sets
     * the "multipage" option string to "yes" when a multi-page TIFF is loaded.
     * Since 2.32 the JPEG and PNG loaders set "x-dpi" and "y-dpi" if the file
     * contains image density information in dots per inch.
     * Since 2.36.6, the JPEG loader sets the "comment" option with the comment
     * EXIF tag.
     * @param key a nul-terminated string.
     */
    get_option(key: string): string
    /**
     * Returns a #GHashTable with a list of all the options that may have been
     * attached to the `pixbuf` when it was loaded, or that may have been
     * attached by another function using gdk_pixbuf_set_option().
     * 
     * See gdk_pixbuf_get_option() for more details.
     */
    get_options(): GLib.HashTable
    /**
     * Queries a pointer to the pixel data of a pixbuf.
     */
    get_pixels(): Uint8Array
    /**
     * Queries the rowstride of a pixbuf, which is the number of bytes between
     * the start of a row and the start of the next row.
     */
    get_rowstride(): number
    /**
     * Queries the width of a pixbuf.
     */
    get_width(): number
    /**
     * Creates a new pixbuf which represents a sub-region of `src_pixbuf`.
     * The new pixbuf shares its pixels with the original pixbuf, so
     * writing to one affects both.  The new pixbuf holds a reference to
     * `src_pixbuf,` so `src_pixbuf` will not be finalized until the new
     * pixbuf is finalized.
     * 
     * Note that if `src_pixbuf` is read-only, this function will force it
     * to be mutable.
     * @param src_x X coord in `src_pixbuf`
     * @param src_y Y coord in `src_pixbuf`
     * @param width width of region in `src_pixbuf`
     * @param height height of region in `src_pixbuf`
     */
    new_subpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf
    /**
     * Provides a #GBytes buffer containing the raw pixel data; the data
     * must not be modified.  This function allows skipping the implicit
     * copy that must be made if gdk_pixbuf_get_pixels() is called on a
     * read-only pixbuf.
     */
    read_pixel_bytes(): GLib.Bytes
    /**
     * Provides a read-only pointer to the raw pixel data; must not be
     * modified.  This function allows skipping the implicit copy that
     * must be made if gdk_pixbuf_get_pixels() is called on a read-only
     * pixbuf.
     */
    read_pixels(): number
    /**
     * Remove the key/value pair option attached to a #GdkPixbuf.
     * @param key a nul-terminated string representing the key to remove.
     */
    remove_option(key: string): boolean
    /**
     * Rotates a pixbuf by a multiple of 90 degrees, and returns the
     * result in a new pixbuf.
     * 
     * If `angle` is 0, a copy of `src` is returned, avoiding any rotation.
     * @param angle the angle to rotate by
     */
    rotate_simple(angle: PixbufRotation): Pixbuf | null
    /**
     * Modifies saturation and optionally pixelates `src,` placing the result in
     * `dest`. `src` and `dest` may be the same pixbuf with no ill effects.  If
     * `saturation` is 1.0 then saturation is not changed. If it's less than 1.0,
     * saturation is reduced (the image turns toward grayscale); if greater than
     * 1.0, saturation is increased (the image gets more vivid colors). If `pixelate`
     * is %TRUE, then pixels are faded in a checkerboard pattern to create a
     * pixelated image. `src` and `dest` must have the same image format, size, and
     * rowstride.
     * @param dest place to write modified version of `src`
     * @param saturation saturation factor
     * @param pixelate whether to pixelate
     */
    saturate_and_pixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void
    /**
     * Saves pixbuf to a new buffer in format `type,` which is currently "jpeg",
     * "tiff", "png", "ico" or "bmp".  See gdk_pixbuf_save_to_buffer()
     * for more details.
     * @param type name of file format.
     * @param option_keys name of options to set, %NULL-terminated
     * @param option_values values for named options
     */
    save_to_bufferv(type: string, option_keys: string[], option_values: string[]): [ /* returnType */ boolean, /* buffer */ Uint8Array ]
    /**
     * Saves pixbuf to a callback in format `type,` which is currently "jpeg",
     * "png", "tiff", "ico" or "bmp".  If `error` is set, %FALSE will be returned. See
     * gdk_pixbuf_save_to_callback () for more details.
     * @param save_func a function that is called to save each block of data that   the save routine generates.
     * @param type name of file format.
     * @param option_keys name of options to set, %NULL-terminated
     * @param option_values values for named options
     */
    save_to_callbackv(save_func: PixbufSaveFunc, type: string, option_keys: string[], option_values: string[]): boolean
    /**
     * Saves `pixbuf` to an output stream.
     * 
     * Supported file formats are currently "jpeg", "tiff", "png", "ico" or
     * "bmp". See gdk_pixbuf_save_to_stream() for more details.
     * @param stream a #GOutputStream to save the pixbuf to
     * @param type name of file format
     * @param option_keys name of options to set, %NULL-terminated
     * @param option_values values for named options
     * @param cancellable optional #GCancellable object, %NULL to ignore
     */
    save_to_streamv(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable?: Gio.Cancellable | null): boolean
    /**
     * Saves `pixbuf` to an output stream asynchronously.
     * 
     * For more details see gdk_pixbuf_save_to_streamv(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * You can then call gdk_pixbuf_save_to_stream_finish() to get the result of the operation.
     * @param stream a #GOutputStream to which to save the pixbuf
     * @param type name of file format
     * @param option_keys name of options to set, %NULL-terminated
     * @param option_values values for named options
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the pixbuf is saved
     */
    save_to_streamv_async(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Saves pixbuf to a file in `type,` which is currently "jpeg", "png", "tiff", "ico" or "bmp".
     * If `error` is set, %FALSE will be returned.
     * See gdk_pixbuf_save () for more details.
     * @param filename name of file to save.
     * @param type name of file format.
     * @param option_keys name of options to set, %NULL-terminated
     * @param option_values values for named options
     */
    savev(filename: string, type: string, option_keys: string[], option_values: string[]): boolean
    /**
     * Creates a transformation of the source image `src` by scaling by
     * `scale_x` and `scale_y` then translating by `offset_x` and `offset_y,`
     * then renders the rectangle (`dest_x,` `dest_y,` `dest_width,`
     * `dest_height)` of the resulting image onto the destination image
     * replacing the previous contents.
     * 
     * Try to use gdk_pixbuf_scale_simple() first, this function is
     * the industrial-strength power tool you can fall back to if
     * gdk_pixbuf_scale_simple() isn't powerful enough.
     * 
     * If the source rectangle overlaps the destination rectangle on the
     * same pixbuf, it will be overwritten during the scaling which
     * results in rendering artifacts.
     * @param dest the #GdkPixbuf into which to render the results
     * @param dest_x the left coordinate for region to render
     * @param dest_y the top coordinate for region to render
     * @param dest_width the width of the region to render
     * @param dest_height the height of the region to render
     * @param offset_x the offset in the X direction (currently rounded to an integer)
     * @param offset_y the offset in the Y direction (currently rounded to an integer)
     * @param scale_x the scale factor in the X direction
     * @param scale_y the scale factor in the Y direction
     * @param interp_type the interpolation type for the transformation.
     */
    scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void
    /**
     * Create a new #GdkPixbuf containing a copy of `src` scaled to
     * `dest_width` x `dest_height`. Leaves `src` unaffected.  `interp_type`
     * should be #GDK_INTERP_NEAREST if you want maximum speed (but when
     * scaling down #GDK_INTERP_NEAREST is usually unusably ugly).  The
     * default `interp_type` should be #GDK_INTERP_BILINEAR which offers
     * reasonable quality and speed.
     * 
     * You can scale a sub-portion of `src` by creating a sub-pixbuf
     * pointing into `src;` see gdk_pixbuf_new_subpixbuf().
     * 
     * If `dest_width` and `dest_height` are equal to the `src` width and height, a
     * copy of `src` is returned, avoiding any scaling.
     * 
     * For more complicated scaling/alpha blending see gdk_pixbuf_scale()
     * and gdk_pixbuf_composite().
     * @param dest_width the width of destination image
     * @param dest_height the height of destination image
     * @param interp_type the interpolation type for the transformation.
     */
    scale_simple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf | null
    /**
     * Attaches a key/value pair as an option to a #GdkPixbuf. If `key` already
     * exists in the list of options attached to `pixbuf,` the new value is
     * ignored and %FALSE is returned.
     * @param key a nul-terminated string.
     * @param value a nul-terminated string.
     */
    set_option(key: string, value: string): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
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
    set_data(key: string, data?: object | null): void
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
    watch_closure(closure: Function): void
    /* Methods of Gio-2.0.Gio.Icon */
    /**
     * Checks if two icons are equal.
     * @param icon2 pointer to the second #GIcon.
     */
    equal(icon2?: Gio.Icon | null): boolean
    /**
     * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
     * back by calling g_icon_deserialize() on the returned value.
     * As serialization will avoid using raw icon data when possible, it only
     * makes sense to transfer the #GVariant between processes on the same machine,
     * (as opposed to over the network), and within the same file system namespace.
     */
    serialize(): GLib.Variant
    /**
     * Generates a textual representation of `icon` that can be used for
     * serialization such as when passing `icon` to a different process or
     * saving it to persistent storage. Use g_icon_new_for_string() to
     * get `icon` back from the returned string.
     * 
     * The encoding of the returned string is proprietary to #GIcon except
     * in the following two cases
     * 
     * - If `icon` is a #GFileIcon, the returned string is a native path
     *   (such as `/path/to/my icon.png`) without escaping
     *   if the #GFile for `icon` is a native file.  If the file is not
     *   native, the returned string is the result of g_file_get_uri()
     *   (such as `sftp://path/to/my%20icon.png`).
     * 
     * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
     *   the encoding is simply the name (such as `network-server`).
     */
    to_string(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    /**
     * Loads a loadable icon. For the asynchronous version of this function,
     * see g_loadable_icon_load_async().
     * @param size an integer.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /**
     * Loads an icon asynchronously. To finish this function, see
     * g_loadable_icon_load_finish(). For the synchronous, blocking
     * version of this function, see g_loadable_icon_load().
     * @param size an integer.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the            request is satisfied
     */
    load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
     * @param res a #GAsyncResult.
     */
    load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.Pixbuf */
    /**
     * Checks if two icons are equal.
     * @param icon2 pointer to the second #GIcon.
     */
    vfunc_equal(icon2?: Gio.Icon | null): boolean
    /**
     * Gets a hash for an icon.
     */
    vfunc_hash(): number
    /**
     * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
     * back by calling g_icon_deserialize() on the returned value.
     * As serialization will avoid using raw icon data when possible, it only
     * makes sense to transfer the #GVariant between processes on the same machine,
     * (as opposed to over the network), and within the same file system namespace.
     */
    vfunc_serialize(): GLib.Variant
    /**
     * Loads a loadable icon. For the asynchronous version of this function,
     * see g_loadable_icon_load_async().
     * @param size an integer.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /**
     * Loads an icon asynchronously. To finish this function, see
     * g_loadable_icon_load_finish(). For the synchronous, blocking
     * version of this function, see g_loadable_icon_load().
     * @param size an integer.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback a #GAsyncReadyCallback to call when the            request is satisfied
     */
    vfunc_load_async(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
     * @param res a #GAsyncResult.
     */
    vfunc_load_finish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /* Virtual methods of GObject-2.0.GObject.Object */
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::bits-per-sample", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bits-per-sample", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::colorspace", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::colorspace", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-alpha", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-alpha", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-channels", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-channels", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixel-bytes", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-bytes", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pixels", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixels", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::rowstride", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rowstride", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Pixbuf, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Pixbuf_ConstructProps)
    _init (config?: Pixbuf_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): Pixbuf
    static new_from_bytes(data: GLib.Bytes, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): Pixbuf
    static new_from_data(data: Uint8Array, colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number, destroy_fn?: PixbufDestroyNotify | null): Pixbuf
    static new_from_file(filename: string): Pixbuf
    static new_from_file_at_scale(filename: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static new_from_file_at_size(filename: string, width: number, height: number): Pixbuf
    static new_from_inline(data: Uint8Array, copy_pixels: boolean): Pixbuf
    static new_from_resource(resource_path: string): Pixbuf
    static new_from_resource_at_scale(resource_path: string, width: number, height: number, preserve_aspect_ratio: boolean): Pixbuf
    static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Pixbuf
    static new_from_stream_at_scale(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null): Pixbuf
    static new_from_stream_finish(async_result: Gio.AsyncResult): Pixbuf
    static new_from_xpm_data(data: string[]): Pixbuf
    /**
     * Calculates the rowstride that an image created with those values would
     * have. This is useful for front-ends and backends that want to sanity
     * check image values without needing to create them.
     * @param colorspace Color space for image
     * @param has_alpha Whether the image should have transparency information
     * @param bits_per_sample Number of bits per color sample
     * @param width Width of image in pixels, must be > 0
     * @param height Height of image in pixels, must be > 0
     */
    static calculate_rowstride(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): number
    /**
     * Parses an image file far enough to determine its format and size.
     * @param filename The name of the file to identify.
     */
    static get_file_info(filename: string): [ /* returnType */ PixbufFormat | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Asynchronously parses an image file far enough to determine its
     * format and size.
     * 
     * For more details see gdk_pixbuf_get_file_info(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the
     * main thread. You can then call gdk_pixbuf_get_file_info_finish() to
     * get the result of the operation.
     * @param filename The name of the file to identify
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the file info is available
     */
    static get_file_info_async(filename: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous pixbuf parsing operation started with
     * gdk_pixbuf_get_file_info_async().
     * @param async_result a #GAsyncResult
     */
    static get_file_info_finish(async_result: Gio.AsyncResult): [ /* returnType */ PixbufFormat, /* width */ number, /* height */ number ]
    /**
     * Obtains the available information about the image formats supported
     * by GdkPixbuf.
     */
    static get_formats(): PixbufFormat[]
    /**
     * Initalizes the gdk-pixbuf loader modules referenced by the loaders.cache
     * file present inside that directory.
     * 
     * This is to be used by applications that want to ship certain loaders
     * in a different location from the system ones.
     * 
     * This is needed when the OS or runtime ships a minimal number of loaders
     * so as to reduce the potential attack surface of carefully crafted image
     * files, especially for uncommon file types. Applications that require
     * broader image file types coverage, such as image viewers, would be
     * expected to ship the gdk-pixbuf modules in a separate location, bundled
     * with the application in a separate directory from the OS or runtime-
     * provided modules.
     * @param path Path to directory where the loaders.cache is installed
     */
    static init_modules(path: string): boolean
    /**
     * Creates a new pixbuf by asynchronously loading an image from an input stream.
     * 
     * For more details see gdk_pixbuf_new_from_stream(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * You can then call gdk_pixbuf_new_from_stream_finish() to get the result of the operation.
     * @param stream a #GInputStream from which to load the pixbuf
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the pixbuf is loaded
     */
    static new_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Creates a new pixbuf by asynchronously loading an image from an input stream.
     * 
     * For more details see gdk_pixbuf_new_from_stream_at_scale(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * You can then call gdk_pixbuf_new_from_stream_finish() to get the result of the operation.
     * @param stream a #GInputStream from which to load the pixbuf
     * @param width the width the image should have or -1 to not constrain the width
     * @param height the height the image should have or -1 to not constrain the height
     * @param preserve_aspect_ratio %TRUE to preserve the image's aspect ratio
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the pixbuf is loaded
     */
    static new_from_stream_at_scale_async(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous pixbuf save operation started with
     * gdk_pixbuf_save_to_stream_async().
     * @param async_result a #GAsyncResult
     */
    static save_to_stream_finish(async_result: Gio.AsyncResult): boolean
    /**
     * Deserializes a #GIcon previously serialized using g_icon_serialize().
     * @param value a #GVariant created with g_icon_serialize()
     */
    static deserialize(value: GLib.Variant): Gio.Icon
    /**
     * Gets a hash for an icon.
     * @param icon #gconstpointer to an icon object.
     */
    static hash(icon: object): number
    /**
     * Generate a #GIcon instance from `str`. This function can fail if
     * `str` is not valid - see g_icon_to_string() for discussion.
     * 
     * If your application or library provides one or more #GIcon
     * implementations you need to ensure that each #GType is registered
     * with the type system prior to calling g_icon_new_for_string().
     * @param str A string obtained via g_icon_to_string().
     */
    static new_for_string(str: string): Gio.Icon
    static $gtype: GObject.Type
}
export interface PixbufAnimation_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimation {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    /**
     * Queries the height of the bounding box of a pixbuf animation.
     */
    get_height(): number
    /**
     * Get an iterator for displaying an animation. The iterator provides
     * the frames that should be displayed at a given time. It should be
     * freed after use with g_object_unref().
     * 
     * `start_time` would normally come from g_get_current_time(), and marks
     * the beginning of animation playback. After creating an iterator, you
     * should immediately display the pixbuf returned by
     * gdk_pixbuf_animation_iter_get_pixbuf(). Then, you should install
     * a timeout (with g_timeout_add()) or by some other mechanism ensure
     * that you'll update the image after
     * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. Each time
     * the image is updated, you should reinstall the timeout with the new,
     * possibly-changed delay time.
     * 
     * As a shortcut, if `start_time` is %NULL, the result of
     * g_get_current_time() will be used automatically.
     * 
     * To update the image (i.e. possibly change the result of
     * gdk_pixbuf_animation_iter_get_pixbuf() to a new frame of the animation),
     * call gdk_pixbuf_animation_iter_advance().
     * 
     * If you're using #GdkPixbufLoader, in addition to updating the image
     * after the delay time, you should also update it whenever you
     * receive the area_updated signal and
     * gdk_pixbuf_animation_iter_on_currently_loading_frame() returns
     * %TRUE. In this case, the frame currently being fed into the loader
     * has received new data, so needs to be refreshed. The delay time for
     * a frame may also be modified after an area_updated signal, for
     * example if the delay time for a frame is encoded in the data after
     * the frame itself. So your timeout should be reinstalled after any
     * area_updated signal.
     * 
     * A delay time of -1 is possible, indicating "infinite."
     * @param start_time time when the animation starts playing
     */
    get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    /**
     * If an animation is really just a plain image (has only one frame),
     * this function returns that image. If the animation is an animation,
     * this function returns a reasonable thing to display as a static
     * unanimated image, which might be the first frame, or something more
     * sophisticated. If an animation hasn't loaded any frames yet, this
     * function will return %NULL.
     */
    get_static_image(): Pixbuf
    /**
     * Queries the width of the bounding box of a pixbuf animation.
     */
    get_width(): number
    /**
     * If you load a file with gdk_pixbuf_animation_new_from_file() and it
     * turns out to be a plain, unanimated image, then this function will
     * return %TRUE. Use gdk_pixbuf_animation_get_static_image() to retrieve
     * the image.
     */
    is_static_image(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
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
    set_data(key: string, data?: object | null): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufAnimation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufAnimation_ConstructProps)
    _init (config?: PixbufAnimation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_file(filename: string): PixbufAnimation
    static new_from_resource(resource_path: string): PixbufAnimation
    static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): PixbufAnimation
    static new_from_stream_finish(async_result: Gio.AsyncResult): PixbufAnimation
    /**
     * Creates a new animation by asynchronously loading an image from an input stream.
     * 
     * For more details see gdk_pixbuf_new_from_stream(), which is the synchronous
     * version of this function.
     * 
     * When the operation is finished, `callback` will be called in the main thread.
     * You can then call gdk_pixbuf_animation_new_from_stream_finish() to get the
     * result of the operation.
     * @param stream a #GInputStream from which to load the animation
     * @param cancellable optional #GCancellable object, %NULL to ignore
     * @param callback a #GAsyncReadyCallback to call when the pixbuf is loaded
     */
    static new_from_stream_async(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static $gtype: GObject.Type
}
export interface PixbufAnimationIter_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufAnimationIter {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    /**
     * Possibly advances an animation to a new frame. Chooses the frame based
     * on the start time passed to gdk_pixbuf_animation_get_iter().
     * 
     * `current_time` would normally come from g_get_current_time(), and
     * must be greater than or equal to the time passed to
     * gdk_pixbuf_animation_get_iter(), and must increase or remain
     * unchanged each time gdk_pixbuf_animation_iter_get_pixbuf() is
     * called. That is, you can't go backward in time; animations only
     * play forward.
     * 
     * As a shortcut, pass %NULL for the current time and g_get_current_time()
     * will be invoked on your behalf. So you only need to explicitly pass
     * `current_time` if you're doing something odd like playing the animation
     * at double speed.
     * 
     * If this function returns %FALSE, there's no need to update the animation
     * display, assuming the display had been rendered prior to advancing;
     * if %TRUE, you need to call gdk_pixbuf_animation_iter_get_pixbuf()
     * and update the display with the new pixbuf.
     * @param current_time current time
     */
    advance(current_time?: GLib.TimeVal | null): boolean
    /**
     * Gets the number of milliseconds the current pixbuf should be displayed,
     * or -1 if the current pixbuf should be displayed forever. g_timeout_add()
     * conveniently takes a timeout in milliseconds, so you can use a timeout
     * to schedule the next update.
     * 
     * Note that some formats, like GIF, might clamp the timeout values in the
     * image file to avoid updates that are just too quick. The minimum timeout
     * for GIF images is currently 20 milliseconds.
     */
    get_delay_time(): number
    /**
     * Gets the current pixbuf which should be displayed; the pixbuf might not
     * be the same size as the animation itself
     * (gdk_pixbuf_animation_get_width(), gdk_pixbuf_animation_get_height()).
     * This pixbuf should be displayed for
     * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. The caller
     * of this function does not own a reference to the returned pixbuf;
     * the returned pixbuf will become invalid when the iterator advances
     * to the next frame, which may happen anytime you call
     * gdk_pixbuf_animation_iter_advance(). Copy the pixbuf to keep it
     * (don't just add a reference), as it may get recycled as you advance
     * the iterator.
     */
    get_pixbuf(): Pixbuf
    /**
     * Used to determine how to respond to the area_updated signal on
     * #GdkPixbufLoader when loading an animation. area_updated is emitted
     * for an area of the frame currently streaming in to the loader. So if
     * you're on the currently loading frame, you need to redraw the screen for
     * the updated area.
     */
    on_currently_loading_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
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
    set_data(key: string, data?: object | null): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufAnimationIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufAnimationIter_ConstructProps)
    _init (config?: PixbufAnimationIter_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PixbufLoader_ConstructProps extends GObject.Object_ConstructProps {
}
export class PixbufLoader {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    /**
     * Informs a pixbuf loader that no further writes with
     * gdk_pixbuf_loader_write() will occur, so that it can free its
     * internal loading structures. Also, tries to parse any data that
     * hasn't yet been parsed; if the remaining data is partial or
     * corrupt, an error will be returned.  If %FALSE is returned, `error`
     * will be set to an error from the #GDK_PIXBUF_ERROR or #G_FILE_ERROR
     * domains. If you're just cancelling a load rather than expecting it
     * to be finished, passing %NULL for `error` to ignore it is
     * reasonable.
     * 
     * Remember that this does not unref the loader, so if you plan not to
     * use it anymore, please g_object_unref() it.
     */
    close(): boolean
    /**
     * Queries the #GdkPixbufAnimation that a pixbuf loader is currently creating.
     * In general it only makes sense to call this function after the "area-prepared"
     * signal has been emitted by the loader. If the loader doesn't have enough
     * bytes yet (hasn't emitted the "area-prepared" signal) this function will
     * return %NULL.
     */
    get_animation(): PixbufAnimation
    /**
     * Obtains the available information about the format of the
     * currently loading image file.
     */
    get_format(): PixbufFormat | null
    /**
     * Queries the #GdkPixbuf that a pixbuf loader is currently creating.
     * In general it only makes sense to call this function after the
     * "area-prepared" signal has been emitted by the loader; this means
     * that enough data has been read to know the size of the image that
     * will be allocated.  If the loader has not received enough data via
     * gdk_pixbuf_loader_write(), then this function returns %NULL.  The
     * returned pixbuf will be the same in all future calls to the loader,
     * so simply calling g_object_ref() should be sufficient to continue
     * using it.  Additionally, if the loader is an animation, it will
     * return the "static image" of the animation
     * (see gdk_pixbuf_animation_get_static_image()).
     */
    get_pixbuf(): Pixbuf
    /**
     * Causes the image to be scaled while it is loaded. The desired
     * image size can be determined relative to the original size of
     * the image by calling gdk_pixbuf_loader_set_size() from a
     * signal handler for the ::size-prepared signal.
     * 
     * Attempts to set the desired image size  are ignored after the
     * emission of the ::size-prepared signal.
     * @param width The desired width of the image being loaded.
     * @param height The desired height of the image being loaded.
     */
    set_size(width: number, height: number): void
    /**
     * This will cause a pixbuf loader to parse the next `count` bytes of
     * an image.  It will return %TRUE if the data was loaded successfully,
     * and %FALSE if an error occurred.  In the latter case, the loader
     * will be closed, and will not accept further writes. If %FALSE is
     * returned, `error` will be set to an error from the #GDK_PIXBUF_ERROR
     * or #G_FILE_ERROR domains.
     * @param buf Pointer to image data.
     */
    write(buf: Uint8Array): boolean
    /**
     * This will cause a pixbuf loader to parse a buffer inside a #GBytes
     * for an image.  It will return %TRUE if the data was loaded successfully,
     * and %FALSE if an error occurred.  In the latter case, the loader
     * will be closed, and will not accept further writes. If %FALSE is
     * returned, `error` will be set to an error from the #GDK_PIXBUF_ERROR
     * or #G_FILE_ERROR domains.
     * 
     * See also: gdk_pixbuf_loader_write()
     * @param buffer The image data as a #GBytes
     */
    write_bytes(buffer: GLib.Bytes): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
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
    set_data(key: string, data?: object | null): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    vfunc_area_prepared(): void
    vfunc_area_updated(x: number, y: number, width: number, height: number): void
    vfunc_closed(): void
    vfunc_size_prepared(width: number, height: number): void
    /* Virtual methods of GObject-2.0.GObject.Object */
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GdkPixbuf-2.0.GdkPixbuf.PixbufLoader */
    /**
     * This signal is emitted when the pixbuf loader has allocated the
     * pixbuf in the desired size.  After this signal is emitted,
     * applications can call gdk_pixbuf_loader_get_pixbuf() to fetch
     * the partially-loaded pixbuf.
     */
    connect(sigName: "area-prepared", callback: (($obj: PixbufLoader) => void)): number
    connect_after(sigName: "area-prepared", callback: (($obj: PixbufLoader) => void)): number
    emit(sigName: "area-prepared"): void
    /**
     * This signal is emitted when a significant area of the image being
     * loaded has been updated.  Normally it means that a complete
     * scanline has been read in, but it could be a different area as
     * well.  Applications can use this signal to know when to repaint
     * areas of an image that is being loaded.
     * @param x X offset of upper-left corner of the updated area.
     * @param y Y offset of upper-left corner of the updated area.
     * @param width Width of updated area.
     * @param height Height of updated area.
     */
    connect(sigName: "area-updated", callback: (($obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    connect_after(sigName: "area-updated", callback: (($obj: PixbufLoader, x: number, y: number, width: number, height: number) => void)): number
    emit(sigName: "area-updated", x: number, y: number, width: number, height: number): void
    /**
     * This signal is emitted when gdk_pixbuf_loader_close() is called.
     * It can be used by different parts of an application to receive
     * notification when an image loader is closed by the code that
     * drives it.
     */
    connect(sigName: "closed", callback: (($obj: PixbufLoader) => void)): number
    connect_after(sigName: "closed", callback: (($obj: PixbufLoader) => void)): number
    emit(sigName: "closed"): void
    /**
     * This signal is emitted when the pixbuf loader has been fed the
     * initial amount of data that is required to figure out the size
     * of the image that it will create.  Applications can call
     * gdk_pixbuf_loader_set_size() in response to this signal to set
     * the desired size to which the image should be scaled.
     * @param width the original width of the image
     * @param height the original height of the image
     */
    connect(sigName: "size-prepared", callback: (($obj: PixbufLoader, width: number, height: number) => void)): number
    connect_after(sigName: "size-prepared", callback: (($obj: PixbufLoader, width: number, height: number) => void)): number
    emit(sigName: "size-prepared", width: number, height: number): void
    /* Signals of GObject-2.0.GObject.Object */
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufLoader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufLoader_ConstructProps)
    _init (config?: PixbufLoader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): PixbufLoader
    static new_with_mime_type(mime_type: string): PixbufLoader
    static new_with_type(image_type: string): PixbufLoader
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnim_ConstructProps extends PixbufAnimation_ConstructProps {
    /* Constructor properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    /**
     * Whether the animation should loop when it reaches the end.
     */
    loop?: boolean
}
export class PixbufSimpleAnim {
    /* Properties of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    /**
     * Whether the animation should loop when it reaches the end.
     */
    loop: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufSimpleAnim */
    /**
     * Adds a new frame to `animation`. The `pixbuf` must
     * have the dimensions specified when the animation
     * was constructed.
     * @param pixbuf the pixbuf to add
     */
    add_frame(pixbuf: Pixbuf): void
    /**
     * Gets whether `animation` should loop indefinitely when it reaches the end.
     */
    get_loop(): boolean
    /**
     * Sets whether `animation` should loop indefinitely when it reaches the end.
     * @param loop whether to loop the animation
     */
    set_loop(loop: boolean): void
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimation */
    /**
     * Queries the height of the bounding box of a pixbuf animation.
     */
    get_height(): number
    /**
     * Get an iterator for displaying an animation. The iterator provides
     * the frames that should be displayed at a given time. It should be
     * freed after use with g_object_unref().
     * 
     * `start_time` would normally come from g_get_current_time(), and marks
     * the beginning of animation playback. After creating an iterator, you
     * should immediately display the pixbuf returned by
     * gdk_pixbuf_animation_iter_get_pixbuf(). Then, you should install
     * a timeout (with g_timeout_add()) or by some other mechanism ensure
     * that you'll update the image after
     * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. Each time
     * the image is updated, you should reinstall the timeout with the new,
     * possibly-changed delay time.
     * 
     * As a shortcut, if `start_time` is %NULL, the result of
     * g_get_current_time() will be used automatically.
     * 
     * To update the image (i.e. possibly change the result of
     * gdk_pixbuf_animation_iter_get_pixbuf() to a new frame of the animation),
     * call gdk_pixbuf_animation_iter_advance().
     * 
     * If you're using #GdkPixbufLoader, in addition to updating the image
     * after the delay time, you should also update it whenever you
     * receive the area_updated signal and
     * gdk_pixbuf_animation_iter_on_currently_loading_frame() returns
     * %TRUE. In this case, the frame currently being fed into the loader
     * has received new data, so needs to be refreshed. The delay time for
     * a frame may also be modified after an area_updated signal, for
     * example if the delay time for a frame is encoded in the data after
     * the frame itself. So your timeout should be reinstalled after any
     * area_updated signal.
     * 
     * A delay time of -1 is possible, indicating "infinite."
     * @param start_time time when the animation starts playing
     */
    get_iter(start_time?: GLib.TimeVal | null): PixbufAnimationIter
    /**
     * If an animation is really just a plain image (has only one frame),
     * this function returns that image. If the animation is an animation,
     * this function returns a reasonable thing to display as a static
     * unanimated image, which might be the first frame, or something more
     * sophisticated. If an animation hasn't loaded any frames yet, this
     * function will return %NULL.
     */
    get_static_image(): Pixbuf
    /**
     * Queries the width of the bounding box of a pixbuf animation.
     */
    get_width(): number
    /**
     * If you load a file with gdk_pixbuf_animation_new_from_file() and it
     * turns out to be a plain, unanimated image, then this function will
     * return %TRUE. Use gdk_pixbuf_animation_get_static_image() to retrieve
     * the image.
     */
    is_static_image(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
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
    set_data(key: string, data?: object | null): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::loop", callback: (($obj: PixbufSimpleAnim, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufSimpleAnim_ConstructProps)
    _init (config?: PixbufSimpleAnim_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, rate: number): PixbufSimpleAnim
    static $gtype: GObject.Type
}
export interface PixbufSimpleAnimIter_ConstructProps extends PixbufAnimationIter_ConstructProps {
}
export class PixbufSimpleAnimIter {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufAnimationIter */
    /**
     * Possibly advances an animation to a new frame. Chooses the frame based
     * on the start time passed to gdk_pixbuf_animation_get_iter().
     * 
     * `current_time` would normally come from g_get_current_time(), and
     * must be greater than or equal to the time passed to
     * gdk_pixbuf_animation_get_iter(), and must increase or remain
     * unchanged each time gdk_pixbuf_animation_iter_get_pixbuf() is
     * called. That is, you can't go backward in time; animations only
     * play forward.
     * 
     * As a shortcut, pass %NULL for the current time and g_get_current_time()
     * will be invoked on your behalf. So you only need to explicitly pass
     * `current_time` if you're doing something odd like playing the animation
     * at double speed.
     * 
     * If this function returns %FALSE, there's no need to update the animation
     * display, assuming the display had been rendered prior to advancing;
     * if %TRUE, you need to call gdk_pixbuf_animation_iter_get_pixbuf()
     * and update the display with the new pixbuf.
     * @param current_time current time
     */
    advance(current_time?: GLib.TimeVal | null): boolean
    /**
     * Gets the number of milliseconds the current pixbuf should be displayed,
     * or -1 if the current pixbuf should be displayed forever. g_timeout_add()
     * conveniently takes a timeout in milliseconds, so you can use a timeout
     * to schedule the next update.
     * 
     * Note that some formats, like GIF, might clamp the timeout values in the
     * image file to avoid updates that are just too quick. The minimum timeout
     * for GIF images is currently 20 milliseconds.
     */
    get_delay_time(): number
    /**
     * Gets the current pixbuf which should be displayed; the pixbuf might not
     * be the same size as the animation itself
     * (gdk_pixbuf_animation_get_width(), gdk_pixbuf_animation_get_height()).
     * This pixbuf should be displayed for
     * gdk_pixbuf_animation_iter_get_delay_time() milliseconds. The caller
     * of this function does not own a reference to the returned pixbuf;
     * the returned pixbuf will become invalid when the iterator advances
     * to the next frame, which may happen anytime you call
     * gdk_pixbuf_animation_iter_advance(). Copy the pixbuf to keep it
     * (don't just add a reference), as it may get recycled as you advance
     * the iterator.
     */
    get_pixbuf(): Pixbuf
    /**
     * Used to determine how to respond to the area_updated signal on
     * #GdkPixbufLoader when loading an animation. area_updated is emitted
     * for an area of the frame currently streaming in to the loader. So if
     * you're on the currently loading frame, you need to redraw the screen for
     * the updated area.
     */
    on_currently_loading_frame(): boolean
    /* Methods of GObject-2.0.GObject.Object */
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
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
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
    set_data(key: string, data?: object | null): void
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
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
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
     * @param pspec 
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
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
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PixbufSimpleAnimIter, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PixbufSimpleAnimIter_ConstructProps)
    _init (config?: PixbufSimpleAnimIter_ConstructProps): void
    static $gtype: GObject.Type
}
export class PixbufFormat {
    /* Methods of GdkPixbuf-2.0.GdkPixbuf.PixbufFormat */
    /**
     * Creates a copy of `format`
     */
    copy(): PixbufFormat
    /**
     * Frees the resources allocated when copying a #GdkPixbufFormat
     * using gdk_pixbuf_format_copy()
     */
    free(): void
    /**
     * Returns a description of the format.
     */
    get_description(): string
    /**
     * Returns the filename extensions typically used for files in the
     * given format.
     */
    get_extensions(): string[]
    /**
     * Returns information about the license of the image loader for the format. The
     * returned string should be a shorthand for a wellknown license, e.g. "LGPL",
     * "GPL", "QPL", "GPL/QPL", or "other" to indicate some other license.  This
     * string should be freed with g_free() when it's no longer needed.
     */
    get_license(): string
    /**
     * Returns the mime types supported by the format.
     */
    get_mime_types(): string[]
    /**
     * Returns the name of the format.
     */
    get_name(): string
    /**
     * Returns whether this image format is disabled. See
     * gdk_pixbuf_format_set_disabled().
     */
    is_disabled(): boolean
    /**
     * Returns %TRUE if the save option specified by `option_key` is supported when
     * saving a pixbuf using the module implementing `format`.
     * See gdk_pixbuf_save() for more information about option keys.
     * @param option_key the name of an option
     */
    is_save_option_supported(option_key: string): boolean
    /**
     * Returns whether this image format is scalable. If a file is in a
     * scalable format, it is preferable to load it at the desired size,
     * rather than loading it at the default size and scaling the
     * resulting pixbuf to the desired size.
     */
    is_scalable(): boolean
    /**
     * Returns whether pixbufs can be saved in the given format.
     */
    is_writable(): boolean
    /**
     * Disables or enables an image format. If a format is disabled,
     * gdk-pixbuf won't use the image loader for this format to load
     * images. Applications can use this to avoid using image loaders
     * with an inappropriate license, see gdk_pixbuf_format_get_license().
     * @param disabled %TRUE to disable the format `format`
     */
    set_disabled(disabled: boolean): void
    static name: string
}
export abstract class PixbufLoaderClass {
    /* Fields of GdkPixbuf-2.0.GdkPixbuf.PixbufLoaderClass */
    parent_class: GObject.ObjectClass
    size_prepared: (loader: PixbufLoader, width: number, height: number) => void
    area_prepared: (loader: PixbufLoader) => void
    area_updated: (loader: PixbufLoader, x: number, y: number, width: number, height: number) => void
    closed: (loader: PixbufLoader) => void
    static name: string
}
export abstract class PixbufSimpleAnimClass {
    static name: string
}