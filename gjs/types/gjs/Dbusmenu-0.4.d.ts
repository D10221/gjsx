/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Dbusmenu-0.4
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';

/**
 * Tracks how the menus should be presented to the user.
 */
export enum Status {
    /**
     * Everything is normal
     */
    NORMAL,
    /**
     * The menus should be shown at a higher priority
     */
    NOTICE,
}
/**
 * The direction of text that the strings that this server
 * 	will be sending strings as.
 */
export enum TextDirection {
    /**
     * Unspecified text direction
     */
    NONE,
    /**
     * Left-to-right text direction
     */
    LTR,
    /**
     * Right-to-left text direction
     */
    RTL,
}
/**
 * String to access property #DbusmenuClient:dbus-name
 */
export const CLIENT_PROP_DBUS_NAME: string
/**
 * String to access property #DbusmenuClient:dbus-object
 */
export const CLIENT_PROP_DBUS_OBJECT: string
/**
 * String to access property #DbusmenuClient:group-events
 */
export const CLIENT_PROP_GROUP_EVENTS: string
/**
 * String to access property #DbusmenuClient:status
 */
export const CLIENT_PROP_STATUS: string
/**
 * String to access property #DbusmenuClient:text-direction
 */
export const CLIENT_PROP_TEXT_DIRECTION: string
/**
 * String to attach to signal #DbusmenuClient::event-result
 */
export const CLIENT_SIGNAL_EVENT_RESULT: string
/**
 * String to attach to signal #DbusmenuClient::icon-theme-dirs-changed
 */
export const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string
/**
 * String to attach to signal #DbusmenuClient::item-activate
 */
export const CLIENT_SIGNAL_ITEM_ACTIVATE: string
/**
 * String to attach to signal #DbusmenuClient::layout-updated
 */
export const CLIENT_SIGNAL_LAYOUT_UPDATED: string
/**
 * String to attach to signal #DbusmenuClient::new-menuitem
 */
export const CLIENT_SIGNAL_NEW_MENUITEM: string
/**
 * String to attach to signal #DbusmenuClient::root-changed
 */
export const CLIENT_SIGNAL_ROOT_CHANGED: string
/**
 * Used to set the 'type' property on a menu item to create
 * a standard menu item.
 */
export const CLIENT_TYPES_DEFAULT: string
/**
 * Used to set the 'type' property on a menu item to create
 * an image menu item.  Deprecated as standard menu items now
 * support images as well.
 */
export const CLIENT_TYPES_IMAGE: string
/**
 * Used to set the 'type' property on a menu item to create
 * a separator menu item.
 */
export const CLIENT_TYPES_SEPARATOR: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_CHILD_DISPLAY to have the
 * subitems displayed as a submenu.
 */
export const MENUITEM_CHILD_DISPLAY_SUBMENU: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in a way that conveys it's giving an alert
 * to the user.
 */
export const MENUITEM_DISPOSITION_ALERT: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in a way that conveys it's giving additional
 * information to the user.
 */
export const MENUITEM_DISPOSITION_INFORMATIVE: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in the normal manner.  Default value.
 */
export const MENUITEM_DISPOSITION_NORMAL: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_DISPOSITION to have a menu
 * item displayed in a way that conveys it's giving a warning
 * to the user.
 */
export const MENUITEM_DISPOSITION_WARNING: string
/**
 * String for the event identifier when a menu item is clicked
 * on by the user.
 */
export const MENUITEM_EVENT_ACTIVATED: string
/**
 * String for the event identifier when a menu is closed and
 * displayed to the user.  Only valid for items that contain
 * submenus.
 */
export const MENUITEM_EVENT_CLOSED: string
/**
 * String for the event identifier when a menu is opened and
 * displayed to the user.  Only valid for items that contain
 * submenus.
 */
export const MENUITEM_EVENT_OPENED: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is undecided.
 */
export const MENUITEM_ICON_NAME_BLANK: string
/**
 * #DbusmenuMenuitem property used to provide a textual description of any
 * information that the icon may convey. The contents of this property are
 * passed through to assistive technologies such as the Orca screen reader.
 * The contents of this property will not be visible in the menu item. If
 * this property is set, Orca will use this property instead of the label
 * property.
 */
export const MENUITEM_PROP_ACCESSIBLE_DESC: string
/**
 * #DbusmenuMenuitem property that tells how the children of this menuitem
 * should be displayed.  Most likely this will be unset or of the value
 * #DBUSMENU_MENUITEM_CHILD_DISPLAY_SUBMENU.  Type: #G_VARIANT_TYPE_STRING
 */
export const MENUITEM_PROP_CHILD_DISPLAY: string
/**
 * #DbusmenuMenuitem property to tell what type of information that the
 * menu item is displaying to the user.  Type: #G_VARIANT_TYPE_STRING
 */
export const MENUITEM_PROP_DISPOSITION: string
/**
 * #DbusmenuMenuitem property used to represent whether the menuitem
 * is clickable or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
 */
export const MENUITEM_PROP_ENABLED: string
/**
 * #DbusmenuMenuitem property that is the raw data of a custom icon
 * used in the application.  Type: #G_VARIANT_TYPE_VARIANT
 * 
 * It is recommended that this is not set directly but instead the
 * libdbusmenu-gtk library is used with the function dbusmenu_menuitem_property_set_image()
 */
export const MENUITEM_PROP_ICON_DATA: string
/**
 * #DbusmenuMenuitem property that is the name of the icon under the
 * Freedesktop.org icon naming spec.  Type: #G_VARIANT_TYPE_STRING
 */
export const MENUITEM_PROP_ICON_NAME: string
/**
 * #DbusmenuMenuitem property used for the text on the menu item.
 */
export const MENUITEM_PROP_LABEL: string
/**
 * #DbusmenuMenuitem property that is the entries that represent a shortcut
 * to activate the menuitem.  It is an array of arrays of strings.
 * 
 * It is recommended that this is not set directly but instead the
 * libdbusmenu-gtk library is used with the function dbusmenu_menuitem_property_set_shortcut()
 */
