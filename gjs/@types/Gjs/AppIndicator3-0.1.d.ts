/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * AppIndicator3-0.1
 */

import type * as Gjs from './Gjs';
import type * as Gtk from './Gtk-3.0';
import type * as xlib from './xlib-2.0';
import type * as Gdk from './Gdk-3.0';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';
import type * as Atk from './Atk-1.0';

/**
 * The category provides grouping for the indicators so that
 * users can find indicators that are similar together.
 */
export enum IndicatorCategory {
    /**
     * The indicator is used to display the status of the application.
     */
    APPLICATION_STATUS,
    /**
     * The application is used for communication with other people.
     */
    COMMUNICATIONS,
    /**
     * A system indicator relating to something in the user's system.
     */
    SYSTEM_SERVICES,
    /**
     * An indicator relating to the user's hardware.
     */
    HARDWARE,
    /**
     * Something not defined in this enum, please don't use unless you really need it.
     */
    OTHER,
}
/**
 * These are the states that the indicator can be on in
 * the user's panel.  The indicator by default starts
 * in the state `APP_INDICATOR_STATUS_PASSIVE` and can be
 * shown by setting it to `APP_INDICATOR_STATUS_ACTIVE`.
 */
export enum IndicatorStatus {
    /**
     * The indicator should not be shown to the user.
     */
    PASSIVE,
    /**
     * The indicator should be shown in it's default state.
     */
    ACTIVE,
    /**
     * The indicator should show it's attention icon.
     */
    ATTENTION,
}
/**
 * String identifier for the #AppIndicator::connection-changed signal.
 */
export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string
/**
 * String identifier for the #AppIndicator::new-attention-icon signal.
 */
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string
/**
 * String identifier for the #AppIndicator::new-icon signal.
 */
export const INDICATOR_SIGNAL_NEW_ICON: string
/**
 * String identifier for the #AppIndicator::new-icon-theme-path signal.
 */
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string
/**
 * String identifier for the #AppIndicator::new-label signal.
 */
export const INDICATOR_SIGNAL_NEW_LABEL: string
/**
 * String identifier for the #AppIndicator::new-status signal.
 */
export const INDICATOR_SIGNAL_NEW_STATUS: string
/**
 * String identifier for the #AppIndicator::scroll-event signal.
 */
export const INDICATOR_SIGNAL_SCROLL_EVENT: string
export interface Indicator_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of AppIndicator3-0.1.AppIndicator3.Indicator */
    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this textual description of the icon shown.
     */
    attention_icon_desc?: string | null
    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this icon is shown.
     */
    attention_icon_name?: string | null
    /**
     * The type of indicator that this represents.  Please don't use 'Other'.
     * Defaults to 'ApplicationStatus'.
     */
    category?: string | null
    /**
     * The description of the regular icon that is shown for the indicator.
     */
    icon_desc?: string | null
    /**
     * The name of the regular icon that is shown for the indicator.
     */
    icon_name?: string | null
    /**
     * An additional place to look for icon names that may be installed by the
     * application.
     */
    icon_theme_path?: string | null
    /**
     * The ID for this indicator, which should be unique, but used consistently
     * by this program and its indicator.
     */
    id?: string | null
    /**
     * A label that can be shown next to the string in the application
     * indicator.  The label will not be shown unless there is an icon
     * as well.  The label is useful for numerical and other frequently
     * updated information.  In general, it shouldn't be shown unless a
     * user requests it as it can take up a significant amount of space
     * on the user's panel.  This may not be shown in all visualizations.
     */
    label?: string | null
    /**
     * An optional string to provide guidance to the panel on how big
     * the #AppIndicator:label string could get.  If this is set correctly
     * then the panel should never 'jiggle' as the string adjusts through
     * out the range of options.  For instance, if you were providing a
     * percentage like "54% thrust" in #AppIndicator:label you'd want to
     * set this string to "100% thrust" to ensure space when Scotty can
     * get you enough power.
     */
    label_guide?: string | null
    /**
     * The ordering index is an odd parameter, and if you think you don't need
     * it you're probably right.  In general, the application indicator try
     * to place the applications in a recreatable place taking into account
     * which category they're in to try and group them.  But, there are some
     * cases where you'd want to ensure indicators are next to each other.
     * To do that you can override the generated ordering index and replace it
     * with a new one.  Again, you probably don't want to be doing this, but
     * in case you do, this is the way.
     */
    ordering_index?: number | null
    /**
     * Whether the indicator is shown or requests attention. Defaults to
     * 'Passive'.
     */
    status?: string | null
    /**
     * Provides a way to refer to this application indicator in a human
     * readable form.  This is used in the Unity desktop in the HUD as
     * the first part of the menu entries to distinguish them from the
     * focused application's entries.
     */
    title?: string | null
}
/**
 * A application indicator represents the values that are needed to show a
 * unique status in the panel for an application.  In general, applications
 * should try to fit in the other indicators that are available on the
 * panel before using this.  But, sometimes it is necissary.
 * 
 *  Private fields
 */
