/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstCheck-1.0
 */

import type * as Gjs from './Gjs';
import type * as Gst from './Gst-1.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as GModule from './GModule-2.0';

export function buffer_straw_get_buffer(bin: Gst.Element, pad: Gst.Pad): Gst.Buffer
export function buffer_straw_start_pipeline(bin: Gst.Element, pad: Gst.Pad): void
export function buffer_straw_stop_pipeline(bin: Gst.Element, pad: Gst.Pad): void
export function check_abi_list(list: CheckABIStruct, have_abi_sizes: boolean): void
export function check_buffer_data(buffer: Gst.Buffer, data: object | null, size: number): void
export function check_caps_equal(caps1: Gst.Caps, caps2: Gst.Caps): void
export function check_chain_func(pad: Gst.Pad, parent: Gst.Object, buffer: Gst.Buffer): Gst.FlowReturn
export function check_clear_log_filter(): void
export function check_drop_buffers(): void
export function check_element_push_buffer(element_name: string, buffer_in: Gst.Buffer, caps_in: Gst.Caps, buffer_out: Gst.Buffer, caps_out: Gst.Caps): void
export function check_element_push_buffer_list(element_name: string, buffer_in: Gst.Buffer[], caps_in: Gst.Caps, buffer_out: Gst.Buffer[], caps_out: Gst.Caps, last_flow_return: Gst.FlowReturn): void
export function check_init(argc: number, argv: string): void
export function check_message_error(message: Gst.Message, type: Gst.MessageType, domain: GLib.Quark, code: number): void
export function check_object_destroyed_on_unref(object_to_unref: object | null): void
export function check_remove_log_filter(filter: CheckLogFilter): void
export function check_setup_element(factory: string): Gst.Element
export function check_setup_events(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format): void
export function check_setup_events_with_stream_id(srcpad: Gst.Pad, element: Gst.Element, caps: Gst.Caps | null, format: Gst.Format, stream_id: string): void
export function check_setup_sink_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad
export function check_setup_sink_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad
export function check_setup_sink_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad
export function check_setup_sink_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad
export function check_setup_src_pad(element: Gst.Element, tmpl: Gst.StaticPadTemplate): Gst.Pad
export function check_setup_src_pad_by_name(element: Gst.Element, tmpl: Gst.StaticPadTemplate, name: string): Gst.Pad
export function check_setup_src_pad_by_name_from_template(element: Gst.Element, tmpl: Gst.PadTemplate, name: string): Gst.Pad
export function check_setup_src_pad_from_template(element: Gst.Element, tmpl: Gst.PadTemplate): Gst.Pad
export function check_teardown_element(element: Gst.Element): void
export function check_teardown_pad_by_name(element: Gst.Element, name: string): void
export function check_teardown_sink_pad(element: Gst.Element): void
export function check_teardown_src_pad(element: Gst.Element): void
export function consistency_checker_add_pad(consist: StreamConsistency, pad: Gst.Pad): boolean
export function consistency_checker_free(consist: StreamConsistency): void
export function consistency_checker_reset(consist: StreamConsistency): void
export function harness_stress_thread_stop(t: HarnessThread): number
/**
 * A function that is called for messages matching the filter added by
 * `gst_check_add_log_filter`.
 * @callback 
 */
export interface CheckLogFilterFunc {
    (log_domain: string, log_level: GLib.LogLevelFlags, message: string): boolean
}
/**
 * @callback 
 */
export interface HarnessPrepareBufferFunc {
    (h: Harness, data: object | null): Gst.Buffer
}
/**
 * @callback 
 */
