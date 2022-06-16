/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Json-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

/**
 * Indicates the content of a #JsonNode.
 */
export enum NodeType {
    /**
     * The node contains a #JsonObject
     */
    OBJECT,
    /**
     * The node contains a #JsonArray
     */
    ARRAY,
    /**
     * The node contains a fundamental type
     */
    VALUE,
    /**
     * Special type, for nodes containing null
     */
    NULL,
}
/**
 * Error enumeration for #JsonParser
 * 
 * This enumeration can be extended at later date
 */
export enum ParserError {
    /**
     * parse error
     */
    PARSE,
    /**
     * unexpected trailing comma
     */
    TRAILING_COMMA,
    /**
     * expected comma
     */
    MISSING_COMMA,
    /**
     * expected colon
     */
    MISSING_COLON,
    /**
     * invalid bareword
     */
    INVALID_BAREWORD,
    /**
     * empty member name (Since: 0.16)
     */
    EMPTY_MEMBER_NAME,
    /**
     * invalid data (Since: 0.18)
     */
    INVALID_DATA,
    /**
     * unknown error
     */
    UNKNOWN,
}
/**
 * Error code enumeration for the %JSON_PATH_ERROR domain.
 */
export enum PathError {
    /**
     * Invalid query
     */
    QUERY,
}
/**
 * Error codes enumeration for #JsonReader errors
 */
export enum ReaderError {
    /**
     * No array found at the current position
     */
    NO_ARRAY,
    /**
     * Index out of bounds
     */
    INVALID_INDEX,
    /**
     * No object found at the current position
     */
    NO_OBJECT,
    /**
     * Member not found
     */
    INVALID_MEMBER,
    /**
     * No valid node found at the current position
     */
    INVALID_NODE,
    /**
     * The node at the current position does not
     *   hold a value
     */
    NO_VALUE,
    /**
     * The node at the current position does not
     *   hold a value of the desired type
     */
    INVALID_TYPE,
}
/**
 * Json major version component (e.g. 1 if %JSON_VERSION is 1.2.3)
 */
export const MAJOR_VERSION: number
/**
 * Json micro version component (e.g. 3 if %JSON_VERSION is 1.2.3)
 */
export const MICRO_VERSION: number
/**
 * Json minor version component (e.g. 2 if %JSON_VERSION is 1.2.3)
 */
export const MINOR_VERSION: number
/**
 * JSON-GLib version, encoded as a string, useful for printing and
 * concatenation.
 */
export const VERSION_S: string
export function boxed_can_deserialize(gboxed_type: GObject.GType, node_type: NodeType): boolean
export function boxed_can_serialize(gboxed_type: GObject.GType): [ /* returnType */ boolean, /* node_type */ NodeType ]
export function boxed_deserialize(gboxed_type: GObject.GType, node: Node): object | null
export function boxed_serialize(gboxed_type: GObject.GType, boxed: object | null): Node | null
export function construct_gobject(gtype: GObject.GType, data: string, length: number): GObject.Object
export function from_string(str: string): Node
export function gobject_deserialize(gtype: GObject.GType, node: Node): GObject.Object
export function gobject_from_data(gtype: GObject.GType, data: string, length: number): GObject.Object
export function gobject_serialize(gobject: GObject.Object): Node
export function gobject_to_data(gobject: GObject.Object): [ /* returnType */ string, /* length */ number ]
export function gvariant_deserialize(json_node: Node, signature: string | null): GLib.Variant
export function gvariant_deserialize_data(json: string, length: number, signature: string | null): GLib.Variant
export function gvariant_serialize(variant: GLib.Variant): Node
export function gvariant_serialize_data(variant: GLib.Variant): [ /* returnType */ string, /* length */ number ]
export function parser_error_quark(): GLib.Quark
export function path_error_quark(): GLib.Quark
export function reader_error_quark(): GLib.Quark
export function serialize_gobject(gobject: GObject.Object): [ /* returnType */ string, /* length */ number ]
export function string_compare(a: string, b: string): number
export function string_equal(a: string, b: string): boolean
export function string_hash(key: string): number
export function to_string(node: Node, pretty: boolean): string
/**
 * The function to be passed to json_array_foreach_element(). You
 * should not add or remove elements to and from `array` within
 * this function. It is safe to change the value of `element_node`.
 * @callback 
 */
export interface ArrayForeach {
    (array: Array, index_: number, element_node: Node): void
}
/**
 * Deserializes the contents of the passed #JsonNode into a #GBoxed
 * @callback 
 */
export interface BoxedDeserializeFunc {
    (node: Node): object | null
}
/**
 * Serializes the passed #GBoxed and stores it inside a #JsonNode
 * @callback 
 */
export interface BoxedSerializeFunc {
    (boxed: object | null): Node
}
/**
 * The function to be passed to json_object_foreach_member(). You
 * should not add or remove members to and from `object` within
 * this function. It is safe to change the value of `member_node`.
 * @callback 
 */