export const MENUITEM_PROP_SHORTCUT: string
/**
 * #DbusmenuMenuitem property that says what state a toggle entry should
 * be shown as the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_STATE_UNCHECKED
 * #DBUSMENU_MENUITEM_TOGGLE_STATE_CHECKED or #DBUSMENU_MENUITEM_TOGGLE_STATUE_UNKNOWN.
 */
export const MENUITEM_PROP_TOGGLE_STATE: string
/**
 * #DbusmenuMenuitem property that says what type of toggle entry should
 * be shown in the menu.  Should be either #DBUSMENU_MENUITEM_TOGGLE_CHECK
 * or #DBUSMENU_MENUITEM_TOGGLE_RADIO.  Type: #G_VARIANT_TYPE_STRING
 */
export const MENUITEM_PROP_TOGGLE_TYPE: string
/**
 * #DbusmenuMenuitem property used to represent what type of menuitem
 * this object represents.  Type: #G_VARIANT_TYPE_STRING.
 */
export const MENUITEM_PROP_TYPE: string
/**
 * #DbusmenuMenuitem property used to represent whether the menuitem
 * should be shown or not.  Type: #G_VARIANT_TYPE_BOOLEAN.
 */
export const MENUITEM_PROP_VISIBLE: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * alternate key.
 */
export const MENUITEM_SHORTCUT_ALT: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * control key.
 */
export const MENUITEM_SHORTCUT_CONTROL: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * shift key.
 */
export const MENUITEM_SHORTCUT_SHIFT: string
/**
 * Used in #DBUSMENU_MENUITEM_PROP_SHORTCUT to represent the
 * super key.
 */
export const MENUITEM_SHORTCUT_SUPER: string
/**
 * String to attach to signal #DbusmenuServer::about-to-show
 */
export const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string
/**
 * String to attach to signal #DbusmenuServer::child-added
 */
export const MENUITEM_SIGNAL_CHILD_ADDED: string
/**
 * String to attach to signal #DbusmenuServer::child-moved
 */
export const MENUITEM_SIGNAL_CHILD_MOVED: string
/**
 * String to attach to signal #DbusmenuServer::child-removed
 */
export const MENUITEM_SIGNAL_CHILD_REMOVED: string
/**
 * String to attach to signal #DbusmenuServer::event
 */
export const MENUITEM_SIGNAL_EVENT: string
/**
 * String to attach to signal #DbusmenuServer::item-activated
 */
export const MENUITEM_SIGNAL_ITEM_ACTIVATED: string
/**
 * String to attach to signal #DbusmenuServer::property-changed
 */
export const MENUITEM_SIGNAL_PROPERTY_CHANGED: string
/**
 * String to attach to signal #DbusmenuServer::realized
 */
export const MENUITEM_SIGNAL_REALIZED: string
/**
 * String to attach to signal #DbusmenuServer::show-to-user
 */
export const MENUITEM_SIGNAL_SHOW_TO_USER: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
 * check mark item.
 */
export const MENUITEM_TOGGLE_CHECK: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_TYPE to be a standard
 * radio item.
 */
export const MENUITEM_TOGGLE_RADIO: string
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is filled.
 */
export const MENUITEM_TOGGLE_STATE_CHECKED: number
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is empty.
 */
export const MENUITEM_TOGGLE_STATE_UNCHECKED: number
/**
 * Used to set #DBUSMENU_MENUITEM_PROP_TOGGLE_STATE so that the menu's
 * toggle item is undecided.
 */
export const MENUITEM_TOGGLE_STATE_UNKNOWN: number
/**
 * String to access property #DbusmenuServer:dbus-object
 */
export const SERVER_PROP_DBUS_OBJECT: string
/**
 * String to access property #DbusmenuServer:root-node
 */
export const SERVER_PROP_ROOT_NODE: string
/**
 * String to access property #DbusmenuServer:status
 */
export const SERVER_PROP_STATUS: string
/**
 * String to access property #DbusmenuServer:text-direction
 */
export const SERVER_PROP_TEXT_DIRECTION: string
/**
 * String to access property #DbusmenuServer:version
 */
export const SERVER_PROP_VERSION: string
/**
 * String to attach to signal #DbusmenuServer::item-property-updated
 */
export const SERVER_SIGNAL_ID_PROP_UPDATE: string
/**
 * String to attach to signal #DbusmenuServer::item-updated
 */
export const SERVER_SIGNAL_ID_UPDATE: string
/**
 * String to attach to signal #DbusmenuServer::item-activation-requested
 */
export const SERVER_SIGNAL_ITEM_ACTIVATION: string
/**
 * String to attach to signal #DbusmenuServer::layout-updated
 */
export const SERVER_SIGNAL_LAYOUT_UPDATED: string
/**
 * The type handler is called when a dbusmenu item is created
 * 	with a matching type as setup in #dbusmenu_client_add_type_handler
 * 
 * 	Return value: #TRUE if the type has been handled.  #FALSE if this
 * 		function was somehow unable to handle it.
 */
export interface ClientTypeHandler {
    (newitem: Menuitem, parent: Menuitem, client: Client): boolean
}
/**
 * Callback prototype for a callback that is called when the
 * menu should be shown.
 */
export interface menuitem_about_to_show_cb {
    (mi: Menuitem): void
}
/**
 * This is the function that is called to represent this menu item
 * as a variant.  Should call its own children.
 */