export interface HarnessPrepareEventFunc {
    (h: Harness, data: object | null): Gst.Event
}
export interface TestClock_ConstructProps extends Gst.Clock_ConstructProps {
    /* Constructor properties of GstCheck-1.0.GstCheck.TestClock */
    clock_type?: Gst.ClockType | null
    /**
     * When a #GstTestClock is constructed it will have a certain start time set.
     * If the clock was created using gst_test_clock_new_with_start_time() then
     * this property contains the value of the `start_time` argument. If
     * gst_test_clock_new() was called the clock started at time zero, and thus
     * this property contains the value 0.
     */
    start_time?: number | null
}
/**
 * GstTestClock is an implementation of #GstClock which has different
 * behaviour compared to #GstSystemClock. Time for #GstSystemClock advances
 * according to the system time, while time for #GstTestClock changes only
 * when gst_test_clock_set_time() or gst_test_clock_advance_time() are
 * called. #GstTestClock provides unit tests with the possibility to
 * precisely advance the time in a deterministic manner, independent of the
 * system time or any other external factors.
 * 
 * ## Advancing the time of a #GstTestClock
 * 
 * 
 * ```c
 *   #include <gst/gst.h>
 *   #include <gst/check/gsttestclock.h>
 * 
 *   GstClock *clock;
 *   GstTestClock *test_clock;
 * 
 *   clock = gst_test_clock_new ();
 *   test_clock = GST_TEST_CLOCK (clock);
 *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
 *   gst_test_clock_advance_time ( test_clock, 1 * GST_SECOND);
 *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
 *   g_usleep (10 * G_USEC_PER_SEC);
 *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
 *   gst_test_clock_set_time (test_clock, 42 * GST_SECOND);
 *   GST_INFO ("Time: %" GST_TIME_FORMAT, GST_TIME_ARGS (gst_clock_get_time (clock)));
 *   ...
 * ```
 * 
 * 
 * #GstClock allows for setting up single shot or periodic clock notifications
 * as well as waiting for these notifications synchronously (using
 * gst_clock_id_wait()) or asynchronously (using gst_clock_id_wait_async() or
 * gst_clock_id_wait_async()). This is used by many GStreamer elements,
 * among them #GstBaseSrc and #GstBaseSink.
 * 
 * #GstTestClock keeps track of these clock notifications. By calling
 * gst_test_clock_wait_for_next_pending_id() or
 * gst_test_clock_wait_for_multiple_pending_ids() a unit tests may wait for the
 * next one or several clock notifications to be requested. Additionally unit
 * tests may release blocked waits in a controlled fashion by calling
 * gst_test_clock_process_next_clock_id(). This way a unit test can control the
 * inaccuracy (jitter) of clock notifications, since the test can decide to
 * release blocked waits when the clock time has advanced exactly to, or past,
 * the requested clock notification time.
 * 
 * There are also interfaces for determining if a notification belongs to a
 * #GstTestClock or not, as well as getting the number of requested clock
 * notifications so far.
 * 
 * N.B.: When a unit test waits for a certain amount of clock notifications to
 * be requested in gst_test_clock_wait_for_next_pending_id() or
 * gst_test_clock_wait_for_multiple_pending_ids() then these functions may block
 * for a long time. If they block forever then the expected clock notifications
 * were never requested from #GstTestClock, and so the assumptions in the code
 * of the unit test are wrong. The unit test case runner in gstcheck is
 * expected to catch these cases either by the default test case timeout or the
 * one set for the unit test by calling tcase_set_timeout\(\).
 * 
 * The sample code below assumes that the element under test will delay a
 * buffer pushed on the source pad by some latency until it arrives on the sink
 * pad. Moreover it is assumed that the element will at some point call
 * gst_clock_id_wait() to synchronously wait for a specific time. The first
 * buffer sent will arrive exactly on time only delayed by the latency. The
 * second buffer will arrive a little late (7ms) due to simulated jitter in the
 * clock notification.
 * 
 * ## Demonstration of how to work with clock notifications and #GstTestClock
 * 
 * 
 * ```c
 *   #include <gst/gst.h>
 *   #include <gst/check/gstcheck.h>
 *   #include <gst/check/gsttestclock.h>
 * 
 *   GstClockTime latency;
 *   GstElement *element;
 *   GstPad *srcpad;
 *   GstClock *clock;
 *   GstTestClock *test_clock;
 *   GstBuffer buf;
 *   GstClockID pending_id;
 *   GstClockID processed_id;
 * 
 *   latency = 42 * GST_MSECOND;
 *   element = create_element (latency, ...);
 *   srcpad = get_source_pad (element);
 * 
 *   clock = gst_test_clock_new ();
 *   test_clock = GST_TEST_CLOCK (clock);
 *   gst_element_set_clock (element, clock);
 * 
 *   GST_INFO ("Set time, create and push the first buffer\n");
 *   gst_test_clock_set_time (test_clock, 0);
 *   buf = create_test_buffer (gst_clock_get_time (clock), ...);
 *   gst_assert_cmpint (gst_pad_push (srcpad, buf), ==, GST_FLOW_OK);
 * 
 *   GST_INFO ("Block until element is waiting for a clock notification\n");
 *   gst_test_clock_wait_for_next_pending_id (test_clock, &pending_id);
 *   GST_INFO ("Advance to the requested time of the clock notification\n");
 *   gst_test_clock_advance_time (test_clock, latency);
 *   GST_INFO ("Release the next blocking wait and make sure it is the one from element\n");
 *   processed_id = gst_test_clock_process_next_clock_id (test_clock);
 *   g_assert (processed_id == pending_id);
 *   g_assert_cmpint (GST_CLOCK_ENTRY_STATUS (processed_id), ==, GST_CLOCK_OK);
 *   gst_clock_id_unref (pending_id);
 *   gst_clock_id_unref (processed_id);
 * 
 *   GST_INFO ("Validate that element produced an output buffer and check its timestamp\n");
 *   g_assert_cmpint (get_number_of_output_buffer (...), ==, 1);
 *   buf = get_buffer_pushed_by_element (element, ...);
 *   g_assert_cmpint (GST_BUFFER_TIMESTAMP (buf), ==, latency);
 *   gst_buffer_unref (buf);
 *   GST_INFO ("Check that element does not wait for any clock notification\n");
 *   g_assert (!gst_test_clock_peek_next_pending_id (test_clock, NULL));
 * 
 *   GST_INFO ("Set time, create and push the second buffer\n");
 *   gst_test_clock_advance_time (test_clock, 10 * GST_SECOND);
 *   buf = create_test_buffer (gst_clock_get_time (clock), ...);
 *   gst_assert_cmpint (gst_pad_push (srcpad, buf), ==, GST_FLOW_OK);
 * 
 *   GST_INFO ("Block until element is waiting for a new clock notification\n");
 *   (gst_test_clock_wait_for_next_pending_id (test_clock, &pending_id);
 *   GST_INFO ("Advance past 7ms beyond the requested time of the clock notification\n");
 *   gst_test_clock_advance_time (test_clock, latency + 7 * GST_MSECOND);
 *   GST_INFO ("Release the next blocking wait and make sure it is the one from element\n");
 *   processed_id = gst_test_clock_process_next_clock_id (test_clock);
 *   g_assert (processed_id == pending_id);
 *   g_assert_cmpint (GST_CLOCK_ENTRY_STATUS (processed_id), ==, GST_CLOCK_OK);
 *   gst_clock_id_unref (pending_id);
 *   gst_clock_id_unref (processed_id);
 * 
 *   GST_INFO ("Validate that element produced an output buffer and check its timestamp\n");
 *   g_assert_cmpint (get_number_of_output_buffer (...), ==, 1);
 *   buf = get_buffer_pushed_by_element (element, ...);
 *   g_assert_cmpint (GST_BUFFER_TIMESTAMP (buf), ==,
 *       10 * GST_SECOND + latency + 7 * GST_MSECOND);
 *   gst_buffer_unref (buf);
 *   GST_INFO ("Check that element does not wait for any clock notification\n");
 *   g_assert (!gst_test_clock_peek_next_pending_id (test_clock, NULL));
 *   ...
 * ```
 * 
 * 
 * Since #GstTestClock is only supposed to be used in unit tests it calls
 * g_assert(), g_assert_cmpint() or g_assert_cmpuint() to validate all function
 * arguments. This will highlight any issues with the unit test code itself.
 */