export interface ObjectForeach {
    (object: Object, member_name: string, member_node: Node): void
}
export interface Serializable_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Serializable {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Json-1.0.Json.Serializable */
    /**
     * Calls the default implementation of the #JsonSerializable
     * deserialize_property() virtual function
     * 
     * This function can be used inside a custom implementation
     * of the deserialize_property() virtual function in lieu of:
     * 
     * 
     * ```c
     *   JsonSerializable *iface;
     *   gboolean res;
     * 
     *   iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
     *   res = iface->deserialize_property (serializable, property_name,
     *                                      value,
     *                                      pspec,
     *                                      property_node);
     * ```
     * 
     * @param property_name the name of the property
     * @param value a pointer to an uninitialized #GValue
     * @param pspec a #GParamSpec
     * @param property_node a #JsonNode containing the serialized property
     */
    default_deserialize_property(property_name: string, value: any, pspec: GObject.ParamSpec, property_node: Node): boolean
    /**
     * Calls the default implementation of the #JsonSerializable
     * #JsonSerializableIface.serialize_property() virtual function.
     * 
     * This function can be used inside a custom implementation
     * of the #JsonSerializableIface.serialize_property() virtual
     * function in lieu of calling the default implementation
     * through g_type_default_interface_peek():
     * 
     * 
     * ```c
     *   JsonSerializable *iface;
     *   JsonNode *node;
     * 
     *   iface = g_type_default_interface_peek (JSON_TYPE_SERIALIZABLE);
     *   node = iface->serialize_property (serializable, property_name,
     *                                     value,
     *                                     pspec);
     * ```
     * 
     * @param property_name the name of the property
     * @param value the value of the property
     * @param pspec a #GParamSpec
     */
    default_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node
    /**
     * Asks a #JsonSerializable implementation to deserialize the
     * property contained inside `property_node` into `value`.
     * @param property_name the name of the property
     * @param pspec a #GParamSpec
     * @param property_node a #JsonNode containing the serialized property
     */
    deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Calls the #JsonSerializableIface.find_property() implementation on
     * the `serializable` instance. *
     * @param name the name of the property
     */
    find_property(name: string): GObject.ParamSpec | null
    /**
     * Calls the #JsonSerializableIface.get_property() implementation
     * on the `serializable` instance.
     * @param pspec a #GParamSpec
     */
    get_property(pspec: GObject.ParamSpec): /* value */ any
    /**
     * Calls the #JsonSerializableIface.list_properties() implementation on
     * the `serializable` instance.
     */
    list_properties(): GObject.ParamSpec[]
    /**
     * Asks a #JsonSerializable implementation to serialize a #GObject
     * property into a #JsonNode object.
     * @param property_name the name of the property
     * @param value the value of the property
     * @param pspec a #GParamSpec
     */
    serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node
    /**
     * Calls the #JsonSerializableIface.set_property() implementation
     * on the `serializable` instance.
     * @param pspec a #GParamSpec
     * @param value the property value to set
     */
    set_property(pspec: GObject.ParamSpec, value: any): void
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
    /* Own virtual methods of Json-1.0.Json.Serializable */
    /**
     * Asks a #JsonSerializable implementation to deserialize the
     * property contained inside `property_node` into `value`.
     * @virtual 
     * @param property_name the name of the property
     * @param pspec a #GParamSpec
     * @param property_node a #JsonNode containing the serialized property
     */
    vfunc_deserialize_property(property_name: string, pspec: GObject.ParamSpec, property_node: Node): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Calls the #JsonSerializableIface.find_property() implementation on
     * the `serializable` instance. *
     * @virtual 
     * @param name the name of the property
     */
    vfunc_find_property(name: string): GObject.ParamSpec | null
    /**
     * Calls the #JsonSerializableIface.get_property() implementation
     * on the `serializable` instance.
     * @virtual 
     * @param pspec a #GParamSpec
     */
    vfunc_get_property(pspec: GObject.ParamSpec): /* value */ any
    /* Function overloads */
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Asks a #JsonSerializable implementation to serialize a #GObject
     * property into a #JsonNode object.
     * @virtual 
     * @param property_name the name of the property
     * @param value the value of the property
     * @param pspec a #GParamSpec
     */
    vfunc_serialize_property(property_name: string, value: any, pspec: GObject.ParamSpec): Node
    /**
     * Calls the #JsonSerializableIface.set_property() implementation
     * on the `serializable` instance.
     * @virtual 
     * @param pspec a #GParamSpec
     * @param value the property value to set
     */
    vfunc_set_property(pspec: GObject.ParamSpec, value: any): void
    /* Function overloads */
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Serializable, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Serializable_ConstructProps)
    _init (config?: Serializable_ConstructProps): void
    static $gtype: GObject.GType<Serializable>
}
export interface Builder_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Builder */
    /**
     * Whether the #JsonNode tree built by the #JsonBuilder should be immutable
     * when created. Making the output immutable on creation avoids the expense
     * of traversing it to make it immutable later.
     */
    immutable?: boolean | null
}
/**
 * The `JsonBuilder` structure contains only private data and should be
 * accessed using the provided API
 */