export interface menuitem_buildvariant_slot_t {
    (mi: Menuitem, properties?: string | null): GLib.Variant
}
export interface Client_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.Client */
    dbus_name?: string
    dbus_object?: string
    group_events?: boolean
}
export class Client {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Client */
    readonly dbus_name: string
    readonly dbus_object: string
    group_events: boolean
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Client */
    /**
     * This function connects into the type handling of the #DbusmenuClient.
     * Every new menuitem that comes in immediately gets asked for its
     * properties.  When we get those properties we check the 'type'
     * property and look to see if it matches a handler that is known
     * by the client.  If so, the `newfunc` function is executed on that
     * #DbusmenuMenuitem.  If not, then the DbusmenuClient::new-menuitem
     * signal is sent.
     * 
     * In the future the known types will be sent to the server so that it
     * can make choices about the menu item types availble.
     * @param type A text string that will be matched with the 'type'     property on incoming menu items
     * @param newfunc The function that will be executed with those new     items when they come in.
     */
    add_type_handler(type: string, newfunc: ClientTypeHandler): boolean
    /**
     * This function connects into the type handling of the #DbusmenuClient.
     * Every new menuitem that comes in immediately gets asked for its
     * properties.  When we get those properties we check the 'type'
     * property and look to see if it matches a handler that is known
     * by the client.  If so, the `newfunc` function is executed on that
     * #DbusmenuMenuitem.  If not, then the DbusmenuClient::new-menuitem
     * signal is sent.
     * 
     * In the future the known types will be sent to the server so that it
     * can make choices about the menu item types availble.
     * @param type A text string that will be matched with the 'type'     property on incoming menu items
     * @param newfunc The function that will be executed with those new     items when they come in.
     */
    add_type_handler_full(type: string, newfunc: ClientTypeHandler): boolean
    /**
     * Gets the stored and exported icon paths from the client.
     */
    get_icon_paths(): string[]
    /**
     * Grabs the root node for the specified client `client`.  This
     * function may block.  It will block if there is currently a
     * call to update the layout, it will block on that layout
     * updated and then return the newly updated layout.  Chances
     * are that this update is in the queue for the mainloop as
     * it would have been requested some time ago, but in theory
     * it could block longer.
     */
    get_root(): Menuitem
    /**
     * Gets the recommended current status that the server
     * 	is exporting for the menus.  In situtations where the
     * 	value is #DBUSMENU_STATUS_NOTICE it is recommended that
     * 	the client show the menus to the user an a more noticible
     * 	way.
     * 
     * 	Return value: Status being exported.
     */
    get_status(): Status
    /**
     * Gets the text direction that the server is exporting.  If
     * 	the server is not exporting a direction then the value
     * 	#DBUSMENU_TEXT_DIRECTION_NONE will be returned.
     * 
     * 	Return value: Text direction being exported.
     */
    get_text_direction(): TextDirection
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
    /* Signals of Dbusmenu-0.4.Dbusmenu.Client */
    connect(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    connect_after(sigName: "event-result", callback: (($obj: Client, object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null) => void)): number
    emit(sigName: "event-result", object: GObject.Object, p0: string, p1: GLib.Variant, p2: number, p3?: object | null): void
    /**
     * Signaled when the theme directories are changed by the server.
     * @param arg1 A #GStrv of theme directories
     */
    connect(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    connect_after(sigName: "icon-theme-dirs-changed", callback: (($obj: Client, arg1?: object | null) => void)): number
    emit(sigName: "icon-theme-dirs-changed", arg1?: object | null): void
    /**
     * Signaled when the server wants to activate an item in
     * 		order to display the menu.
     * @param arg1 The #DbusmenuMenuitem activated
     * @param arg2 A timestamp that the event happened at
     */
    connect(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "item-activate", callback: (($obj: Client, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "item-activate", arg1: GObject.Object, arg2: number): void
    connect(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Client) => void)): number
    emit(sigName: "layout-updated"): void
    /**
     * Signaled when the client creates a new menuitem.  This
     * 		doesn't mean that it's placed anywhere.  The parent that
     * 		it's applied to will signal #DbusmenuMenuitem::child-added
     * 		when it gets parented.
     * @param arg1 The new #DbusmenuMenuitem created
     */
    connect(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "new-menuitem", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "new-menuitem", arg1: GObject.Object): void
    /**
     * The layout has changed in a way that can not be
     * 		represented by the individual items changing as the
     * 		root of this client has changed.
     * @param arg1 The new root #DbusmenuMenuitem
     */
    connect(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    connect_after(sigName: "root-changed", callback: (($obj: Client, arg1: GObject.Object) => void)): number
    emit(sigName: "root-changed", arg1: GObject.Object): void
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
    connect(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dbus-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-name", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::dbus-object", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-object", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::group-events", callback: (($obj: Client, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Client_ConstructProps)
    _init (config?: Client_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, object: string): Client
    static $gtype: GObject.Type
}
export interface Menuitem_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.Menuitem */
    id?: number
}
export class Menuitem {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Menuitem */
    readonly id: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    /**
     * Puts `child` in the list of children for `mi` at the location
     * specified in `position`.  If there is not enough entires available
     * then `child` will be placed at the end of the list.
     * @param child The #DbusmenuMenuitem to make a child of `mi`.
     * @param position Where in `mi` object's list of chidren `child` should be placed.
     */
    child_add_position(child: Menuitem, position: number): boolean
    /**
     * This function adds `child` to the list of children on `mi` at
     * the end of that list.
     * @param child The #DbusmenMenuitem that will be a child
     */
    child_append(child: Menuitem): boolean
    /**
     * This function removes `child` from the children list of `mi`.  It does
     * not call #g_object_unref on `child`.
     * @param child The child #DbusmenuMenuitem that you want to no longer     be a child of `mi`.
     */
    child_delete(child: Menuitem): boolean
    /**
     * Search the children of `mi` to find one with the ID of `id`.
     * If it doesn't exist then we return #NULL.
     * @param id The ID of the child that we're looking for.
     */
    child_find(id: number): Menuitem
    /**
     * This function adds `child` to the list of children on `mi` at
     * the beginning of that list.
     * @param child The #DbusmenMenuitem that will be a child
     */
    child_prepend(child: Menuitem): boolean
    /**
     * This function moves a child on the list of children.  It is
     * for a child that is already in the list, but simply needs a
     * new location.
     * @param child The #DbusmenuMenuitem that is a child needing to be moved
     * @param position The position in the list to place it in
     */
    child_reorder(child: Menuitem, position: number): boolean
    /**
     * This function searchs the whole tree of children that
     * are attached to `mi`.  This could be quite a few nodes, all
     * the way down the tree.  It is a depth first search.
     * @param id ID of the #DbusmenuMenuitem to search for
     */
    find_id(id: number): Menuitem
    /**
     * This calls the function `func` on this menu item and all
     * of the children of this item.  And their children.  And
     * their children.  And... you get the point.  It will get
     * called on the whole tree.
     * @param func Function to call on every node in the tree
     * @param data User data to pass to the function
     */
    foreach(func?: object | null, data?: object | null): void
    /**
     * Returns simply the list of children that this menu item
     * has.  The list is valid until another child related function
     * is called, where it might be changed.
     */
    get_children(): Menuitem[]
    /**
     * Gets the unique ID for `mi`.
     */
    get_id(): number
    /**
     * This function looks up the parent of `mi`
     */
    get_parent(): Menuitem
    /**
     * This function returns the position of the menu item `mi`
     * in the children of `parent`.  It will return zero if the
     * menu item can't be found.
     * @param parent The #DbusmenuMenuitem who's children contain `mi`
     */
    get_position(parent: Menuitem): number
    /**
     * This function is very similar to #dbusmenu_menuitem_get_position
     * except that it only counts in the children that have been realized.
     * @param parent The #DbusmenuMenuitem who's children contain `mi`
     */
    get_position_realized(parent: Menuitem): number
    /**
     * This function returns the internal value of whether this is a
     * root node or not.
     */
    get_root(): boolean
    /**
     * This function is called to create an event.  It is likely
     * to be overrided by subclasses.  The default menu item
     * will respond to the activate signal and do:
     * 
     * Emits the #DbusmenuMenuitem::item-activate signal on this
     * menu item.  Called by server objects when they get the
     * appropriate DBus signals from the client.
     * 
     * If you subclass this function you should really think
     * about calling the parent function unless you have a good
     * reason not to.
     * @param name The name of the signal
     * @param variant A value that could be set for the event
     * @param timestamp The timestamp of when the event happened
     */
    handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    /**
     * This function takes the properties of a #DbusmenuMenuitem
     * and puts them into a #GHashTable that is referenced by the
     * key of a string and has the value of a string.  The hash
     * table may not have any entries if there aren't any or there
     * is an error in processing.  It is the caller's responsibility
     * to destroy the created #GHashTable.
     */
    properties_copy(): GLib.HashTable
    /**
     * This functiong gets a list of the names of all the properties
     * that are set on this menu item.  This data on the list is owned
     * by the menuitem but the list is not and should be freed using
     * g_list_free() when the calling function is done with it.
     */
    properties_list(): string[]
    /**
     * Checkes to see if a particular property exists on `mi` and
     * returns #TRUE if so.
     * @param property The property to look for.
     */
    property_exist(property: string): boolean
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get(property: string): string
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  Returns #FALSE if the property doesn't exist.
     * @param property The property to grab.
     */
    property_get_bool(property: string): boolean
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get_byte_array(property: string): Uint8Array
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  Returns zero if the property doesn't exist.
     * @param property The property to grab.
     */
    property_get_int(property: string): number
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get_variant(property: string): GLib.Variant
    /**
     * Removes a property from the menuitem.
     * @param property The property to look for.
     */
    property_remove(property: string): void
    /**
     * Takes the pair of `property` and `value` and places them as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set(property: string, value: string): boolean
    /**
     * Takes a boolean `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_bool(property: string, value: boolean): boolean
    /**
     * Takes a byte array `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The byte array.
     * @param nelements The number of elements in the byte array.
     */
    property_set_byte_array(property: string, value: number, nelements: number): boolean
    /**
     * Takes a boolean `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_int(property: string, value: number): boolean
    /**
     * Takes the pair of `property` and `value` and places them as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_variant(property: string, value: GLib.Variant): boolean
    /**
     * This function is used to send the even that the submenu
     * of this item is about to be shown.  Callers to this event
     * should delay showing the menu until their callback is
     * called if possible.
     * @param cb Callback to call when the call has returned.
     * @param cb_data Data to pass to the callback.
     */
    send_about_to_show(cb?: object | null, cb_data?: object | null): void
    /**
     * Sets the parent of `mi` to `parent`. If `mi` already
     * has a parent, then this call will fail. The parent will
     * be set automatically when using the usual methods to add a
     * child menuitem, so this function should not normally be
     * called directly
     * @param parent The new parent #DbusmenuMenuitem
     */
    set_parent(parent: Menuitem): boolean
    /**
     * This function sets the internal value of whether this is a
     * root node or not.
     * @param root Whether `mi` is a root node or not
     */
    set_root(root: boolean): void
    /**
     * Signals that this menu item should be shown to the user.  If this is
     * server side the server will then take it and send it over the
     * bus.
     * @param timestamp The time that the user requested it to be shown
     */
    show_to_user(timestamp: number): void
    /**
     * While the name sounds devious that's exactly what this function
     * does.  It takes the list of children from the `mi` and clears the
     * internal list.  The calling function is now in charge of the ref's
     * on the children it has taken.  A lot of responsibility involved
     * in taking children.
     */
    take_children(): Menuitem[]
    /**
     * Unparents the menu item `mi`. If `mi` doesn't have a
     * parent, then this call will fail. The menuitem will
     * be unparented automatically when using the usual methods
     * to delete a child menuitem, so this function should not
     * normally be called directly
     */
    unparent(): boolean
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
    /* Virtual methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    vfunc_child_added(position: number): void
    vfunc_child_moved(newpos: number, oldpos: number): void
    vfunc_child_removed(): void
    /**
     * This function is called to create an event.  It is likely
     * to be overrided by subclasses.  The default menu item
     * will respond to the activate signal and do:
     * 
     * Emits the #DbusmenuMenuitem::item-activate signal on this
     * menu item.  Called by server objects when they get the
     * appropriate DBus signals from the client.
     * 
     * If you subclass this function you should really think
     * about calling the parent function unless you have a good
     * reason not to.
     * @param name The name of the signal
     * @param variant A value that could be set for the event
     * @param timestamp The timestamp of when the event happened
     */
    vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    vfunc_show_to_user(timestamp: number, cb_data?: object | null): void
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
    /* Signals of Dbusmenu-0.4.Dbusmenu.Menuitem */
    /**
     * Emitted when the submenu for this item
     * 		is about to be shown
     */
    connect(sigName: "about-to-show", callback: (($obj: Menuitem) => boolean)): number
    connect_after(sigName: "about-to-show", callback: (($obj: Menuitem) => boolean)): number
    emit(sigName: "about-to-show"): void
    /**
     * Signaled when the child menuitem has been added to
     * 		the parent.
     * @param arg1 The #DbusmenuMenuitem which is the child.
     * @param arg2 The position that the child is being added in.
     */
    connect(sigName: "child-added", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    /**
     * Signaled when the child menuitem has had its location
     * 		in the list change.
     * @param arg1 The #DbusmenuMenuitem which is the child.
     * @param arg2 The position that the child is being moved to.
     * @param arg3 The position that the child is was in.
     */
    connect(sigName: "child-moved", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: Menuitem, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    /**
     * Signaled when the child menuitem has been requested to
     * 		be removed from the parent.  This signal is called when
     * 		it has been removed from the list but not yet had
     * 		#g_object_unref called on it.
     * @param arg1 The #DbusmenuMenuitem which was the child.
     */
    connect(sigName: "child-removed", callback: (($obj: Menuitem, arg1: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: Menuitem, arg1: GObject.Object) => void)): number
    emit(sigName: "child-removed", arg1: GObject.Object): void
    /**
     * Emitted when an event is passed through.  The event is signalled
     * 		after handle_event is called.
     * @param arg1 Name of the event
     * @param arg2 Information passed along with the event
     * @param arg3 X11 timestamp of when the event happened
     */
    connect(sigName: "event", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    /**
     * Emitted on the objects on the server side when
     * 		they are signaled on the client side.
     * @param arg1 The timestamp of when it was activated
     */
    connect(sigName: "item-activated", callback: (($obj: Menuitem, arg1: number) => void)): number
    connect_after(sigName: "item-activated", callback: (($obj: Menuitem, arg1: number) => void)): number
    emit(sigName: "item-activated", arg1: number): void
    /**
     * Emitted everytime a property on a menuitem is either
     * 		updated or added.
     * @param arg1 The name of the property that changed
     * @param arg2 The new value of the property
     */
    connect(sigName: "property-changed", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant) => void)): number
    connect_after(sigName: "property-changed", callback: (($obj: Menuitem, arg1: string, arg2: GLib.Variant) => void)): number
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    /**
     * Emitted when the initial request for properties
     * 		is complete on the item.  If there is a type
     * 		handler configured for the "type" parameter
     * 		that will be executed before this is signaled.
     */
    connect(sigName: "realized", callback: (($obj: Menuitem) => void)): number
    connect_after(sigName: "realized", callback: (($obj: Menuitem) => void)): number
    emit(sigName: "realized"): void
    /**
     * Signaled when the application would like the visualization
     * 		of this menu item shown to the user.  This usually requires
     * 		going over the bus to get it done.
     * @param arg1 Timestamp the event happened at
     */
    connect(sigName: "show-to-user", callback: (($obj: Menuitem, arg1: number) => void)): number
    connect_after(sigName: "show-to-user", callback: (($obj: Menuitem, arg1: number) => void)): number
    emit(sigName: "show-to-user", arg1: number): void
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
    connect(sigName: "notify", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::id", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Menuitem, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Menuitem_ConstructProps)
    _init (config?: Menuitem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Menuitem
    static new_with_id(id: number): Menuitem
    static $gtype: GObject.Type
}
export interface MenuitemProxy_ConstructProps extends Menuitem_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxy */
    menu_item?: Menuitem
}
export class MenuitemProxy {
    /* Properties of Dbusmenu-0.4.Dbusmenu.MenuitemProxy */
    readonly menu_item: Menuitem
    /* Properties of Dbusmenu-0.4.Dbusmenu.Menuitem */
    readonly id: number
    /* Fields of Dbusmenu-0.4.Dbusmenu.Menuitem */
    /**
     * Parent object
     */
    parent: GObject.Object
    /**
     * Private data
     */
    priv: MenuitemPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.MenuitemProxy */
    /**
     * Accesses the private variable of which #DbusmenuMenuitem
     * we are doing the proxying for.
     */
    get_wrapped(): Menuitem
    /* Methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    /**
     * Puts `child` in the list of children for `mi` at the location
     * specified in `position`.  If there is not enough entires available
     * then `child` will be placed at the end of the list.
     * @param child The #DbusmenuMenuitem to make a child of `mi`.
     * @param position Where in `mi` object's list of chidren `child` should be placed.
     */
    child_add_position(child: Menuitem, position: number): boolean
    /**
     * This function adds `child` to the list of children on `mi` at
     * the end of that list.
     * @param child The #DbusmenMenuitem that will be a child
     */
    child_append(child: Menuitem): boolean
    /**
     * This function removes `child` from the children list of `mi`.  It does
     * not call #g_object_unref on `child`.
     * @param child The child #DbusmenuMenuitem that you want to no longer     be a child of `mi`.
     */
    child_delete(child: Menuitem): boolean
    /**
     * Search the children of `mi` to find one with the ID of `id`.
     * If it doesn't exist then we return #NULL.
     * @param id The ID of the child that we're looking for.
     */
    child_find(id: number): Menuitem
    /**
     * This function adds `child` to the list of children on `mi` at
     * the beginning of that list.
     * @param child The #DbusmenMenuitem that will be a child
     */
    child_prepend(child: Menuitem): boolean
    /**
     * This function moves a child on the list of children.  It is
     * for a child that is already in the list, but simply needs a
     * new location.
     * @param child The #DbusmenuMenuitem that is a child needing to be moved
     * @param position The position in the list to place it in
     */
    child_reorder(child: Menuitem, position: number): boolean
    /**
     * This function searchs the whole tree of children that
     * are attached to `mi`.  This could be quite a few nodes, all
     * the way down the tree.  It is a depth first search.
     * @param id ID of the #DbusmenuMenuitem to search for
     */
    find_id(id: number): Menuitem
    /**
     * This calls the function `func` on this menu item and all
     * of the children of this item.  And their children.  And
     * their children.  And... you get the point.  It will get
     * called on the whole tree.
     * @param func Function to call on every node in the tree
     * @param data User data to pass to the function
     */
    foreach(func?: object | null, data?: object | null): void
    /**
     * Returns simply the list of children that this menu item
     * has.  The list is valid until another child related function
     * is called, where it might be changed.
     */
    get_children(): Menuitem[]
    /**
     * Gets the unique ID for `mi`.
     */
    get_id(): number
    /**
     * This function looks up the parent of `mi`
     */
    get_parent(): Menuitem
    /**
     * This function returns the position of the menu item `mi`
     * in the children of `parent`.  It will return zero if the
     * menu item can't be found.
     * @param parent The #DbusmenuMenuitem who's children contain `mi`
     */
    get_position(parent: Menuitem): number
    /**
     * This function is very similar to #dbusmenu_menuitem_get_position
     * except that it only counts in the children that have been realized.
     * @param parent The #DbusmenuMenuitem who's children contain `mi`
     */
    get_position_realized(parent: Menuitem): number
    /**
     * This function returns the internal value of whether this is a
     * root node or not.
     */
    get_root(): boolean
    /**
     * This function is called to create an event.  It is likely
     * to be overrided by subclasses.  The default menu item
     * will respond to the activate signal and do:
     * 
     * Emits the #DbusmenuMenuitem::item-activate signal on this
     * menu item.  Called by server objects when they get the
     * appropriate DBus signals from the client.
     * 
     * If you subclass this function you should really think
     * about calling the parent function unless you have a good
     * reason not to.
     * @param name The name of the signal
     * @param variant A value that could be set for the event
     * @param timestamp The timestamp of when the event happened
     */
    handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    /**
     * This function takes the properties of a #DbusmenuMenuitem
     * and puts them into a #GHashTable that is referenced by the
     * key of a string and has the value of a string.  The hash
     * table may not have any entries if there aren't any or there
     * is an error in processing.  It is the caller's responsibility
     * to destroy the created #GHashTable.
     */
    properties_copy(): GLib.HashTable
    /**
     * This functiong gets a list of the names of all the properties
     * that are set on this menu item.  This data on the list is owned
     * by the menuitem but the list is not and should be freed using
     * g_list_free() when the calling function is done with it.
     */
    properties_list(): string[]
    /**
     * Checkes to see if a particular property exists on `mi` and
     * returns #TRUE if so.
     * @param property The property to look for.
     */
    property_exist(property: string): boolean
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get(property: string): string
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  Returns #FALSE if the property doesn't exist.
     * @param property The property to grab.
     */
    property_get_bool(property: string): boolean
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get_byte_array(property: string): Uint8Array
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  Returns zero if the property doesn't exist.
     * @param property The property to grab.
     */
    property_get_int(property: string): number
    /**
     * Look up a property on `mi` and return the value of it if
     * it exits.  #NULL will be returned if the property doesn't
     * exist.
     * @param property The property to grab.
     */
    property_get_variant(property: string): GLib.Variant
    /**
     * Removes a property from the menuitem.
     * @param property The property to look for.
     */
    property_remove(property: string): void
    /**
     * Takes the pair of `property` and `value` and places them as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set(property: string, value: string): boolean
    /**
     * Takes a boolean `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_bool(property: string, value: boolean): boolean
    /**
     * Takes a byte array `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The byte array.
     * @param nelements The number of elements in the byte array.
     */
    property_set_byte_array(property: string, value: number, nelements: number): boolean
    /**
     * Takes a boolean `value` and sets it on `property` as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_int(property: string, value: number): boolean
    /**
     * Takes the pair of `property` and `value` and places them as a
     * property on `mi`.  If a property already exists by that name,
     * then the value is set to the new value.  If not, the property
     * is added.  If the value is changed or the property was previously
     * unset then the signal #DbusmenuMenuitem::prop-changed will be
     * emitted by this function.
     * @param property Name of the property to set.
     * @param value The value of the property.
     */
    property_set_variant(property: string, value: GLib.Variant): boolean
    /**
     * This function is used to send the even that the submenu
     * of this item is about to be shown.  Callers to this event
     * should delay showing the menu until their callback is
     * called if possible.
     * @param cb Callback to call when the call has returned.
     * @param cb_data Data to pass to the callback.
     */
    send_about_to_show(cb?: object | null, cb_data?: object | null): void
    /**
     * Sets the parent of `mi` to `parent`. If `mi` already
     * has a parent, then this call will fail. The parent will
     * be set automatically when using the usual methods to add a
     * child menuitem, so this function should not normally be
     * called directly
     * @param parent The new parent #DbusmenuMenuitem
     */
    set_parent(parent: Menuitem): boolean
    /**
     * This function sets the internal value of whether this is a
     * root node or not.
     * @param root Whether `mi` is a root node or not
     */
    set_root(root: boolean): void
    /**
     * Signals that this menu item should be shown to the user.  If this is
     * server side the server will then take it and send it over the
     * bus.
     * @param timestamp The time that the user requested it to be shown
     */
    show_to_user(timestamp: number): void
    /**
     * While the name sounds devious that's exactly what this function
     * does.  It takes the list of children from the `mi` and clears the
     * internal list.  The calling function is now in charge of the ref's
     * on the children it has taken.  A lot of responsibility involved
     * in taking children.
     */
    take_children(): Menuitem[]
    /**
     * Unparents the menu item `mi`. If `mi` doesn't have a
     * parent, then this call will fail. The menuitem will
     * be unparented automatically when using the usual methods
     * to delete a child menuitem, so this function should not
     * normally be called directly
     */
    unparent(): boolean
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
    /* Virtual methods of Dbusmenu-0.4.Dbusmenu.Menuitem */
    vfunc_child_added(position: number): void
    vfunc_child_moved(newpos: number, oldpos: number): void
    vfunc_child_removed(): void
    /**
     * This function is called to create an event.  It is likely
     * to be overrided by subclasses.  The default menu item
     * will respond to the activate signal and do:
     * 
     * Emits the #DbusmenuMenuitem::item-activate signal on this
     * menu item.  Called by server objects when they get the
     * appropriate DBus signals from the client.
     * 
     * If you subclass this function you should really think
     * about calling the parent function unless you have a good
     * reason not to.
     * @param name The name of the signal
     * @param variant A value that could be set for the event
     * @param timestamp The timestamp of when the event happened
     */
    vfunc_handle_event(name: string, variant: GLib.Variant, timestamp: number): void
    vfunc_show_to_user(timestamp: number, cb_data?: object | null): void
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
    /* Signals of Dbusmenu-0.4.Dbusmenu.Menuitem */
    /**
     * Emitted when the submenu for this item
     * 		is about to be shown
     */
    connect(sigName: "about-to-show", callback: (($obj: MenuitemProxy) => boolean)): number
    connect_after(sigName: "about-to-show", callback: (($obj: MenuitemProxy) => boolean)): number
    emit(sigName: "about-to-show"): void
    /**
     * Signaled when the child menuitem has been added to
     * 		the parent.
     * @param arg1 The #DbusmenuMenuitem which is the child.
     * @param arg2 The position that the child is being added in.
     */
    connect(sigName: "child-added", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number) => void)): number
    connect_after(sigName: "child-added", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number) => void)): number
    emit(sigName: "child-added", arg1: GObject.Object, arg2: number): void
    /**
     * Signaled when the child menuitem has had its location
     * 		in the list change.
     * @param arg1 The #DbusmenuMenuitem which is the child.
     * @param arg2 The position that the child is being moved to.
     * @param arg3 The position that the child is was in.
     */
    connect(sigName: "child-moved", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    connect_after(sigName: "child-moved", callback: (($obj: MenuitemProxy, arg1: GObject.Object, arg2: number, arg3: number) => void)): number
    emit(sigName: "child-moved", arg1: GObject.Object, arg2: number, arg3: number): void
    /**
     * Signaled when the child menuitem has been requested to
     * 		be removed from the parent.  This signal is called when
     * 		it has been removed from the list but not yet had
     * 		#g_object_unref called on it.
     * @param arg1 The #DbusmenuMenuitem which was the child.
     */
    connect(sigName: "child-removed", callback: (($obj: MenuitemProxy, arg1: GObject.Object) => void)): number
    connect_after(sigName: "child-removed", callback: (($obj: MenuitemProxy, arg1: GObject.Object) => void)): number
    emit(sigName: "child-removed", arg1: GObject.Object): void
    /**
     * Emitted when an event is passed through.  The event is signalled
     * 		after handle_event is called.
     * @param arg1 Name of the event
     * @param arg2 Information passed along with the event
     * @param arg3 X11 timestamp of when the event happened
     */
    connect(sigName: "event", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    connect_after(sigName: "event", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant, arg3: number) => boolean)): number
    emit(sigName: "event", arg1: string, arg2: GLib.Variant, arg3: number): void
    /**
     * Emitted on the objects on the server side when
     * 		they are signaled on the client side.
     * @param arg1 The timestamp of when it was activated
     */
    connect(sigName: "item-activated", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    connect_after(sigName: "item-activated", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    emit(sigName: "item-activated", arg1: number): void
    /**
     * Emitted everytime a property on a menuitem is either
     * 		updated or added.
     * @param arg1 The name of the property that changed
     * @param arg2 The new value of the property
     */
    connect(sigName: "property-changed", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant) => void)): number
    connect_after(sigName: "property-changed", callback: (($obj: MenuitemProxy, arg1: string, arg2: GLib.Variant) => void)): number
    emit(sigName: "property-changed", arg1: string, arg2: GLib.Variant): void
    /**
     * Emitted when the initial request for properties
     * 		is complete on the item.  If there is a type
     * 		handler configured for the "type" parameter
     * 		that will be executed before this is signaled.
     */
    connect(sigName: "realized", callback: (($obj: MenuitemProxy) => void)): number
    connect_after(sigName: "realized", callback: (($obj: MenuitemProxy) => void)): number
    emit(sigName: "realized"): void
    /**
     * Signaled when the application would like the visualization
     * 		of this menu item shown to the user.  This usually requires
     * 		going over the bus to get it done.
     * @param arg1 Timestamp the event happened at
     */
    connect(sigName: "show-to-user", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    connect_after(sigName: "show-to-user", callback: (($obj: MenuitemProxy, arg1: number) => void)): number
    emit(sigName: "show-to-user", arg1: number): void
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
    connect(sigName: "notify", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::menu-item", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-item", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: MenuitemProxy, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MenuitemProxy_ConstructProps)
    _init (config?: MenuitemProxy_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(mi: Menuitem): MenuitemProxy
    /* Function overloads */
    static new(): MenuitemProxy
    static $gtype: GObject.Type
}
export interface Server_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Dbusmenu-0.4.Dbusmenu.Server */
    dbus_object?: string
    root_node?: Menuitem
}
export class Server {
    /* Properties of Dbusmenu-0.4.Dbusmenu.Server */
    readonly dbus_object: string
    root_node: Menuitem
    readonly version: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Dbusmenu-0.4.Dbusmenu.Server */
    /**
     * Gets the stored and exported icon paths from the server.
     */
    get_icon_paths(): string[]
    /**
     * Gets the current statust hat the server is sending out over
     * 	DBus.
     * 
     * 	Return value: The current status the server is sending
     */
    get_status(): Status
    /**
     * Returns the value of the text direction that is being exported
     * 	over DBus for this server.  It should relate to the direction
     * 	of the labels and other text fields that are being exported by
     * 	this server.
     * 
     * 	Return value: Text direction exported for this server.
     */
    get_text_direction(): TextDirection
    /**
     * Sets the icon paths for the server.  This will replace previously
     * 	set icon theme paths.
     * @param icon_paths 
     */
    set_icon_paths(icon_paths: string[]): void
    /**
     * This function contains all of the #GValue wrapping
     * 	required to set the property #DbusmenuServer:root-node
     * 	on the server `self`.
     * @param root The new root #DbusmenuMenuitem tree
     */
    set_root(root: Menuitem): void
    /**
     * Changes the status of the server.
     * @param status Status value to set on the server
     */
    set_status(status: Status): void
    /**
     * Sets the text direction that should be exported over DBus for
     * 	this server.  If the value is set to #DBUSMENU_TEXT_DIRECTION_NONE
     * 	the default detection will be used for setting the value and
     * 	exported over DBus.
     * @param dir Direction of the text
     */
    set_text_direction(dir: TextDirection): void
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
    /* Signals of Dbusmenu-0.4.Dbusmenu.Server */
    /**
     * This is signaled when a menuitem under this server
     * 		sends its activate signal.
     * @param arg1 The ID of the parent for this update.
     * @param arg2 The timestamp of when the event happened
     */
    connect(sigName: "item-activation-requested", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "item-activation-requested", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    emit(sigName: "item-activation-requested", arg1: number, arg2: number): void
    connect(sigName: "item-property-updated", callback: (($obj: Server, object: number, p0: string, p1: GLib.Variant) => void)): number
    connect_after(sigName: "item-property-updated", callback: (($obj: Server, object: number, p0: string, p1: GLib.Variant) => void)): number
    emit(sigName: "item-property-updated", object: number, p0: string, p1: GLib.Variant): void
    connect(sigName: "item-updated", callback: (($obj: Server, object: number) => void)): number
    connect_after(sigName: "item-updated", callback: (($obj: Server, object: number) => void)): number
    emit(sigName: "item-updated", object: number): void
    /**
     * This signal is emitted any time the layout of the
     * 		menuitems under this server is changed.
     * @param arg1 A revision number representing which revision the update 		       represents itself as.
     * @param arg2 The ID of the parent for this update.
     */
    connect(sigName: "layout-updated", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "layout-updated", callback: (($obj: Server, arg1: number, arg2: number) => void)): number
    emit(sigName: "layout-updated", arg1: number, arg2: number): void
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
    connect(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::dbus-object", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::dbus-object", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root-node", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Server, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Server_ConstructProps)
    _init (config?: Server_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(object: string): Server
    static $gtype: GObject.Type
}
export abstract class ClientClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.ClientClass */
    /**
     * #GObjectClass
     */
    parent_class: GObject.ObjectClass
    layout_updated: () => void
    root_changed: (newroot: Menuitem) => void
    new_menuitem: (newitem: Menuitem) => void
    item_activate: (item: Menuitem, timestamp: number) => void
    event_result: (item: Menuitem, event: string, data: GLib.Variant, timestamp: number, error: GLib.Error) => void
    icon_theme_dirs: (item: Menuitem, theme_dirs: object, error: GLib.Error) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    static name: string
}
export class ClientPrivate {
    static name: string
}
export abstract class MenuitemClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.MenuitemClass */
    /**
     * Functions and signals from our parent
     */
    parent_class: GObject.ObjectClass
    property_changed: (property: string, value: GLib.Variant) => void
    item_activated: (timestamp: number) => void
    child_added: (child: Menuitem, position: number) => void
    child_removed: (child: Menuitem) => void
    child_moved: (child: Menuitem, newpos: number, oldpos: number) => void
    realized: () => void
    handle_event: (mi: Menuitem, name: string, variant: GLib.Variant, timestamp: number) => void
    show_to_user: (mi: Menuitem, timestamp: number, cb_data?: object | null) => void
    about_to_show: () => boolean
    event: (name: string, value: GLib.Variant, timestamp: number) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    static name: string
}
export class MenuitemPrivate {
    static name: string
}
export abstract class MenuitemProxyClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.MenuitemProxyClass */
    /**
     * The Class of #DbusmeneMenuitem
     */
    parent_class: MenuitemClass
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    static name: string
}
export class MenuitemProxyPrivate {
    static name: string
}
export abstract class ServerClass {
    /* Fields of Dbusmenu-0.4.Dbusmenu.ServerClass */
    /**
     * #GObjectClass
     */
    parent_class: GObject.ObjectClass
    id_prop_update: (id: number, property: string, value: string) => void
    id_update: (id: number) => void
    layout_updated: (revision: number) => void
    item_activation: (id: number, timestamp: number) => void
    reserved1: () => void
    reserved2: () => void
    reserved3: () => void
    reserved4: () => void
    reserved5: () => void
    reserved6: () => void
    static name: string
}
export class ServerPrivate {
    static name: string
}