export class Indicator {
    /* Own properties of AppIndicator3-0.1.AppIndicator3.Indicator */
    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this textual description of the icon shown.
     */
    attention_icon_desc: string
    /**
     * If the indicator sets it's status to %APP_INDICATOR_STATUS_ATTENTION
     * then this icon is shown.
     */
    attention_icon_name: string
    /**
     * The type of indicator that this represents.  Please don't use 'Other'.
     * Defaults to 'ApplicationStatus'.
     */
    readonly category: string
    /**
     * Pretty simple, %TRUE if we have a reasonable expectation of being
     * displayed through this object. You should hide your TrayIcon if so.
     */
    readonly connected: boolean
    /**
     * The description of the regular icon that is shown for the indicator.
     */
    icon_desc: string
    /**
     * The name of the regular icon that is shown for the indicator.
     */
    icon_name: string
    /**
     * An additional place to look for icon names that may be installed by the
     * application.
     */
    icon_theme_path: string
    /**
     * The ID for this indicator, which should be unique, but used consistently
     * by this program and its indicator.
     */
    readonly id: string
    /**
     * A label that can be shown next to the string in the application
     * indicator.  The label will not be shown unless there is an icon
     * as well.  The label is useful for numerical and other frequently
     * updated information.  In general, it shouldn't be shown unless a
     * user requests it as it can take up a significant amount of space
     * on the user's panel.  This may not be shown in all visualizations.
     */
    label: string
    /**
     * An optional string to provide guidance to the panel on how big
     * the #AppIndicator:label string could get.  If this is set correctly
     * then the panel should never 'jiggle' as the string adjusts through
     * out the range of options.  For instance, if you were providing a
     * percentage like "54% thrust" in #AppIndicator:label you'd want to
     * set this string to "100% thrust" to ensure space when Scotty can
     * get you enough power.
     */
    label_guide: string
    /**
     * The ordering index is an odd parameter, and if you think you don't need
     * it you're probably right.  In general, the application indicator try
     * to place the applications in a recreatable place taking into account
     * which category they're in to try and group them.  But, there are some
     * cases where you'd want to ensure indicators are next to each other.
     * To do that you can override the generated ordering index and replace it
     * with a new one.  Again, you probably don't want to be doing this, but
     * in case you do, this is the way.
     */
    ordering_index: number
    /**
     * Whether the indicator is shown or requests attention. Defaults to
     * 'Passive'.
     */
    status: string
    /**
     * Provides a way to refer to this application indicator in a human
     * readable form.  This is used in the Unity desktop in the HUD as
     * the first part of the menu entries to distinguish them from the
     * focused application's entries.
     */
    title: string
    /* Own fields of AppIndicator3-0.1.AppIndicator3.Indicator */
    /**
     * Parent object.
     */
    parent: GObject.Object
    /**
     * Internal data.
     */
    priv: IndicatorPrivate
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of AppIndicator3-0.1.AppIndicator3.Indicator */
    /**
     * This function allows for building the Application Indicator menu
     * from a static desktop file.
     * @param desktop_file A path to the desktop file to build the menu from
     * @param desktop_profile Which entries should be used from the desktop file
     */
    build_menu_from_desktop(desktop_file: string, desktop_profile: string): void
    /**
     * Wrapper function for property #AppIndicator:attention-icon-name.
     */
    get_attention_icon(): string
    /**
     * Wrapper function for property #AppIndicator:attention-icon-desc.
     */
    get_attention_icon_desc(): string
    /**
     * Wrapper function for property #AppIndicator:category.
     */
    get_category(): IndicatorCategory
    /**
     * Wrapper function for property #AppIndicator:icon-name.
     */
    get_icon(): string
    /**
     * Wrapper function for property #AppIndicator:icon-desc.
     */
    get_icon_desc(): string
    /**
     * Wrapper function for property #AppIndicator:icon-theme-path.
     */
    get_icon_theme_path(): string
    /**
     * Wrapper function for property #AppIndicator:id.
     */
    get_id(): string
    /**
     * Wrapper function for property #AppIndicator:label.
     */
    get_label(): string
    /**
     * Wrapper function for property #AppIndicator:label-guide.
     */
    get_label_guide(): string
    /**
     * Gets the menu being used for this application indicator.
     * Wrapper function for property #AppIndicator:menu.
     */
    get_menu(): Gtk.Menu
    /**
     * Wrapper function for property #AppIndicator:ordering-index.
     */
    get_ordering_index(): number
    /**
     * Gets the menuitem being called on secondary-activate event.
     */
    get_secondary_activate_target(): Gtk.Widget
    /**
     * Wrapper function for property #AppIndicator:status.
     */
    get_status(): IndicatorStatus
    /**
     * Gets the title of the application indicator.  See the function
     * app_indicator_set_title() for information on the title.
     */
    get_title(): string
    /**
     * Wrapper for app_indicator_set_attention_icon_full() with a NULL
     * description.
     * @param icon_name The name of the attention icon to set for this indicator
     */
    set_attention_icon(icon_name: string): void
    /**
     * Wrapper function for property #AppIndicator:attention-icon-name.
     * @param icon_name The name of the attention icon to set for this indicator
     * @param icon_desc A textual description of the icon
     */
    set_attention_icon_full(icon_name: string, icon_desc: string): void
    /**
     * Wrapper function for app_indicator_set_icon_full() with a NULL
     * description.
     * @param icon_name The icon name to set.
     */
    set_icon(icon_name: string): void
    /**
     * Sets the default icon to use when the status is active but
     * not set to attention.  In most cases, this should be the
     * application icon for the program.
     * 
     * Wrapper function for property #AppIndicator:icon-name and
     * #AppIndicator::icon-desc.
     * @param icon_name The icon name to set.
     * @param icon_desc A textual description of the icon for accessibility
     */
    set_icon_full(icon_name: string, icon_desc: string): void
    /**
     * Sets the path to use when searching for icons.
     * @param icon_theme_path The icon theme path to set.
     */
    set_icon_theme_path(icon_theme_path: string): void
    /**
     * This is a wrapper function for the #AppIndicator:label and
     * #AppIndicator:guide properties.  This function can take #NULL
     * as either `label` or `guide` and will clear the entries.
     * @param label The label to show next to the icon.
     * @param guide A guide to size the label correctly.
     */
    set_label(label: string, guide: string): void
    /**
     * Sets the menu that should be shown when the Application Indicator
     * is clicked on in the panel.  An application indicator will not
     * be rendered unless it has a menu.
     * 
     * Wrapper function for property #AppIndicator:menu.
     * @param menu A #GtkMenu to set
     */
    set_menu(menu: Gtk.Menu | null): void
    /**
     * Sets the ordering index for the app indicator which effects the
     * placement of it on the panel.  For almost all app indicator
     * this is not the function you're looking for.
     * 
     * Wrapper function for property #AppIndicator:ordering-index.
     * @param ordering_index A value for the ordering of this app indicator
     */
    set_ordering_index(ordering_index: number): void
    /**
     * Set the `menuitem` to be activated when a secondary activation event (i.e. a
     * middle-click) is emitted over the #AppIndicator icon/label.
     * 
     * The `menuitem` can be also a complex #GtkWidget, but to get activated when
     * a secondary activation occurs in the #Appindicator, it must be a visible and
     * active child (or inner-child) of the #AppIndicator:menu.
     * 
     * Setting `menuitem` to %NULL causes to disable this feature.
     * @param menuitem A #GtkWidget to be activated on secondary activation
     */
    set_secondary_activate_target(menuitem: Gtk.Widget | null): void
    /**
     * Wrapper function for property #AppIndicator:status.
     * @param status The status to set for this indicator
     */
    set_status(status: IndicatorStatus): void
    /**
     * Sets the title of the application indicator, or how it should be referred
     * in a human readable form.  This string should be UTF-8 and localized as it
     * expected that users will set it.
     * 
     * In the Unity desktop the most prominent place that this is show will be
     * in the HUD.  HUD listings for this application indicator will start with
     * the title as the first part of the line for the menu items.
     * 
     * Setting `title` to %NULL removes the title.
     * @param title Title of the app indicator
     */
    set_title(title: string | null): void
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
    /* Own virtual methods of AppIndicator3-0.1.AppIndicator3.Indicator */
    vfunc_connection_changed(connected: boolean): void
    vfunc_new_attention_icon(): void
    vfunc_new_icon(): void
    vfunc_new_icon_theme_path(icon_theme_path: string): void
    vfunc_new_label(label: string, guide: string): void
    vfunc_new_status(status: string): void
    vfunc_scroll_event(delta: number, direction: Gdk.ScrollDirection): void
    vfunc_unfallback(status_icon: Gtk.StatusIcon): void
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
    /* Own signals of AppIndicator3-0.1.AppIndicator3.Indicator */
    /**
     * Signaled when we connect to a watcher, or when it drops away.
     * @signal 
     * @param arg1 Whether we're connected or not
     */
    connect(sigName: "connection-changed", callback: (($obj: Indicator, arg1: boolean) => void)): number
    connect_after(sigName: "connection-changed", callback: (($obj: Indicator, arg1: boolean) => void)): number
    emit(sigName: "connection-changed", arg1: boolean): void
    /**
     * Emitted when #AppIndicator:attention-icon-name is changed
     * @signal 
     */
    connect(sigName: "new-attention-icon", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "new-attention-icon", callback: (($obj: Indicator) => void)): number
    emit(sigName: "new-attention-icon"): void
    /**
     * when #AppIndicator:icon-name is changed
     * @signal 
     */
    connect(sigName: "new-icon", callback: (($obj: Indicator) => void)): number
    connect_after(sigName: "new-icon", callback: (($obj: Indicator) => void)): number
    emit(sigName: "new-icon"): void
    /**
     * Signaled when there is a new icon set for the
     * object.
     * @signal 
     * @param object 
     */
    connect(sigName: "new-icon-theme-path", callback: (($obj: Indicator, object: string) => void)): number
    connect_after(sigName: "new-icon-theme-path", callback: (($obj: Indicator, object: string) => void)): number
    emit(sigName: "new-icon-theme-path", object: string): void
    /**
     * Emitted when either #AppIndicator:label or #AppIndicator:label-guide are
     * changed.
     * @signal 
     * @param object 
     * @param p0 
     */
    connect(sigName: "new-label", callback: (($obj: Indicator, object: string, p0: string) => void)): number
    connect_after(sigName: "new-label", callback: (($obj: Indicator, object: string, p0: string) => void)): number
    emit(sigName: "new-label", object: string, p0: string): void
    /**
     * Emitted when #AppIndicator:status is changed
     * @signal 
     * @param arg1 The string value of the #AppIndicatorStatus enum.
     */
    connect(sigName: "new-status", callback: (($obj: Indicator, arg1: string) => void)): number
    connect_after(sigName: "new-status", callback: (($obj: Indicator, arg1: string) => void)): number
    emit(sigName: "new-status", arg1: string): void
    /**
     * Signaled when the #AppIndicator receives a scroll event.
     * @signal 
     * @param arg1 How many steps the scroll wheel has taken
     * @param arg2 Which direction the wheel went in
     */
    connect(sigName: "scroll-event", callback: (($obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void)): number
    connect_after(sigName: "scroll-event", callback: (($obj: Indicator, arg1: number, arg2: Gdk.ScrollDirection) => void)): number
    emit(sigName: "scroll-event", arg1: number, arg2: Gdk.ScrollDirection): void
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
    connect(sigName: "notify", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attention-icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::category", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::category", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connected", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-desc", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-theme-path", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label-guide", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ordering-index", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Indicator, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Indicator_ConstructProps)
    _init (config?: Indicator_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(id: string, icon_name: string, category: IndicatorCategory): Indicator
    static new_with_path(id: string, icon_name: string, category: IndicatorCategory, icon_theme_path: string): Indicator
    static $gtype: GObject.GType<Indicator>
}
/**
 * The signals and external functions that make up the #AppIndicator
 * class object.
 */
export abstract class IndicatorClass {
    /* Own fields of AppIndicator3-0.1.AppIndicator3.IndicatorClass */
    /**
     * Mia familia
     */
    parent_class: GObject.ObjectClass
    new_icon: (indicator: Indicator) => void
    new_attention_icon: (indicator: Indicator) => void
    new_status: (indicator: Indicator, status: string) => void
    new_icon_theme_path: (indicator: Indicator, icon_theme_path: string) => void
    new_label: (indicator: Indicator, label: string, guide: string) => void
    connection_changed: (indicator: Indicator, connected: boolean) => void
    scroll_event: (indicator: Indicator, delta: number, direction: Gdk.ScrollDirection) => void
    app_indicator_reserved_ats: () => void
    unfallback: (indicator: Indicator, status_icon: Gtk.StatusIcon) => void
    app_indicator_reserved_1: () => void
    app_indicator_reserved_2: () => void
    app_indicator_reserved_3: () => void
    app_indicator_reserved_4: () => void
    app_indicator_reserved_5: () => void
    app_indicator_reserved_6: () => void
    static name: string
}
/**
 * All of the private data in an instance of an application indicator.
 * Private Fields
 */
export class IndicatorPrivate {
    static name: string
}