export class Builder {
    /* Own properties of Json-1.0.Json.Builder */
    /**
     * Whether the #JsonNode tree built by the #JsonBuilder should be immutable
     * when created. Making the output immutable on creation avoids the expense
     * of traversing it to make it immutable later.
     */
    readonly immutable: boolean
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Json-1.0.Json.Builder */
    /**
     * If called after json_builder_set_member_name(), sets `value` as member of the
     * most recent opened object, otherwise `value` is added as element of the most
     * recent opened array.
     * 
     * See also: json_builder_add_value()
     * @param value the value of the member or element
     */
    add_boolean_value(value: boolean): Builder | null
    /**
     * If called after json_builder_set_member_name(), sets `value` as member of the
     * most recent opened object, otherwise `value` is added as element of the most
     * recent opened array.
     * 
     * See also: json_builder_add_value()
     * @param value the value of the member or element
     */
    add_double_value(value: number): Builder | null
    /**
     * If called after json_builder_set_member_name(), sets `value` as member of the
     * most recent opened object, otherwise `value` is added as element of the most
     * recent opened array.
     * 
     * See also: json_builder_add_value()
     * @param value the value of the member or element
     */
    add_int_value(value: number): Builder | null
    /**
     * If called after json_builder_set_member_name(), sets null as member of the
     * most recent opened object, otherwise null is added as element of the most
     * recent opened array.
     * 
     * See also: json_builder_add_value()
     */
    add_null_value(): Builder | null
    /**
     * If called after json_builder_set_member_name(), sets `value` as member of the
     * most recent opened object, otherwise `value` is added as element of the most
     * recent opened array.
     * 
     * See also: json_builder_add_value()
     * @param value the value of the member or element
     */
    add_string_value(value: string): Builder | null
    /**
     * If called after json_builder_set_member_name(), sets `node` as member of the
     * most recent opened object, otherwise `node` is added as element of the most
     * recent opened array.
     * 
     * The builder will take ownership of the #JsonNode.
     * @param node the value of the member or element
     */
    add_value(node: Node): Builder | null
    /**
     * Opens a subarray inside the given `builder`. When done adding members to
     * the subarray, json_builder_end_array() must be called.
     * 
     * Can be called for first or only if the call is associated to an object member
     * or an array element.
     */
    begin_array(): Builder | null
    /**
     * Opens a subobject inside the given `builder`. When done adding members to
     * the subobject, json_builder_end_object() must be called.
     * 
     * Can be called for first or only if the call is associated to an object member
     * or an array element.
     */
    begin_object(): Builder | null
    /**
     * Closes the subarray inside the given `builder` that was opened by the most
     * recent call to json_builder_begin_array().
     * 
     * Cannot be called after json_builder_set_member_name().
     */
    end_array(): Builder | null
    /**
     * Closes the subobject inside the given `builder` that was opened by the most
     * recent call to json_builder_begin_object().
     * 
     * Cannot be called after json_builder_set_member_name().
     */
    end_object(): Builder | null
    /**
     * Returns the root of the current constructed tree, if the build is complete
     * (ie: all opened objects, object members and arrays are being closed).
     */
    get_root(): Node | null
    /**
     * Resets the state of the `builder` back to its initial state.
     */
    reset(): void
    /**
     * Set the name of the next member in an object. The next call must add a value,
     * open an object or an array.
     * 
     * Can be called only if the call is associated to an object.
     * @param member_name the name of the member
     */
    set_member_name(member_name: string): Builder | null
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
    connect(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::immutable", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::immutable", callback: (($obj: Builder, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Builder_ConstructProps)
    _init (config?: Builder_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Builder
    static new_immutable(): Builder
    static $gtype: GObject.GType<Builder>
}
export interface Generator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Generator */
    /**
     * Number of spaces to be used to indent when pretty printing.
     */
    indent?: number | null
    /**
     * The character that should be used when indenting in pretty print.
     */
    indent_char?: number | null
    /**
     * Whether the output should be "pretty-printed", with indentation and
     * newlines. The indentation level can be controlled by using the
     * JsonGenerator:indent property
     */
    pretty?: boolean | null
    /**
     * The root #JsonNode to be used when constructing a JSON data
     * stream.
     */
    root?: Node | null
}
/**
 * JSON data streams generator. The contents of the #JsonGenerator structure
 * are private and should only be accessed via the provided API.
 */
export class Generator {
    /* Own properties of Json-1.0.Json.Generator */
    /**
     * Number of spaces to be used to indent when pretty printing.
     */
    indent: number
    /**
     * The character that should be used when indenting in pretty print.
     */
    indent_char: number
    /**
     * Whether the output should be "pretty-printed", with indentation and
     * newlines. The indentation level can be controlled by using the
     * JsonGenerator:indent property
     */
    pretty: boolean
    /**
     * The root #JsonNode to be used when constructing a JSON data
     * stream.
     */
    root: Node
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Json-1.0.Json.Generator */
    /**
     * Retrieves the value set using json_generator_set_indent().
     */
    get_indent(): number
    /**
     * Retrieves the value set using json_generator_set_indent_char().
     */
    get_indent_char(): string
    /**
     * Retrieves the value set using json_generator_set_pretty().
     */
    get_pretty(): boolean
    /**
     * Retrieves a pointer to the root #JsonNode set using
     * json_generator_set_root().
     */
    get_root(): Node | null
    /**
     * Sets the number of repetitions for each indentation level.
     * @param indent_level the number of repetitions of the indentation character   that should be applied when pretty printing
     */
    set_indent(indent_level: number): void
    /**
     * Sets the character to be used when indenting
     * @param indent_char a Unicode character to be used when indenting
     */
    set_indent_char(indent_char: string): void
    /**
     * Sets whether the generated JSON should be pretty printed, using the
     * indentation character specified in the #JsonGenerator:indent-char
     * property and the spacing specified in #JsonGenerator:indent property.
     * @param is_pretty whether the generated string should be pretty printed
     */
    set_pretty(is_pretty: boolean): void
    /**
     * Sets `node` as the root of the JSON data stream to be serialized by
     * the #JsonGenerator.
     * 
     * The passed `node` is copied by the generator object, so it can be
     * safely freed after calling this function.
     * @param node a #JsonNode
     */
    set_root(node: Node): void
    /**
     * Generates a JSON data stream from `generator` and returns it as a
     * buffer.
     */
    to_data(): [ /* returnType */ string, /* length */ number ]
    /**
     * Creates a JSON data stream and puts it inside `filename,` overwriting the
     * current file contents. This operation is atomic.
     * @param filename path to the target file
     */
    to_file(filename: string): boolean
    /**
     * Generates a JSON data stream from `generator`
     * and appends it to `string`.
     * @param string a #GString
     */
    to_gstring(string: GLib.String): GLib.String
    /**
     * Outputs JSON data and streams it (synchronously) to `stream`.
     * @param stream a #GOutputStream
     * @param cancellable a #GCancellable, or %NULL
     */
    to_stream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): boolean
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
    connect(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::indent-char", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pretty", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Generator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Generator_ConstructProps)
    _init (config?: Generator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Generator
    static $gtype: GObject.GType<Generator>
}
export interface Parser_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Parser */
    /**
     * Whether the #JsonNode tree built by the #JsonParser should be immutable
     * when created. Making the output immutable on creation avoids the expense
     * of traversing it to make it immutable later.
     */
    immutable?: boolean | null
}
/**
 * JSON data streams parser. The contents of the #JsonParser structure are
 * private and should only be accessed via the provided API.
 */
export class Parser {
    /* Own properties of Json-1.0.Json.Parser */
    /**
     * Whether the #JsonNode tree built by the #JsonParser should be immutable
     * when created. Making the output immutable on creation avoids the expense
     * of traversing it to make it immutable later.
     */
    readonly immutable: boolean
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Json-1.0.Json.Parser */
    /**
     * Retrieves the line currently parsed, starting from 1.
     * 
     * This function has defined behaviour only while parsing; calling this
     * function from outside the signal handlers emitted by #JsonParser will
     * yield 0.
     */
    get_current_line(): number
    /**
     * Retrieves the current position inside the current line, starting
     * from 0.
     * 
     * This function has defined behaviour only while parsing; calling this
     * function from outside the signal handlers emitted by #JsonParser will
     * yield 0.
     */
    get_current_pos(): number
    /**
     * Retrieves the top level node from the parsed JSON stream. If the parser input
     * was an empty string, or if parsing failed, this will be %NULL. It will also
     * be %NULL if it has been stolen using json_parser_steal_root().
     */
    get_root(): Node | null
    /**
     * A JSON data stream might sometimes contain an assignment, like:
     * 
     * |[
     *   var _json_data = { "member_name" : [ ...
     * ```
     * 
     * 
     * even though it would technically constitute a violation of the RFC.
     * 
     * #JsonParser will ignore the left hand identifier and parse the right
     * hand value of the assignment. #JsonParser will record, though, the
     * existence of the assignment in the data stream and the variable name
     * used.
     */
    has_assignment(): [ /* returnType */ boolean, /* variable_name */ string ]
    /**
     * Loads a JSON stream from a buffer and parses it. You can call this function
     * multiple times with the same #JsonParser object, but the contents of the
     * parser will be destroyed each time.
     * @param data the buffer to parse
     * @param length the length of the buffer, or -1
     */
    load_from_data(data: string, length: number): boolean
    /**
     * Loads a JSON stream from the content of `filename` and parses it. See
     * json_parser_load_from_data().
     * @param filename the path for the file to parse
     */
    load_from_file(filename: string): boolean
    /**
     * Loads the contents of an input stream and parses them.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by
     * triggering the `cancellable` object from another thread. If the
     * operation was cancelled, the error %G_IO_ERROR_CANCELLED will be set
     * on the passed `error`.
     * @param stream an open #GInputStream
     * @param cancellable a #GCancellable, or %NULL
     */
    load_from_stream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously reads the contents of `stream`.
     * 
     * For more details, see json_parser_load_from_stream() which is the
     * synchronous version of this call.
     * 
     * When the operation is finished, `callback` will be called. You should
     * then call json_parser_load_from_stream_finish() to get the result
     * of the operation.
     * @param stream a #GInputStream
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    load_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous stream loading started with
     * json_parser_load_from_stream_async().
     * @param result a #GAsyncResult
     */
    load_from_stream_finish(result: Gio.AsyncResult): boolean
    /**
     * Steals the top level node from the parsed JSON stream. This will be %NULL
     * in the same situations as json_parser_get_root() returns %NULL.
     */
    steal_root(): Node | null
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
    /* Own virtual methods of Json-1.0.Json.Parser */
    vfunc_array_element(array: Array, index_: number): void
    vfunc_array_end(array: Array): void
    vfunc_array_start(): void
    vfunc_error(error: GLib.Error): void
    vfunc_object_end(object: Object): void
    vfunc_object_member(object: Object, member_name: string): void
    vfunc_object_start(): void
    vfunc_parse_end(): void
    vfunc_parse_start(): void
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
    /* Own signals of Json-1.0.Json.Parser */
    /**
     * The ::array-element signal is emitted each time the #JsonParser
     * has successfully parsed a single element of a #JsonArray. The
     * array and element index are passed to the signal handlers.
     * @signal 
     * @param array a #JsonArray
     * @param index_ the index of the newly parsed element
     */
    connect(sigName: "array-element", callback: (($obj: Parser, array: Array, index_: number) => void)): number
    connect_after(sigName: "array-element", callback: (($obj: Parser, array: Array, index_: number) => void)): number
    emit(sigName: "array-element", array: Array, index_: number): void
    /**
     * The ::array-end signal is emitted each time the #JsonParser
     * has successfully parsed an entire #JsonArray
     * @signal 
     * @param array the parsed #JsonArray
     */
    connect(sigName: "array-end", callback: (($obj: Parser, array: Array) => void)): number
    connect_after(sigName: "array-end", callback: (($obj: Parser, array: Array) => void)): number
    emit(sigName: "array-end", array: Array): void
    /**
     * The ::array-start signal is emitted each time the #JsonParser
     * starts parsing a #JsonArray
     * @signal 
     */
    connect(sigName: "array-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "array-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "array-start"): void
    /**
     * The ::error signal is emitted each time a #JsonParser encounters
     * an error in a JSON stream.
     * @signal 
     * @param error a pointer to the #GError
     */
    connect(sigName: "error", callback: (($obj: Parser, error: object | null) => void)): number
    connect_after(sigName: "error", callback: (($obj: Parser, error: object | null) => void)): number
    emit(sigName: "error", error: object | null): void
    /**
     * The ::object-end signal is emitted each time the #JsonParser
     * has successfully parsed an entire #JsonObject.
     * @signal 
     * @param object the parsed #JsonObject
     */
    connect(sigName: "object-end", callback: (($obj: Parser, object: Object) => void)): number
    connect_after(sigName: "object-end", callback: (($obj: Parser, object: Object) => void)): number
    emit(sigName: "object-end", object: Object): void
    /**
     * The ::object-member signal is emitted each time the #JsonParser
     * has successfully parsed a single member of a #JsonObject. The
     * object and member are passed to the signal handlers.
     * @signal 
     * @param object a #JsonObject
     * @param member_name the name of the newly parsed member
     */
    connect(sigName: "object-member", callback: (($obj: Parser, object: Object, member_name: string) => void)): number
    connect_after(sigName: "object-member", callback: (($obj: Parser, object: Object, member_name: string) => void)): number
    emit(sigName: "object-member", object: Object, member_name: string): void
    /**
     * The ::object-start signal is emitted each time the #JsonParser
     * starts parsing a #JsonObject.
     * @signal 
     */
    connect(sigName: "object-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "object-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "object-start"): void
    /**
     * The ::parse-end signal is emitted when the parser successfully
     * finished parsing a JSON data stream
     * @signal 
     */
    connect(sigName: "parse-end", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parse-end", callback: (($obj: Parser) => void)): number
    emit(sigName: "parse-end"): void
    /**
     * The ::parse-start signal is emitted when the parser began parsing
     * a JSON data stream.
     * @signal 
     */
    connect(sigName: "parse-start", callback: (($obj: Parser) => void)): number
    connect_after(sigName: "parse-start", callback: (($obj: Parser) => void)): number
    emit(sigName: "parse-start"): void
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
    connect(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::immutable", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::immutable", callback: (($obj: Parser, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Parser_ConstructProps)
    _init (config?: Parser_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Parser
    static new_immutable(): Parser
    static $gtype: GObject.GType<Parser>
}
export interface Path_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * The `JsonPath` structure is an opaque object whose members cannot be
 * directly accessed except through the provided API.
 */
export class Path {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Json-1.0.Json.Path */
    /**
     * Validates and decomposes `expression`.
     * 
     * A JSONPath expression must be compiled before calling json_path_match().
     * @param expression a JSONPath expression
     */
    compile(expression: string): boolean
    /**
     * Matches the JSON tree pointed by `root` using the expression compiled
     * into the #JsonPath.
     * 
     * The matching #JsonNodes will be copied into a #JsonArray and
     * returned wrapped in a #JsonNode.
     * @param root a #JsonNode
     */
    match(root: Node): Node
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
    connect(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Path, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Path_ConstructProps)
    _init (config?: Path_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Path
    /**
     * Queries a JSON tree using a JSONPath expression.
     * 
     * This function is a simple wrapper around json_path_new(),
     * json_path_compile() and json_path_match(). It implicitly
     * creates a #JsonPath instance, compiles `expression` and
     * matches it against the JSON tree pointed by `root`.
     * @param expression a JSONPath expression
     * @param root the root of a JSON tree
     */
    static query(expression: string, root: Node): Node
    static $gtype: GObject.GType<Path>
}
export interface Reader_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Json-1.0.Json.Reader */
    /**
     * The root of the JSON tree that the #JsonReader should read.
     */
    root?: Node | null
}
/**
 * The `JsonReader` structure contains only private data and should
 * be accessed using the provided API
 */
export class Reader {
    /* Own properties of Json-1.0.Json.Reader */
    /**
     * The root of the JSON tree that the #JsonReader should read.
     */
    root: Node
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Json-1.0.Json.Reader */
    /**
     * Counts the elements of the current position, if `reader` is
     * positioned on an array
     */
    count_elements(): number
    /**
     * Counts the members of the current position, if `reader` is
     * positioned on an object
     */
    count_members(): number
    /**
     * Moves the cursor back to the previous node after being positioned
     * inside an array
     * 
     * This function resets the error state of `reader,` if any was set
     */
    end_element(): void
    /**
     * Moves the cursor back to the previous node after being positioned
     * inside an object
     * 
     * This function resets the error state of `reader,` if any was set
     */
    end_member(): void
    /**
     * Retrieves the boolean value of the current position of `reader`
     */
    get_boolean_value(): boolean
    /**
     * Retrieves the floating point value of the current position of `reader`
     */
    get_double_value(): number
    /**
     * Retrieves the #GError currently set on `reader,` if the #JsonReader
     * is in error state
     */
    get_error(): GLib.Error | null
    /**
     * Retrieves the integer value of the current position of `reader`
     */
    get_int_value(): number
    /**
     * Retrieves the name of the current member.
     */
    get_member_name(): string | null
    /**
     * Checks whether the value of the current position of `reader` is 'null'
     */
    get_null_value(): boolean
    /**
     * Retrieves the string value of the current position of `reader`
     */
    get_string_value(): string
    /**
     * Retrieves the #JsonNode of the current position of `reader`
     */
    get_value(): Node | null
    /**
     * Checks whether the `reader` is currently on an array
     */
    is_array(): boolean
    /**
     * Checks whether the `reader` is currently on an object
     */
    is_object(): boolean
    /**
     * Checks whether the `reader` is currently on a value
     */
    is_value(): boolean
    /**
     * Retrieves a list of member names from the current position, if `reader`
     * is positioned on an object.
     */
    list_members(): string[]
    /**
     * Advances the cursor of `reader` to the element `index_` of the array
     * or the object at the current position.
     * 
     * You can use the json_reader_get_value* family of functions to retrieve
     * the value of the element; for instance:
     * 
     * |[
     * json_reader_read_element (reader, 0);
     * int_value = json_reader_get_int_value (reader);
     * ```
     * 
     * 
     * After reading the value, json_reader_end_element() should be called to
     * reposition the cursor inside the #JsonReader, e.g.:
     * 
     * |[
     * json_reader_read_element (reader, 1);
     * str_value = json_reader_get_string_value (reader);
     * json_reader_end_element (reader);
     * 
     * json_reader_read_element (reader, 2);
     * str_value = json_reader_get_string_value (reader);
     * json_reader_end_element (reader);
     * ```
     * 
     * 
     * If `reader` is not currently on an array or an object, or if the `index_` is
     * bigger than the size of the array or the object, the #JsonReader will be
     * put in an error state until json_reader_end_element() is called. This means
     * that if used conditionally, json_reader_end_element() must be called on both
     * code paths:
     * 
     * |[
     * if (!json_reader_read_element (reader, 1))
     *   {
     *     json_reader_end_element (reader);
     *     g_set_error (error, …);
     *     return FALSE;
     *   }
     * 
     * str_value = json_reader_get_string_value (reader);
     * json_reader_end_element (reader);
     * ```
     * 
     * @param index_ the index of the element
     */
    read_element(index_: number): boolean
    /**
     * Advances the cursor of `reader` to the `member_name` of the object at the
     * current position.
     * 
     * You can use the json_reader_get_value* family of functions to retrieve
     * the value of the member; for instance:
     * 
     * |[
     * json_reader_read_member (reader, "width");
     * width = json_reader_get_int_value (reader);
     * ```
     * 
     * 
     * After reading the value, json_reader_end_member() should be called to
     * reposition the cursor inside the #JsonReader, e.g.:
     * 
     * |[
     * json_reader_read_member (reader, "author");
     * author = json_reader_get_string_value (reader);
     * json_reader_end_member (reader);
     * 
     * json_reader_read_member (reader, "title");
     * title = json_reader_get_string_value (reader);
     * json_reader_end_member (reader);
     * ```
     * 
     * 
     * If `reader` is not currently on an object, or if the `member_name` is not
     * defined in the object, the #JsonReader will be put in an error state until
     * json_reader_end_member() is called. This means that if used conditionally,
     * json_reader_end_member() must be called on both code paths:
     * 
     * |[
     * if (!json_reader_read_member (reader, "title"))
     *   {
     *     json_reader_end_member (reader);
     *     g_set_error (error, …);
     *     return FALSE;
     *   }
     * 
     * str_value = json_reader_get_string_value (reader);
     * json_reader_end_member (reader);
     * ```
     * 
     * @param member_name the name of the member to read
     */
    read_member(member_name: string): boolean
    /**
     * Sets the root #JsonNode to be read by `reader`. The `reader` will take
     * a copy of `root`
     * 
     * If another #JsonNode is currently set as root, it will be replaced.
     * @param root a #JsonNode
     */
    set_root(root: Node | null): void
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
    connect(sigName: "notify", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: Reader, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Reader_ConstructProps)
    _init (config?: Reader_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(node: Node | null): Reader
    static $gtype: GObject.GType<Reader>
}
/**
 * A JSON array type. The contents of the #JsonArray structure are private
 * and should only be accessed by the provided API
 */
export class Array {
    /* Owm methods of Json-1.0.Json.Array */
    /**
     * Conveniently adds an array into `array`. The `array` takes ownership
     * of the newly added #JsonArray
     * 
     * See also: json_array_add_element(), json_node_take_array()
     * @param value a #JsonArray
     */
    add_array_element(value: Array | null): void
    /**
     * Conveniently adds a boolean `value` into `array`
     * 
     * See also: json_array_add_element(), json_node_set_boolean()
     * @param value a boolean value
     */
    add_boolean_element(value: boolean): void
    /**
     * Conveniently adds a floating point `value` into `array`
     * 
     * See also: json_array_add_element(), json_node_set_double()
     * @param value a floating point value
     */
    add_double_element(value: number): void
    /**
     * Appends `node` inside `array`. The array will take ownership of the
     * #JsonNode.
     * @param node a #JsonNode
     */
    add_element(node: Node): void
    /**
     * Conveniently adds an integer `value` into `array`
     * 
     * See also: json_array_add_element(), json_node_set_int()
     * @param value an integer value
     */
    add_int_element(value: number): void
    /**
     * Conveniently adds a null element into `array`
     * 
     * See also: json_array_add_element(), %JSON_NODE_NULL
     */
    add_null_element(): void
    /**
     * Conveniently adds an object into `array`. The `array` takes ownership
     * of the newly added #JsonObject
     * 
     * See also: json_array_add_element(), json_node_take_object()
     * @param value a #JsonObject
     */
    add_object_element(value: Object): void
    /**
     * Conveniently adds a string `value` into `array`
     * 
     * See also: json_array_add_element(), json_node_set_string()
     * @param value a string value
     */
    add_string_element(value: string): void
    /**
     * Retrieves a copy of the #JsonNode containing the value of the
     * element at `index_` inside a #JsonArray
     * @param index_ the index of the element to retrieve
     */
    dup_element(index_: number): Node
    /**
     * Check whether `a` and `b` are equal #JsonArrays, meaning they have the same
     * number of elements, and the values of elements in corresponding positions
     * are equal.
     * @param b another JSON array
     */
    equal(b: Array): boolean
    /**
     * Iterates over all elements of `array` and calls `func` on
     * each one of them.
     * 
     * It is safe to change the value of a #JsonNode of the `array`
     * from within the iterator `func,` but it is not safe to add or
     * remove elements from the `array`.
     * @param func the function to be called on each element
     */
    foreach_element(func: ArrayForeach): void
    /**
     * Conveniently retrieves the array from the element at `index_`
     * inside `array`
     * 
     * See also: json_array_get_element(), json_node_get_array()
     * @param index_ the index of the element to retrieve
     */
    get_array_element(index_: number): Array
    /**
     * Conveniently retrieves the boolean value of the element at `index_`
     * inside `array`
     * 
     * See also: json_array_get_element(), json_node_get_boolean()
     * @param index_ the index of the element to retrieve
     */
    get_boolean_element(index_: number): boolean
    /**
     * Conveniently retrieves the floating point value of the element at
     * `index_` inside `array`
     * 
     * See also: json_array_get_element(), json_node_get_double()
     * @param index_ the index of the element to retrieve
     */
    get_double_element(index_: number): number
    /**
     * Retrieves the #JsonNode containing the value of the element at `index_`
     * inside a #JsonArray.
     * @param index_ the index of the element to retrieve
     */
    get_element(index_: number): Node
    /**
     * Gets the elements of a #JsonArray as a list of #JsonNode instances.
     */
    get_elements(): Node[]
    /**
     * Conveniently retrieves the integer value of the element at `index_`
     * inside `array`
     * 
     * See also: json_array_get_element(), json_node_get_int()
     * @param index_ the index of the element to retrieve
     */
    get_int_element(index_: number): number
    /**
     * Retrieves the length of a #JsonArray
     */
    get_length(): number
    /**
     * Conveniently retrieves whether the element at `index_` is set to null
     * 
     * See also: json_array_get_element(), JSON_NODE_TYPE(), %JSON_NODE_NULL
     * @param index_ the index of the element to retrieve
     */
    get_null_element(index_: number): boolean
    /**
     * Conveniently retrieves the object from the element at `index_`
     * inside `array`
     * 
     * See also: json_array_get_element(), json_node_get_object()
     * @param index_ the index of the element to retrieve
     */
    get_object_element(index_: number): Object
    /**
     * Conveniently retrieves the string value of the element at `index_`
     * inside `array`
     * 
     * See also: json_array_get_element(), json_node_get_string()
     * @param index_ the index of the element to retrieve
     */
    get_string_element(index_: number): string
    /**
     * Calculate a hash value for the given `key` (a #JsonArray).
     * 
     * The hash is calculated over the array and all its elements, recursively. If
     * the array is immutable, this is a fast operation; otherwise, it scales
     * proportionally with the length of the array.
     */
    hash(): number
    /**
     * Check whether the given `array` has been marked as immutable by calling
     * json_array_seal() on it.
     */
    is_immutable(): boolean
    /**
     * Increase by one the reference count of a #JsonArray.
     */
    ref(): Array
    /**
     * Removes the #JsonNode inside `array` at `index_` freeing its allocated
     * resources.
     * @param index_ the position of the element to be removed
     */
    remove_element(index_: number): void
    /**
     * Seals the #JsonArray, making it immutable to further changes. This will
     * recursively seal all elements in the array too.
     * 
     * If the `array` is already immutable, this is a no-op.
     */
    seal(): void
    /**
     * Decreases by one the reference count of a #JsonArray. If the
     * reference count reaches zero, the array is destroyed and all
     * its allocated resources are freed.
     */
    unref(): void
    static name: string
    static new(): Array
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Array
    static sized_new(n_elements: number): Array
}
/**
 * The `JsonBuilderClass` structure contains only private data
 */
export abstract class BuilderClass {
    static name: string
}
export class BuilderPrivate {
    static name: string
}
/**
 * #JsonGenerator class
 */
export abstract class GeneratorClass {
    static name: string
}
export class GeneratorPrivate {
    static name: string
}
/**
 * A generic container of JSON data types. The contents of the #JsonNode
 * structure are private and should only be accessed via the provided
 * functions and never directly.
 */
export class Node {
    /* Owm methods of Json-1.0.Json.Node */
    /**
     * Copies `node`. If the node contains complex data types, their reference
     * counts are increased, regardless of whether the node is mutable or
     * immutable.
     * 
     * The copy will be immutable if, and only if, `node` is immutable. However,
     * there should be no need to copy an immutable node.
     */
    copy(): Node
    /**
     * Retrieves the #JsonArray stored inside a #JsonNode and returns it
     * with its reference count increased by one. It is a programmer error
     * to call this on a node which doesn’t hold an array value. Use
     * %JSON_NODE_HOLDS_ARRAY first.
     */
    dup_array(): Array | null
    /**
     * Retrieves the #JsonObject inside `node`. The reference count of
     * the returned object is increased. It is a programmer error
     * to call this on a node which doesn’t hold an object value. Use
     * %JSON_NODE_HOLDS_OBJECT first.
     */
    dup_object(): Object | null
    /**
     * Gets a copy of the string value stored inside a #JsonNode. If the node does
     * not hold a string value, %NULL is returned.
     */
    dup_string(): string | null
    /**
     * Check whether `a` and `b` are equal #JsonNodes, meaning they have the same
     * type and same values (checked recursively). Note that integer values are
     * compared numerically, ignoring type, so a double value 4.0 is equal to the
     * integer value 4.
     * @param b another JSON node
     */
    equal(b: Node): boolean
    /**
     * Frees the resources allocated by `node`.
     */
    free(): void
    /**
     * Retrieves the #JsonArray stored inside a #JsonNode. It is a programmer error
     * to call this on a node which doesn’t hold an array value. Use
     * %JSON_NODE_HOLDS_ARRAY first.
     */
    get_array(): Array | null
    /**
     * Gets the boolean value stored inside a #JsonNode. If the node holds an
     * integer or double value which is zero, %FALSE is returned; otherwise %TRUE
     * is returned. If the node holds a %JSON_NODE_NULL value or a value of another
     * non-boolean type, %FALSE is returned.
     */
    get_boolean(): boolean
    /**
     * Gets the double value stored inside a #JsonNode. If the node holds an integer
     * value, it is returned as a double. If the node holds a %FALSE boolean value,
     * `0.0` is returned; otherwise a non-zero double is returned. If the node holds
     * a %JSON_NODE_NULL value or a value of another non-double type, `0.0` is
     * returned.
     */
    get_double(): number
    /**
     * Gets the integer value stored inside a #JsonNode. If the node holds a double
     * value, its integer component is returned. If the node holds a %FALSE boolean
     * value, `0` is returned; otherwise a non-zero integer is returned. If the
     * node holds a %JSON_NODE_NULL value or a value of another non-integer type,
     * `0` is returned.
     */
    get_int(): number
    /**
     * Retrieves the #JsonNodeType of `node`
     */
    get_node_type(): NodeType
    /**
     * Retrieves the #JsonObject stored inside a #JsonNode. It is a programmer error
     * to call this on a node which doesn’t hold an object value. Use
     * %JSON_NODE_HOLDS_OBJECT first.
     */
    get_object(): Object | null
    /**
     * Retrieves the parent #JsonNode of `node`.
     */
    get_parent(): Node | null
    /**
     * Gets the string value stored inside a #JsonNode. If the node does not hold a
     * string value, %NULL is returned.
     */
    get_string(): string | null
    /**
     * Retrieves a value from a #JsonNode and copies into `value`. When done
     * using it, call g_value_unset() on the #GValue. It is a programmer error
     * to call this on a node which doesn’t hold a scalar value. Use
     * %JSON_NODE_HOLDS_VALUE first.
     */
    get_value(): /* value */ any
    /**
     * Returns the #GType of the payload of the node.
     */
    get_value_type(): GObject.GType
    /**
     * Calculate a hash value for the given `key` (a #JsonNode).
     * 
     * The hash is calculated over the node and its value, recursively. If the node
     * is immutable, this is a fast operation; otherwise, it scales proportionally
     * with the size of the node’s value (for example, with the number of members
     * in the #JsonObject if this node contains an object).
     */
    hash(): number
    /**
     * Initializes a `node` to a specific `type`.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     * @param type the type of JSON node to initialize `node` to
     */
    init(type: NodeType): Node
    /**
     * Initializes `node` to %JSON_NODE_ARRAY and sets `array` into it.
     * 
     * This function will take a reference on `array`.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     * @param array the #JsonArray to initialize `node` with, or %NULL
     */
    init_array(array: Array | null): Node
    /**
     * Initializes `node` to %JSON_NODE_VALUE and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     * @param value a boolean value
     */
    init_boolean(value: boolean): Node
    /**
     * Initializes `node` to %JSON_NODE_VALUE and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     * @param value a floating point value
     */
    init_double(value: number): Node
    /**
     * Initializes `node` to %JSON_NODE_VALUE and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     * @param value an integer
     */
    init_int(value: number): Node
    /**
     * Initializes `node` to %JSON_NODE_NULL.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     */
    init_null(): Node
    /**
     * Initializes `node` to %JSON_NODE_OBJECT and sets `object` into it.
     * 
     * This function will take a reference on `object`.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     * @param object the #JsonObject to initialize `node` with, or %NULL
     */
    init_object(object: Object | null): Node
    /**
     * Initializes `node` to %JSON_NODE_VALUE and sets `value` into it.
     * 
     * If the node has already been initialized once, it will be reset to
     * the given type, and any data contained will be cleared.
     * @param value a string value
     */
    init_string(value: string | null): Node
    /**
     * Check whether the given `node` has been marked as immutable by calling
     * json_node_seal() on it.
     */
    is_immutable(): boolean
    /**
     * Checks whether `node` is a %JSON_NODE_NULL.
     * 
     * A %JSON_NODE_NULL node is not the same as a %NULL #JsonNode; a
     * %JSON_NODE_NULL represents a 'null' value in the JSON tree.
     */
    is_null(): boolean
    /**
     * Increment the reference count of `node`.
     */
    ref(): Node
    /**
     * Seals the #JsonNode, making it immutable to further changes. In order to be
     * sealed, the `node` must have a type and value set. The value will be
     * recursively sealed — if the node holds an object, that #JsonObject will be
     * sealed, etc.
     * 
     * If the `node` is already immutable, this is a no-op.
     */
    seal(): void
    /**
     * Sets `array` inside `node` and increases the #JsonArray reference count.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * an array node.
     * @param array a #JsonArray
     */
    set_array(array: Array): void
    /**
     * Sets `value` as the boolean content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     * @param value a boolean value
     */
    set_boolean(value: boolean): void
    /**
     * Sets `value` as the double content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     * @param value a double value
     */
    set_double(value: number): void
    /**
     * Sets `value` as the integer content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     * @param value an integer value
     */
    set_int(value: number): void
    /**
     * Sets `objects` inside `node`. The reference count of `object` is increased.
     * 
     * If `object` is %NULL, the node’s existing object is cleared.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * an object node.
     * @param object a #JsonObject
     */
    set_object(object: Object | null): void
    /**
     * Sets the parent #JsonNode of `node`.
     * 
     * It is an error to call this with an immutable `parent`. `node` may be
     * immutable.
     * @param parent the parent #JsonNode of `node`
     */
    set_parent(parent: Node): void
    /**
     * Sets `value` as the string content of the `node,` replacing any existing
     * content.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     * @param value a string value
     */
    set_string(value: string): void
    /**
     * Sets `value` inside `node`. The passed #GValue is copied into the #JsonNode.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * a value node.
     * @param value the #GValue to set
     */
    set_value(value: any): void
    /**
     * Sets `array` into `node` without increasing the #JsonArray reference count.
     * 
     * It is an error to call this on an immutable node, or a node which is not
     * an array node.
     * @param array a #JsonArray
     */
    take_array(array: Array): void
    /**
     * Sets `object` inside `node`. The reference count of `object` is not increased.
     * 
     * It is an error to call this on an immutable node, or on a node which is not
     * an object node.
     * @param object a #JsonObject
     */
    take_object(object: Object): void
    /**
     * Retrieves the user readable name of the data type contained by `node`.
     */
    type_name(): string
    /**
     * Decrement the reference count of `node`. If it reaches zero, the node is
     * freed.
     */
    unref(): void
    static name: string
    static new(type: NodeType): Node
    constructor(type: NodeType)
    /* Static methods and pseudo-constructors */
    static alloc(): Node
    static new(type: NodeType): Node
}
/**
 * A JSON object type. The contents of the #JsonObject structure are private
 * and should only be accessed by the provided API
 */
export class Object {
    /* Owm methods of Json-1.0.Json.Object */
    /**
     * Adds a member named `member_name` and containing `node` into a #JsonObject.
     * The object will take ownership of the #JsonNode.
     * 
     * This function will return if the `object` already contains a member
     * `member_name`.
     * @param member_name the name of the member
     * @param node the value of the member
     */
    add_member(member_name: string, node: Node): void
    /**
     * Retrieves a copy of the #JsonNode containing the value of `member_name`
     * inside a #JsonObject
     * @param member_name the name of the JSON object member to access
     */
    dup_member(member_name: string): Node | null
    /**
     * Check whether `a` and `b` are equal #JsonObjects, meaning they have the same
     * set of members, and the values of corresponding members are equal.
     * @param b another JSON object
     */
    equal(b: Object): boolean
    /**
     * Iterates over all members of `object` and calls `func` on
     * each one of them.
     * 
     * It is safe to change the value of a #JsonNode of the `object`
     * from within the iterator `func,` but it is not safe to add or
     * remove members from the `object`.
     * @param func the function to be called on each member
     */
    foreach_member(func: ObjectForeach): void
    /**
     * Convenience function that retrieves the array
     * stored in `member_name` of `object`
     * 
     * See also: json_object_get_member()
     * @param member_name the name of the member
     */
    get_array_member(member_name: string): Array
    /**
     * Convenience function that retrieves the boolean value
     * stored in `member_name` of `object`
     * 
     * See also: json_object_get_member()
     * @param member_name the name of the member
     */
    get_boolean_member(member_name: string): boolean
    /**
     * Convenience function that retrieves the floating point value
     * stored in `member_name` of `object`
     * 
     * See also: json_object_get_member()
     * @param member_name the name of the member
     */
    get_double_member(member_name: string): number
    /**
     * Convenience function that retrieves the integer value
     * stored in `member_name` of `object`
     * 
     * See also: json_object_get_member()
     * @param member_name the name of the member
     */
    get_int_member(member_name: string): number
    /**
     * Retrieves the #JsonNode containing the value of `member_name` inside
     * a #JsonObject.
     * @param member_name the name of the JSON object member to access
     */
    get_member(member_name: string): Node | null
    /**
     * Retrieves all the names of the members of a #JsonObject. You can
     * obtain the value for each member using json_object_get_member().
     */
    get_members(): string[] | null
    /**
     * Convenience function that checks whether the value
     * stored in `member_name` of `object` is null
     * 
     * See also: json_object_get_member()
     * @param member_name the name of the member
     */
    get_null_member(member_name: string): boolean
    /**
     * Convenience function that retrieves the object
     * stored in `member_name` of `object`. It is an error to specify a `member_name`
     * which does not exist.
     * 
     * See also: json_object_get_member()
     * @param member_name the name of the member
     */
    get_object_member(member_name: string): Object | null
    /**
     * Retrieves the number of members of a #JsonObject.
     */
    get_size(): number
    /**
     * Convenience function that retrieves the string value
     * stored in `member_name` of `object`
     * 
     * See also: json_object_get_member()
     * @param member_name the name of the member
     */
    get_string_member(member_name: string): string
    /**
     * Retrieves all the values of the members of a #JsonObject.
     */
    get_values(): Node[] | null
    /**
     * Checks whether `object` has a member named `member_name`.
     * @param member_name the name of a JSON object member
     */
    has_member(member_name: string): boolean
    /**
     * Calculate a hash value for the given `key` (a #JsonObject).
     * 
     * The hash is calculated over the object and all its members, recursively. If
     * the object is immutable, this is a fast operation; otherwise, it scales
     * proportionally with the number of members in the object.
     */
    hash(): number
    /**
     * Check whether the given `object` has been marked as immutable by calling
     * json_object_seal() on it.
     */
    is_immutable(): boolean
    /**
     * Increase by one the reference count of a #JsonObject.
     */
    ref(): Object
    /**
     * Removes `member_name` from `object,` freeing its allocated resources.
     * @param member_name the name of the member to remove
     */
    remove_member(member_name: string): void
    /**
     * Seals the #JsonObject, making it immutable to further changes. This will
     * recursively seal all members of the object too.
     * 
     * If the `object` is already immutable, this is a no-op.
     */
    seal(): void
    /**
     * Convenience function for setting an array `value` of
     * `member_name` inside `object`.
     * 
     * The `object` will take ownership of the passed #JsonArray
     * 
     * See also: json_object_set_member()
     * @param member_name the name of the member
     * @param value the value of the member
     */
    set_array_member(member_name: string, value: Array): void
    /**
     * Convenience function for setting a boolean `value` of
     * `member_name` inside `object`.
     * 
     * See also: json_object_set_member()
     * @param member_name the name of the member
     * @param value the value of the member
     */
    set_boolean_member(member_name: string, value: boolean): void
    /**
     * Convenience function for setting a floating point `value`
     * of `member_name` inside `object`.
     * 
     * See also: json_object_set_member()
     * @param member_name the name of the member
     * @param value the value of the member
     */
    set_double_member(member_name: string, value: number): void
    /**
     * Convenience function for setting an integer `value` of
     * `member_name` inside `object`.
     * 
     * See also: json_object_set_member()
     * @param member_name the name of the member
     * @param value the value of the member
     */
    set_int_member(member_name: string, value: number): void
    /**
     * Sets `node` as the value of `member_name` inside `object`.
     * 
     * If `object` already contains a member called `member_name` then
     * the member's current value is overwritten. Otherwise, a new
     * member is added to `object`.
     * @param member_name the name of the member
     * @param node the value of the member
     */
    set_member(member_name: string, node: Node): void
    /**
     * Convenience function for setting a null `value` of
     * `member_name` inside `object`.
     * 
     * See also: json_object_set_member()
     * @param member_name the name of the member
     */
    set_null_member(member_name: string): void
    /**
     * Convenience function for setting an object `value` of
     * `member_name` inside `object`.
     * 
     * The `object` will take ownership of the passed #JsonObject
     * 
     * See also: json_object_set_member()
     * @param member_name the name of the member
     * @param value the value of the member
     */
    set_object_member(member_name: string, value: Object): void
    /**
     * Convenience function for setting a string `value` of
     * `member_name` inside `object`.
     * 
     * See also: json_object_set_member()
     * @param member_name the name of the member
     * @param value the value of the member
     */
    set_string_member(member_name: string, value: string): void
    /**
     * Decreases by one the reference count of a #JsonObject. If the
     * reference count reaches zero, the object is destroyed and all
     * its allocated resources are freed.
     */
    unref(): void
    static name: string
    static new(): Object
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Object
}
/**
 * An iterator used to iterate over the members of a #JsonObject. This must
 * be allocated on the stack and initialised using json_object_iter_init().
 * The order in which members are returned by the iterator is undefined. The
 * iterator is invalidated if its #JsonObject is modified during iteration.
 * 
 * All the fields in the #JsonObjectIter structure are private and should
 * never be accessed directly.
 */
export class ObjectIter {
    /* Owm methods of Json-1.0.Json.ObjectIter */
    /**
     * Initialise the `iter` and associate it with `object`.
     * 
     * 
     * ```c
     * JsonObjectIter iter;
     * const gchar *member_name;
     * JsonNode *member_node;
     * 
     * json_object_iter_init (&iter, some_object);
     * while (json_object_iter_next (&iter, &member_name, &member_node))
     *   {
     *     // Do something with `member_name` and `member_node`.
     *   }
     * ```
     * 
     * @param object the #JsonObject to iterate over
     */
    init(object: Object): void
    /**
     * Advance `iter` and retrieve the next member in the object. If the end of the
     * object is reached, %FALSE is returned and `member_name` and `member_node` are
     * set to invalid values. After that point, the `iter` is invalid.
     * 
     * The order in which members are returned by the iterator is undefined. The
     * iterator is invalidated if its #JsonObject is modified during iteration.
     */
    next(): [ /* returnType */ boolean, /* member_name */ string, /* member_node */ Node ]
    static name: string
}
/**
 * #JsonParser class.
 */
export abstract class ParserClass {
    /* Own fields of Json-1.0.Json.ParserClass */
    parse_start: (parser: Parser) => void
    object_start: (parser: Parser) => void
    object_member: (parser: Parser, object: Object, member_name: string) => void
    object_end: (parser: Parser, object: Object) => void
    array_start: (parser: Parser) => void
    array_element: (parser: Parser, array: Array, index_: number) => void
    array_end: (parser: Parser, array: Array) => void
    parse_end: (parser: Parser) => void
    error: (parser: Parser, error: GLib.Error) => void
    static name: string
}
export class ParserPrivate {
    static name: string
}
/**
 * The `JsonPathClass` structure is an opaque object class whose members
 * cannot be directly accessed.
 */
export abstract class PathClass {
    static name: string
}
/**
 * The `JsonReaderClass` structure contains only private data
 */
export abstract class ReaderClass {
    static name: string
}
export class ReaderPrivate {
    static name: string
}
/**
 * Interface that allows serializing and deserializing #GObject instances
 * with properties storing complex data types. The json_serialize_gobject()
 * function will check if the passed #GObject implements this interface,
 * so it can also be used to override the default property serialization
 * sequence.
 */
export abstract class SerializableIface {
    /* Own fields of Json-1.0.Json.SerializableIface */
    serialize_property: (serializable: Serializable, property_name: string, value: any, pspec: GObject.ParamSpec) => Node
    deserialize_property: (serializable: Serializable, property_name: string, pspec: GObject.ParamSpec, property_node: Node) => [ /* returnType */ boolean, /* value */ any ]
    find_property: (serializable: Serializable, name: string) => GObject.ParamSpec | null
    set_property: (serializable: Serializable, pspec: GObject.ParamSpec, value: any) => void
    get_property: (serializable: Serializable, pspec: GObject.ParamSpec) => /* value */ any
    static name: string
}