export class TestClock {
    /* Own properties of GstCheck-1.0.GstCheck.TestClock */
    clock_type: Gst.ClockType
    /**
     * When a #GstTestClock is constructed it will have a certain start time set.
     * If the clock was created using gst_test_clock_new_with_start_time() then
     * this property contains the value of the `start_time` argument. If
     * gst_test_clock_new() was called the clock started at time zero, and thus
     * this property contains the value 0.
     */
    readonly start_time: number
    /* Extended properties of Gst-1.0.Gst.Clock */
    timeout: number
    window_size: number
    window_threshold: number
    /* Own fields of GstCheck-1.0.GstCheck.TestClock */
    parent: Gst.Clock
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
     * flags for this object
     */
    flags: number
    /* Extended fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of GstCheck-1.0.GstCheck.TestClock */
    /**
     * Advances the time of the `test_clock` by the amount given by `delta`. The
     * time of `test_clock` is monotonically increasing, therefore providing a
     * `delta` which is negative or zero is a programming error.
     * 
     * MT safe.
     * @param delta a positive #GstClockTimeDiff to be added to the time of the clock
     */
    advance_time(delta: Gst.ClockTimeDiff): void
    /**
     * A "crank" consists of three steps:
     * 1: Wait for a #GstClockID to be registered with the #GstTestClock.
     * 2: Advance the #GstTestClock to the time the #GstClockID is waiting for.
     * 3: Release the #GstClockID wait.
     * A "crank" can be though of as the notion of
     * manually driving the clock forward to its next logical step.
     */
    crank(): boolean
    /**
     * Retrieve the requested time for the next pending clock notification.
     * 
     * MT safe.
     */
    get_next_entry_time(): Gst.ClockTime
    /**
     * Checks whether `test_clock` was requested to provide the clock notification
     * given by `id`.
     * 
     * MT safe.
     * @param id a #GstClockID clock notification
     */
    has_id(id: Gst.ClockID): boolean
    /**
     * Determine the number of pending clock notifications that have been
     * requested from the `test_clock`.
     * 
     * MT safe.
     */
    peek_id_count(): number
    /**
     * Determines if the `pending_id` is the next clock notification scheduled to
     * be triggered given the current time of the `test_clock`.
     * 
     * MT safe.
     */
    peek_next_pending_id(): [ /* returnType */ boolean, /* pending_id */ Gst.ClockID ]
    /**
     * Processes and releases the pending IDs in the list.
     * 
     * MT safe.
     * @param pending_list List     of pending #GstClockIDs
     */
    process_id_list(pending_list: Gst.ClockID[] | null): number
    /**
     * MT safe.
     */
    process_next_clock_id(): Gst.ClockID
    /**
     * Sets the time of `test_clock` to the time given by `new_time`. The time of
     * `test_clock` is monotonically increasing, therefore providing a `new_time`
     * which is earlier or equal to the time of the clock as given by
     * gst_clock_get_time() is a programming error.
     * 
     * MT safe.
     * @param new_time a #GstClockTime later than that returned by gst_clock_get_time()
     */
    set_time(new_time: Gst.ClockTime): void
    /**
     * Blocks until at least `count` clock notifications have been requested from
     * `test_clock,` or the timeout expires.
     * 
     * MT safe.
     * @param count the number of pending clock notifications to wait for
     * @param timeout_ms the timeout in milliseconds
     */
    timed_wait_for_multiple_pending_ids(count: number, timeout_ms: number): [ /* returnType */ boolean, /* pending_list */ Gst.ClockID[] ]
    /**
     * Blocks until at least `count` clock notifications have been requested from
     * `test_clock`. There is no timeout for this wait, see the main description of
     * #GstTestClock.
     * 
     * MT safe.
     * @param count the number of pending clock notifications to wait for
     */
    wait_for_multiple_pending_ids(count: number): /* pending_list */ Gst.ClockID[]
    /**
     * Waits until a clock notification is requested from `test_clock`. There is no
     * timeout for this wait, see the main description of #GstTestClock. A reference
     * to the pending clock notification is stored in `pending_id`.
     * 
     * MT safe.
     */
    wait_for_next_pending_id(): /* pending_id */ Gst.ClockID
    /**
     * Blocks until at least `count` clock notifications have been requested from
     * `test_clock`. There is no timeout for this wait, see the main description of
     * #GstTestClock.
     * @param count the number of pending clock notifications to wait for
     */
    wait_for_pending_id_count(count: number): void
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
    connect(sigName: "synced", callback: (($obj: TestClock, synced: boolean) => void)): number
    connect_after(sigName: "synced", callback: (($obj: TestClock, synced: boolean) => void)): number
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
    connect(sigName: "deep-notify", callback: (($obj: TestClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
    connect_after(sigName: "deep-notify", callback: (($obj: TestClock, prop_object: Gst.Object, prop: GObject.ParamSpec) => void)): number
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
    connect(sigName: "notify", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clock-type", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clock-type", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::start-time", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::start-time", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::timeout", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timeout", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-size", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-size", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window-threshold", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-threshold", callback: (($obj: TestClock, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TestClock_ConstructProps)
    _init (config?: TestClock_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): TestClock
    static new_with_start_time(start_time: Gst.ClockTime): TestClock
    /**
     * Finds the latest time inside the list.
     * 
     * MT safe.
     * @param pending_list List     of of pending #GstClockIDs
     */
    static id_list_get_latest_time(pending_list: Gst.ClockID[] | null): Gst.ClockTime
    static $gtype: GObject.GType<TestClock>
}
export class CheckABIStruct {
    /* Own fields of GstCheck-1.0.GstCheck.CheckABIStruct */
    name: string
    size: number
    abi_size: number
    static name: string
}
export class CheckLogFilter {
    static name: string
}
/**
 * #GstHarness is meant to make writing unit test for GStreamer much easier.
 * It can be thought of as a way of treating a #GstElement as a black box,
 * deterministically feeding it data, and controlling what data it outputs.
 * 
 * The basic structure of #GstHarness is two "floating" #GstPads that connect
 * to the harnessed #GstElement src and sink #GstPads like so:
 * 
 * |[
 *           __________________________
 *  _____   |  _____            _____  |   _____
 * |     |  | |     |          |     | |  |     |
 * | src |--+-| sink|  Element | src |-+--| sink|
 * |_____|  | |_____|          |_____| |  |_____|
 *          |__________________________|
 * 
 * ```
 * 
 * 
 * With this, you can now simulate any environment the #GstElement might find
 * itself in. By specifying the #GstCaps of the harness #GstPads, using
 * functions like gst_harness_set_src_caps() or gst_harness_set_sink_caps_str(),
 * you can test how the #GstElement interacts with different caps sets.
 * 
 * Your harnessed #GstElement can of course also be a bin, and using
 * gst_harness_new_parse() supporting standard gst-launch syntax, you can
 * easily test a whole pipeline instead of just one element.
 * 
 * You can then go on to push #GstBuffers and #GstEvents on to the srcpad,
 * using functions like gst_harness_push() and gst_harness_push_event(), and
 * then pull them out to examine them with gst_harness_pull() and
 * gst_harness_pull_event().
 * 
 * ## A simple buffer-in buffer-out example
 * 
 * 
 * ```c
 *   #include <gst/gst.h>
 *   #include <gst/check/gstharness.h>
 *   GstHarness *h;
 *   GstBuffer *in_buf;
 *   GstBuffer *out_buf;
 * 
 *   // attach the harness to the src and sink pad of GstQueue
 *   h = gst_harness_new ("queue");
 * 
 *   // we must specify a caps before pushing buffers
 *   gst_harness_set_src_caps_str (h, "mycaps");
 * 
 *   // create a buffer of size 42
 *   in_buf = gst_harness_create_buffer (h, 42);
 * 
 *   // push the buffer into the queue
 *   gst_harness_push (h, in_buf);
 * 
 *   // pull the buffer from the queue
 *   out_buf = gst_harness_pull (h);
 * 
 *   // validate the buffer in is the same as buffer out
 *   fail_unless (in_buf == out_buf);
 * 
 *   // cleanup
 *   gst_buffer_unref (out_buf);
 *   gst_harness_teardown (h);
 * 
 *   ```
 * 
 * 
 * Another main feature of the #GstHarness is its integration with the
 * #GstTestClock. Operating the #GstTestClock can be very challenging, but
 * #GstHarness simplifies some of the most desired actions a lot, like wanting
 * to manually advance the clock while at the same time releasing a #GstClockID
 * that is waiting, with functions like gst_harness_crank_single_clock_wait().
 * 
 * #GstHarness also supports sub-harnesses, as a way of generating and
 * validating data. A sub-harness is another #GstHarness that is managed by
 * the "parent" harness, and can either be created by using the standard
 * gst_harness_new type functions directly on the (GstHarness *)->src_harness,
 * or using the much more convenient gst_harness_add_src() or
 * gst_harness_add_sink_parse(). If you have a decoder-element you want to test,
 * (like vp8dec) it can be very useful to add a src-harness with both a
 * src-element (videotestsrc) and an encoder (vp8enc) to feed the decoder data
 * with different configurations, by simply doing:
 * 
 * 
 * ```c
 *   GstHarness * h = gst_harness_new (h, "vp8dec");
 *   gst_harness_add_src_parse (h, "videotestsrc is-live=1 ! vp8enc", TRUE);
 * ```
 * 
 * 
 * and then feeding it data with:
 * 
 * 
 * ```c
 * gst_harness_push_from_src (h);
 * ```
 * 
 */
export class Harness {
    /* Own fields of GstCheck-1.0.GstCheck.Harness */
    /**
     * the element inside the harness
     */
    element: Gst.Element
    /**
     * the internal harness source pad
     */
    srcpad: Gst.Pad
    /**
     * the internal harness sink pad
     */
    sinkpad: Gst.Pad
    /**
     * the source (input) harness (if any)
     */
    src_harness: Harness
    /**
     * the sink (output) harness (if any)
     */
    sink_harness: Harness
    /* Owm methods of GstCheck-1.0.GstCheck.Harness */
    /**
     * Links the specified #GstPad the `GstHarness` srcpad.
     * 
     * MT safe.
     * @param sinkpad a #GstPad to link to the harness srcpad
     */
    add_element_sink_pad(sinkpad: Gst.Pad): void
    /**
     * Links the specified #GstPad the `GstHarness` sinkpad. This can be useful if
     * perhaps the srcpad did not exist at the time of creating the harness,
     * like a demuxer that provides a sometimes-pad after receiving data.
     * 
     * MT safe.
     * @param srcpad a #GstPad to link to the harness sinkpad
     */
    add_element_src_pad(srcpad: Gst.Pad): void
    /**
     * A convenience function to allows you to call gst_pad_add_probe on a
     * #GstPad of a #GstElement that are residing inside the #GstHarness,
     * by using normal gst_pad_add_probe syntax
     * 
     * MT safe.
     * @param element_name a #gchar with a #GstElementFactory name
     * @param pad_name a #gchar with the name of the pad to attach the probe to
     * @param mask a #GstPadProbeType (see gst_pad_add_probe)
     * @param callback a #GstPadProbeCallback (see gst_pad_add_probe)
     */
    add_probe(element_name: string, pad_name: string, mask: Gst.PadProbeType, callback: Gst.PadProbeCallback): void
    /**
     * Add api with params as one of the supported metadata API to propose when
     * receiving an allocation query.
     * 
     * MT safe.
     * @param api a metadata API
     * @param params API specific parameters
     */
    add_propose_allocation_meta(api: GObject.GType, params: Gst.Structure | null): void
    /**
     * Similar to gst_harness_add_sink_harness, this is a convenience to
     * directly create a sink-harness using the `sink_element_name` name specified.
     * 
     * MT safe.
     * @param sink_element_name a #gchar with the name of a #GstElement
     */
    add_sink(sink_element_name: string): void
    /**
     * Similar to gst_harness_add_src, this allows you to send the data coming out
     * of your harnessed #GstElement to a sink-element, allowing to test different
     * responses the element output might create in sink elements. An example might
     * be an existing sink providing some analytical data on the input it receives that
     * can be useful to your testing. If the goal is to test a sink-element itself,
     * this is better achieved using gst_harness_new directly on the sink.
     * 
     * If a sink-harness already exists it will be replaced.
     * 
     * MT safe.
     * @param sink_harness a #GstHarness to be added as a sink-harness.
     */
    add_sink_harness(sink_harness: Harness): void
    /**
     * Similar to gst_harness_add_sink, this allows you to specify a launch-line
     * instead of just an element name. See gst_harness_add_src_parse for details.
     * 
     * MT safe.
     * @param launchline a #gchar with the name of a #GstElement
     */
    add_sink_parse(launchline: string): void
    /**
     * Similar to gst_harness_add_src_harness, this is a convenience to
     * directly create a src-harness using the `src_element_name` name specified.
     * 
     * MT safe.
     * @param src_element_name a #gchar with the name of a #GstElement
     * @param has_clock_wait a #gboolean specifying if the #GstElement uses gst_clock_wait_id internally.
     */
    add_src(src_element_name: string, has_clock_wait: boolean): void
    /**
     * A src-harness is a great way of providing the #GstHarness with data.
     * By adding a src-type #GstElement, it is then easy to use functions like
     * gst_harness_push_from_src or gst_harness_src_crank_and_push_many
     * to provide your harnessed element with input. The `has_clock_wait` variable
     * is a great way to control you src-element with, in that you can have it
     * produce a buffer for you by simply cranking the clock, and not have it
     * spin out of control producing buffers as fast as possible.
     * 
     * If a src-harness already exists it will be replaced.
     * 
     * MT safe.
     * @param src_harness a #GstHarness to be added as a src-harness.
     * @param has_clock_wait a #gboolean specifying if the #GstElement uses gst_clock_wait_id internally.
     */
    add_src_harness(src_harness: Harness, has_clock_wait: boolean): void
    /**
     * Similar to gst_harness_add_src, this allows you to specify a launch-line,
     * which can be useful for both having more then one #GstElement acting as your
     * src (Like a src producing raw buffers, and then an encoder, providing encoded
     * data), but also by allowing you to set properties like "is-live" directly on
     * the elements.
     * 
     * MT safe.
     * @param launchline a #gchar describing a gst-launch type line
     * @param has_clock_wait a #gboolean specifying if the #GstElement uses gst_clock_wait_id internally.
     */
    add_src_parse(launchline: string, has_clock_wait: boolean): void
    /**
     * The number of #GstBuffers currently in the #GstHarness sinkpad #GAsyncQueue
     * 
     * MT safe.
     */
    buffers_in_queue(): number
    /**
     * The total number of #GstBuffers that has arrived on the #GstHarness sinkpad.
     * This number includes buffers that have been dropped as well as buffers
     * that have already been pulled out.
     * 
     * MT safe.
     */
    buffers_received(): number
    /**
     * Similar to gst_harness_crank_single_clock_wait(), this is the function to use
     * if your harnessed element(s) are using more then one gst_clock_id_wait.
     * Failing to do so can (and will) make it racy which #GstClockID you actually
     * are releasing, where as this function will process all the waits at the
     * same time, ensuring that one thread can't register another wait before
     * both are released.
     * 
     * MT safe.
     * @param waits a #guint describing the number of #GstClockIDs to crank
     */
    crank_multiple_clock_waits(waits: number): boolean
    /**
     * A "crank" consists of three steps:
     * 1: Wait for a #GstClockID to be registered with the #GstTestClock.
     * 2: Advance the #GstTestClock to the time the #GstClockID is waiting for.
     * 3: Release the #GstClockID wait.
     * Together, this provides an easy way to not have to think about the details
     * around clocks and time, but still being able to write deterministic tests
     * that are dependent on this. A "crank" can be though of as the notion of
     * manually driving the clock forward to its next logical step.
     * 
     * MT safe.
     */
    crank_single_clock_wait(): boolean
    /**
     * Allocates a buffer using a #GstBufferPool if present, or else using the
     * configured #GstAllocator and #GstAllocationParams
     * 
     * MT safe.
     * @param size a #gsize specifying the size of the buffer
     */
    create_buffer(size: number): Gst.Buffer
    /**
     * Allows you to dump the #GstBuffers the #GstHarness sinkpad #GAsyncQueue
     * to a file.
     * 
     * MT safe.
     * @param filename a #gchar with a the name of a file
     */
    dump_to_file(filename: string): void
    /**
     * The number of #GstEvents currently in the #GstHarness sinkpad #GAsyncQueue
     * 
     * MT safe.
     */
    events_in_queue(): number
    /**
     * The total number of #GstEvents that has arrived on the #GstHarness sinkpad
     * This number includes events handled by the harness as well as events
     * that have already been pulled out.
     * 
     * MT safe.
     */
    events_received(): number
    /**
     * Most useful in conjunction with gst_harness_new_parse, this will scan the
     * #GstElements inside the #GstHarness, and check if any of them matches
     * `element_name`. Typical usecase being that you need to access one of the
     * harnessed elements for properties and/or signals.
     * 
     * MT safe.
     * @param element_name a #gchar with a #GstElementFactory name
     */
    find_element(element_name: string): Gst.Element | null
    /**
     * Gets the `allocator` and its `params` that has been decided to use after an
     * allocation query.
     * 
     * MT safe.
     */
    get_allocator(): [ /* allocator */ Gst.Allocator, /* params */ Gst.AllocationParams ]
    /**
     * Get the timestamp of the last #GstBuffer pushed on the #GstHarness srcpad,
     * typically with gst_harness_push or gst_harness_push_from_src.
     * 
     * MT safe.
     */
    get_last_pushed_timestamp(): Gst.ClockTime
    /**
     * Get the #GstTestClock. Useful if specific operations on the testclock is
     * needed.
     * 
     * MT safe.
     */
    get_testclock(): TestClock
    /**
     * This will set the harnessed #GstElement to %GST_STATE_PLAYING.
     * #GstElements without a sink-#GstPad and with the %GST_ELEMENT_FLAG_SOURCE
     * flag set is considered a src #GstElement
     * Non-src #GstElements (like sinks and filters) are automatically set to
     * playing by the #GstHarness, but src #GstElements are not to avoid them
     * starting to produce buffers.
     * Hence, for src #GstElement you must call gst_harness_play() explicitly.
     * 
     * MT safe.
     */
    play(): void
    /**
     * Pulls a #GstBuffer from the #GAsyncQueue on the #GstHarness sinkpad. The pull
     * will timeout in 60 seconds. This is the standard way of getting a buffer
     * from a harnessed #GstElement.
     * 
     * MT safe.
     */
    pull(): Gst.Buffer
    /**
     * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness sinkpad.
     * Timeouts after 60 seconds similar to gst_harness_pull.
     * 
     * MT safe.
     */
    pull_event(): Gst.Event
    /**
     * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness srcpad.
     * Timeouts after 60 seconds similar to gst_harness_pull.
     * 
     * MT safe.
     */
    pull_upstream_event(): Gst.Event
    /**
     * Pushes a #GstBuffer on the #GstHarness srcpad. The standard way of
     * interacting with an harnessed element.
     * 
     * MT safe.
     * @param buffer a #GstBuffer to push
     */
    push(buffer: Gst.Buffer): Gst.FlowReturn
    /**
     * Basically a gst_harness_push and a gst_harness_pull in one line. Reflects
     * the fact that you often want to do exactly this in your test: Push one buffer
     * in, and inspect the outcome.
     * 
     * MT safe.
     * @param buffer a #GstBuffer to push
     */
    push_and_pull(buffer: Gst.Buffer): Gst.Buffer
    /**
     * Pushes an #GstEvent on the #GstHarness srcpad.
     * 
     * MT safe.
     * @param event a #GstEvent to push
     */
    push_event(event: Gst.Event): boolean
    /**
     * Transfer data from the src-#GstHarness to the main-#GstHarness. It consists
     * of 4 steps:
     * 1: Make sure the src is started. (see: gst_harness_play)
     * 2: Crank the clock (see: gst_harness_crank_single_clock_wait)
     * 3: Pull a #GstBuffer from the src-#GstHarness (see: gst_harness_pull)
     * 4: Push the same #GstBuffer into the main-#GstHarness (see: gst_harness_push)
     * 
     * MT safe.
     */
    push_from_src(): Gst.FlowReturn
    /**
     * Transfer one #GstBuffer from the main-#GstHarness to the sink-#GstHarness.
     * See gst_harness_push_from_src for details.
     * 
     * MT safe.
     */
    push_to_sink(): Gst.FlowReturn
    /**
     * Pushes an #GstEvent on the #GstHarness sinkpad.
     * 
     * MT safe.
     * @param event a #GstEvent to push
     */
    push_upstream_event(event: Gst.Event): boolean
    /**
     * Get the min latency reported by any harnessed #GstElement.
     * 
     * MT safe.
     */
    query_latency(): Gst.ClockTime
    /**
     * Setting this will make the harness block in the chain-function, and
     * then release when gst_harness_pull() or gst_harness_try_pull() is called.
     * Can be useful when wanting to control a src-element that is not implementing
     * gst_clock_id_wait() so it can't be controlled by the #GstTestClock, since
     * it otherwise would produce buffers as fast as possible.
     * 
     * MT safe.
     */
    set_blocking_push_mode(): void
    /**
     * Sets the `GstHarness` srcpad and sinkpad caps.
     * 
     * MT safe.
     * @param in_ a #GstCaps to set on the harness srcpad
     * @param out a #GstCaps to set on the harness sinkpad
     */
    set_caps(in_: Gst.Caps, out: Gst.Caps): void
    /**
     * Sets the `GstHarness` srcpad and sinkpad caps using strings.
     * 
     * MT safe.
     * @param in_ a `gchar` describing a #GstCaps to set on the harness srcpad
     * @param out a `gchar` describing a #GstCaps to set on the harness sinkpad
     */
    set_caps_str(in_: string, out: string): void
    /**
     * When set to %TRUE, instead of placing the buffers arriving from the harnessed
     * #GstElement inside the sinkpads #GAsyncQueue, they are instead unreffed.
     * 
     * MT safe.
     * @param drop_buffers a #gboolean specifying to drop outgoing buffers or not
     */
    set_drop_buffers(drop_buffers: boolean): void
    /**
     * As a convenience, a src-harness will forward %GST_EVENT_STREAM_START,
     * %GST_EVENT_CAPS and %GST_EVENT_SEGMENT to the main-harness if forwarding
     * is enabled, and forward any sticky-events from the main-harness to
     * the sink-harness. It will also forward the %GST_QUERY_ALLOCATION.
     * 
     * If forwarding is disabled, the user will have to either manually push
     * these events from the src-harness using gst_harness_src_push_event(), or
     * create and push them manually. While this will allow full control and
     * inspection of these events, for the most cases having forwarding enabled
     * will be sufficient when writing a test where the src-harness' main function
     * is providing data for the main-harness.
     * 
     * Forwarding is enabled by default.
     * 
     * MT safe.
     * @param forwarding a #gboolean to enable/disable forwarding
     */
    set_forwarding(forwarding: boolean): void
    /**
     * Sets the `allocator` and `params` to propose when receiving an allocation
     * query.
     * 
     * MT safe.
     * @param allocator a #GstAllocator
     * @param params a #GstAllocationParams
     */
    set_propose_allocator(allocator: Gst.Allocator | null, params: Gst.AllocationParams | null): void
    /**
     * Sets the `GstHarness` sinkpad caps.
     * 
     * MT safe.
     * @param caps a #GstCaps to set on the harness sinkpad
     */
    set_sink_caps(caps: Gst.Caps): void
    /**
     * Sets the `GstHarness` sinkpad caps using a string.
     * 
     * MT safe.
     * @param str a `gchar` describing a #GstCaps to set on the harness sinkpad
     */
    set_sink_caps_str(str: string): void
    /**
     * Sets the `GstHarness` srcpad caps. This must be done before any buffers
     * can legally be pushed from the harness to the element.
     * 
     * MT safe.
     * @param caps a #GstCaps to set on the harness srcpad
     */
    set_src_caps(caps: Gst.Caps): void
    /**
     * Sets the `GstHarness` srcpad caps using a string. This must be done before
     * any buffers can legally be pushed from the harness to the element.
     * 
     * MT safe.
     * @param str a `gchar` describing a #GstCaps to set on the harness srcpad
     */
    set_src_caps_str(str: string): void
    /**
     * Advance the #GstTestClock to a specific time.
     * 
     * MT safe.
     * @param time a #GstClockTime to advance the clock to
     */
    set_time(time: Gst.ClockTime): boolean
    /**
     * Sets the min latency reported by #GstHarness when receiving a latency-query
     * @param latency a #GstClockTime specifying the latency
     */
    set_upstream_latency(latency: Gst.ClockTime): void
    /**
     * Convenience that calls gst_harness_push_to_sink `pushes` number of times.
     * Will abort the pushing if any one push fails.
     * 
     * MT safe.
     * @param pushes a #gint with the number of calls to gst_harness_push_to_sink
     */
    sink_push_many(pushes: number): Gst.FlowReturn
    /**
     * Transfer data from the src-#GstHarness to the main-#GstHarness. Similar to
     * gst_harness_push_from_src, this variant allows you to specify how many cranks
     * and how many pushes to perform. This can be useful for both moving a lot
     * of data at the same time, as well as cases when one crank does not equal one
     * buffer to push and v.v.
     * 
     * MT safe.
     * @param cranks a #gint with the number of calls to gst_harness_crank_single_clock_wait
     * @param pushes a #gint with the number of calls to gst_harness_push
     */
    src_crank_and_push_many(cranks: number, pushes: number): Gst.FlowReturn
    /**
     * Similar to what gst_harness_src_push does with #GstBuffers, this transfers
     * a #GstEvent from the src-#GstHarness to the main-#GstHarness. Note that
     * some #GstEvents are being transferred automagically. Look at sink_forward_pad
     * for details.
     * 
     * MT safe.
     */
    src_push_event(): boolean
    /**
     * Pulls all pending data from the harness and returns it as a single buffer.
     */
    take_all_data_as_buffer(): Gst.Buffer
    /**
     * Pulls all pending data from the harness and returns it as a single #GBytes.
     */
    take_all_data(): GLib.Bytes
    /**
     * Tears down a `GstHarness,` freeing all resources allocated using it.
     * 
     * MT safe.
     */
    teardown(): void
    /**
     * Pulls a #GstBuffer from the #GAsyncQueue on the #GstHarness sinkpad. Unlike
     * gst_harness_pull this will not wait for any buffers if not any are present,
     * and return %NULL straight away.
     * 
     * MT safe.
     */
    try_pull(): Gst.Buffer
    /**
     * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness sinkpad.
     * See gst_harness_try_pull for details.
     * 
     * MT safe.
     */
    try_pull_event(): Gst.Event
    /**
     * Pulls an #GstEvent from the #GAsyncQueue on the #GstHarness srcpad.
     * See gst_harness_try_pull for details.
     * 
     * MT safe.
     */
    try_pull_upstream_event(): Gst.Event
    /**
     * The number of #GstEvents currently in the #GstHarness srcpad #GAsyncQueue
     * 
     * MT safe.
     */
    upstream_events_in_queue(): number
    /**
     * The total number of #GstEvents that has arrived on the #GstHarness srcpad
     * This number includes events handled by the harness as well as events
     * that have already been pulled out.
     * 
     * MT safe.
     */
    upstream_events_received(): number
    /**
     * Sets the system #GstClock on the `GstHarness` #GstElement
     * 
     * MT safe.
     */
    use_systemclock(): void
    /**
     * Sets the #GstTestClock on the #GstHarness #GstElement
     * 
     * MT safe.
     */
    use_testclock(): void
    /**
     * Waits for `timeout` seconds until `waits` number of #GstClockID waits is
     * registered with the #GstTestClock. Useful for writing deterministic tests,
     * where you want to make sure that an expected number of waits have been
     * reached.
     * 
     * MT safe.
     * @param waits a #guint describing the numbers of #GstClockID registered with the #GstTestClock
     * @param timeout a #guint describing how many seconds to wait for `waits` to be true
     */
    wait_for_clock_id_waits(waits: number, timeout: number): boolean
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Stop the running #GstHarnessThread
     * 
     * MT safe.
     * @param t a #GstHarnessThread
     */
    static stress_thread_stop(t: HarnessThread): number
}
export class HarnessPrivate {
    static name: string
}
/**
 * Opaque handle representing a GstHarness stress testing thread.
 */
export class HarnessThread {
    static name: string
}
/**
 * Opaque consistency checker handle.
 */
export class StreamConsistency {
    static name: string
}
/**
 * The class of a #GstTestClock, which has no virtual methods to override.
 */
export abstract class TestClockClass {
    /* Own fields of GstCheck-1.0.GstCheck.TestClockClass */
    /**
     * the parent class structure
     */
    parent_class: Gst.ClockClass
    static name: string
}
export class TestClockPrivate {
    static name: string
}