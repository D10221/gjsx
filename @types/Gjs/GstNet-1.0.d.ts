/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstNet-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';
import type * as Gio from './Gio-2.0';

/**
 * The size of the packets sent between network clocks.
 */
export const NET_TIME_PACKET_SIZE: number
/**
 * PTP clock identification that can be passed to gst_ptp_init() to
 * automatically select one based on the MAC address of interfaces
 */
export const PTP_CLOCK_ID_NONE: number
export const PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED: string
export const PTP_STATISTICS_NEW_DOMAIN_FOUND: string
export const PTP_STATISTICS_PATH_DELAY_MEASURED: string
export const PTP_STATISTICS_TIME_UPDATED: string
export function buffer_add_net_address_meta(buffer: Gst.Buffer, addr: Gio.SocketAddress): NetAddressMeta
export function buffer_add_net_control_message_meta(buffer: Gst.Buffer, message: Gio.SocketControlMessage): NetControlMessageMeta
export function buffer_get_net_address_meta(buffer: Gst.Buffer): NetAddressMeta
export function net_address_meta_api_get_type(): GObject.GType
export function net_address_meta_get_info(): Gst.MetaInfo
export function net_control_message_meta_api_get_type(): GObject.GType
export function net_control_message_meta_get_info(): Gst.MetaInfo
export function net_time_packet_receive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* src_address */ Gio.SocketAddress ]
export function ptp_deinit(): void
export function ptp_init(clock_id: number, interfaces: string[] | null): boolean
export function ptp_is_initialized(): boolean
export function ptp_is_supported(): boolean
export function ptp_statistics_callback_add(callback: PtpStatisticsCallback): number
export function ptp_statistics_callback_remove(id: number): void
/**
 * The statistics can be the following structures:
 * 
 * GST_PTP_STATISTICS_NEW_DOMAIN_FOUND:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "clock"                 GST_TYPE_CLOCK       The internal clock that is slaved to the
 *                                              PTP domain
 * 
 * GST_PTP_STATISTICS_BEST_MASTER_CLOCK_SELECTED:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "master-clock-id"       G_TYPE_UINT64        PTP clock identifier of the selected master
 *                                              clock
 * "master-clock-port"     G_TYPE_UINT          PTP port number of the selected master clock
 * "grandmaster-clock-id"  G_TYPE_UINT64        PTP clock identifier of the grandmaster clock
 * 
 * GST_PTP_STATISTICS_PATH_DELAY_MEASURED:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "mean-path-delay-avg"   GST_TYPE_CLOCK_TIME  Average mean path delay
 * "mean-path-delay"       GST_TYPE_CLOCK_TIME  Latest mean path delay
 * "delay-request-delay"   GST_TYPE_CLOCK_TIME  Delay of DELAY_REQ / DELAY_RESP messages
 * 
 * GST_PTP_STATISTICS_TIME_UPDATED:
 * "domain"                G_TYPE_UINT          The domain identifier of the domain
 * "mean-path-delay-avg"   GST_TYPE_CLOCK_TIME  Average mean path delay
 * "local-time"            GST_TYPE_CLOCK_TIME  Local time that corresponds to ptp-time
 * "ptp-time"              GST_TYPE_CLOCK_TIME  Newly measured PTP time at local-time
 * "estimated-ptp-time"    GST_TYPE_CLOCK_TIME  Estimated PTP time based on previous measurements
 * "discontinuity"         G_TYPE_INT64         Difference between estimated and measured PTP time
 * "synced"                G_TYPE_BOOLEAN       Currently synced to the remote clock
 * "r-squared"             G_TYPE_DOUBLE        R² of clock estimation regression
 * "internal-time"         GST_TYPE_CLOCK_TIME  Internal time clock parameter
 * "external-time"         GST_TYPE_CLOCK_TIME  External time clock parameter
 * "rate-num"              G_TYPE_UINT64        Internal/external rate numerator
 * "rate-den"              G_TYPE_UINT64        Internal/external rate denominator
 * "rate"                  G_TYPE_DOUBLE        Internal/external rate
 * 
 * If %FALSE is returned, the callback is removed and never called again.
 * @callback 
 */
export interface PtpStatisticsCallback {
    (domain: number, stats: Gst.Structure): boolean
}
export interface NetClientClock_ConstructProps extends Gst.SystemClock_ConstructProps {
    /* Constructor properties of GstNet-1.0.GstNet.NetClientClock */
    address?: string | null
    base_time?: number | null
    bus?: Gst.Bus | null
    minimum_update_interval?: number | null
    port?: number | null
    qos_dscp?: number | null
    round_trip_limit?: number | null
}
/**
 * #GstNetClientClock implements a custom #GstClock that synchronizes its time
 * to a remote time provider such as #GstNetTimeProvider. #GstNtpClock
 * implements a #GstClock that synchronizes its time to a remote NTPv4 server.
 * 
 * A new clock is created with gst_net_client_clock_new() or
 * gst_ntp_clock_new(), which takes the address and port of the remote time
 * provider along with a name and an initial time.
 * 
 * This clock will poll the time provider and will update its calibration
 * parameters based on the local and remote observations.
 * 
 * The "round-trip" property limits the maximum round trip packets can take.
 * 
 * Various parameters of the clock can be configured with the parent #GstClock
 * "timeout", "window-size" and "window-threshold" object properties.
 * 
 * A #GstNetClientClock and #GstNtpClock is typically set on a #GstPipeline with
 * gst_pipeline_use_clock().
 * 
 * If you set a #GstBus on the clock via the "bus" object property, it will
 * send `GST_MESSAGE_ELEMENT` messages with an attached #GstStructure containing
 * statistics about clock accuracy and network traffic.
 */
