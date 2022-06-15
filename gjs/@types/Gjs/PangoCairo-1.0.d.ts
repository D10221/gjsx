/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoCairo-1.0
 */

import type * as Gjs from './Gjs';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

export function context_get_font_options(context: Pango.Context): cairo.FontOptions | null
export function context_get_resolution(context: Pango.Context): number
export function context_set_font_options(context: Pango.Context, options: cairo.FontOptions | null): void
export function context_set_resolution(context: Pango.Context, dpi: number): void
export function context_set_shape_renderer(context: Pango.Context, func: ShapeRendererFunc | null): void
export function create_context(cr: cairo.Context): Pango.Context
export function create_layout(cr: cairo.Context): Pango.Layout
export function error_underline_path(cr: cairo.Context, x: number, y: number, width: number, height: number): void
export function font_map_get_default(): Pango.FontMap
export function font_map_new(): Pango.FontMap
export function font_map_new_for_font_type(fonttype: cairo.FontType): Pango.FontMap | null
export function glyph_string_path(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void
export function layout_line_path(cr: cairo.Context, line: Pango.LayoutLine): void
export function layout_path(cr: cairo.Context, layout: Pango.Layout): void
export function show_error_underline(cr: cairo.Context, x: number, y: number, width: number, height: number): void
export function show_glyph_item(cr: cairo.Context, text: string, glyph_item: Pango.GlyphItem): void
export function show_glyph_string(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void
export function show_layout(cr: cairo.Context, layout: Pango.Layout): void
export function show_layout_line(cr: cairo.Context, line: Pango.LayoutLine): void
export function update_context(cr: cairo.Context, context: Pango.Context): void
export function update_layout(cr: cairo.Context, layout: Pango.Layout): void
/**
 * Function type for rendering attributes of type %PANGO_ATTR_SHAPE
 * with Pango's Cairo renderer.
 * @callback 
 */
export interface ShapeRendererFunc {
    (cr: cairo.Context, attr: Pango.AttrShape, do_path: boolean, data: object | null): void
}
export interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * #PangoCairoFont is an interface exported by fonts for
 * use with Cairo. The actual type of the font will depend
 * on the particular font technology Cairo was compiled to use.
 * @interface 
 */
export class Font {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of PangoCairo-1.0.PangoCairo.Font */
    /**
     * Gets the #cairo_scaled_font_t used by `font`.
     * The scaled font can be referenced and kept using
     * cairo_scaled_font_reference().
     */
    get_scaled_font(): cairo.ScaledFont | null
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
    /* Implemented methods of Pango-1.0.Pango.Font */
    /**
     * Returns a description of the font, with font size set in points.
     * Use pango_font_describe_with_absolute_size() if you want the font
     * size in device units.
     */
    describe(): Pango.FontDescription
    /**
     * Returns a description of the font, with absolute font size set
     * (in device units). Use pango_font_describe() if you want the font
     * size in points.
     */
    describe_with_absolute_size(): Pango.FontDescription
    /**
     * Finds the best matching shaper for a font for a particular
     * language tag and character point.
     * @param language the language tag
     * @param ch a Unicode character.
     */
    find_shaper(language: Pango.Language, ch: number): Pango.EngineShape
    /**
     * Computes the coverage map for a given font and language tag.
     * @param language the language tag
     */
    get_coverage(language: Pango.Language): Pango.Coverage
    /**
     * Gets the font map for which the font was created.
     * 
     * Note that the font maintains a <firstterm>weak</firstterm> reference
     * to the font map, so if all references to font map are dropped, the font
     * map will be finalized even if there are fonts created with the font
     * map that are still alive.  In that case this function will return %NULL.
     * It is the responsibility of the user to ensure that the font map is kept
     * alive.  In most uses this is not an issue as a #PangoContext holds
     * a reference to the font map.
     */
    get_font_map(): Pango.FontMap | null
    /**
     * Gets the logical and ink extents of a glyph within a font. The
     * coordinate system for each rectangle has its origin at the
     * base line and horizontal origin of the character with increasing
     * coordinates extending to the right and down. The macros PANGO_ASCENT(),
     * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
     * from the extents rectangle to more traditional font metrics. The units
     * of the rectangles are in 1/PANGO_SCALE of a device unit.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @param glyph the glyph index
     */
    get_glyph_extents(glyph: Pango.Glyph): [ /* ink_rect */ Pango.Rectangle, /* logical_rect */ Pango.Rectangle ]
    /**
     * Gets overall metric information for a font. Since the metrics may be
     * substantially different for different scripts, a language tag can
     * be provided to indicate that the metrics should be retrieved that
     * correspond to the script(s) used by that language.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @param language language tag used to determine which script to get the metrics            for, or %NULL to indicate to get the metrics for the entire font.
     */
    get_metrics(language: Pango.Language | null): Pango.FontMetrics
    /**
     * Returns whether the font provides a glyph for this character.
     * 
     * Returns %TRUE if `font` can render `wc`
     * @param wc a Unicode character
     */
    has_char(wc: string): boolean
    /* Own virtual methods of PangoCairo-1.0.PangoCairo.Font */
    /**
     * Returns a description of the font, with font size set in points.
     * Use pango_font_describe_with_absolute_size() if you want the font
     * size in device units.
     * @virtual 
     */
    vfunc_describe(): Pango.FontDescription
    vfunc_describe_absolute(): Pango.FontDescription
    /**
     * Computes the coverage map for a given font and language tag.
     * @virtual 
     * @param language the language tag
     */
    vfunc_get_coverage(language: Pango.Language): Pango.Coverage
    /**
     * Gets the font map for which the font was created.
     * 
     * Note that the font maintains a <firstterm>weak</firstterm> reference
     * to the font map, so if all references to font map are dropped, the font
     * map will be finalized even if there are fonts created with the font
     * map that are still alive.  In that case this function will return %NULL.
     * It is the responsibility of the user to ensure that the font map is kept
     * alive.  In most uses this is not an issue as a #PangoContext holds
     * a reference to the font map.
     * @virtual 
     */
    vfunc_get_font_map(): Pango.FontMap | null
    /**
     * Gets the logical and ink extents of a glyph within a font. The
     * coordinate system for each rectangle has its origin at the
     * base line and horizontal origin of the character with increasing
     * coordinates extending to the right and down. The macros PANGO_ASCENT(),
     * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
     * from the extents rectangle to more traditional font metrics. The units
     * of the rectangles are in 1/PANGO_SCALE of a device unit.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @virtual 
     * @param glyph the glyph index
     */
    vfunc_get_glyph_extents(glyph: Pango.Glyph): [ /* ink_rect */ Pango.Rectangle, /* logical_rect */ Pango.Rectangle ]
    /**
     * Gets overall metric information for a font. Since the metrics may be
     * substantially different for different scripts, a language tag can
     * be provided to indicate that the metrics should be retrieved that
     * correspond to the script(s) used by that language.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @virtual 
     * @param language language tag used to determine which script to get the metrics            for, or %NULL to indicate to get the metrics for the entire font.
     */
    vfunc_get_metrics(language: Pango.Language | null): Pango.FontMetrics
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
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Frees an array of font descriptions.
     * @param descs a pointer to an array of #PangoFontDescription, may be %NULL
     */
    static descriptions_free(descs: Pango.FontDescription[] | null): void
    static $gtype: GObject.GType<Font>
}
export interface FontMap_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * #PangoCairoFontMap is an interface exported by font maps for
 * use with Cairo. The actual type of the font map will depend
 * on the particular font technology Cairo was compiled to use.
 * @interface 
 */
export class FontMap {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of PangoCairo-1.0.PangoCairo.FontMap */
    /**
     * Gets the type of Cairo font backend that `fontmap` uses.
     */
    get_font_type(): cairo.FontType
    /**
     * Gets the resolution for the fontmap. See pango_cairo_font_map_set_resolution()
     */
    get_resolution(): number
    /**
     * Sets a default #PangoCairoFontMap to use with Cairo.
     * 
     * This can be used to change the Cairo font backend that the
     * default fontmap uses for example.  The old default font map
     * is unreffed and the new font map referenced.
     * 
     * Note that since Pango 1.32.6, the default fontmap is per-thread.
     * This function only changes the default fontmap for
     * the current thread.   Default fontmaps of exisiting threads
     * are not changed.  Default fontmaps of any new threads will
     * still be created using pango_cairo_font_map_new().
     * 
     * A value of %NULL for `fontmap` will cause the current default
     * font map to be released and a new default font
     * map to be created on demand, using pango_cairo_font_map_new().
     */
    set_default(): void
    /**
     * Sets the resolution for the fontmap. This is a scale factor between
     * points specified in a #PangoFontDescription and Cairo units. The
     * default value is 96, meaning that a 10 point font will be 13
     * units high. (10 * 96. / 72. = 13.3).
     * @param dpi the resolution in "dots per inch". (Physical inches aren't actually   involved; the terminology is conventional.)
     */
    set_resolution(dpi: number): void
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
    /* Implemented methods of Pango-1.0.Pango.FontMap */
    /**
     * Forces a change in the context, which will cause any #PangoContext
     * using this fontmap to change.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the context
     * and such data is changed.
     */
    changed(): void
    /**
     * Creates a #PangoContext connected to `fontmap`.  This is equivalent
     * to pango_context_new() followed by pango_context_set_font_map().
     * 
     * If you are using Pango as part of a higher-level system,
     * that system may have it's own way of create a #PangoContext.
     * For instance, the GTK+ toolkit has, among others,
     * gdk_pango_context_get_for_screen(), and
     * gtk_widget_get_pango_context().  Use those instead.
     */
    create_context(): Pango.Context
    /**
     * Returns the current serial number of `fontmap`.  The serial number is
     * initialized to an small number larger than zero when a new fontmap
     * is created and is increased whenever the fontmap is changed. It may
     * wrap, but will never have the value 0. Since it can wrap, never compare
     * it with "less than", always use "not equals".
     * 
     * The fontmap can only be changed using backend-specific API, like changing
     * fontmap resolution.
     * 
     * This can be used to automatically detect changes to a #PangoFontMap, like
     * in #PangoContext.
     */
    get_serial(): number
    /**
     * List all families for a fontmap.
     */
    list_families(): /* families */ Pango.FontFamily[]
    /**
     * Load the font in the fontmap that is the closest match for `desc`.
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     */
    load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    /**
     * Load a set of fonts in the fontmap that can be used to render
     * a font matching `desc`.
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     * @param language a #PangoLanguage the fonts will be used for
     */
    load_fontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
    /* Own virtual methods of PangoCairo-1.0.PangoCairo.FontMap */
    /**
     * Forces a change in the context, which will cause any #PangoContext
     * using this fontmap to change.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the context
     * and such data is changed.
     * @virtual 
     */
    vfunc_changed(): void
    /**
     * Returns the current serial number of `fontmap`.  The serial number is
     * initialized to an small number larger than zero when a new fontmap
     * is created and is increased whenever the fontmap is changed. It may
     * wrap, but will never have the value 0. Since it can wrap, never compare
     * it with "less than", always use "not equals".
     * 
     * The fontmap can only be changed using backend-specific API, like changing
     * fontmap resolution.
     * 
     * This can be used to automatically detect changes to a #PangoFontMap, like
     * in #PangoContext.
     * @virtual 
     */
    vfunc_get_serial(): number
    /**
     * List all families for a fontmap.
     * @virtual 
     */
    vfunc_list_families(): /* families */ Pango.FontFamily[]
    /**
     * Load the font in the fontmap that is the closest match for `desc`.
     * @virtual 
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     */
    vfunc_load_font(context: Pango.Context, desc: Pango.FontDescription): Pango.Font | null
    /**
     * Load a set of fonts in the fontmap that can be used to render
     * a font matching `desc`.
     * @virtual 
     * @param context the #PangoContext the font will be used with
     * @param desc a #PangoFontDescription describing the font to load
     * @param language a #PangoLanguage the fonts will be used for
     */
    vfunc_load_fontset(context: Pango.Context, desc: Pango.FontDescription, language: Pango.Language): Pango.Fontset | null
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
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets a default #PangoCairoFontMap to use with Cairo.
     * 
     * Note that the type of the returned object will depend
     * on the particular font backend Cairo was compiled to use;
     * You generally should only use the #PangoFontMap and
     * #PangoCairoFontMap interfaces on the returned object.
     * 
     * The default Cairo fontmap can be changed by using
     * pango_cairo_font_map_set_default().  This can be used to
     * change the Cairo font backend that the default fontmap
     * uses for example.
     * 
     * Note that since Pango 1.32.6, the default fontmap is per-thread.
     * Each thread gets its own default fontmap.  In this way,
     * PangoCairo can be used safely from multiple threads.
     */
    static get_default(): Pango.FontMap
    /**
     * Creates a new #PangoCairoFontMap object of the type suitable
     * to be used with cairo font backend of type `fonttype`.
     * 
     * In most cases one should simply use `pango_cairo_font_map_new(`),
     * or in fact in most of those cases, just use
     * `pango_cairo_font_map_get_default(`).
     * @param fonttype desired #cairo_font_type_t
     */
    static new_for_font_type(fonttype: cairo.FontType): Pango.FontMap | null
    static $gtype: GObject.GType<FontMap>
}