export class NetClientClock {
    /* Own properties of GstNet-1.0.GstNet.NetClientClock */
    address: string
    readonly base_time: number
    bus: Gst.Bus
    readonly internal_clock: Gst.Clock
    minimum_update_interval: number
    port: number
    qos_dscp: number
    round_trip_limit: number
    /* Extended properties of Gst-1.0.Gst.SystemClock */
    clock_type: Gst.ClockType
    /* Extended properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Own fields of GstNet-1.0.GstNet.NetClientClock */
    clock: Gst.SystemClock
    /* Extended fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Extended fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Extended fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gst-1.0.Gst.Clock */
    /**
     * The time `master` of the master clock and the time `slave` of the slave
     * clock are added to the list of observations. If enough observations
     * are available, a linear regression algorithm is run on the
     * observations and `clock` is recalibrated.
     * 
     * If this functions returns %TRUE, `r_squared` will contain the
     * correlation coefficient of the interpolation. A value of 1.0
     * means a perfect regression was performed. This value can
     * be used to control the sampling frequency of the master and slave
     * clocks.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    /**
     * Add a clock observation to the internal slaving algorithm the same as
     * gst_clock_add_observation(), and return the result of the master clock
     * estimation, without updating the internal calibration.
     * 
     * The caller can then take the results and call gst_clock_set_calibration()
     * with the values, or some modified version of them.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime, /* external */ Gst.ClockTime, /* rate_num */ Gst.ClockTime, /* rate_denom */ Gst.ClockTime ]
    /**
     * Converts the given `internal` clock time to the external time, adjusting for the
     * rate and reference time set with gst_clock_set_calibration() and making sure
     * that the returned time is increasing. This function should be called with the
     * clock's OBJECT_LOCK held and is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_unadjust_unlocked().
     * @param internal a clock time
     */
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    /**
     * Converts the given `internal_target` clock time to the external time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_adjust_unlocked() when called using the
     * current calibration parameters, but doesn't ensure a monotonically
     * increasing result as gst_clock_adjust_unlocked() does.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param internal_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    /**
     * Gets the internal rate and reference time of `clock`. See
     * gst_clock_set_calibration() for more information.
     * 
     * `internal,` `external,` `rate_num,` and `rate_denom` can be left %NULL if the
     * caller is not interested in the values.
     * 
     * MT safe.
     */
    get_calibration(): [ /* internal */ Gst.ClockTime, /* external */ Gst.ClockTime, /* rate_num */ Gst.ClockTime, /* rate_denom */ Gst.ClockTime ]
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     */
    get_internal_time(): Gst.ClockTime
    /**
     * Get the master clock that `clock` is slaved to or %NULL when the clock is
     * not slaved to any master clock.
     */
    get_master(): Gst.Clock | null
    /**
     * Get the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     */
    get_resolution(): Gst.ClockTime
    /**
     * Gets the current time of the given clock. The time is always
     * monotonically increasing and adjusted according to the current
     * offset and rate.
     */
    get_time(): Gst.ClockTime
    /**
     * Get the amount of time that master and slave clocks are sampled.
     */
    get_timeout(): Gst.ClockTime
    /**
     * Checks if the clock is currently synced.
     * 
     * This returns if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC is not set on the clock.
     */
    is_synced(): boolean
    /**
     * Get an ID from `clock` to trigger a periodic notification.
     * The periodic notifications will start at time `start_time` and
     * will then be fired with the given `interval`. `id` should be unreffed
     * after usage.
     * 
     * Free-function: gst_clock_id_unref
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    /**
     * Get a #GstClockID from `clock` to trigger a single shot
     * notification at the requested time. The single shot id should be
     * unreffed after usage.
     * 
     * Free-function: gst_clock_id_unref
     * @param time the requested time
     */
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    /**
     * Reinitializes the provided periodic `id` to the provided start time and
     * interval. Does not modify the reference count.
     * @param id a #GstClockID
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    /**
     * Adjusts the rate and time of `clock`. A rate of 1/1 is the normal speed of
     * the clock. Values bigger than 1/1 make the clock go faster.
     * 
     * `internal` and `external` are calibration parameters that arrange that
     * gst_clock_get_time() should have been `external` at internal time `internal`.
     * This internal time should not be in the future; that is, it should be less
     * than the value of gst_clock_get_internal_time() when this function is called.
     * 
     * Subsequent calls to gst_clock_get_time() will return clock times computed as
     * follows:
     * 
     * |[
     *   time = (internal_time - internal) * rate_num / rate_denom + external
     * ```
     * 
     * 
     * This formula is implemented in gst_clock_adjust_unlocked(). Of course, it
     * tries to do the integer arithmetic as precisely as possible.
     * 
     * Note that gst_clock_get_time() always returns increasing values so when you
     * move the clock backwards, gst_clock_get_time() will report the previous value
     * until the clock catches up.
     * 
     * MT safe.
     * @param internal a reference internal time
     * @param external a reference external time
     * @param rate_num the numerator of the rate of the clock relative to its            internal time
     * @param rate_denom the denominator of the rate of the clock
     */
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    /**
     * Set `master` as the master clock for `clock`. `clock` will be automatically
     * calibrated so that gst_clock_get_time() reports the same time as the
     * master clock.
     * 
     * A clock provider that slaves its clock to a master can get the current
     * calibration values with gst_clock_get_calibration().
     * 
     * `master` can be %NULL in which case `clock` will not be slaved anymore. It will
     * however keep reporting its time adjusted with the last configured rate
     * and time offsets.
     * @param master a master #GstClock
     */
    set_master(master: Gst.Clock | null): boolean
    /**
     * Set the accuracy of the clock. Some clocks have the possibility to operate
     * with different accuracy at the expense of more resource usage. There is
     * normally no need to change the default resolution of a clock. The resolution
     * of a clock can only be changed if the clock has the
     * #GST_CLOCK_FLAG_CAN_SET_RESOLUTION flag set.
     * @param resolution The resolution to set
     */
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    /**
     * Sets `clock` to synced and emits the GstClock::synced signal, and wakes up any
     * thread waiting in gst_clock_wait_for_sync().
     * 
     * This function must only be called if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is set on the clock, and is intended to be called by subclasses only.
     * @param synced if the clock is synced
     */
    set_synced(synced: boolean): void
    /**
     * Set the amount of time, in nanoseconds, to sample master and slave
     * clocks
     * @param timeout a timeout
     */
    set_timeout(timeout: Gst.ClockTime): void
    /**
     * Reinitializes the provided single shot `id` to the provided time. Does not
     * modify the reference count.
     * @param id a #GstClockID
     * @param time The requested time.
     */
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    /**
     * Converts the given `external` clock time to the internal time of `clock,`
     * using the rate and reference time set with gst_clock_set_calibration().
     * This function should be called with the clock's OBJECT_LOCK held and
     * is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_adjust_unlocked().
     * @param external an external clock time
     */
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    /**
     * Converts the given `external_target` clock time to the internal time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_unadjust_unlocked() when called using the
     * current calibration parameters.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param external_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    /**
     * Waits until `clock` is synced for reporting the current time. If `timeout`
     * is %GST_CLOCK_TIME_NONE it will wait forever, otherwise it will time out
     * after `timeout` nanoseconds.
     * 
     * For asynchronous waiting, the GstClock::synced signal can be used.
     * 
     * This returns immediately with TRUE if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is not set on the clock, or if the clock is already synced.
     * @param timeout timeout for waiting or %GST_CLOCK_TIME_NONE
     */
    wait_for_sync(timeout: Gst.ClockTime): boolean
    /* Extended methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Extended virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     * @virtual 
     */
    vfunc_get_internal_time(): Gst.ClockTime
    /**
     * Get the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     * @virtual 
     */
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry, jitter: Gst.ClockTimeDiff): Gst.ClockReturn
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
    /* Extended virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
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
    /* Extended signals of Gst-1.0.Gst.Clock */
    /**
     * Signaled on clocks with GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC set once
     * the clock is synchronized, or when it completely lost synchronization.
     * This signal will not be emitted on clocks without the flag.
     * 
     * This signal will be emitted from an arbitrary thread, most likely not
     * the application's main thread.
     * @signal 
     * @param synced if the clock is synced now
     */
    connect(sigName: "synced", callback: (($obj: NetClientClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: NetClientClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Extended signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @signal 
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: NetClientClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NetClientClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::base-time", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-time", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NetClientClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetClientClock_ConstructProps)
    _init (config?: NetClientClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NetClientClock
    static $gtype: GObject.GType<NetClientClock>
}
export interface NetTimeProvider_ConstructProps extends Gst.Object_ConstructProps {
    /* Constructor properties of GstNet-1.0.GstNet.NetTimeProvider */
    active?: boolean | null
    address?: string | null
    clock?: Gst.Clock | null
    port?: number | null
    qos_dscp?: number | null
}
/**
 * This object exposes the time of a #GstClock on the network.
 * 
 * A #GstNetTimeProvider is created with gst_net_time_provider_new() which
 * takes a #GstClock, an address and a port number as arguments.
 * 
 * After creating the object, a client clock such as #GstNetClientClock can
 * query the exposed clock over the network for its values.
 * 
 * The #GstNetTimeProvider typically wraps the clock used by a #GstPipeline.
 */
export class NetTimeProvider {
    /* Own properties of GstNet-1.0.GstNet.NetTimeProvider */
    active: boolean
    readonly address: string
    readonly clock: Gst.Clock
    readonly port: number
    qos_dscp: number
    /* Own fields of GstNet-1.0.GstNet.NetTimeProvider */
    parent: Gst.Object
    /* Extended fields of Gst-1.0.Gst.Object */
    object: GObject.InitiallyUnowned
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * flags for this object
     */
    flags: number
    /* Extended fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Implemented methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    init(cancellable: Gio.Cancellable | null): boolean
    /* Own virtual methods of GstNet-1.0.GstNet.NetTimeProvider */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     * @virtual 
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    vfunc_init(cancellable: Gio.Cancellable | null): boolean
    /* Extended virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
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
    /* Extended signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @signal 
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: NetTimeProvider, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NetTimeProvider, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::address", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NetTimeProvider, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NetTimeProvider_ConstructProps)
    _init (config?: NetTimeProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(clock: Gst.Clock, address: string | null, port: number): NetTimeProvider
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     * @param object_type a #GType supporting #GInitable.
     * @param parameters the parameters to use to construct the object
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     */
    static newv(object_type: GObject.GType, parameters: GObject.Parameter[], cancellable: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.GType<NetTimeProvider>
}
export interface NtpClock_ConstructProps extends NetClientClock_ConstructProps {
}
export class NtpClock {
    /* Extended properties of GstNet-1.0.GstNet.NetClientClock */
    address: string
    readonly base_time: number
    bus: Gst.Bus
    readonly internal_clock: Gst.Clock
    minimum_update_interval: number
    port: number
    qos_dscp: number
    round_trip_limit: number
    /* Extended properties of Gst-1.0.Gst.SystemClock */
    clock_type: Gst.ClockType
    /* Extended properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Own fields of GstNet-1.0.GstNet.NtpClock */
    clock: Gst.SystemClock
    /* Extended fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Extended fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Extended fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gst-1.0.Gst.Clock */
    /**
     * The time `master` of the master clock and the time `slave` of the slave
     * clock are added to the list of observations. If enough observations
     * are available, a linear regression algorithm is run on the
     * observations and `clock` is recalibrated.
     * 
     * If this functions returns %TRUE, `r_squared` will contain the
     * correlation coefficient of the interpolation. A value of 1.0
     * means a perfect regression was performed. This value can
     * be used to control the sampling frequency of the master and slave
     * clocks.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    /**
     * Add a clock observation to the internal slaving algorithm the same as
     * gst_clock_add_observation(), and return the result of the master clock
     * estimation, without updating the internal calibration.
     * 
     * The caller can then take the results and call gst_clock_set_calibration()
     * with the values, or some modified version of them.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime, /* external */ Gst.ClockTime, /* rate_num */ Gst.ClockTime, /* rate_denom */ Gst.ClockTime ]
    /**
     * Converts the given `internal` clock time to the external time, adjusting for the
     * rate and reference time set with gst_clock_set_calibration() and making sure
     * that the returned time is increasing. This function should be called with the
     * clock's OBJECT_LOCK held and is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_unadjust_unlocked().
     * @param internal a clock time
     */
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    /**
     * Converts the given `internal_target` clock time to the external time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_adjust_unlocked() when called using the
     * current calibration parameters, but doesn't ensure a monotonically
     * increasing result as gst_clock_adjust_unlocked() does.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param internal_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    /**
     * Gets the internal rate and reference time of `clock`. See
     * gst_clock_set_calibration() for more information.
     * 
     * `internal,` `external,` `rate_num,` and `rate_denom` can be left %NULL if the
     * caller is not interested in the values.
     * 
     * MT safe.
     */
    get_calibration(): [ /* internal */ Gst.ClockTime, /* external */ Gst.ClockTime, /* rate_num */ Gst.ClockTime, /* rate_denom */ Gst.ClockTime ]
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     */
    get_internal_time(): Gst.ClockTime
    /**
     * Get the master clock that `clock` is slaved to or %NULL when the clock is
     * not slaved to any master clock.
     */
    get_master(): Gst.Clock | null
    /**
     * Get the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     */
    get_resolution(): Gst.ClockTime
    /**
     * Gets the current time of the given clock. The time is always
     * monotonically increasing and adjusted according to the current
     * offset and rate.
     */
    get_time(): Gst.ClockTime
    /**
     * Get the amount of time that master and slave clocks are sampled.
     */
    get_timeout(): Gst.ClockTime
    /**
     * Checks if the clock is currently synced.
     * 
     * This returns if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC is not set on the clock.
     */
    is_synced(): boolean
    /**
     * Get an ID from `clock` to trigger a periodic notification.
     * The periodic notifications will start at time `start_time` and
     * will then be fired with the given `interval`. `id` should be unreffed
     * after usage.
     * 
     * Free-function: gst_clock_id_unref
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    /**
     * Get a #GstClockID from `clock` to trigger a single shot
     * notification at the requested time. The single shot id should be
     * unreffed after usage.
     * 
     * Free-function: gst_clock_id_unref
     * @param time the requested time
     */
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    /**
     * Reinitializes the provided periodic `id` to the provided start time and
     * interval. Does not modify the reference count.
     * @param id a #GstClockID
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    /**
     * Adjusts the rate and time of `clock`. A rate of 1/1 is the normal speed of
     * the clock. Values bigger than 1/1 make the clock go faster.
     * 
     * `internal` and `external` are calibration parameters that arrange that
     * gst_clock_get_time() should have been `external` at internal time `internal`.
     * This internal time should not be in the future; that is, it should be less
     * than the value of gst_clock_get_internal_time() when this function is called.
     * 
     * Subsequent calls to gst_clock_get_time() will return clock times computed as
     * follows:
     * 
     * |[
     *   time = (internal_time - internal) * rate_num / rate_denom + external
     * ```
     * 
     * 
     * This formula is implemented in gst_clock_adjust_unlocked(). Of course, it
     * tries to do the integer arithmetic as precisely as possible.
     * 
     * Note that gst_clock_get_time() always returns increasing values so when you
     * move the clock backwards, gst_clock_get_time() will report the previous value
     * until the clock catches up.
     * 
     * MT safe.
     * @param internal a reference internal time
     * @param external a reference external time
     * @param rate_num the numerator of the rate of the clock relative to its            internal time
     * @param rate_denom the denominator of the rate of the clock
     */
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    /**
     * Set `master` as the master clock for `clock`. `clock` will be automatically
     * calibrated so that gst_clock_get_time() reports the same time as the
     * master clock.
     * 
     * A clock provider that slaves its clock to a master can get the current
     * calibration values with gst_clock_get_calibration().
     * 
     * `master` can be %NULL in which case `clock` will not be slaved anymore. It will
     * however keep reporting its time adjusted with the last configured rate
     * and time offsets.
     * @param master a master #GstClock
     */
    set_master(master: Gst.Clock | null): boolean
    /**
     * Set the accuracy of the clock. Some clocks have the possibility to operate
     * with different accuracy at the expense of more resource usage. There is
     * normally no need to change the default resolution of a clock. The resolution
     * of a clock can only be changed if the clock has the
     * #GST_CLOCK_FLAG_CAN_SET_RESOLUTION flag set.
     * @param resolution The resolution to set
     */
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    /**
     * Sets `clock` to synced and emits the GstClock::synced signal, and wakes up any
     * thread waiting in gst_clock_wait_for_sync().
     * 
     * This function must only be called if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is set on the clock, and is intended to be called by subclasses only.
     * @param synced if the clock is synced
     */
    set_synced(synced: boolean): void
    /**
     * Set the amount of time, in nanoseconds, to sample master and slave
     * clocks
     * @param timeout a timeout
     */
    set_timeout(timeout: Gst.ClockTime): void
    /**
     * Reinitializes the provided single shot `id` to the provided time. Does not
     * modify the reference count.
     * @param id a #GstClockID
     * @param time The requested time.
     */
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    /**
     * Converts the given `external` clock time to the internal time of `clock,`
     * using the rate and reference time set with gst_clock_set_calibration().
     * This function should be called with the clock's OBJECT_LOCK held and
     * is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_adjust_unlocked().
     * @param external an external clock time
     */
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    /**
     * Converts the given `external_target` clock time to the internal time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_unadjust_unlocked() when called using the
     * current calibration parameters.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param external_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    /**
     * Waits until `clock` is synced for reporting the current time. If `timeout`
     * is %GST_CLOCK_TIME_NONE it will wait forever, otherwise it will time out
     * after `timeout` nanoseconds.
     * 
     * For asynchronous waiting, the GstClock::synced signal can be used.
     * 
     * This returns immediately with TRUE if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is not set on the clock, or if the clock is already synced.
     * @param timeout timeout for waiting or %GST_CLOCK_TIME_NONE
     */
    wait_for_sync(timeout: Gst.ClockTime): boolean
    /* Extended methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Extended virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     * @virtual 
     */
    vfunc_get_internal_time(): Gst.ClockTime
    /**
     * Get the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     * @virtual 
     */
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry, jitter: Gst.ClockTimeDiff): Gst.ClockReturn
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
    /* Extended virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
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
    /* Extended signals of Gst-1.0.Gst.Clock */
    /**
     * Signaled on clocks with GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC set once
     * the clock is synchronized, or when it completely lost synchronization.
     * This signal will not be emitted on clocks without the flag.
     * 
     * This signal will be emitted from an arbitrary thread, most likely not
     * the application's main thread.
     * @signal 
     * @param synced if the clock is synced now
     */
    connect(sigName: "synced", callback: (($obj: NtpClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: NtpClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Extended signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @signal 
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: NtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: NtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::address", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::base-time", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base-time", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::bus", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-update-interval", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::port", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::qos-dscp", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::round-trip-limit", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: NtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NtpClock_ConstructProps)
    _init (config?: NtpClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NtpClock
    /* Function overloads */
    static new(name: string, remote_address: string, remote_port: number, base_time: Gst.ClockTime): NtpClock
    static $gtype: GObject.GType<NtpClock>
}
export interface PtpClock_ConstructProps extends Gst.SystemClock_ConstructProps {
    /* Constructor properties of GstNet-1.0.GstNet.PtpClock */
    domain?: number | null
}
/**
 * GstPtpClock implements a PTP (IEEE1588:2008) ordinary clock in slave-only
 * mode, that allows a GStreamer pipeline to synchronize to a PTP network
 * clock in some specific domain.
 * 
 * The PTP subsystem can be initialized with gst_ptp_init(), which then starts
 * a helper process to do the actual communication via the PTP ports. This is
 * required as PTP listens on ports < 1024 and thus requires special
 * privileges. Once this helper process is started, the main process will
 * synchronize to all PTP domains that are detected on the selected
 * interfaces.
 * 
 * gst_ptp_clock_new() then allows to create a GstClock that provides the PTP
 * time from a master clock inside a specific PTP domain. This clock will only
 * return valid timestamps once the timestamps in the PTP domain are known. To
 * check this, you can use gst_clock_wait_for_sync(), the GstClock::synced
 * signal and gst_clock_is_synced().
 * 
 * To gather statistics about the PTP clock synchronization,
 * gst_ptp_statistics_callback_add() can be used. This gives the application
 * the possibility to collect all kinds of statistics from the clock
 * synchronization.
 */
export class PtpClock {
    /* Own properties of GstNet-1.0.GstNet.PtpClock */
    readonly domain: number
    readonly grandmaster_clock_id: number
    readonly internal_clock: Gst.Clock
    readonly master_clock_id: number
    /* Extended properties of Gst-1.0.Gst.SystemClock */
    clock_type: Gst.ClockType
    /* Extended properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Own fields of GstNet-1.0.GstNet.PtpClock */
    clock: Gst.SystemClock
    /* Extended fields of Gst-1.0.Gst.Clock */
    object: Gst.Object
    /* Extended fields of Gst-1.0.Gst.Object */
    /**
     * object LOCK
     */
    lock: GLib.Mutex
    /**
     * The name of the object
     */
    name: string
    /**
     * this object's parent, weak ref
     */
    parent: Gst.Object
    /**
     * flags for this object
     */
    flags: number
    /* Extended fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Extended methods of Gst-1.0.Gst.Clock */
    /**
     * The time `master` of the master clock and the time `slave` of the slave
     * clock are added to the list of observations. If enough observations
     * are available, a linear regression algorithm is run on the
     * observations and `clock` is recalibrated.
     * 
     * If this functions returns %TRUE, `r_squared` will contain the
     * correlation coefficient of the interpolation. A value of 1.0
     * means a perfect regression was performed. This value can
     * be used to control the sampling frequency of the master and slave
     * clocks.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number ]
    /**
     * Add a clock observation to the internal slaving algorithm the same as
     * gst_clock_add_observation(), and return the result of the master clock
     * estimation, without updating the internal calibration.
     * 
     * The caller can then take the results and call gst_clock_set_calibration()
     * with the values, or some modified version of them.
     * @param slave a time on the slave
     * @param master a time on the master
     */
    add_observation_unapplied(slave: Gst.ClockTime, master: Gst.ClockTime): [ /* returnType */ boolean, /* r_squared */ number, /* internal */ Gst.ClockTime, /* external */ Gst.ClockTime, /* rate_num */ Gst.ClockTime, /* rate_denom */ Gst.ClockTime ]
    /**
     * Converts the given `internal` clock time to the external time, adjusting for the
     * rate and reference time set with gst_clock_set_calibration() and making sure
     * that the returned time is increasing. This function should be called with the
     * clock's OBJECT_LOCK held and is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_unadjust_unlocked().
     * @param internal a clock time
     */
    adjust_unlocked(internal: Gst.ClockTime): Gst.ClockTime
    /**
     * Converts the given `internal_target` clock time to the external time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_adjust_unlocked() when called using the
     * current calibration parameters, but doesn't ensure a monotonically
     * increasing result as gst_clock_adjust_unlocked() does.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param internal_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    adjust_with_calibration(internal_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    /**
     * Gets the internal rate and reference time of `clock`. See
     * gst_clock_set_calibration() for more information.
     * 
     * `internal,` `external,` `rate_num,` and `rate_denom` can be left %NULL if the
     * caller is not interested in the values.
     * 
     * MT safe.
     */
    get_calibration(): [ /* internal */ Gst.ClockTime, /* external */ Gst.ClockTime, /* rate_num */ Gst.ClockTime, /* rate_denom */ Gst.ClockTime ]
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     */
    get_internal_time(): Gst.ClockTime
    /**
     * Get the master clock that `clock` is slaved to or %NULL when the clock is
     * not slaved to any master clock.
     */
    get_master(): Gst.Clock | null
    /**
     * Get the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     */
    get_resolution(): Gst.ClockTime
    /**
     * Gets the current time of the given clock. The time is always
     * monotonically increasing and adjusted according to the current
     * offset and rate.
     */
    get_time(): Gst.ClockTime
    /**
     * Get the amount of time that master and slave clocks are sampled.
     */
    get_timeout(): Gst.ClockTime
    /**
     * Checks if the clock is currently synced.
     * 
     * This returns if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC is not set on the clock.
     */
    is_synced(): boolean
    /**
     * Get an ID from `clock` to trigger a periodic notification.
     * The periodic notifications will start at time `start_time` and
     * will then be fired with the given `interval`. `id` should be unreffed
     * after usage.
     * 
     * Free-function: gst_clock_id_unref
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    new_periodic_id(start_time: Gst.ClockTime, interval: Gst.ClockTime): Gst.ClockID
    /**
     * Get a #GstClockID from `clock` to trigger a single shot
     * notification at the requested time. The single shot id should be
     * unreffed after usage.
     * 
     * Free-function: gst_clock_id_unref
     * @param time the requested time
     */
    new_single_shot_id(time: Gst.ClockTime): Gst.ClockID
    /**
     * Reinitializes the provided periodic `id` to the provided start time and
     * interval. Does not modify the reference count.
     * @param id a #GstClockID
     * @param start_time the requested start time
     * @param interval the requested interval
     */
    periodic_id_reinit(id: Gst.ClockID, start_time: Gst.ClockTime, interval: Gst.ClockTime): boolean
    /**
     * Adjusts the rate and time of `clock`. A rate of 1/1 is the normal speed of
     * the clock. Values bigger than 1/1 make the clock go faster.
     * 
     * `internal` and `external` are calibration parameters that arrange that
     * gst_clock_get_time() should have been `external` at internal time `internal`.
     * This internal time should not be in the future; that is, it should be less
     * than the value of gst_clock_get_internal_time() when this function is called.
     * 
     * Subsequent calls to gst_clock_get_time() will return clock times computed as
     * follows:
     * 
     * |[
     *   time = (internal_time - internal) * rate_num / rate_denom + external
     * ```
     * 
     * 
     * This formula is implemented in gst_clock_adjust_unlocked(). Of course, it
     * tries to do the integer arithmetic as precisely as possible.
     * 
     * Note that gst_clock_get_time() always returns increasing values so when you
     * move the clock backwards, gst_clock_get_time() will report the previous value
     * until the clock catches up.
     * 
     * MT safe.
     * @param internal a reference internal time
     * @param external a reference external time
     * @param rate_num the numerator of the rate of the clock relative to its            internal time
     * @param rate_denom the denominator of the rate of the clock
     */
    set_calibration(internal: Gst.ClockTime, external: Gst.ClockTime, rate_num: Gst.ClockTime, rate_denom: Gst.ClockTime): void
    /**
     * Set `master` as the master clock for `clock`. `clock` will be automatically
     * calibrated so that gst_clock_get_time() reports the same time as the
     * master clock.
     * 
     * A clock provider that slaves its clock to a master can get the current
     * calibration values with gst_clock_get_calibration().
     * 
     * `master` can be %NULL in which case `clock` will not be slaved anymore. It will
     * however keep reporting its time adjusted with the last configured rate
     * and time offsets.
     * @param master a master #GstClock
     */
    set_master(master: Gst.Clock | null): boolean
    /**
     * Set the accuracy of the clock. Some clocks have the possibility to operate
     * with different accuracy at the expense of more resource usage. There is
     * normally no need to change the default resolution of a clock. The resolution
     * of a clock can only be changed if the clock has the
     * #GST_CLOCK_FLAG_CAN_SET_RESOLUTION flag set.
     * @param resolution The resolution to set
     */
    set_resolution(resolution: Gst.ClockTime): Gst.ClockTime
    /**
     * Sets `clock` to synced and emits the GstClock::synced signal, and wakes up any
     * thread waiting in gst_clock_wait_for_sync().
     * 
     * This function must only be called if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is set on the clock, and is intended to be called by subclasses only.
     * @param synced if the clock is synced
     */
    set_synced(synced: boolean): void
    /**
     * Set the amount of time, in nanoseconds, to sample master and slave
     * clocks
     * @param timeout a timeout
     */
    set_timeout(timeout: Gst.ClockTime): void
    /**
     * Reinitializes the provided single shot `id` to the provided time. Does not
     * modify the reference count.
     * @param id a #GstClockID
     * @param time The requested time.
     */
    single_shot_id_reinit(id: Gst.ClockID, time: Gst.ClockTime): boolean
    /**
     * Converts the given `external` clock time to the internal time of `clock,`
     * using the rate and reference time set with gst_clock_set_calibration().
     * This function should be called with the clock's OBJECT_LOCK held and
     * is mainly used by clock subclasses.
     * 
     * This function is the reverse of gst_clock_adjust_unlocked().
     * @param external an external clock time
     */
    unadjust_unlocked(external: Gst.ClockTime): Gst.ClockTime
    /**
     * Converts the given `external_target` clock time to the internal time,
     * using the passed calibration parameters. This function performs the
     * same calculation as gst_clock_unadjust_unlocked() when called using the
     * current calibration parameters.
     * 
     * Note: The `clock` parameter is unused and can be NULL
     * @param external_target a clock time
     * @param cinternal a reference internal time
     * @param cexternal a reference external time
     * @param cnum the numerator of the rate of the clock relative to its        internal time
     * @param cdenom the denominator of the rate of the clock
     */
    unadjust_with_calibration(external_target: Gst.ClockTime, cinternal: Gst.ClockTime, cexternal: Gst.ClockTime, cnum: Gst.ClockTime, cdenom: Gst.ClockTime): Gst.ClockTime
    /**
     * Waits until `clock` is synced for reporting the current time. If `timeout`
     * is %GST_CLOCK_TIME_NONE it will wait forever, otherwise it will time out
     * after `timeout` nanoseconds.
     * 
     * For asynchronous waiting, the GstClock::synced signal can be used.
     * 
     * This returns immediately with TRUE if GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC
     * is not set on the clock, or if the clock is already synced.
     * @param timeout timeout for waiting or %GST_CLOCK_TIME_NONE
     */
    wait_for_sync(timeout: Gst.ClockTime): boolean
    /* Extended methods of Gst-1.0.Gst.Object */
    /**
     * Attach the #GstControlBinding to the object. If there already was a
     * #GstControlBinding for this property it will be replaced.
     * 
     * The object's reference count will be incremented, and any floating
     * reference will be removed (see gst_object_ref_sink())
     * @param binding the #GstControlBinding that should be used
     */
    add_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * A default error function that uses g_printerr() to display the error message
     * and the optional debug string..
     * 
     * The default handler will simply print the error string using g_print.
     * @param error the GError.
     * @param debug an additional debug information string, or %NULL
     */
    default_error(error: GLib.Error, debug: string | null): void
    /**
     * Gets the corresponding #GstControlBinding for the property. This should be
     * unreferenced again after use.
     * @param property_name name of the property
     */
    get_control_binding(property_name: string): Gst.ControlBinding | null
    /**
     * Obtain the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * If the `object` is not under property control, this will return
     * %GST_CLOCK_TIME_NONE. This allows the element to avoid the sub-dividing.
     * 
     * The control-rate is not expected to change if the element is in
     * %GST_STATE_PAUSED or %GST_STATE_PLAYING.
     */
    get_control_rate(): Gst.ClockTime
    /**
     * Gets a number of #GValues for the given controlled property starting at the
     * requested time. The array `values` need to hold enough space for `n_values` of
     * #GValue.
     * 
     * This function is useful if one wants to e.g. draw a graph of the control
     * curve or apply a control curve sample by sample.
     * @param property_name the name of the property to get
     * @param timestamp the time that should be processed
     * @param interval the time spacing between subsequent values
     * @param values array to put control-values in
     */
    get_g_value_array(property_name: string, timestamp: Gst.ClockTime, interval: Gst.ClockTime, values: any[]): boolean
    /**
     * Returns a copy of the name of `object`.
     * Caller should g_free() the return value after usage.
     * For a nameless object, this returns %NULL, which you can safely g_free()
     * as well.
     * 
     * Free-function: g_free
     */
    get_name(): string | null
    /**
     * Returns the parent of `object`. This function increases the refcount
     * of the parent object so you should gst_object_unref() it after usage.
     */
    get_parent(): Gst.Object | null
    /**
     * Generates a string describing the path of `object` in
     * the object hierarchy. Only useful (or used) for debugging.
     * 
     * Free-function: g_free
     */
    get_path_string(): string
    /**
     * Gets the value for the given controlled property at the requested time.
     * @param property_name the name of the property to get
     * @param timestamp the time the control-change should be read from
     */
    get_value(property_name: string, timestamp: Gst.ClockTime): any | null
    /**
     * Check if the `object` has active controlled properties.
     */
    has_active_control_bindings(): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `object` has an ancestor `ancestor` somewhere up in
     * the hierarchy. One can e.g. check if a #GstElement is inside a #GstPipeline.
     * @param ancestor a #GstObject to check as ancestor
     */
    has_as_ancestor(ancestor: Gst.Object): boolean
    /**
     * Check if `parent` is the parent of `object`.
     * E.g. a #GstElement can check if it owns a given #GstPad.
     * @param parent a #GstObject to check as parent
     */
    has_as_parent(parent: Gst.Object): boolean
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object
    /**
     * Removes the corresponding #GstControlBinding. If it was the
     * last ref of the binding, it will be disposed.
     * @param binding the binding
     */
    remove_control_binding(binding: Gst.ControlBinding): boolean
    /**
     * This function is used to disable the control bindings on a property for
     * some time, i.e. gst_object_sync_values() will do nothing for the
     * property.
     * @param property_name property to disable
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_binding_disabled(property_name: string, disabled: boolean): void
    /**
     * This function is used to disable all controlled properties of the `object` for
     * some time, i.e. gst_object_sync_values() will do nothing.
     * @param disabled boolean that specifies whether to disable the controller or not.
     */
    set_control_bindings_disabled(disabled: boolean): void
    /**
     * Change the control-rate for this `object`. Audio processing #GstElement
     * objects will use this rate to sub-divide their processing loop and call
     * gst_object_sync_values() in between. The length of the processing segment
     * should be up to `control-rate` nanoseconds.
     * 
     * The control-rate should not change if the element is in %GST_STATE_PAUSED or
     * %GST_STATE_PLAYING.
     * @param control_rate the new control-rate in nanoseconds.
     */
    set_control_rate(control_rate: Gst.ClockTime): void
    /**
     * Sets the name of `object,` or gives `object` a guaranteed unique
     * name (if `name` is %NULL).
     * This function makes a copy of the provided name, so the caller
     * retains ownership of the name it sent.
     * @param name new name of object
     */
    set_name(name: string | null): boolean
    /**
     * Sets the parent of `object` to `parent`. The object's reference count will
     * be incremented, and any floating reference will be removed (see gst_object_ref_sink()).
     * @param parent new parent of object
     */
    set_parent(parent: Gst.Object): boolean
    /**
     * Returns a suggestion for timestamps where buffers should be split
     * to get best controller results.
     */
    suggest_next_sync(): Gst.ClockTime
    /**
     * Sets the properties of the object, according to the #GstControlSources that
     * (maybe) handle them and for the given timestamp.
     * 
     * If this function fails, it is most likely the application developers fault.
     * Most probably the control sources are not setup correctly.
     * @param timestamp the time that should be processed
     */
    sync_values(timestamp: Gst.ClockTime): boolean
    /**
     * Clear the parent of `object,` removing the associated reference.
     * This function decreases the refcount of `object`.
     * 
     * MT safe. Grabs and releases `object'`s lock.
     */
    unparent(): void
    /**
     * Decrements the reference count on `object`.  If reference count hits
     * zero, destroy `object`. This function does not take the lock
     * on `object` as it relies on atomic refcounting.
     * 
     * The unref method should never be called with the LOCK held since
     * this might deadlock the dispose function.
     */
    unref(): void
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
    /* Extended virtual methods of Gst-1.0.Gst.Clock */
    vfunc_change_resolution(old_resolution: Gst.ClockTime, new_resolution: Gst.ClockTime): Gst.ClockTime
    /**
     * Gets the current internal time of the given clock. The time is returned
     * unadjusted for the offset and the rate.
     * @virtual 
     */
    vfunc_get_internal_time(): Gst.ClockTime
    /**
     * Get the accuracy of the clock. The accuracy of the clock is the granularity
     * of the values returned by gst_clock_get_time().
     * @virtual 
     */
    vfunc_get_resolution(): Gst.ClockTime
    vfunc_unschedule(entry: Gst.ClockEntry): void
    vfunc_wait(entry: Gst.ClockEntry, jitter: Gst.ClockTimeDiff): Gst.ClockReturn
    vfunc_wait_async(entry: Gst.ClockEntry): Gst.ClockReturn
    /* Extended virtual methods of Gst-1.0.Gst.Object */
    vfunc_deep_notify(orig: Gst.Object, pspec: GObject.ParamSpec): void
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
    /* Extended signals of Gst-1.0.Gst.Clock */
    /**
     * Signaled on clocks with GST_CLOCK_FLAG_NEEDS_STARTUP_SYNC set once
     * the clock is synchronized, or when it completely lost synchronization.
     * This signal will not be emitted on clocks without the flag.
     * 
     * This signal will be emitted from an arbitrary thread, most likely not
     * the application's main thread.
     * @signal 
     * @param synced if the clock is synced now
     */
    connect(sigName: "synced", callback: (($obj: PtpClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: PtpClock, synced: boolean) => void)): number
    emit(sigName: "synced", synced: boolean): void
    /* Extended signals of Gst-1.0.Gst.Object */
    /**
     * The deep notify signal is used to be notified of property changes. It is
     * typically attached to the toplevel bin to receive notifications from all
     * the elements contained in that bin.
     * @signal 
     * @param prop_object the object that originated the signal
     * @param prop the property that changed
     */
    connect(sigName: "deep-notify", callback: (($obj: PtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: PtpClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    emit(sigName: "deep-notify", prop_object: Gst.Object, prop: GObject.ParamSpec): void
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
    connect(sigName: "notify", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::domain", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::domain", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::grandmaster-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::internal-clock", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::master-clock-id", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: PtpClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PtpClock_ConstructProps)
    _init (config?: PtpClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, domain: number): PtpClock
    static $gtype: GObject.GType<PtpClock>
}
/**
 * #GstNetAddressMeta can be used to store a network address (a #GSocketAddress)
 * in a #GstBuffer so that it network elements can track the to and from address
 * of the buffer.
 */
export class NetAddressMeta {
    /* Own fields of GstNet-1.0.GstNet.NetAddressMeta */
    /**
     * the parent type
     */
    meta: Gst.Meta
    /**
     * a #GSocketAddress stored as metadata
     */
    addr: Gio.SocketAddress
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
export abstract class NetClientClockClass {
    /* Own fields of GstNet-1.0.GstNet.NetClientClockClass */
    parent_class: Gst.SystemClockClass
    static name: string
}
export class NetClientClockPrivate {
    static name: string
}
/**
 * #GstNetControlMessageMeta can be used to store control messages (ancillary
 * data) which was received with or is to be sent alongside the buffer data.
 * When used with socket sinks and sources which understand this meta it allows
 * sending and receiving ancillary data such as unix credentials (See
 * #GUnixCredentialsMessage) and Unix file descriptions (See #GUnixFDMessage).
 */
export class NetControlMessageMeta {
    /* Own fields of GstNet-1.0.GstNet.NetControlMessageMeta */
    /**
     * the parent type
     */
    meta: Gst.Meta
    /**
     * a #GSocketControlMessage stored as metadata
     */
    message: Gio.SocketControlMessage
    static name: string
    /* Static methods and pseudo-constructors */
    static get_info(): Gst.MetaInfo
}
/**
 * Various functions for receiving, sending an serializing #GstNetTimePacket
 * structures.
 */
export class NetTimePacket {
    /* Own fields of GstNet-1.0.GstNet.NetTimePacket */
    /**
     * the local time when this packet was sent
     */
    local_time: Gst.ClockTime
    /**
     * the remote time observation
     */
    remote_time: Gst.ClockTime
    /* Owm methods of GstNet-1.0.GstNet.NetTimePacket */
    /**
     * Make a copy of `packet`.
     */
    copy(): NetTimePacket
    /**
     * Free `packet`.
     */
    free(): void
    /**
     * Sends a #GstNetTimePacket over a socket.
     * 
     * MT safe.
     * @param socket socket to send the time packet on
     * @param dest_address address to send the time packet to
     */
    send(socket: Gio.Socket, dest_address: Gio.SocketAddress): boolean
    /**
     * Serialized a #GstNetTimePacket into a newly-allocated sequence of
     * #GST_NET_TIME_PACKET_SIZE bytes, in network byte order. The value returned is
     * suitable for passing to write(2) or sendto(2) for communication over the
     * network.
     * 
     * MT safe. Caller owns return value (g_free to free).
     */
    serialize(): number
    static name: string
    static new(buffer: Uint8Array): NetTimePacket
    constructor(buffer: Uint8Array)
    /* Static methods and pseudo-constructors */
    static new(buffer: Uint8Array): NetTimePacket
    /**
     * Receives a #GstNetTimePacket over a socket. Handles interrupted system
     * calls, but otherwise returns NULL on error.
     * @param socket socket to receive the time packet on
     */
    static receive(socket: Gio.Socket): [ /* returnType */ NetTimePacket, /* src_address */ Gio.SocketAddress ]
}
export abstract class NetTimeProviderClass {
    /* Own fields of GstNet-1.0.GstNet.NetTimeProviderClass */
    parent_class: Gst.ObjectClass
    _gst_reserved: object[]
    static name: string
}
export class NetTimeProviderPrivate {
    static name: string
}
export abstract class NtpClockClass {
    /* Own fields of GstNet-1.0.GstNet.NtpClockClass */
    parent_class: Gst.SystemClockClass
    static name: string
}
/**
 * Opaque #GstPtpClockClass structure.
 */
export abstract class PtpClockClass {
    /* Own fields of GstNet-1.0.GstNet.PtpClockClass */
    /**
     * parented to #GstSystemClockClass
     */
    parent_class: Gst.SystemClockClass
    static name: string
}
export class PtpClockPrivate {
    static name: string
}