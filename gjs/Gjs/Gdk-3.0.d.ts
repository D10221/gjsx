/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdk-3.0
 */

import type * as Gjs from './Gjs';
import type * as cairo from './cairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';

/**
 * An enumeration describing the way in which a device
 * axis (valuator) maps onto the predefined valuator
 * types that GTK+ understands.
 * 
 * Note that the X and Y axes are not really needed; pointer devices
 * report their location via the x/y members of events regardless. Whether
 * X and Y are present as axes depends on the GDK backend.
 */
export enum AxisUse {
    /**
     * the axis is ignored.
     */
    IGNORE,
    /**
     * the axis is used as the x axis.
     */
    X,
    /**
     * the axis is used as the y axis.
     */
    Y,
    /**
     * the axis is used for pressure information.
     */
    PRESSURE,
    /**
     * the axis is used for x tilt information.
     */
    XTILT,
    /**
     * the axis is used for y tilt information.
     */
    YTILT,
    /**
     * the axis is used for wheel information.
     */
    WHEEL,
    /**
     * the axis is used for pen/tablet distance information. (Since: 3.22)
     */
    DISTANCE,
    /**
     * the axis is used for pen rotation information. (Since: 3.22)
     */
    ROTATION,
    /**
     * the axis is used for pen slider information. (Since: 3.22)
     */
    SLIDER,
    /**
     * a constant equal to the numerically highest axis value.
     */
    LAST,
}
/**
 * A set of values describing the possible byte-orders
 * for storing pixel values in memory.
 */
export enum ByteOrder {
    /**
     * The values are stored with the least-significant byte
     *   first. For instance, the 32-bit value 0xffeecc would be stored
     *   in memory as 0xcc, 0xee, 0xff, 0x00.
     */
    LSB_FIRST,
    /**
     * The values are stored with the most-significant byte
     *   first. For instance, the 32-bit value 0xffeecc would be stored
     *   in memory as 0x00, 0xff, 0xee, 0xcc.
     */
    MSB_FIRST,
}
/**
 * Specifies the crossing mode for #GdkEventCrossing.
 */
export enum CrossingMode {
    /**
     * crossing because of pointer motion.
     */
    NORMAL,
    /**
     * crossing because a grab is activated.
     */
    GRAB,
    /**
     * crossing because a grab is deactivated.
     */
    UNGRAB,
    /**
     * crossing because a GTK+ grab is activated.
     */
    GTK_GRAB,
    /**
     * crossing because a GTK+ grab is deactivated.
     */
    GTK_UNGRAB,
    /**
     * crossing because a GTK+ widget changed
     *   state (e.g. sensitivity).
     */
    STATE_CHANGED,
    /**
     * crossing because a touch sequence has begun,
     *   this event is synthetic as the pointer might have not left the window.
     */
    TOUCH_BEGIN,
    /**
     * crossing because a touch sequence has ended,
     *   this event is synthetic as the pointer might have not left the window.
     */
    TOUCH_END,
    /**
     * crossing because of a device switch (i.e.
     *   a mouse taking control of the pointer after a touch device), this event
     *   is synthetic as the pointer didn’t leave the window.
     */
    DEVICE_SWITCH,
}
/**
 * Predefined cursors.
 * 
 * Note that these IDs are directly taken from the X cursor font, and many
 * of these cursors are either not useful, or are not available on other platforms.
 * 
 * The recommended way to create cursors is to use gdk_cursor_new_from_name().
 */
export enum CursorType {
    /**
     * ![](X_cursor.png)
     */
    X_CURSOR,
    /**
     * ![](arrow.png)
     */
    ARROW,
    /**
     * ![](based_arrow_down.png)
     */
    BASED_ARROW_DOWN,
    /**
     * ![](based_arrow_up.png)
     */
    BASED_ARROW_UP,
    /**
     * ![](boat.png)
     */
    BOAT,
    /**
     * ![](bogosity.png)
     */
    BOGOSITY,
    /**
     * ![](bottom_left_corner.png)
     */
    BOTTOM_LEFT_CORNER,
    /**
     * ![](bottom_right_corner.png)
     */
    BOTTOM_RIGHT_CORNER,
    /**
     * ![](bottom_side.png)
     */
    BOTTOM_SIDE,
    /**
     * ![](bottom_tee.png)
     */
    BOTTOM_TEE,
    /**
     * ![](box_spiral.png)
     */
    BOX_SPIRAL,
    /**
     * ![](center_ptr.png)
     */
    CENTER_PTR,
    /**
     * ![](circle.png)
     */
    CIRCLE,
    /**
     * ![](clock.png)
     */
    CLOCK,
    /**
     * ![](coffee_mug.png)
     */
    COFFEE_MUG,
    /**
     * ![](cross.png)
     */
    CROSS,
    /**
     * ![](cross_reverse.png)
     */
    CROSS_REVERSE,
    /**
     * ![](crosshair.png)
     */
    CROSSHAIR,
    /**
     * ![](diamond_cross.png)
     */
    DIAMOND_CROSS,
    /**
     * ![](dot.png)
     */
    DOT,
    /**
     * ![](dotbox.png)
     */
    DOTBOX,
    /**
     * ![](double_arrow.png)
     */
    DOUBLE_ARROW,
    /**
     * ![](draft_large.png)
     */
    DRAFT_LARGE,
    /**
     * ![](draft_small.png)
     */
    DRAFT_SMALL,
    /**
     * ![](draped_box.png)
     */
    DRAPED_BOX,
    /**
     * ![](exchange.png)
     */
    EXCHANGE,
    /**
     * ![](fleur.png)
     */
    FLEUR,
    /**
     * ![](gobbler.png)
     */
    GOBBLER,
    /**
     * ![](gumby.png)
     */
    GUMBY,
    /**
     * ![](hand1.png)
     */
    HAND1,
    /**
     * ![](hand2.png)
     */
    HAND2,
    /**
     * ![](heart.png)
     */
    HEART,
    /**
     * ![](icon.png)
     */
    ICON,
    /**
     * ![](iron_cross.png)
     */
    IRON_CROSS,
    /**
     * ![](left_ptr.png)
     */
    LEFT_PTR,
    /**
     * ![](left_side.png)
     */
    LEFT_SIDE,
    /**
     * ![](left_tee.png)
     */
    LEFT_TEE,
    /**
     * ![](leftbutton.png)
     */
    LEFTBUTTON,
    /**
     * ![](ll_angle.png)
     */
    LL_ANGLE,
    /**
     * ![](lr_angle.png)
     */
    LR_ANGLE,
    /**
     * ![](man.png)
     */
    MAN,
    /**
     * ![](middlebutton.png)
     */
    MIDDLEBUTTON,
    /**
     * ![](mouse.png)
     */
    MOUSE,
    /**
     * ![](pencil.png)
     */
    PENCIL,
    /**
     * ![](pirate.png)
     */
    PIRATE,
    /**
     * ![](plus.png)
     */
    PLUS,
    /**
     * ![](question_arrow.png)
     */
    QUESTION_ARROW,
    /**
     * ![](right_ptr.png)
     */
    RIGHT_PTR,
    /**
     * ![](right_side.png)
     */
    RIGHT_SIDE,
    /**
     * ![](right_tee.png)
     */
    RIGHT_TEE,
    /**
     * ![](rightbutton.png)
     */
    RIGHTBUTTON,
    /**
     * ![](rtl_logo.png)
     */
    RTL_LOGO,
    /**
     * ![](sailboat.png)
     */
    SAILBOAT,
    /**
     * ![](sb_down_arrow.png)
     */
    SB_DOWN_ARROW,
    /**
     * ![](sb_h_double_arrow.png)
     */
    SB_H_DOUBLE_ARROW,
    /**
     * ![](sb_left_arrow.png)
     */
    SB_LEFT_ARROW,
    /**
     * ![](sb_right_arrow.png)
     */
    SB_RIGHT_ARROW,
    /**
     * ![](sb_up_arrow.png)
     */
    SB_UP_ARROW,
    /**
     * ![](sb_v_double_arrow.png)
     */
    SB_V_DOUBLE_ARROW,
    /**
     * ![](shuttle.png)
     */
    SHUTTLE,
    /**
     * ![](sizing.png)
     */
    SIZING,
    /**
     * ![](spider.png)
     */
    SPIDER,
    /**
     * ![](spraycan.png)
     */
    SPRAYCAN,
    /**
     * ![](star.png)
     */
    STAR,
    /**
     * ![](target.png)
     */
    TARGET,
    /**
     * ![](tcross.png)
     */
    TCROSS,
    /**
     * ![](top_left_arrow.png)
     */
    TOP_LEFT_ARROW,
    /**
     * ![](top_left_corner.png)
     */
    TOP_LEFT_CORNER,
    /**
     * ![](top_right_corner.png)
     */
    TOP_RIGHT_CORNER,
    /**
     * ![](top_side.png)
     */
    TOP_SIDE,
    /**
     * ![](top_tee.png)
     */
    TOP_TEE,
    /**
     * ![](trek.png)
     */
    TREK,
    /**
     * ![](ul_angle.png)
     */
    UL_ANGLE,
    /**
     * ![](umbrella.png)
     */
    UMBRELLA,
    /**
     * ![](ur_angle.png)
     */
    UR_ANGLE,
    /**
     * ![](watch.png)
     */
    WATCH,
    /**
     * ![](xterm.png)
     */
    XTERM,
    /**
     * last cursor type
     */
    LAST_CURSOR,
    /**
     * Blank cursor. Since 2.16
     */
    BLANK_CURSOR,
    /**
     * type of cursors constructed with
     *   gdk_cursor_new_from_pixbuf()
     */
    CURSOR_IS_PIXMAP,
}
/**
 * A pad feature.
 */
export enum DevicePadFeature {
    /**
     * a button
     */
    BUTTON,
    /**
     * a ring-shaped interactive area
     */
    RING,
    /**
     * a straight interactive area
     */
    STRIP,
}
/**
 * Indicates the specific type of tool being used being a tablet. Such as an
 * airbrush, pencil, etc.
 */
export enum DeviceToolType {
    /**
     * Tool is of an unknown type.
     */
    UNKNOWN,
    /**
     * Tool is a standard tablet stylus.
     */
    PEN,
    /**
     * Tool is standard tablet eraser.
     */
    ERASER,
    /**
     * Tool is a brush stylus.
     */
    BRUSH,
    /**
     * Tool is a pencil stylus.
     */
    PENCIL,
    /**
     * Tool is an airbrush stylus.
     */
    AIRBRUSH,
    /**
     * Tool is a mouse.
     */
    MOUSE,
    /**
     * Tool is a lens cursor.
     */
    LENS,
}
/**
 * Indicates the device type. See [above][GdkDeviceManager.description]
 * for more information about the meaning of these device types.
 */
export enum DeviceType {
    /**
     * Device is a master (or virtual) device. There will
     *                          be an associated focus indicator on the screen.
     */
    MASTER,
    /**
     * Device is a slave (or physical) device.
     */
    SLAVE,
    /**
     * Device is a physical device, currently not attached to
     *                            any virtual device.
     */
    FLOATING,
}
/**
 * Used in #GdkDragContext to the reason of a cancelled DND operation.
 */
export enum DragCancelReason {
    /**
     * There is no suitable drop target.
     */
    NO_TARGET,
    /**
     * Drag cancelled by the user
     */
    USER_CANCELLED,
    /**
     * Unspecified error.
     */
    ERROR,
}
/**
 * Used in #GdkDragContext to indicate the protocol according to
 * which DND is done.
 */
export enum DragProtocol {
    /**
     * no protocol.
     */
    NONE,
    /**
     * The Motif DND protocol. No longer supported
     */
    MOTIF,
    /**
     * The Xdnd protocol.
     */
    XDND,
    /**
     * An extension to the Xdnd protocol for
     *  unclaimed root window drops.
     */
    ROOTWIN,
    /**
     * The simple WM_DROPFILES protocol.
     */
    WIN32_DROPFILES,
    /**
     * The complex OLE2 DND protocol (not implemented).
     */
    OLE2,
    /**
     * Intra-application DND.
     */
    LOCAL,
    /**
     * Wayland DND protocol.
     */
    WAYLAND,
}
/**
 * Specifies the type of the event.
 * 
 * Do not confuse these events with the signals that GTK+ widgets emit.
 * Although many of these events result in corresponding signals being emitted,
 * the events are often transformed or filtered along the way.
 * 
 * In some language bindings, the values %GDK_2BUTTON_PRESS and
 * %GDK_3BUTTON_PRESS would translate into something syntactically
 * invalid (eg `Gdk.EventType.2ButtonPress`, where a
 * symbol is not allowed to start with a number). In that case, the
 * aliases %GDK_DOUBLE_BUTTON_PRESS and %GDK_TRIPLE_BUTTON_PRESS can
 * be used instead.
 */
export enum EventType {
    /**
     * a special code to indicate a null event.
     */
    NOTHING,
    /**
     * the window manager has requested that the toplevel window be
     *   hidden or destroyed, usually when the user clicks on a special icon in the
     *   title bar.
     */
    DELETE,
    /**
     * the window has been destroyed.
     */
    DESTROY,
    /**
     * all or part of the window has become visible and needs to be
     *   redrawn.
     */
    EXPOSE,
    /**
     * the pointer (usually a mouse) has moved.
     */
    MOTION_NOTIFY,
    /**
     * a mouse button has been pressed.
     */
    BUTTON_PRESS,
    /**
     * a mouse button has been double-clicked (clicked twice
     *   within a short period of time). Note that each click also generates a
     *   %GDK_BUTTON_PRESS event.
     */
    TODO_2BUTTON_PRESS,
    /**
     * alias for %GDK_2BUTTON_PRESS, added in 3.6.
     */
    DOUBLE_BUTTON_PRESS,
    /**
     * a mouse button has been clicked 3 times in a short period
     *   of time. Note that each click also generates a %GDK_BUTTON_PRESS event.
     */
    TODO_3BUTTON_PRESS,
    /**
     * alias for %GDK_3BUTTON_PRESS, added in 3.6.
     */
    TRIPLE_BUTTON_PRESS,
    /**
     * a mouse button has been released.
     */
    BUTTON_RELEASE,
    /**
     * a key has been pressed.
     */
    KEY_PRESS,
    /**
     * a key has been released.
     */
    KEY_RELEASE,
    /**
     * the pointer has entered the window.
     */
    ENTER_NOTIFY,
    /**
     * the pointer has left the window.
     */
    LEAVE_NOTIFY,
    /**
     * the keyboard focus has entered or left the window.
     */
    FOCUS_CHANGE,
    /**
     * the size, position or stacking order of the window has changed.
     *   Note that GTK+ discards these events for %GDK_WINDOW_CHILD windows.
     */
    CONFIGURE,
    /**
     * the window has been mapped.
     */
    MAP,
    /**
     * the window has been unmapped.
     */
    UNMAP,
    /**
     * a property on the window has been changed or deleted.
     */
    PROPERTY_NOTIFY,
    /**
     * the application has lost ownership of a selection.
     */
    SELECTION_CLEAR,
    /**
     * another application has requested a selection.
     */
    SELECTION_REQUEST,
    /**
     * a selection has been received.
     */
    SELECTION_NOTIFY,
    /**
     * an input device has moved into contact with a sensing
     *   surface (e.g. a touchscreen or graphics tablet).
     */
    PROXIMITY_IN,
    /**
     * an input device has moved out of contact with a sensing
     *   surface.
     */
    PROXIMITY_OUT,
    /**
     * the mouse has entered the window while a drag is in progress.
     */
    DRAG_ENTER,
    /**
     * the mouse has left the window while a drag is in progress.
     */
    DRAG_LEAVE,
    /**
     * the mouse has moved in the window while a drag is in
     *   progress.
     */
    DRAG_MOTION,
    /**
     * the status of the drag operation initiated by the window
     *   has changed.
     */
    DRAG_STATUS,
    /**
     * a drop operation onto the window has started.
     */
    DROP_START,
    /**
     * the drop operation initiated by the window has completed.
     */
    DROP_FINISHED,
    /**
     * a message has been received from another application.
     */
    CLIENT_EVENT,
    /**
     * the window visibility status has changed.
     */
    VISIBILITY_NOTIFY,
    /**
     * the scroll wheel was turned
     */
    SCROLL,
    /**
     * the state of a window has changed. See #GdkWindowState
     *   for the possible window states
     */
    WINDOW_STATE,
    /**
     * a setting has been modified.
     */
    SETTING,
    /**
     * the owner of a selection has changed. This event type
     *   was added in 2.6
     */
    OWNER_CHANGE,
    /**
     * a pointer or keyboard grab was broken. This event type
     *   was added in 2.8.
     */
    GRAB_BROKEN,
    /**
     * the content of the window has been changed. This event type
     *   was added in 2.14.
     */
    DAMAGE,
    /**
     * A new touch event sequence has just started. This event
     *   type was added in 3.4.
     */
    TOUCH_BEGIN,
    /**
     * A touch event sequence has been updated. This event type
     *   was added in 3.4.
     */
    TOUCH_UPDATE,
    /**
     * A touch event sequence has finished. This event type
     *   was added in 3.4.
     */
    TOUCH_END,
    /**
     * A touch event sequence has been canceled. This event type
     *   was added in 3.4.
     */
    TOUCH_CANCEL,
    /**
     * A touchpad swipe gesture event, the current state
     *   is determined by its phase field. This event type was added in 3.18.
     */
    TOUCHPAD_SWIPE,
    /**
     * A touchpad pinch gesture event, the current state
     *   is determined by its phase field. This event type was added in 3.18.
     */
    TOUCHPAD_PINCH,
    /**
     * A tablet pad button press event. This event type
     *   was added in 3.22.
     */
    PAD_BUTTON_PRESS,
    /**
     * A tablet pad button release event. This event type
     *   was added in 3.22.
     */
    PAD_BUTTON_RELEASE,
    /**
     * A tablet pad axis event from a "ring". This event type was
     *   added in 3.22.
     */
    PAD_RING,
    /**
     * A tablet pad axis event from a "strip". This event type was
     *   added in 3.22.
     */
    PAD_STRIP,
    /**
     * A tablet pad group mode change. This event type was
     *   added in 3.22.
     */
    PAD_GROUP_MODE,
    /**
     * marks the end of the GdkEventType enumeration. Added in 2.18
     */
    EVENT_LAST,
}
/**
 * Specifies the result of applying a #GdkFilterFunc to a native event.
 */
export enum FilterReturn {
    /**
     * event not handled, continue processing.
     */
    CONTINUE,
    /**
     * native event translated into a GDK event and stored
     *  in the `event` structure that was passed in.
     */
    TRANSLATE,
    /**
     * event handled, terminate processing.
     */
    REMOVE,
}
/**
 * Indicates which monitor (in a multi-head setup) a window should span over
 * when in fullscreen mode.
 */
export enum FullscreenMode {
    /**
     * Fullscreen on current monitor only.
     */
    CURRENT_MONITOR,
    /**
     * Span across all monitors when fullscreen.
     */
    ALL_MONITORS,
}
/**
 * Error enumeration for #GdkGLContext.
 */
export enum GLError {
    /**
     * OpenGL support is not available
     */
    NOT_AVAILABLE,
    /**
     * The requested visual format is not supported
     */
    UNSUPPORTED_FORMAT,
    /**
     * The requested profile is not supported
     */
    UNSUPPORTED_PROFILE,
}
/**
 * Defines how device grabs interact with other devices.
 */
export enum GrabOwnership {
    /**
     * All other devices’ events are allowed.
     */
    NONE,
    /**
     * Other devices’ events are blocked for the grab window.
     */
    WINDOW,
    /**
     * Other devices’ events are blocked for the whole application.
     */
    APPLICATION,
}
/**
 * Returned by gdk_device_grab(), gdk_pointer_grab() and gdk_keyboard_grab() to
 * indicate success or the reason for the failure of the grab attempt.
 */
export enum GrabStatus {
    /**
     * the resource was successfully grabbed.
     */
    SUCCESS,
    /**
     * the resource is actively grabbed by another client.
     */
    ALREADY_GRABBED,
    /**
     * the resource was grabbed more recently than the
     *  specified time.
     */
    INVALID_TIME,
    /**
     * the grab window or the `confine_to` window are not
     *  viewable.
     */
    NOT_VIEWABLE,
    /**
     * the resource is frozen by an active grab of another client.
     */
    FROZEN,
    /**
     * the grab failed for some other reason. Since 3.16
     */
    FAILED,
}
/**
 * Defines the reference point of a window and the meaning of coordinates
 * passed to gtk_window_move(). See gtk_window_move() and the "implementation
 * notes" section of the
 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
 * specification for more details.
 */
export enum Gravity {
    /**
     * the reference point is at the top left corner.
     */
    NORTH_WEST,
    /**
     * the reference point is in the middle of the top edge.
     */
    NORTH,
    /**
     * the reference point is at the top right corner.
     */
    NORTH_EAST,
    /**
     * the reference point is at the middle of the left edge.
     */
    WEST,
    /**
     * the reference point is at the center of the window.
     */
    CENTER,
    /**
     * the reference point is at the middle of the right edge.
     */
    EAST,
    /**
     * the reference point is at the lower left corner.
     */
    SOUTH_WEST,
    /**
     * the reference point is at the middle of the lower edge.
     */
    SOUTH,
    /**
     * the reference point is at the lower right corner.
     */
    SOUTH_EAST,
    /**
     * the reference point is at the top left corner of the
     *  window itself, ignoring window manager decorations.
     */
    STATIC,
}
/**
 * An enumeration that describes the mode of an input device.
 */
export enum InputMode {
    /**
     * the device is disabled and will not report any events.
     */
    DISABLED,
    /**
     * the device is enabled. The device’s coordinate space
     *                   maps to the entire screen.
     */
    SCREEN,
    /**
     * the device is enabled. The device’s coordinate space
     *                   is mapped to a single window. The manner in which this window
     *                   is chosen is undefined, but it will typically be the same
     *                   way in which the focus window for key events is determined.
     */
    WINDOW,
}
/**
 * An enumeration describing the type of an input device in general terms.
 */
export enum InputSource {
    /**
     * the device is a mouse. (This will be reported for the core
     *                    pointer, even if it is something else, such as a trackball.)
     */
    MOUSE,
    /**
     * the device is a stylus of a graphics tablet or similar device.
     */
    PEN,
    /**
     * the device is an eraser. Typically, this would be the other end
     *                     of a stylus on a graphics tablet.
     */
    ERASER,
    /**
     * the device is a graphics tablet “puck” or similar device.
     */
    CURSOR,
    /**
     * the device is a keyboard.
     */
    KEYBOARD,
    /**
     * the device is a direct-input touch device, such
     *     as a touchscreen or tablet. This device type has been added in 3.4.
     */
    TOUCHSCREEN,
    /**
     * the device is an indirect touch device, such
     *     as a touchpad. This device type has been added in 3.4.
     */
    TOUCHPAD,
    /**
     * the device is a trackpoint. This device type has been
     *     added in 3.22
     */
    TRACKPOINT,
    /**
     * the device is a "pad", a collection of buttons,
     *     rings and strips found in drawing tablets. This device type has been
     *     added in 3.22.
     */
    TABLET_PAD,
}
/**
 * This enum is used with gdk_keymap_get_modifier_mask()
 * in order to determine what modifiers the
 * currently used windowing system backend uses for particular
 * purposes. For example, on X11/Windows, the Control key is used for
 * invoking menu shortcuts (accelerators), whereas on Apple computers
 * it’s the Command key (which correspond to %GDK_CONTROL_MASK and
 * %GDK_MOD2_MASK, respectively).
 */
export enum ModifierIntent {
    /**
     * the primary modifier used to invoke
     *  menu accelerators.
     */
    PRIMARY_ACCELERATOR,
    /**
     * the modifier used to invoke context menus.
     *  Note that mouse button 3 always triggers context menus. When this modifier
     *  is not 0, it additionally triggers context menus when used with mouse button 1.
     */
    CONTEXT_MENU,
    /**
     * the modifier used to extend selections
     *  using `modifier`-click or `modifier`-cursor-key
     */
    EXTEND_SELECTION,
    /**
     * the modifier used to modify selections,
     *  which in most cases means toggling the clicked item into or out of the selection.
     */
    MODIFY_SELECTION,
    /**
     * when any of these modifiers is pressed, the
     *  key event cannot produce a symbol directly. This is meant to be used for
     *  input methods, and for use cases like typeahead search.
     */
    NO_TEXT_INPUT,
    /**
     * the modifier that switches between keyboard
     *  groups (AltGr on X11/Windows and Option/Alt on OS X).
     */
    SHIFT_GROUP,
    /**
     * The set of modifier masks accepted
     * as modifiers in accelerators. Needed because Command is mapped to MOD2 on
     * OSX, which is widely used, but on X11 MOD2 is NumLock and using that for a
     * mod key is problematic at best.
     * Ref: https://bugzilla.gnome.org/show_bug.cgi?id=736125.
     */
    DEFAULT_MOD_MASK,
}
/**
 * Specifies the kind of crossing for #GdkEventCrossing.
 * 
 * See the X11 protocol specification of LeaveNotify for
 * full details of crossing event generation.
 */
export enum NotifyType {
    /**
     * the window is entered from an ancestor or
     *   left towards an ancestor.
     */
    ANCESTOR,
    /**
     * the pointer moves between an ancestor and an
     *   inferior of the window.
     */
    VIRTUAL,
    /**
     * the window is entered from an inferior or
     *   left towards an inferior.
     */
    INFERIOR,
    /**
     * the window is entered from or left towards
     *   a window which is neither an ancestor nor an inferior.
     */
    NONLINEAR,
    /**
     * the pointer moves between two windows
     *   which are not ancestors of each other and the window is part of
     *   the ancestor chain between one of these windows and their least
     *   common ancestor.
     */
    NONLINEAR_VIRTUAL,
    /**
     * an unknown type of enter/leave event occurred.
     */
    UNKNOWN,
}
/**
 * Specifies why a selection ownership was changed.
 */
export enum OwnerChange {
    /**
     * some other app claimed the ownership
     */
    NEW_OWNER,
    /**
     * the window was destroyed
     */
    DESTROY,
    /**
     * the client was closed
     */
    CLOSE,
}
/**
 * Describes how existing data is combined with new data when
 * using gdk_property_change().
 */
export enum PropMode {
    /**
     * the new data replaces the existing data.
     */
    REPLACE,
    /**
     * the new data is prepended to the existing data.
     */
    PREPEND,
    /**
     * the new data is appended to the existing data.
     */
    APPEND,
}
/**
 * Specifies the type of a property change for a #GdkEventProperty.
 */
export enum PropertyState {
    /**
     * the property value was changed.
     */
    NEW_VALUE,
    /**
     * the property was deleted.
     */
    DELETE,
}
/**
 * Specifies the direction for #GdkEventScroll.
 */
export enum ScrollDirection {
    /**
     * the window is scrolled up.
     */
    UP,
    /**
     * the window is scrolled down.
     */
    DOWN,
    /**
     * the window is scrolled to the left.
     */
    LEFT,
    /**
     * the window is scrolled to the right.
     */
    RIGHT,
    /**
     * the scrolling is determined by the delta values
     *   in #GdkEventScroll. See gdk_event_get_scroll_deltas(). Since: 3.4
     */
    SMOOTH,
}
/**
 * Specifies the kind of modification applied to a setting in a
 * #GdkEventSetting.
 */
export enum SettingAction {
    /**
     * a setting was added.
     */
    NEW,
    /**
     * a setting was changed.
     */
    CHANGED,
    /**
     * a setting was deleted.
     */
    DELETED,
}
export enum Status {
    OK,
    ERROR,
    ERROR_PARAM,
    ERROR_FILE,
    ERROR_MEM,
}
/**
 * This enumeration describes how the red, green and blue components
 * of physical pixels on an output device are laid out.
 */
export enum SubpixelLayout {
    /**
     * The layout is not known
     */
    UNKNOWN,
    /**
     * Not organized in this way
     */
    NONE,
    /**
     * The layout is horizontal, the order is RGB
     */
    HORIZONTAL_RGB,
    /**
     * The layout is horizontal, the order is BGR
     */
    HORIZONTAL_BGR,
    /**
     * The layout is vertical, the order is RGB
     */
    VERTICAL_RGB,
    /**
     * The layout is vertical, the order is BGR
     */
    VERTICAL_BGR,
}
/**
 * Specifies the current state of a touchpad gesture. All gestures are
 * guaranteed to begin with an event with phase %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN,
 * followed by 0 or several events with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
 * 
 * A finished gesture may have 2 possible outcomes, an event with phase
 * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
 * considered successful, this should be used as the hint to perform any
 * permanent changes.
 * 
 * Cancelled gestures may be so for a variety of reasons, due to hardware
 * or the compositor, or due to the gesture recognition layers hinting the
 * gesture did not finish resolutely (eg. a 3rd finger being added during
 * a pinch gesture). In these cases, the last event will report the phase
 * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
 * to undo any visible/permanent changes that were done throughout the
 * progress of the gesture.
 * 
 * See also #GdkEventTouchpadSwipe and #GdkEventTouchpadPinch.
 */
export enum TouchpadGesturePhase {
    /**
     * The gesture has begun.
     */
    BEGIN,
    /**
     * The gesture has been updated.
     */
    UPDATE,
    /**
     * The gesture was finished, changes
     *   should be permanently applied.
     */
    END,
    /**
     * The gesture was cancelled, all
     *   changes should be undone.
     */
    CANCEL,
}
/**
 * Specifies the visiblity status of a window for a #GdkEventVisibility.
 */
export enum VisibilityState {
    /**
     * the window is completely visible.
     */
    UNOBSCURED,
    /**
     * the window is partially visible.
     */
    PARTIAL,
    /**
     * the window is not visible at all.
     */
    FULLY_OBSCURED,
}
/**
 * A set of values that describe the manner in which the pixel values
 * for a visual are converted into RGB values for display.
 */
export enum VisualType {
    /**
     * Each pixel value indexes a grayscale value
     *     directly.
     */
    STATIC_GRAY,
    /**
     * Each pixel is an index into a color map that
     *     maps pixel values into grayscale values. The color map can be
     *     changed by an application.
     */
    GRAYSCALE,
    /**
     * Each pixel value is an index into a predefined,
     *     unmodifiable color map that maps pixel values into RGB values.
     */
    STATIC_COLOR,
    /**
     * Each pixel is an index into a color map that
     *     maps pixel values into rgb values. The color map can be changed by
     *     an application.
     */
    PSEUDO_COLOR,
    /**
     * Each pixel value directly contains red, green,
     *     and blue components. Use gdk_visual_get_red_pixel_details(), etc,
     *     to obtain information about how the components are assembled into
     *     a pixel value.
     */
    TRUE_COLOR,
    /**
     * Each pixel value contains red, green, and blue
     *     components as for %GDK_VISUAL_TRUE_COLOR, but the components are
     *     mapped via a color table into the final output table instead of
     *     being converted directly.
     */
    DIRECT_COLOR,
}
/**
 * Determines a window edge or corner.
 */
export enum WindowEdge {
    /**
     * the top left corner.
     */
    NORTH_WEST,
    /**
     * the top edge.
     */
    NORTH,
    /**
     * the top right corner.
     */
    NORTH_EAST,
    /**
     * the left edge.
     */
    WEST,
    /**
     * the right edge.
     */
    EAST,
    /**
     * the lower left corner.
     */
    SOUTH_WEST,
    /**
     * the lower edge.
     */
    SOUTH,
    /**
     * the lower right corner.
     */
    SOUTH_EAST,
}
/**
 * Describes the kind of window.
 */
export enum WindowType {
    /**
     * root window; this window has no parent, covers the entire
     *  screen, and is created by the window system
     */
    ROOT,
    /**
     * toplevel window (used to implement #GtkWindow)
     */
    TOPLEVEL,
    /**
     * child window (used to implement e.g. #GtkEntry)
     */
    CHILD,
    /**
     * override redirect temporary window (used to implement
     *  #GtkMenu)
     */
    TEMP,
    /**
     * foreign window (see gdk_window_foreign_new())
     */
    FOREIGN,
    /**
     * offscreen window (see
     *  [Offscreen Windows][OFFSCREEN-WINDOWS]). Since 2.18
     */
    OFFSCREEN,
    /**
     * subsurface-based window; This window is visually
     *  tied to a toplevel, and is moved/stacked with it. Currently this window
     *  type is only implemented in Wayland. Since 3.14
     */
    SUBSURFACE,
}
/**
 * These are hints for the window manager that indicate what type of function
 * the window has. The window manager can use this when determining decoration
 * and behaviour of the window. The hint must be set before mapping the window.
 * 
 * See the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
 * specification for more details about window types.
 */
export enum WindowTypeHint {
    /**
     * Normal toplevel window.
     */
    NORMAL,
    /**
     * Dialog window.
     */
    DIALOG,
    /**
     * Window used to implement a menu; GTK+ uses
     *  this hint only for torn-off menus, see #GtkTearoffMenuItem.
     */
    MENU,
    /**
     * Window used to implement toolbars.
     */
    TOOLBAR,
    /**
     * Window used to display a splash
     *  screen during application startup.
     */
    SPLASHSCREEN,
    /**
     * Utility windows which are not detached
     *  toolbars or dialogs.
     */
    UTILITY,
    /**
     * Used for creating dock or panel windows.
     */
    DOCK,
    /**
     * Used for creating the desktop background
     *  window.
     */
    DESKTOP,
    /**
     * A menu that belongs to a menubar.
     */
    DROPDOWN_MENU,
    /**
     * A menu that does not belong to a menubar,
     *  e.g. a context menu.
     */
    POPUP_MENU,
    /**
     * A tooltip.
     */
    TOOLTIP,
    /**
     * A notification - typically a “bubble”
     *  that belongs to a status icon.
     */
    NOTIFICATION,
    /**
     * A popup from a combo box.
     */
    COMBO,
    /**
     * A window that is used to implement a DND cursor.
     */
    DND,
}
/**
 * `GDK_INPUT_OUTPUT` windows are the standard kind of window you might expect.
 * Such windows receive events and are also displayed on screen.
 * `GDK_INPUT_ONLY` windows are invisible; they are usually placed above other
 * windows in order to trap or filter the events. You can’t draw on
 * `GDK_INPUT_ONLY` windows.
 */
export enum WindowWindowClass {
    /**
     * window for graphics and events
     */
    INPUT_OUTPUT,
    /**
     * window for events only
     */
    INPUT_ONLY,
}
/**
 * Positioning hints for aligning a window relative to a rectangle.
 * 
 * These hints determine how the window should be positioned in the case that
 * the window would fall off-screen if placed in its ideal position.
 * 
 * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
 * %GDK_GRAVITY_NORTH_EAST and vice versa if the window extends beyond the left
 * or right edges of the monitor.
 * 
 * If %GDK_ANCHOR_SLIDE_X is set, the window can be shifted horizontally to fit
 * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the window can be shrunken
 * horizontally to fit.
 * 
 * In general, when multiple flags are set, flipping should take precedence over
 * sliding, which should take precedence over resizing.
 */
export enum AnchorHints {
    /**
     * allow flipping anchors horizontally
     */
    FLIP_X,
    /**
     * allow flipping anchors vertically
     */
    FLIP_Y,
    /**
     * allow sliding window horizontally
     */
    SLIDE_X,
    /**
     * allow sliding window vertically
     */
    SLIDE_Y,
    /**
     * allow resizing window horizontally
     */
    RESIZE_X,
    /**
     * allow resizing window vertically
     */
    RESIZE_Y,
    /**
     * allow flipping anchors on both axes
     */
    FLIP,
    /**
     * allow sliding window on both axes
     */
    SLIDE,
    /**
     * allow resizing window on both axes
     */
    RESIZE,
}
/**
 * Flags describing the current capabilities of a device/tool.
 */
export enum AxisFlags {
    /**
     * X axis is present
     */
    X,
    /**
     * Y axis is present
     */
    Y,
    /**
     * Pressure axis is present
     */
    PRESSURE,
    /**
     * X tilt axis is present
     */
    XTILT,
    /**
     * Y tilt axis is present
     */
    YTILT,
    /**
     * Wheel axis is present
     */
    WHEEL,
    /**
     * Distance axis is present
     */
    DISTANCE,
    /**
     * Z-axis rotation is present
     */
    ROTATION,
    /**
     * Slider axis is present
     */
    SLIDER,
}
/**
 * Used in #GdkDragContext to indicate what the destination
 * should do with the dropped data.
 */
export enum DragAction {
    /**
     * Means nothing, and should not be used.
     */
    DEFAULT,
    /**
     * Copy the data.
     */
    COPY,
    /**
     * Move the data, i.e. first copy it, then delete
     *  it from the source using the DELETE target of the X selection protocol.
     */
    MOVE,
    /**
     * Add a link to the data. Note that this is only
     *  useful if source and destination agree on what it means.
     */
    LINK,
    /**
     * Special action which tells the source that the
     *  destination will do something that the source doesn’t understand.
     */
    PRIVATE,
    /**
     * Ask the user what to do with the data.
     */
    ASK,
}
/**
 * A set of bit-flags to indicate which events a window is to receive.
 * Most of these masks map onto one or more of the #GdkEventType event types
 * above.
 * 
 * See the [input handling overview][chap-input-handling] for details of
 * [event masks][event-masks] and [event propagation][event-propagation].
 * 
 * %GDK_POINTER_MOTION_HINT_MASK is deprecated. It is a special mask
 * to reduce the number of %GDK_MOTION_NOTIFY events received. When using
 * %GDK_POINTER_MOTION_HINT_MASK, fewer %GDK_MOTION_NOTIFY events will
 * be sent, some of which are marked as a hint (the is_hint member is
 * %TRUE). To receive more motion events after a motion hint event,
 * the application needs to asks for more, by calling
 * gdk_event_request_motions().
 * 
 * Since GTK 3.8, motion events are already compressed by default, independent
 * of this mechanism. This compression can be disabled with
 * gdk_window_set_event_compression(). See the documentation of that function
 * for details.
 * 
 * If %GDK_TOUCH_MASK is enabled, the window will receive touch events
 * from touch-enabled devices. Those will come as sequences of #GdkEventTouch
 * with type %GDK_TOUCH_UPDATE, enclosed by two events with
 * type %GDK_TOUCH_BEGIN and %GDK_TOUCH_END (or %GDK_TOUCH_CANCEL).
 * gdk_event_get_event_sequence() returns the event sequence for these
 * events, so different sequences may be distinguished.
 */
export enum EventMask {
    /**
     * receive expose events
     */
    EXPOSURE_MASK,
    /**
     * receive all pointer motion events
     */
    POINTER_MOTION_MASK,
    /**
     * deprecated. see the explanation above
     */
    POINTER_MOTION_HINT_MASK,
    /**
     * receive pointer motion events while any button is pressed
     */
    BUTTON_MOTION_MASK,
    /**
     * receive pointer motion events while 1 button is pressed
     */
    BUTTON1_MOTION_MASK,
    /**
     * receive pointer motion events while 2 button is pressed
     */
    BUTTON2_MOTION_MASK,
    /**
     * receive pointer motion events while 3 button is pressed
     */
    BUTTON3_MOTION_MASK,
    /**
     * receive button press events
     */
    BUTTON_PRESS_MASK,
    /**
     * receive button release events
     */
    BUTTON_RELEASE_MASK,
    /**
     * receive key press events
     */
    KEY_PRESS_MASK,
    /**
     * receive key release events
     */
    KEY_RELEASE_MASK,
    /**
     * receive window enter events
     */
    ENTER_NOTIFY_MASK,
    /**
     * receive window leave events
     */
    LEAVE_NOTIFY_MASK,
    /**
     * receive focus change events
     */
    FOCUS_CHANGE_MASK,
    /**
     * receive events about window configuration change
     */
    STRUCTURE_MASK,
    /**
     * receive property change events
     */
    PROPERTY_CHANGE_MASK,
    /**
     * receive visibility change events
     */
    VISIBILITY_NOTIFY_MASK,
    /**
     * receive proximity in events
     */
    PROXIMITY_IN_MASK,
    /**
     * receive proximity out events
     */
    PROXIMITY_OUT_MASK,
    /**
     * receive events about window configuration changes of
     *   child windows
     */
    SUBSTRUCTURE_MASK,
    /**
     * receive scroll events
     */
    SCROLL_MASK,
    /**
     * receive touch events. Since 3.4
     */
    TOUCH_MASK,
    /**
     * receive smooth scrolling events. Since 3.4
     */
    SMOOTH_SCROLL_MASK,
    /**
     * receive touchpad gesture events. Since 3.18
     */
    TOUCHPAD_GESTURE_MASK,
    /**
     * receive tablet pad events. Since 3.22
     */
    TABLET_PAD_MASK,
    /**
     * the combination of all the above event masks.
     */
    ALL_EVENTS_MASK,
}
/**
 * #GdkFrameClockPhase is used to represent the different paint clock
 * phases that can be requested. The elements of the enumeration
 * correspond to the signals of #GdkFrameClock.
 */
export enum FrameClockPhase {
    /**
     * no phase
     */
    NONE,
    /**
     * corresponds to GdkFrameClock::flush-events. Should not be handled by applications.
     */
    FLUSH_EVENTS,
    /**
     * corresponds to GdkFrameClock::before-paint. Should not be handled by applications.
     */
    BEFORE_PAINT,
    /**
     * corresponds to GdkFrameClock::update.
     */
    UPDATE,
    /**
     * corresponds to GdkFrameClock::layout.
     */
    LAYOUT,
    /**
     * corresponds to GdkFrameClock::paint.
     */
    PAINT,
    /**
     * corresponds to GdkFrameClock::resume-events. Should not be handled by applications.
     */
    RESUME_EVENTS,
    /**
     * corresponds to GdkFrameClock::after-paint. Should not be handled by applications.
     */
    AFTER_PAINT,
}
/**
 * A set of bit-flags to indicate the state of modifier keys and mouse buttons
 * in various event types. Typical modifier keys are Shift, Control, Meta,
 * Super, Hyper, Alt, Compose, Apple, CapsLock or ShiftLock.
 * 
 * Like the X Window System, GDK supports 8 modifier keys and 5 mouse buttons.
 * 
 * Since 2.10, GDK recognizes which of the Meta, Super or Hyper keys are mapped
 * to Mod2 - Mod5, and indicates this by setting %GDK_SUPER_MASK,
 * %GDK_HYPER_MASK or %GDK_META_MASK in the state field of key events.
 * 
 * Note that GDK may add internal values to events which include
 * reserved values such as %GDK_MODIFIER_RESERVED_13_MASK.  Your code
 * should preserve and ignore them.  You can use %GDK_MODIFIER_MASK to
 * remove all reserved values.
 * 
 * Also note that the GDK X backend interprets button press events for button
 * 4-7 as scroll events, so %GDK_BUTTON4_MASK and %GDK_BUTTON5_MASK will never
 * be set.
 */
export enum ModifierType {
    /**
     * the Shift key.
     */
    SHIFT_MASK,
    /**
     * a Lock key (depending on the modifier mapping of the
     *  X server this may either be CapsLock or ShiftLock).
     */
    LOCK_MASK,
    /**
     * the Control key.
     */
    CONTROL_MASK,
    /**
     * the fourth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier, but
     *  normally it is the Alt key).
     */
    MOD1_MASK,
    /**
     * the fifth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD2_MASK,
    /**
     * the sixth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD3_MASK,
    /**
     * the seventh modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD4_MASK,
    /**
     * the eighth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD5_MASK,
    /**
     * the first mouse button.
     */
    BUTTON1_MASK,
    /**
     * the second mouse button.
     */
    BUTTON2_MASK,
    /**
     * the third mouse button.
     */
    BUTTON3_MASK,
    /**
     * the fourth mouse button.
     */
    BUTTON4_MASK,
    /**
     * the fifth mouse button.
     */
    BUTTON5_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_13_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_14_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_15_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_16_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_17_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_18_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_19_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_20_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_21_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_22_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_23_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_24_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_25_MASK,
    /**
     * the Super modifier. Since 2.10
     */
    SUPER_MASK,
    /**
     * the Hyper modifier. Since 2.10
     */
    HYPER_MASK,
    /**
     * the Meta modifier. Since 2.10
     */
    META_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_29_MASK,
    /**
     * not used in GDK itself. GTK+ uses it to differentiate
     *  between (keyval, modifiers) pairs from key press and release events.
     */
    RELEASE_MASK,
    /**
     * a mask covering all modifier types.
     */
    MODIFIER_MASK,
}
/**
 * Flags describing the seat capabilities.
 */
export enum SeatCapabilities {
    /**
     * No input capabilities
     */
    NONE,
    /**
     * The seat has a pointer (e.g. mouse)
     */
    POINTER,
    /**
     * The seat has touchscreen(s) attached
     */
    TOUCH,
    /**
     * The seat has drawing tablet(s) attached
     */
    TABLET_STYLUS,
    /**
     * The seat has keyboard(s) attached
     */
    KEYBOARD,
    /**
     * The union of all pointing capabilities
     */
    ALL_POINTING,
    /**
     * The union of all capabilities
     */
    ALL,
}
/**
 * These are hints originally defined by the Motif toolkit.
 * The window manager can use them when determining how to decorate
 * the window. The hint must be set before mapping the window.
 */
export enum WMDecoration {
    /**
     * all decorations should be applied.
     */
    ALL,
    /**
     * a frame should be drawn around the window.
     */
    BORDER,
    /**
     * the frame should have resize handles.
     */
    RESIZEH,
    /**
     * a titlebar should be placed above the window.
     */
    TITLE,
    /**
     * a button for opening a menu should be included.
     */
    MENU,
    /**
     * a minimize button should be included.
     */
    MINIMIZE,
    /**
     * a maximize button should be included.
     */
    MAXIMIZE,
}
/**
 * These are hints originally defined by the Motif toolkit. The window manager
 * can use them when determining the functions to offer for the window. The
 * hint must be set before mapping the window.
 */
export enum WMFunction {
    /**
     * all functions should be offered.
     */
    ALL,
    /**
     * the window should be resizable.
     */
    RESIZE,
    /**
     * the window should be movable.
     */
    MOVE,
    /**
     * the window should be minimizable.
     */
    MINIMIZE,
    /**
     * the window should be maximizable.
     */
    MAXIMIZE,
    /**
     * the window should be closable.
     */
    CLOSE,
}
/**
 * Used to indicate which fields in the #GdkWindowAttr struct should be honored.
 * For example, if you filled in the “cursor” and “x” fields of #GdkWindowAttr,
 * pass “`GDK_WA_X` | `GDK_WA_CURSOR”` to gdk_window_new(). Fields in
 * #GdkWindowAttr not covered by a bit in this enum are required; for example,
 * the `width/``height,` `wclass,` and `window_type` fields are required, they have
 * no corresponding flag in #GdkWindowAttributesType.
 */
export enum WindowAttributesType {
    /**
     * Honor the title field
     */
    TITLE,
    /**
     * Honor the X coordinate field
     */
    X,
    /**
     * Honor the Y coordinate field
     */
    Y,
    /**
     * Honor the cursor field
     */
    CURSOR,
    /**
     * Honor the visual field
     */
    VISUAL,
    /**
     * Honor the wmclass_class and wmclass_name fields
     */
    WMCLASS,
    /**
     * Honor the override_redirect field
     */
    NOREDIR,
    /**
     * Honor the type_hint field
     */
    TYPE_HINT,
}
/**
 * Used to indicate which fields of a #GdkGeometry struct should be paid
 * attention to. Also, the presence/absence of `GDK_HINT_POS,`
 * `GDK_HINT_USER_POS,` and `GDK_HINT_USER_SIZE` is significant, though they don't
 * directly refer to #GdkGeometry fields. `GDK_HINT_USER_POS` will be set
 * automatically by #GtkWindow if you call gtk_window_move().
 * `GDK_HINT_USER_POS` and `GDK_HINT_USER_SIZE` should be set if the user
 * specified a size/position using a --geometry command-line argument;
 * gtk_window_parse_geometry() automatically sets these flags.
 */
export enum WindowHints {
    /**
     * indicates that the program has positioned the window
     */
    POS,
    /**
     * min size fields are set
     */
    MIN_SIZE,
    /**
     * max size fields are set
     */
    MAX_SIZE,
    /**
     * base size fields are set
     */
    BASE_SIZE,
    /**
     * aspect ratio fields are set
     */
    ASPECT,
    /**
     * resize increment fields are set
     */
    RESIZE_INC,
    /**
     * window gravity field is set
     */
    WIN_GRAVITY,
    /**
     * indicates that the window’s position was explicitly set
     *  by the user
     */
    USER_POS,
    /**
     * indicates that the window’s size was explicitly set by
     *  the user
     */
    USER_SIZE,
}
/**
 * Specifies the state of a toplevel window.
 */
export enum WindowState {
    /**
     * the window is not shown.
     */
    WITHDRAWN,
    /**
     * the window is minimized.
     */
    ICONIFIED,
    /**
     * the window is maximized.
     */
    MAXIMIZED,
    /**
     * the window is sticky.
     */
    STICKY,
    /**
     * the window is maximized without
     *   decorations.
     */
    FULLSCREEN,
    /**
     * the window is kept above other windows.
     */
    ABOVE,
    /**
     * the window is kept below other windows.
     */
    BELOW,
    /**
     * the window is presented as focused (with active decorations).
     */
    FOCUSED,
    /**
     * the window is in a tiled state, Since 3.10. Since 3.22.23, this
     *                          is deprecated in favor of per-edge information.
     */
    TILED,
    /**
     * whether the top edge is tiled, Since 3.22.23
     */
    TOP_TILED,
    /**
     * whether the top edge is resizable, Since 3.22.23
     */
    TOP_RESIZABLE,
    /**
     * whether the right edge is tiled, Since 3.22.23
     */
    RIGHT_TILED,
    /**
     * whether the right edge is resizable, Since 3.22.23
     */
    RIGHT_RESIZABLE,
    /**
     * whether the bottom edge is tiled, Since 3.22.23
     */
    BOTTOM_TILED,
    /**
     * whether the bottom edge is resizable, Since 3.22.23
     */
    BOTTOM_RESIZABLE,
    /**
     * whether the left edge is tiled, Since 3.22.23
     */
    LEFT_TILED,
    /**
     * whether the left edge is resizable, Since 3.22.23
     */
    LEFT_RESIZABLE,
}
/**
 * The middle button.
 */
export const BUTTON_MIDDLE: number
/**
 * The primary button. This is typically the left mouse button, or the
 * right button in a left-handed setup.
 */
export const BUTTON_PRIMARY: number
/**
 * The secondary button. This is typically the right mouse button, or the
 * left button in a left-handed setup.
 */
export const BUTTON_SECONDARY: number
/**
 * Represents the current time, and can be used anywhere a time is expected.
 */
export const CURRENT_TIME: number
/**
 * Use this macro as the return value for continuing the propagation of
 * an event handler.
 */
export const EVENT_PROPAGATE: boolean
/**
 * Use this macro as the return value for stopping the propagation of
 * an event handler.
 */
export const EVENT_STOP: boolean
export const KEY_0: number
export const KEY_1: number
export const KEY_2: number
export const KEY_3: number
export const KEY_3270_AltCursor: number
export const KEY_3270_Attn: number
export const KEY_3270_BackTab: number
export const KEY_3270_ChangeScreen: number
export const KEY_3270_Copy: number
export const KEY_3270_CursorBlink: number
export const KEY_3270_CursorSelect: number
export const KEY_3270_DeleteWord: number
export const KEY_3270_Duplicate: number
export const KEY_3270_Enter: number
export const KEY_3270_EraseEOF: number
export const KEY_3270_EraseInput: number
export const KEY_3270_ExSelect: number
export const KEY_3270_FieldMark: number
export const KEY_3270_Ident: number
export const KEY_3270_Jump: number
export const KEY_3270_KeyClick: number
export const KEY_3270_Left2: number
export const KEY_3270_PA1: number
export const KEY_3270_PA2: number
export const KEY_3270_PA3: number
export const KEY_3270_Play: number
export const KEY_3270_PrintScreen: number
export const KEY_3270_Quit: number
export const KEY_3270_Record: number
export const KEY_3270_Reset: number
export const KEY_3270_Right2: number
export const KEY_3270_Rule: number
export const KEY_3270_Setup: number
export const KEY_3270_Test: number
export const KEY_4: number
export const KEY_5: number
export const KEY_6: number
export const KEY_7: number
export const KEY_8: number
export const KEY_9: number
export const KEY_A: number
export const KEY_AE: number
export const KEY_Aacute: number
export const KEY_Abelowdot: number
export const KEY_Abreve: number
export const KEY_Abreveacute: number
export const KEY_Abrevebelowdot: number
export const KEY_Abrevegrave: number
export const KEY_Abrevehook: number
export const KEY_Abrevetilde: number
export const KEY_AccessX_Enable: number
export const KEY_AccessX_Feedback_Enable: number
export const KEY_Acircumflex: number
export const KEY_Acircumflexacute: number
export const KEY_Acircumflexbelowdot: number
export const KEY_Acircumflexgrave: number
export const KEY_Acircumflexhook: number
export const KEY_Acircumflextilde: number
export const KEY_AddFavorite: number
export const KEY_Adiaeresis: number
export const KEY_Agrave: number
export const KEY_Ahook: number
export const KEY_Alt_L: number
export const KEY_Alt_R: number
export const KEY_Amacron: number
export const KEY_Aogonek: number
export const KEY_ApplicationLeft: number
export const KEY_ApplicationRight: number
export const KEY_Arabic_0: number
export const KEY_Arabic_1: number
export const KEY_Arabic_2: number
export const KEY_Arabic_3: number
export const KEY_Arabic_4: number
export const KEY_Arabic_5: number
export const KEY_Arabic_6: number
export const KEY_Arabic_7: number
export const KEY_Arabic_8: number
export const KEY_Arabic_9: number
export const KEY_Arabic_ain: number
export const KEY_Arabic_alef: number
export const KEY_Arabic_alefmaksura: number
export const KEY_Arabic_beh: number
export const KEY_Arabic_comma: number
export const KEY_Arabic_dad: number
export const KEY_Arabic_dal: number
export const KEY_Arabic_damma: number
export const KEY_Arabic_dammatan: number
export const KEY_Arabic_ddal: number
export const KEY_Arabic_farsi_yeh: number
export const KEY_Arabic_fatha: number
export const KEY_Arabic_fathatan: number
export const KEY_Arabic_feh: number
export const KEY_Arabic_fullstop: number
export const KEY_Arabic_gaf: number
export const KEY_Arabic_ghain: number
export const KEY_Arabic_ha: number
export const KEY_Arabic_hah: number
export const KEY_Arabic_hamza: number
export const KEY_Arabic_hamza_above: number
export const KEY_Arabic_hamza_below: number
export const KEY_Arabic_hamzaonalef: number
export const KEY_Arabic_hamzaonwaw: number
export const KEY_Arabic_hamzaonyeh: number
export const KEY_Arabic_hamzaunderalef: number
export const KEY_Arabic_heh: number
export const KEY_Arabic_heh_doachashmee: number
export const KEY_Arabic_heh_goal: number
export const KEY_Arabic_jeem: number
export const KEY_Arabic_jeh: number
export const KEY_Arabic_kaf: number
export const KEY_Arabic_kasra: number
export const KEY_Arabic_kasratan: number
export const KEY_Arabic_keheh: number
export const KEY_Arabic_khah: number
export const KEY_Arabic_lam: number
export const KEY_Arabic_madda_above: number
export const KEY_Arabic_maddaonalef: number
export const KEY_Arabic_meem: number
export const KEY_Arabic_noon: number
export const KEY_Arabic_noon_ghunna: number
export const KEY_Arabic_peh: number
export const KEY_Arabic_percent: number
export const KEY_Arabic_qaf: number
export const KEY_Arabic_question_mark: number
export const KEY_Arabic_ra: number
export const KEY_Arabic_rreh: number
export const KEY_Arabic_sad: number
export const KEY_Arabic_seen: number
export const KEY_Arabic_semicolon: number
export const KEY_Arabic_shadda: number
export const KEY_Arabic_sheen: number
export const KEY_Arabic_sukun: number
export const KEY_Arabic_superscript_alef: number
export const KEY_Arabic_switch: number
export const KEY_Arabic_tah: number
export const KEY_Arabic_tatweel: number
export const KEY_Arabic_tcheh: number
export const KEY_Arabic_teh: number
export const KEY_Arabic_tehmarbuta: number
export const KEY_Arabic_thal: number
export const KEY_Arabic_theh: number
export const KEY_Arabic_tteh: number
export const KEY_Arabic_veh: number
export const KEY_Arabic_waw: number
export const KEY_Arabic_yeh: number
export const KEY_Arabic_yeh_baree: number
export const KEY_Arabic_zah: number
export const KEY_Arabic_zain: number
export const KEY_Aring: number
export const KEY_Armenian_AT: number
export const KEY_Armenian_AYB: number
export const KEY_Armenian_BEN: number
export const KEY_Armenian_CHA: number
export const KEY_Armenian_DA: number
export const KEY_Armenian_DZA: number
export const KEY_Armenian_E: number
export const KEY_Armenian_FE: number
export const KEY_Armenian_GHAT: number
export const KEY_Armenian_GIM: number
export const KEY_Armenian_HI: number
export const KEY_Armenian_HO: number
export const KEY_Armenian_INI: number
export const KEY_Armenian_JE: number
export const KEY_Armenian_KE: number
export const KEY_Armenian_KEN: number
export const KEY_Armenian_KHE: number
export const KEY_Armenian_LYUN: number
export const KEY_Armenian_MEN: number
export const KEY_Armenian_NU: number
export const KEY_Armenian_O: number
export const KEY_Armenian_PE: number
export const KEY_Armenian_PYUR: number
export const KEY_Armenian_RA: number
export const KEY_Armenian_RE: number
export const KEY_Armenian_SE: number
export const KEY_Armenian_SHA: number
export const KEY_Armenian_TCHE: number
export const KEY_Armenian_TO: number
export const KEY_Armenian_TSA: number
export const KEY_Armenian_TSO: number
export const KEY_Armenian_TYUN: number
export const KEY_Armenian_VEV: number
export const KEY_Armenian_VO: number
export const KEY_Armenian_VYUN: number
export const KEY_Armenian_YECH: number
export const KEY_Armenian_ZA: number
export const KEY_Armenian_ZHE: number
export const KEY_Armenian_accent: number
export const KEY_Armenian_amanak: number
export const KEY_Armenian_apostrophe: number
export const KEY_Armenian_at: number
export const KEY_Armenian_ayb: number
export const KEY_Armenian_ben: number
export const KEY_Armenian_but: number
export const KEY_Armenian_cha: number
export const KEY_Armenian_da: number
export const KEY_Armenian_dza: number
export const KEY_Armenian_e: number
export const KEY_Armenian_exclam: number
export const KEY_Armenian_fe: number
export const KEY_Armenian_full_stop: number
export const KEY_Armenian_ghat: number
export const KEY_Armenian_gim: number
export const KEY_Armenian_hi: number
export const KEY_Armenian_ho: number
export const KEY_Armenian_hyphen: number
export const KEY_Armenian_ini: number
export const KEY_Armenian_je: number
export const KEY_Armenian_ke: number
export const KEY_Armenian_ken: number
export const KEY_Armenian_khe: number
export const KEY_Armenian_ligature_ew: number
export const KEY_Armenian_lyun: number
export const KEY_Armenian_men: number
export const KEY_Armenian_nu: number
export const KEY_Armenian_o: number
export const KEY_Armenian_paruyk: number
export const KEY_Armenian_pe: number
export const KEY_Armenian_pyur: number
export const KEY_Armenian_question: number
export const KEY_Armenian_ra: number
export const KEY_Armenian_re: number
export const KEY_Armenian_se: number
export const KEY_Armenian_separation_mark: number
export const KEY_Armenian_sha: number
export const KEY_Armenian_shesht: number
export const KEY_Armenian_tche: number
export const KEY_Armenian_to: number
export const KEY_Armenian_tsa: number
export const KEY_Armenian_tso: number
export const KEY_Armenian_tyun: number
export const KEY_Armenian_verjaket: number
export const KEY_Armenian_vev: number
export const KEY_Armenian_vo: number
export const KEY_Armenian_vyun: number
export const KEY_Armenian_yech: number
export const KEY_Armenian_yentamna: number
export const KEY_Armenian_za: number
export const KEY_Armenian_zhe: number
export const KEY_Atilde: number
export const KEY_AudibleBell_Enable: number
export const KEY_AudioCycleTrack: number
export const KEY_AudioForward: number
export const KEY_AudioLowerVolume: number
export const KEY_AudioMedia: number
export const KEY_AudioMicMute: number
export const KEY_AudioMute: number
export const KEY_AudioNext: number
export const KEY_AudioPause: number
export const KEY_AudioPlay: number
export const KEY_AudioPreset: number
export const KEY_AudioPrev: number
export const KEY_AudioRaiseVolume: number
export const KEY_AudioRandomPlay: number
export const KEY_AudioRecord: number
export const KEY_AudioRepeat: number
export const KEY_AudioRewind: number
export const KEY_AudioStop: number
export const KEY_Away: number
export const KEY_B: number
export const KEY_Babovedot: number
export const KEY_Back: number
export const KEY_BackForward: number
export const KEY_BackSpace: number
export const KEY_Battery: number
export const KEY_Begin: number
export const KEY_Blue: number
export const KEY_Bluetooth: number
export const KEY_Book: number
export const KEY_BounceKeys_Enable: number
export const KEY_Break: number
export const KEY_BrightnessAdjust: number
export const KEY_Byelorussian_SHORTU: number
export const KEY_Byelorussian_shortu: number
export const KEY_C: number
export const KEY_CD: number
export const KEY_CH: number
export const KEY_C_H: number
export const KEY_C_h: number
export const KEY_Cabovedot: number
export const KEY_Cacute: number
export const KEY_Calculator: number
export const KEY_Calendar: number
export const KEY_Cancel: number
export const KEY_Caps_Lock: number
export const KEY_Ccaron: number
export const KEY_Ccedilla: number
export const KEY_Ccircumflex: number
export const KEY_Ch: number
export const KEY_Clear: number
export const KEY_ClearGrab: number
export const KEY_Close: number
export const KEY_Codeinput: number
export const KEY_ColonSign: number
export const KEY_Community: number
export const KEY_ContrastAdjust: number
export const KEY_Control_L: number
export const KEY_Control_R: number
export const KEY_Copy: number
export const KEY_CruzeiroSign: number
export const KEY_Cut: number
export const KEY_CycleAngle: number
export const KEY_Cyrillic_A: number
export const KEY_Cyrillic_BE: number
export const KEY_Cyrillic_CHE: number
export const KEY_Cyrillic_CHE_descender: number
export const KEY_Cyrillic_CHE_vertstroke: number
export const KEY_Cyrillic_DE: number
export const KEY_Cyrillic_DZHE: number
export const KEY_Cyrillic_E: number
export const KEY_Cyrillic_EF: number
export const KEY_Cyrillic_EL: number
export const KEY_Cyrillic_EM: number
export const KEY_Cyrillic_EN: number
export const KEY_Cyrillic_EN_descender: number
export const KEY_Cyrillic_ER: number
export const KEY_Cyrillic_ES: number
export const KEY_Cyrillic_GHE: number
export const KEY_Cyrillic_GHE_bar: number
export const KEY_Cyrillic_HA: number
export const KEY_Cyrillic_HARDSIGN: number
export const KEY_Cyrillic_HA_descender: number
export const KEY_Cyrillic_I: number
export const KEY_Cyrillic_IE: number
export const KEY_Cyrillic_IO: number
export const KEY_Cyrillic_I_macron: number
export const KEY_Cyrillic_JE: number
export const KEY_Cyrillic_KA: number
export const KEY_Cyrillic_KA_descender: number
export const KEY_Cyrillic_KA_vertstroke: number
export const KEY_Cyrillic_LJE: number
export const KEY_Cyrillic_NJE: number
export const KEY_Cyrillic_O: number
export const KEY_Cyrillic_O_bar: number
export const KEY_Cyrillic_PE: number
export const KEY_Cyrillic_SCHWA: number
export const KEY_Cyrillic_SHA: number
export const KEY_Cyrillic_SHCHA: number
export const KEY_Cyrillic_SHHA: number
export const KEY_Cyrillic_SHORTI: number
export const KEY_Cyrillic_SOFTSIGN: number
export const KEY_Cyrillic_TE: number
export const KEY_Cyrillic_TSE: number
export const KEY_Cyrillic_U: number
export const KEY_Cyrillic_U_macron: number
export const KEY_Cyrillic_U_straight: number
export const KEY_Cyrillic_U_straight_bar: number
export const KEY_Cyrillic_VE: number
export const KEY_Cyrillic_YA: number
export const KEY_Cyrillic_YERU: number
export const KEY_Cyrillic_YU: number
export const KEY_Cyrillic_ZE: number
export const KEY_Cyrillic_ZHE: number
export const KEY_Cyrillic_ZHE_descender: number
export const KEY_Cyrillic_a: number
export const KEY_Cyrillic_be: number
export const KEY_Cyrillic_che: number
export const KEY_Cyrillic_che_descender: number
export const KEY_Cyrillic_che_vertstroke: number
export const KEY_Cyrillic_de: number
export const KEY_Cyrillic_dzhe: number
export const KEY_Cyrillic_e: number
export const KEY_Cyrillic_ef: number
export const KEY_Cyrillic_el: number
export const KEY_Cyrillic_em: number
export const KEY_Cyrillic_en: number
export const KEY_Cyrillic_en_descender: number
export const KEY_Cyrillic_er: number
export const KEY_Cyrillic_es: number
export const KEY_Cyrillic_ghe: number
export const KEY_Cyrillic_ghe_bar: number
export const KEY_Cyrillic_ha: number
export const KEY_Cyrillic_ha_descender: number
export const KEY_Cyrillic_hardsign: number
export const KEY_Cyrillic_i: number
export const KEY_Cyrillic_i_macron: number
export const KEY_Cyrillic_ie: number
export const KEY_Cyrillic_io: number
export const KEY_Cyrillic_je: number
export const KEY_Cyrillic_ka: number
export const KEY_Cyrillic_ka_descender: number
export const KEY_Cyrillic_ka_vertstroke: number
export const KEY_Cyrillic_lje: number
export const KEY_Cyrillic_nje: number
export const KEY_Cyrillic_o: number
export const KEY_Cyrillic_o_bar: number
export const KEY_Cyrillic_pe: number
export const KEY_Cyrillic_schwa: number
export const KEY_Cyrillic_sha: number
export const KEY_Cyrillic_shcha: number
export const KEY_Cyrillic_shha: number
export const KEY_Cyrillic_shorti: number
export const KEY_Cyrillic_softsign: number
export const KEY_Cyrillic_te: number
export const KEY_Cyrillic_tse: number
export const KEY_Cyrillic_u: number
export const KEY_Cyrillic_u_macron: number
export const KEY_Cyrillic_u_straight: number
export const KEY_Cyrillic_u_straight_bar: number
export const KEY_Cyrillic_ve: number
export const KEY_Cyrillic_ya: number
export const KEY_Cyrillic_yeru: number
export const KEY_Cyrillic_yu: number
export const KEY_Cyrillic_ze: number
export const KEY_Cyrillic_zhe: number
export const KEY_Cyrillic_zhe_descender: number
export const KEY_D: number
export const KEY_DOS: number
export const KEY_Dabovedot: number
export const KEY_Dcaron: number
export const KEY_Delete: number
export const KEY_Display: number
export const KEY_Documents: number
export const KEY_DongSign: number
export const KEY_Down: number
export const KEY_Dstroke: number
export const KEY_E: number
export const KEY_ENG: number
export const KEY_ETH: number
export const KEY_EZH: number
export const KEY_Eabovedot: number
export const KEY_Eacute: number
export const KEY_Ebelowdot: number
export const KEY_Ecaron: number
export const KEY_Ecircumflex: number
export const KEY_Ecircumflexacute: number
export const KEY_Ecircumflexbelowdot: number
export const KEY_Ecircumflexgrave: number
export const KEY_Ecircumflexhook: number
export const KEY_Ecircumflextilde: number
export const KEY_EcuSign: number
export const KEY_Ediaeresis: number
export const KEY_Egrave: number
export const KEY_Ehook: number
export const KEY_Eisu_Shift: number
export const KEY_Eisu_toggle: number
export const KEY_Eject: number
export const KEY_Emacron: number
export const KEY_End: number
export const KEY_Eogonek: number
export const KEY_Escape: number
export const KEY_Eth: number
export const KEY_Etilde: number
export const KEY_EuroSign: number
export const KEY_Excel: number
export const KEY_Execute: number
export const KEY_Explorer: number
export const KEY_F: number
export const KEY_F1: number
export const KEY_F10: number
export const KEY_F11: number
export const KEY_F12: number
export const KEY_F13: number
export const KEY_F14: number
export const KEY_F15: number
export const KEY_F16: number
export const KEY_F17: number
export const KEY_F18: number
export const KEY_F19: number
export const KEY_F2: number
export const KEY_F20: number
export const KEY_F21: number
export const KEY_F22: number
export const KEY_F23: number
export const KEY_F24: number
export const KEY_F25: number
export const KEY_F26: number
export const KEY_F27: number
export const KEY_F28: number
export const KEY_F29: number
export const KEY_F3: number
export const KEY_F30: number
export const KEY_F31: number
export const KEY_F32: number
export const KEY_F33: number
export const KEY_F34: number
export const KEY_F35: number
export const KEY_F4: number
export const KEY_F5: number
export const KEY_F6: number
export const KEY_F7: number
export const KEY_F8: number
export const KEY_F9: number
export const KEY_FFrancSign: number
export const KEY_Fabovedot: number
export const KEY_Farsi_0: number
export const KEY_Farsi_1: number
export const KEY_Farsi_2: number
export const KEY_Farsi_3: number
export const KEY_Farsi_4: number
export const KEY_Farsi_5: number
export const KEY_Farsi_6: number
export const KEY_Farsi_7: number
export const KEY_Farsi_8: number
export const KEY_Farsi_9: number
export const KEY_Farsi_yeh: number
export const KEY_Favorites: number
export const KEY_Finance: number
export const KEY_Find: number
export const KEY_First_Virtual_Screen: number
export const KEY_Forward: number
export const KEY_FrameBack: number
export const KEY_FrameForward: number
export const KEY_G: number
export const KEY_Gabovedot: number
export const KEY_Game: number
export const KEY_Gbreve: number
export const KEY_Gcaron: number
export const KEY_Gcedilla: number
export const KEY_Gcircumflex: number
export const KEY_Georgian_an: number
export const KEY_Georgian_ban: number
export const KEY_Georgian_can: number
export const KEY_Georgian_char: number
export const KEY_Georgian_chin: number
export const KEY_Georgian_cil: number
export const KEY_Georgian_don: number
export const KEY_Georgian_en: number
export const KEY_Georgian_fi: number
export const KEY_Georgian_gan: number
export const KEY_Georgian_ghan: number
export const KEY_Georgian_hae: number
export const KEY_Georgian_har: number
export const KEY_Georgian_he: number
export const KEY_Georgian_hie: number
export const KEY_Georgian_hoe: number
export const KEY_Georgian_in: number
export const KEY_Georgian_jhan: number
export const KEY_Georgian_jil: number
export const KEY_Georgian_kan: number
export const KEY_Georgian_khar: number
export const KEY_Georgian_las: number
export const KEY_Georgian_man: number
export const KEY_Georgian_nar: number
export const KEY_Georgian_on: number
export const KEY_Georgian_par: number
export const KEY_Georgian_phar: number
export const KEY_Georgian_qar: number
export const KEY_Georgian_rae: number
export const KEY_Georgian_san: number
export const KEY_Georgian_shin: number
export const KEY_Georgian_tan: number
export const KEY_Georgian_tar: number
export const KEY_Georgian_un: number
export const KEY_Georgian_vin: number
export const KEY_Georgian_we: number
export const KEY_Georgian_xan: number
export const KEY_Georgian_zen: number
export const KEY_Georgian_zhar: number
export const KEY_Go: number
export const KEY_Greek_ALPHA: number
export const KEY_Greek_ALPHAaccent: number
export const KEY_Greek_BETA: number
export const KEY_Greek_CHI: number
export const KEY_Greek_DELTA: number
export const KEY_Greek_EPSILON: number
export const KEY_Greek_EPSILONaccent: number
export const KEY_Greek_ETA: number
export const KEY_Greek_ETAaccent: number
export const KEY_Greek_GAMMA: number
export const KEY_Greek_IOTA: number
export const KEY_Greek_IOTAaccent: number
export const KEY_Greek_IOTAdiaeresis: number
export const KEY_Greek_IOTAdieresis: number
export const KEY_Greek_KAPPA: number
export const KEY_Greek_LAMBDA: number
export const KEY_Greek_LAMDA: number
export const KEY_Greek_MU: number
export const KEY_Greek_NU: number
export const KEY_Greek_OMEGA: number
export const KEY_Greek_OMEGAaccent: number
export const KEY_Greek_OMICRON: number
export const KEY_Greek_OMICRONaccent: number
export const KEY_Greek_PHI: number
export const KEY_Greek_PI: number
export const KEY_Greek_PSI: number
export const KEY_Greek_RHO: number
export const KEY_Greek_SIGMA: number
export const KEY_Greek_TAU: number
export const KEY_Greek_THETA: number
export const KEY_Greek_UPSILON: number
export const KEY_Greek_UPSILONaccent: number
export const KEY_Greek_UPSILONdieresis: number
export const KEY_Greek_XI: number
export const KEY_Greek_ZETA: number
export const KEY_Greek_accentdieresis: number
export const KEY_Greek_alpha: number
export const KEY_Greek_alphaaccent: number
export const KEY_Greek_beta: number
export const KEY_Greek_chi: number
export const KEY_Greek_delta: number
export const KEY_Greek_epsilon: number
export const KEY_Greek_epsilonaccent: number
export const KEY_Greek_eta: number
export const KEY_Greek_etaaccent: number
export const KEY_Greek_finalsmallsigma: number
export const KEY_Greek_gamma: number
export const KEY_Greek_horizbar: number
export const KEY_Greek_iota: number
export const KEY_Greek_iotaaccent: number
export const KEY_Greek_iotaaccentdieresis: number
export const KEY_Greek_iotadieresis: number
export const KEY_Greek_kappa: number
export const KEY_Greek_lambda: number
export const KEY_Greek_lamda: number
export const KEY_Greek_mu: number
export const KEY_Greek_nu: number
export const KEY_Greek_omega: number
export const KEY_Greek_omegaaccent: number
export const KEY_Greek_omicron: number
export const KEY_Greek_omicronaccent: number
export const KEY_Greek_phi: number
export const KEY_Greek_pi: number
export const KEY_Greek_psi: number
export const KEY_Greek_rho: number
export const KEY_Greek_sigma: number
export const KEY_Greek_switch: number
export const KEY_Greek_tau: number
export const KEY_Greek_theta: number
export const KEY_Greek_upsilon: number
export const KEY_Greek_upsilonaccent: number
export const KEY_Greek_upsilonaccentdieresis: number
export const KEY_Greek_upsilondieresis: number
export const KEY_Greek_xi: number
export const KEY_Greek_zeta: number
export const KEY_Green: number
export const KEY_H: number
export const KEY_Hangul: number
export const KEY_Hangul_A: number
export const KEY_Hangul_AE: number
export const KEY_Hangul_AraeA: number
export const KEY_Hangul_AraeAE: number
export const KEY_Hangul_Banja: number
export const KEY_Hangul_Cieuc: number
export const KEY_Hangul_Codeinput: number
export const KEY_Hangul_Dikeud: number
export const KEY_Hangul_E: number
export const KEY_Hangul_EO: number
export const KEY_Hangul_EU: number
export const KEY_Hangul_End: number
export const KEY_Hangul_Hanja: number
export const KEY_Hangul_Hieuh: number
export const KEY_Hangul_I: number
export const KEY_Hangul_Ieung: number
export const KEY_Hangul_J_Cieuc: number
export const KEY_Hangul_J_Dikeud: number
export const KEY_Hangul_J_Hieuh: number
export const KEY_Hangul_J_Ieung: number
export const KEY_Hangul_J_Jieuj: number
export const KEY_Hangul_J_Khieuq: number
export const KEY_Hangul_J_Kiyeog: number
export const KEY_Hangul_J_KiyeogSios: number
export const KEY_Hangul_J_KkogjiDalrinIeung: number
export const KEY_Hangul_J_Mieum: number
export const KEY_Hangul_J_Nieun: number
export const KEY_Hangul_J_NieunHieuh: number
export const KEY_Hangul_J_NieunJieuj: number
export const KEY_Hangul_J_PanSios: number
export const KEY_Hangul_J_Phieuf: number
export const KEY_Hangul_J_Pieub: number
export const KEY_Hangul_J_PieubSios: number
export const KEY_Hangul_J_Rieul: number
export const KEY_Hangul_J_RieulHieuh: number
export const KEY_Hangul_J_RieulKiyeog: number
export const KEY_Hangul_J_RieulMieum: number
export const KEY_Hangul_J_RieulPhieuf: number
export const KEY_Hangul_J_RieulPieub: number
export const KEY_Hangul_J_RieulSios: number
export const KEY_Hangul_J_RieulTieut: number
export const KEY_Hangul_J_Sios: number
export const KEY_Hangul_J_SsangKiyeog: number
export const KEY_Hangul_J_SsangSios: number
export const KEY_Hangul_J_Tieut: number
export const KEY_Hangul_J_YeorinHieuh: number
export const KEY_Hangul_Jamo: number
export const KEY_Hangul_Jeonja: number
export const KEY_Hangul_Jieuj: number
export const KEY_Hangul_Khieuq: number
export const KEY_Hangul_Kiyeog: number
export const KEY_Hangul_KiyeogSios: number
export const KEY_Hangul_KkogjiDalrinIeung: number
export const KEY_Hangul_Mieum: number
export const KEY_Hangul_MultipleCandidate: number
export const KEY_Hangul_Nieun: number
export const KEY_Hangul_NieunHieuh: number
export const KEY_Hangul_NieunJieuj: number
export const KEY_Hangul_O: number
export const KEY_Hangul_OE: number
export const KEY_Hangul_PanSios: number
export const KEY_Hangul_Phieuf: number
export const KEY_Hangul_Pieub: number
export const KEY_Hangul_PieubSios: number
export const KEY_Hangul_PostHanja: number
export const KEY_Hangul_PreHanja: number
export const KEY_Hangul_PreviousCandidate: number
export const KEY_Hangul_Rieul: number
export const KEY_Hangul_RieulHieuh: number
export const KEY_Hangul_RieulKiyeog: number
export const KEY_Hangul_RieulMieum: number
export const KEY_Hangul_RieulPhieuf: number
export const KEY_Hangul_RieulPieub: number
export const KEY_Hangul_RieulSios: number
export const KEY_Hangul_RieulTieut: number
export const KEY_Hangul_RieulYeorinHieuh: number
export const KEY_Hangul_Romaja: number
export const KEY_Hangul_SingleCandidate: number
export const KEY_Hangul_Sios: number
export const KEY_Hangul_Special: number
export const KEY_Hangul_SsangDikeud: number
export const KEY_Hangul_SsangJieuj: number
export const KEY_Hangul_SsangKiyeog: number
export const KEY_Hangul_SsangPieub: number
export const KEY_Hangul_SsangSios: number
export const KEY_Hangul_Start: number
export const KEY_Hangul_SunkyeongeumMieum: number
export const KEY_Hangul_SunkyeongeumPhieuf: number
export const KEY_Hangul_SunkyeongeumPieub: number
export const KEY_Hangul_Tieut: number
export const KEY_Hangul_U: number
export const KEY_Hangul_WA: number
export const KEY_Hangul_WAE: number
export const KEY_Hangul_WE: number
export const KEY_Hangul_WEO: number
export const KEY_Hangul_WI: number
export const KEY_Hangul_YA: number
export const KEY_Hangul_YAE: number
export const KEY_Hangul_YE: number
export const KEY_Hangul_YEO: number
export const KEY_Hangul_YI: number
export const KEY_Hangul_YO: number
export const KEY_Hangul_YU: number
export const KEY_Hangul_YeorinHieuh: number
export const KEY_Hangul_switch: number
export const KEY_Hankaku: number
export const KEY_Hcircumflex: number
export const KEY_Hebrew_switch: number
export const KEY_Help: number
export const KEY_Henkan: number
export const KEY_Henkan_Mode: number
export const KEY_Hibernate: number
export const KEY_Hiragana: number
export const KEY_Hiragana_Katakana: number
export const KEY_History: number
export const KEY_Home: number
export const KEY_HomePage: number
export const KEY_HotLinks: number
export const KEY_Hstroke: number
export const KEY_Hyper_L: number
export const KEY_Hyper_R: number
export const KEY_I: number
export const KEY_ISO_Center_Object: number
export const KEY_ISO_Continuous_Underline: number
export const KEY_ISO_Discontinuous_Underline: number
export const KEY_ISO_Emphasize: number
export const KEY_ISO_Enter: number
export const KEY_ISO_Fast_Cursor_Down: number
export const KEY_ISO_Fast_Cursor_Left: number
export const KEY_ISO_Fast_Cursor_Right: number
export const KEY_ISO_Fast_Cursor_Up: number
export const KEY_ISO_First_Group: number
export const KEY_ISO_First_Group_Lock: number
export const KEY_ISO_Group_Latch: number
export const KEY_ISO_Group_Lock: number
export const KEY_ISO_Group_Shift: number
export const KEY_ISO_Last_Group: number
export const KEY_ISO_Last_Group_Lock: number
export const KEY_ISO_Left_Tab: number
export const KEY_ISO_Level2_Latch: number
export const KEY_ISO_Level3_Latch: number
export const KEY_ISO_Level3_Lock: number
export const KEY_ISO_Level3_Shift: number
export const KEY_ISO_Level5_Latch: number
export const KEY_ISO_Level5_Lock: number
export const KEY_ISO_Level5_Shift: number
export const KEY_ISO_Lock: number
export const KEY_ISO_Move_Line_Down: number
export const KEY_ISO_Move_Line_Up: number
export const KEY_ISO_Next_Group: number
export const KEY_ISO_Next_Group_Lock: number
export const KEY_ISO_Partial_Line_Down: number
export const KEY_ISO_Partial_Line_Up: number
export const KEY_ISO_Partial_Space_Left: number
export const KEY_ISO_Partial_Space_Right: number
export const KEY_ISO_Prev_Group: number
export const KEY_ISO_Prev_Group_Lock: number
export const KEY_ISO_Release_Both_Margins: number
export const KEY_ISO_Release_Margin_Left: number
export const KEY_ISO_Release_Margin_Right: number
export const KEY_ISO_Set_Margin_Left: number
export const KEY_ISO_Set_Margin_Right: number
export const KEY_Iabovedot: number
export const KEY_Iacute: number
export const KEY_Ibelowdot: number
export const KEY_Ibreve: number
export const KEY_Icircumflex: number
export const KEY_Idiaeresis: number
export const KEY_Igrave: number
export const KEY_Ihook: number
export const KEY_Imacron: number
export const KEY_Insert: number
export const KEY_Iogonek: number
export const KEY_Itilde: number
export const KEY_J: number
export const KEY_Jcircumflex: number
export const KEY_K: number
export const KEY_KP_0: number
export const KEY_KP_1: number
export const KEY_KP_2: number
export const KEY_KP_3: number
export const KEY_KP_4: number
export const KEY_KP_5: number
export const KEY_KP_6: number
export const KEY_KP_7: number
export const KEY_KP_8: number
export const KEY_KP_9: number
export const KEY_KP_Add: number
export const KEY_KP_Begin: number
export const KEY_KP_Decimal: number
export const KEY_KP_Delete: number
export const KEY_KP_Divide: number
export const KEY_KP_Down: number
export const KEY_KP_End: number
export const KEY_KP_Enter: number
export const KEY_KP_Equal: number
export const KEY_KP_F1: number
export const KEY_KP_F2: number
export const KEY_KP_F3: number
export const KEY_KP_F4: number
export const KEY_KP_Home: number
export const KEY_KP_Insert: number
export const KEY_KP_Left: number
export const KEY_KP_Multiply: number
export const KEY_KP_Next: number
export const KEY_KP_Page_Down: number
export const KEY_KP_Page_Up: number
export const KEY_KP_Prior: number
export const KEY_KP_Right: number
export const KEY_KP_Separator: number
export const KEY_KP_Space: number
export const KEY_KP_Subtract: number
export const KEY_KP_Tab: number
export const KEY_KP_Up: number
export const KEY_Kana_Lock: number
export const KEY_Kana_Shift: number
export const KEY_Kanji: number
export const KEY_Kanji_Bangou: number
export const KEY_Katakana: number
export const KEY_KbdBrightnessDown: number
export const KEY_KbdBrightnessUp: number
export const KEY_KbdLightOnOff: number
export const KEY_Kcedilla: number
export const KEY_Keyboard: number
export const KEY_Korean_Won: number
export const KEY_L: number
export const KEY_L1: number
export const KEY_L10: number
export const KEY_L2: number
export const KEY_L3: number
export const KEY_L4: number
export const KEY_L5: number
export const KEY_L6: number
export const KEY_L7: number
export const KEY_L8: number
export const KEY_L9: number
export const KEY_Lacute: number
export const KEY_Last_Virtual_Screen: number
export const KEY_Launch0: number
export const KEY_Launch1: number
export const KEY_Launch2: number
export const KEY_Launch3: number
export const KEY_Launch4: number
export const KEY_Launch5: number
export const KEY_Launch6: number
export const KEY_Launch7: number
export const KEY_Launch8: number
export const KEY_Launch9: number
export const KEY_LaunchA: number
export const KEY_LaunchB: number
export const KEY_LaunchC: number
export const KEY_LaunchD: number
export const KEY_LaunchE: number
export const KEY_LaunchF: number
export const KEY_Lbelowdot: number
export const KEY_Lcaron: number
export const KEY_Lcedilla: number
export const KEY_Left: number
export const KEY_LightBulb: number
export const KEY_Linefeed: number
export const KEY_LiraSign: number
export const KEY_LogGrabInfo: number
export const KEY_LogOff: number
export const KEY_LogWindowTree: number
export const KEY_Lstroke: number
export const KEY_M: number
export const KEY_Mabovedot: number
export const KEY_Macedonia_DSE: number
export const KEY_Macedonia_GJE: number
export const KEY_Macedonia_KJE: number
export const KEY_Macedonia_dse: number
export const KEY_Macedonia_gje: number
export const KEY_Macedonia_kje: number
export const KEY_Mae_Koho: number
export const KEY_Mail: number
export const KEY_MailForward: number
export const KEY_Market: number
export const KEY_Massyo: number
export const KEY_Meeting: number
export const KEY_Memo: number
export const KEY_Menu: number
export const KEY_MenuKB: number
export const KEY_MenuPB: number
export const KEY_Messenger: number
export const KEY_Meta_L: number
export const KEY_Meta_R: number
export const KEY_MillSign: number
export const KEY_ModeLock: number
export const KEY_Mode_switch: number
export const KEY_MonBrightnessDown: number
export const KEY_MonBrightnessUp: number
export const KEY_MouseKeys_Accel_Enable: number
export const KEY_MouseKeys_Enable: number
export const KEY_Muhenkan: number
export const KEY_Multi_key: number
export const KEY_MultipleCandidate: number
export const KEY_Music: number
export const KEY_MyComputer: number
export const KEY_MySites: number
export const KEY_N: number
export const KEY_Nacute: number
export const KEY_NairaSign: number
export const KEY_Ncaron: number
export const KEY_Ncedilla: number
export const KEY_New: number
export const KEY_NewSheqelSign: number
export const KEY_News: number
export const KEY_Next: number
export const KEY_Next_VMode: number
export const KEY_Next_Virtual_Screen: number
export const KEY_Ntilde: number
export const KEY_Num_Lock: number
export const KEY_O: number
export const KEY_OE: number
export const KEY_Oacute: number
export const KEY_Obarred: number
export const KEY_Obelowdot: number
export const KEY_Ocaron: number
export const KEY_Ocircumflex: number
export const KEY_Ocircumflexacute: number
export const KEY_Ocircumflexbelowdot: number
export const KEY_Ocircumflexgrave: number
export const KEY_Ocircumflexhook: number
export const KEY_Ocircumflextilde: number
export const KEY_Odiaeresis: number
export const KEY_Odoubleacute: number
export const KEY_OfficeHome: number
export const KEY_Ograve: number
export const KEY_Ohook: number
export const KEY_Ohorn: number
export const KEY_Ohornacute: number
export const KEY_Ohornbelowdot: number
export const KEY_Ohorngrave: number
export const KEY_Ohornhook: number
export const KEY_Ohorntilde: number
export const KEY_Omacron: number
export const KEY_Ooblique: number
export const KEY_Open: number
export const KEY_OpenURL: number
export const KEY_Option: number
export const KEY_Oslash: number
export const KEY_Otilde: number
export const KEY_Overlay1_Enable: number
export const KEY_Overlay2_Enable: number
export const KEY_P: number
export const KEY_Pabovedot: number
export const KEY_Page_Down: number
export const KEY_Page_Up: number
export const KEY_Paste: number
export const KEY_Pause: number
export const KEY_PesetaSign: number
export const KEY_Phone: number
export const KEY_Pictures: number
export const KEY_Pointer_Accelerate: number
export const KEY_Pointer_Button1: number
export const KEY_Pointer_Button2: number
export const KEY_Pointer_Button3: number
export const KEY_Pointer_Button4: number
export const KEY_Pointer_Button5: number
export const KEY_Pointer_Button_Dflt: number
export const KEY_Pointer_DblClick1: number
export const KEY_Pointer_DblClick2: number
export const KEY_Pointer_DblClick3: number
export const KEY_Pointer_DblClick4: number
export const KEY_Pointer_DblClick5: number
export const KEY_Pointer_DblClick_Dflt: number
export const KEY_Pointer_DfltBtnNext: number
export const KEY_Pointer_DfltBtnPrev: number
export const KEY_Pointer_Down: number
export const KEY_Pointer_DownLeft: number
export const KEY_Pointer_DownRight: number
export const KEY_Pointer_Drag1: number
export const KEY_Pointer_Drag2: number
export const KEY_Pointer_Drag3: number
export const KEY_Pointer_Drag4: number
export const KEY_Pointer_Drag5: number
export const KEY_Pointer_Drag_Dflt: number
export const KEY_Pointer_EnableKeys: number
export const KEY_Pointer_Left: number
export const KEY_Pointer_Right: number
export const KEY_Pointer_Up: number
export const KEY_Pointer_UpLeft: number
export const KEY_Pointer_UpRight: number
export const KEY_PowerDown: number
export const KEY_PowerOff: number
export const KEY_Prev_VMode: number
export const KEY_Prev_Virtual_Screen: number
export const KEY_PreviousCandidate: number
export const KEY_Print: number
export const KEY_Prior: number
export const KEY_Q: number
export const KEY_R: number
export const KEY_R1: number
export const KEY_R10: number
export const KEY_R11: number
export const KEY_R12: number
export const KEY_R13: number
export const KEY_R14: number
export const KEY_R15: number
export const KEY_R2: number
export const KEY_R3: number
export const KEY_R4: number
export const KEY_R5: number
export const KEY_R6: number
export const KEY_R7: number
export const KEY_R8: number
export const KEY_R9: number
export const KEY_RFKill: number
export const KEY_Racute: number
export const KEY_Rcaron: number
export const KEY_Rcedilla: number
export const KEY_Red: number
export const KEY_Redo: number
export const KEY_Refresh: number
export const KEY_Reload: number
export const KEY_RepeatKeys_Enable: number
export const KEY_Reply: number
export const KEY_Return: number
export const KEY_Right: number
export const KEY_RockerDown: number
export const KEY_RockerEnter: number
export const KEY_RockerUp: number
export const KEY_Romaji: number
export const KEY_RotateWindows: number
export const KEY_RotationKB: number
export const KEY_RotationPB: number
export const KEY_RupeeSign: number
export const KEY_S: number
export const KEY_SCHWA: number
export const KEY_Sabovedot: number
export const KEY_Sacute: number
export const KEY_Save: number
export const KEY_Scaron: number
export const KEY_Scedilla: number
export const KEY_Scircumflex: number
export const KEY_ScreenSaver: number
export const KEY_ScrollClick: number
export const KEY_ScrollDown: number
export const KEY_ScrollUp: number
export const KEY_Scroll_Lock: number
export const KEY_Search: number
export const KEY_Select: number
export const KEY_SelectButton: number
export const KEY_Send: number
export const KEY_Serbian_DJE: number
export const KEY_Serbian_DZE: number
export const KEY_Serbian_JE: number
export const KEY_Serbian_LJE: number
export const KEY_Serbian_NJE: number
export const KEY_Serbian_TSHE: number
export const KEY_Serbian_dje: number
export const KEY_Serbian_dze: number
export const KEY_Serbian_je: number
export const KEY_Serbian_lje: number
export const KEY_Serbian_nje: number
export const KEY_Serbian_tshe: number
export const KEY_Shift_L: number
export const KEY_Shift_Lock: number
export const KEY_Shift_R: number
export const KEY_Shop: number
export const KEY_SingleCandidate: number
export const KEY_Sinh_a: number
export const KEY_Sinh_aa: number
export const KEY_Sinh_aa2: number
export const KEY_Sinh_ae: number
export const KEY_Sinh_ae2: number
export const KEY_Sinh_aee: number
export const KEY_Sinh_aee2: number
export const KEY_Sinh_ai: number
export const KEY_Sinh_ai2: number
export const KEY_Sinh_al: number
export const KEY_Sinh_au: number
export const KEY_Sinh_au2: number
export const KEY_Sinh_ba: number
export const KEY_Sinh_bha: number
export const KEY_Sinh_ca: number
export const KEY_Sinh_cha: number
export const KEY_Sinh_dda: number
export const KEY_Sinh_ddha: number
export const KEY_Sinh_dha: number
export const KEY_Sinh_dhha: number
export const KEY_Sinh_e: number
export const KEY_Sinh_e2: number
export const KEY_Sinh_ee: number
export const KEY_Sinh_ee2: number
export const KEY_Sinh_fa: number
export const KEY_Sinh_ga: number
export const KEY_Sinh_gha: number
export const KEY_Sinh_h2: number
export const KEY_Sinh_ha: number
export const KEY_Sinh_i: number
export const KEY_Sinh_i2: number
export const KEY_Sinh_ii: number
export const KEY_Sinh_ii2: number
export const KEY_Sinh_ja: number
export const KEY_Sinh_jha: number
export const KEY_Sinh_jnya: number
export const KEY_Sinh_ka: number
export const KEY_Sinh_kha: number
export const KEY_Sinh_kunddaliya: number
export const KEY_Sinh_la: number
export const KEY_Sinh_lla: number
export const KEY_Sinh_lu: number
export const KEY_Sinh_lu2: number
export const KEY_Sinh_luu: number
export const KEY_Sinh_luu2: number
export const KEY_Sinh_ma: number
export const KEY_Sinh_mba: number
export const KEY_Sinh_na: number
export const KEY_Sinh_ndda: number
export const KEY_Sinh_ndha: number
export const KEY_Sinh_ng: number
export const KEY_Sinh_ng2: number
export const KEY_Sinh_nga: number
export const KEY_Sinh_nja: number
export const KEY_Sinh_nna: number
export const KEY_Sinh_nya: number
export const KEY_Sinh_o: number
export const KEY_Sinh_o2: number
export const KEY_Sinh_oo: number
export const KEY_Sinh_oo2: number
export const KEY_Sinh_pa: number
export const KEY_Sinh_pha: number
export const KEY_Sinh_ra: number
export const KEY_Sinh_ri: number
export const KEY_Sinh_rii: number
export const KEY_Sinh_ru2: number
export const KEY_Sinh_ruu2: number
export const KEY_Sinh_sa: number
export const KEY_Sinh_sha: number
export const KEY_Sinh_ssha: number
export const KEY_Sinh_tha: number
export const KEY_Sinh_thha: number
export const KEY_Sinh_tta: number
export const KEY_Sinh_ttha: number
export const KEY_Sinh_u: number
export const KEY_Sinh_u2: number
export const KEY_Sinh_uu: number
export const KEY_Sinh_uu2: number
export const KEY_Sinh_va: number
export const KEY_Sinh_ya: number
export const KEY_Sleep: number
export const KEY_SlowKeys_Enable: number
export const KEY_Spell: number
export const KEY_SplitScreen: number
export const KEY_Standby: number
export const KEY_Start: number
export const KEY_StickyKeys_Enable: number
export const KEY_Stop: number
export const KEY_Subtitle: number
export const KEY_Super_L: number
export const KEY_Super_R: number
export const KEY_Support: number
export const KEY_Suspend: number
export const KEY_Switch_VT_1: number
export const KEY_Switch_VT_10: number
export const KEY_Switch_VT_11: number
export const KEY_Switch_VT_12: number
export const KEY_Switch_VT_2: number
export const KEY_Switch_VT_3: number
export const KEY_Switch_VT_4: number
export const KEY_Switch_VT_5: number
export const KEY_Switch_VT_6: number
export const KEY_Switch_VT_7: number
export const KEY_Switch_VT_8: number
export const KEY_Switch_VT_9: number
export const KEY_Sys_Req: number
export const KEY_T: number
export const KEY_THORN: number
export const KEY_Tab: number
export const KEY_Tabovedot: number
export const KEY_TaskPane: number
export const KEY_Tcaron: number
export const KEY_Tcedilla: number
export const KEY_Terminal: number
export const KEY_Terminate_Server: number
export const KEY_Thai_baht: number
export const KEY_Thai_bobaimai: number
export const KEY_Thai_chochan: number
export const KEY_Thai_chochang: number
export const KEY_Thai_choching: number
export const KEY_Thai_chochoe: number
export const KEY_Thai_dochada: number
export const KEY_Thai_dodek: number
export const KEY_Thai_fofa: number
export const KEY_Thai_fofan: number
export const KEY_Thai_hohip: number
export const KEY_Thai_honokhuk: number
export const KEY_Thai_khokhai: number
export const KEY_Thai_khokhon: number
export const KEY_Thai_khokhuat: number
export const KEY_Thai_khokhwai: number
export const KEY_Thai_khorakhang: number
export const KEY_Thai_kokai: number
export const KEY_Thai_lakkhangyao: number
export const KEY_Thai_lekchet: number
export const KEY_Thai_lekha: number
export const KEY_Thai_lekhok: number
export const KEY_Thai_lekkao: number
export const KEY_Thai_leknung: number
export const KEY_Thai_lekpaet: number
export const KEY_Thai_leksam: number
export const KEY_Thai_leksi: number
export const KEY_Thai_leksong: number
export const KEY_Thai_leksun: number
export const KEY_Thai_lochula: number
export const KEY_Thai_loling: number
export const KEY_Thai_lu: number
export const KEY_Thai_maichattawa: number
export const KEY_Thai_maiek: number
export const KEY_Thai_maihanakat: number
export const KEY_Thai_maihanakat_maitho: number
export const KEY_Thai_maitaikhu: number
export const KEY_Thai_maitho: number
export const KEY_Thai_maitri: number
export const KEY_Thai_maiyamok: number
export const KEY_Thai_moma: number
export const KEY_Thai_ngongu: number
export const KEY_Thai_nikhahit: number
export const KEY_Thai_nonen: number
export const KEY_Thai_nonu: number
export const KEY_Thai_oang: number
export const KEY_Thai_paiyannoi: number
export const KEY_Thai_phinthu: number
export const KEY_Thai_phophan: number
export const KEY_Thai_phophung: number
export const KEY_Thai_phosamphao: number
export const KEY_Thai_popla: number
export const KEY_Thai_rorua: number
export const KEY_Thai_ru: number
export const KEY_Thai_saraa: number
export const KEY_Thai_saraaa: number
export const KEY_Thai_saraae: number
export const KEY_Thai_saraaimaimalai: number
export const KEY_Thai_saraaimaimuan: number
export const KEY_Thai_saraam: number
export const KEY_Thai_sarae: number
export const KEY_Thai_sarai: number
export const KEY_Thai_saraii: number
export const KEY_Thai_sarao: number
export const KEY_Thai_sarau: number
export const KEY_Thai_saraue: number
export const KEY_Thai_sarauee: number
export const KEY_Thai_sarauu: number
export const KEY_Thai_sorusi: number
export const KEY_Thai_sosala: number
export const KEY_Thai_soso: number
export const KEY_Thai_sosua: number
export const KEY_Thai_thanthakhat: number
export const KEY_Thai_thonangmontho: number
export const KEY_Thai_thophuthao: number
export const KEY_Thai_thothahan: number
export const KEY_Thai_thothan: number
export const KEY_Thai_thothong: number
export const KEY_Thai_thothung: number
export const KEY_Thai_topatak: number
export const KEY_Thai_totao: number
export const KEY_Thai_wowaen: number
export const KEY_Thai_yoyak: number
export const KEY_Thai_yoying: number
export const KEY_Thorn: number
export const KEY_Time: number
export const KEY_ToDoList: number
export const KEY_Tools: number
export const KEY_TopMenu: number
export const KEY_TouchpadOff: number
export const KEY_TouchpadOn: number
export const KEY_TouchpadToggle: number
export const KEY_Touroku: number
export const KEY_Travel: number
export const KEY_Tslash: number
export const KEY_U: number
export const KEY_UWB: number
export const KEY_Uacute: number
export const KEY_Ubelowdot: number
export const KEY_Ubreve: number
export const KEY_Ucircumflex: number
export const KEY_Udiaeresis: number
export const KEY_Udoubleacute: number
export const KEY_Ugrave: number
export const KEY_Uhook: number
export const KEY_Uhorn: number
export const KEY_Uhornacute: number
export const KEY_Uhornbelowdot: number
export const KEY_Uhorngrave: number
export const KEY_Uhornhook: number
export const KEY_Uhorntilde: number
export const KEY_Ukrainian_GHE_WITH_UPTURN: number
export const KEY_Ukrainian_I: number
export const KEY_Ukrainian_IE: number
export const KEY_Ukrainian_YI: number
export const KEY_Ukrainian_ghe_with_upturn: number
export const KEY_Ukrainian_i: number
export const KEY_Ukrainian_ie: number
export const KEY_Ukrainian_yi: number
export const KEY_Ukranian_I: number
export const KEY_Ukranian_JE: number
export const KEY_Ukranian_YI: number
export const KEY_Ukranian_i: number
export const KEY_Ukranian_je: number
export const KEY_Ukranian_yi: number
export const KEY_Umacron: number
export const KEY_Undo: number
export const KEY_Ungrab: number
export const KEY_Uogonek: number
export const KEY_Up: number
export const KEY_Uring: number
export const KEY_User1KB: number
export const KEY_User2KB: number
export const KEY_UserPB: number
export const KEY_Utilde: number
export const KEY_V: number
export const KEY_VendorHome: number
export const KEY_Video: number
export const KEY_View: number
export const KEY_VoidSymbol: number
export const KEY_W: number
export const KEY_WLAN: number
export const KEY_WWAN: number
export const KEY_WWW: number
export const KEY_Wacute: number
export const KEY_WakeUp: number
export const KEY_Wcircumflex: number
export const KEY_Wdiaeresis: number
export const KEY_WebCam: number
export const KEY_Wgrave: number
export const KEY_WheelButton: number
export const KEY_WindowClear: number
export const KEY_WonSign: number
export const KEY_Word: number
export const KEY_X: number
export const KEY_Xabovedot: number
export const KEY_Xfer: number
export const KEY_Y: number
export const KEY_Yacute: number
export const KEY_Ybelowdot: number
export const KEY_Ycircumflex: number
export const KEY_Ydiaeresis: number
export const KEY_Yellow: number
export const KEY_Ygrave: number
export const KEY_Yhook: number
export const KEY_Ytilde: number
export const KEY_Z: number
export const KEY_Zabovedot: number
export const KEY_Zacute: number
export const KEY_Zcaron: number
export const KEY_Zen_Koho: number
export const KEY_Zenkaku: number
export const KEY_Zenkaku_Hankaku: number
export const KEY_ZoomIn: number
export const KEY_ZoomOut: number
export const KEY_Zstroke: number
export const KEY_a: number
export const KEY_aacute: number
export const KEY_abelowdot: number
export const KEY_abovedot: number
export const KEY_abreve: number
export const KEY_abreveacute: number
export const KEY_abrevebelowdot: number
export const KEY_abrevegrave: number
export const KEY_abrevehook: number
export const KEY_abrevetilde: number
export const KEY_acircumflex: number
export const KEY_acircumflexacute: number
export const KEY_acircumflexbelowdot: number
export const KEY_acircumflexgrave: number
export const KEY_acircumflexhook: number
export const KEY_acircumflextilde: number
export const KEY_acute: number
export const KEY_adiaeresis: number
export const KEY_ae: number
export const KEY_agrave: number
export const KEY_ahook: number
export const KEY_amacron: number
export const KEY_ampersand: number
export const KEY_aogonek: number
export const KEY_apostrophe: number
export const KEY_approxeq: number
export const KEY_approximate: number
export const KEY_aring: number
export const KEY_asciicircum: number
export const KEY_asciitilde: number
export const KEY_asterisk: number
export const KEY_at: number
export const KEY_atilde: number
export const KEY_b: number
export const KEY_babovedot: number
export const KEY_backslash: number
export const KEY_ballotcross: number
export const KEY_bar: number
export const KEY_because: number
export const KEY_blank: number
export const KEY_botintegral: number
export const KEY_botleftparens: number
export const KEY_botleftsqbracket: number
export const KEY_botleftsummation: number
export const KEY_botrightparens: number
export const KEY_botrightsqbracket: number
export const KEY_botrightsummation: number
export const KEY_bott: number
export const KEY_botvertsummationconnector: number
export const KEY_braceleft: number
export const KEY_braceright: number
export const KEY_bracketleft: number
export const KEY_bracketright: number
export const KEY_braille_blank: number
export const KEY_braille_dot_1: number
export const KEY_braille_dot_10: number
export const KEY_braille_dot_2: number
export const KEY_braille_dot_3: number
export const KEY_braille_dot_4: number
export const KEY_braille_dot_5: number
export const KEY_braille_dot_6: number
export const KEY_braille_dot_7: number
export const KEY_braille_dot_8: number
export const KEY_braille_dot_9: number
export const KEY_braille_dots_1: number
export const KEY_braille_dots_12: number
export const KEY_braille_dots_123: number
export const KEY_braille_dots_1234: number
export const KEY_braille_dots_12345: number
export const KEY_braille_dots_123456: number
export const KEY_braille_dots_1234567: number
export const KEY_braille_dots_12345678: number
export const KEY_braille_dots_1234568: number
export const KEY_braille_dots_123457: number
export const KEY_braille_dots_1234578: number
export const KEY_braille_dots_123458: number
export const KEY_braille_dots_12346: number
export const KEY_braille_dots_123467: number
export const KEY_braille_dots_1234678: number
export const KEY_braille_dots_123468: number
export const KEY_braille_dots_12347: number
export const KEY_braille_dots_123478: number
export const KEY_braille_dots_12348: number
export const KEY_braille_dots_1235: number
export const KEY_braille_dots_12356: number
export const KEY_braille_dots_123567: number
export const KEY_braille_dots_1235678: number
export const KEY_braille_dots_123568: number
export const KEY_braille_dots_12357: number
export const KEY_braille_dots_123578: number
export const KEY_braille_dots_12358: number
export const KEY_braille_dots_1236: number
export const KEY_braille_dots_12367: number
export const KEY_braille_dots_123678: number
export const KEY_braille_dots_12368: number
export const KEY_braille_dots_1237: number
export const KEY_braille_dots_12378: number
export const KEY_braille_dots_1238: number
export const KEY_braille_dots_124: number
export const KEY_braille_dots_1245: number
export const KEY_braille_dots_12456: number
export const KEY_braille_dots_124567: number
export const KEY_braille_dots_1245678: number
export const KEY_braille_dots_124568: number
export const KEY_braille_dots_12457: number
export const KEY_braille_dots_124578: number
export const KEY_braille_dots_12458: number
export const KEY_braille_dots_1246: number
export const KEY_braille_dots_12467: number
export const KEY_braille_dots_124678: number
export const KEY_braille_dots_12468: number
export const KEY_braille_dots_1247: number
export const KEY_braille_dots_12478: number
export const KEY_braille_dots_1248: number
export const KEY_braille_dots_125: number
export const KEY_braille_dots_1256: number
export const KEY_braille_dots_12567: number
export const KEY_braille_dots_125678: number
export const KEY_braille_dots_12568: number
export const KEY_braille_dots_1257: number
export const KEY_braille_dots_12578: number
export const KEY_braille_dots_1258: number
export const KEY_braille_dots_126: number
export const KEY_braille_dots_1267: number
export const KEY_braille_dots_12678: number
export const KEY_braille_dots_1268: number
export const KEY_braille_dots_127: number
export const KEY_braille_dots_1278: number
export const KEY_braille_dots_128: number
export const KEY_braille_dots_13: number
export const KEY_braille_dots_134: number
export const KEY_braille_dots_1345: number
export const KEY_braille_dots_13456: number
export const KEY_braille_dots_134567: number
export const KEY_braille_dots_1345678: number
export const KEY_braille_dots_134568: number
export const KEY_braille_dots_13457: number
export const KEY_braille_dots_134578: number
export const KEY_braille_dots_13458: number
export const KEY_braille_dots_1346: number
export const KEY_braille_dots_13467: number
export const KEY_braille_dots_134678: number
export const KEY_braille_dots_13468: number
export const KEY_braille_dots_1347: number
export const KEY_braille_dots_13478: number
export const KEY_braille_dots_1348: number
export const KEY_braille_dots_135: number
export const KEY_braille_dots_1356: number
export const KEY_braille_dots_13567: number
export const KEY_braille_dots_135678: number
export const KEY_braille_dots_13568: number
export const KEY_braille_dots_1357: number
export const KEY_braille_dots_13578: number
export const KEY_braille_dots_1358: number
export const KEY_braille_dots_136: number
export const KEY_braille_dots_1367: number
export const KEY_braille_dots_13678: number
export const KEY_braille_dots_1368: number
export const KEY_braille_dots_137: number
export const KEY_braille_dots_1378: number
export const KEY_braille_dots_138: number
export const KEY_braille_dots_14: number
export const KEY_braille_dots_145: number
export const KEY_braille_dots_1456: number
export const KEY_braille_dots_14567: number
export const KEY_braille_dots_145678: number
export const KEY_braille_dots_14568: number
export const KEY_braille_dots_1457: number
export const KEY_braille_dots_14578: number
export const KEY_braille_dots_1458: number
export const KEY_braille_dots_146: number
export const KEY_braille_dots_1467: number
export const KEY_braille_dots_14678: number
export const KEY_braille_dots_1468: number
export const KEY_braille_dots_147: number
export const KEY_braille_dots_1478: number
export const KEY_braille_dots_148: number
export const KEY_braille_dots_15: number
export const KEY_braille_dots_156: number
export const KEY_braille_dots_1567: number
export const KEY_braille_dots_15678: number
export const KEY_braille_dots_1568: number
export const KEY_braille_dots_157: number
export const KEY_braille_dots_1578: number
export const KEY_braille_dots_158: number
export const KEY_braille_dots_16: number
export const KEY_braille_dots_167: number
export const KEY_braille_dots_1678: number
export const KEY_braille_dots_168: number
export const KEY_braille_dots_17: number
export const KEY_braille_dots_178: number
export const KEY_braille_dots_18: number
export const KEY_braille_dots_2: number
export const KEY_braille_dots_23: number
export const KEY_braille_dots_234: number
export const KEY_braille_dots_2345: number
export const KEY_braille_dots_23456: number
export const KEY_braille_dots_234567: number
export const KEY_braille_dots_2345678: number
export const KEY_braille_dots_234568: number
export const KEY_braille_dots_23457: number
export const KEY_braille_dots_234578: number
export const KEY_braille_dots_23458: number
export const KEY_braille_dots_2346: number
export const KEY_braille_dots_23467: number
export const KEY_braille_dots_234678: number
export const KEY_braille_dots_23468: number
export const KEY_braille_dots_2347: number
export const KEY_braille_dots_23478: number
export const KEY_braille_dots_2348: number
export const KEY_braille_dots_235: number
export const KEY_braille_dots_2356: number
export const KEY_braille_dots_23567: number
export const KEY_braille_dots_235678: number
export const KEY_braille_dots_23568: number
export const KEY_braille_dots_2357: number
export const KEY_braille_dots_23578: number
export const KEY_braille_dots_2358: number
export const KEY_braille_dots_236: number
export const KEY_braille_dots_2367: number
export const KEY_braille_dots_23678: number
export const KEY_braille_dots_2368: number
export const KEY_braille_dots_237: number
export const KEY_braille_dots_2378: number
export const KEY_braille_dots_238: number
export const KEY_braille_dots_24: number
export const KEY_braille_dots_245: number
export const KEY_braille_dots_2456: number
export const KEY_braille_dots_24567: number
export const KEY_braille_dots_245678: number
export const KEY_braille_dots_24568: number
export const KEY_braille_dots_2457: number
export const KEY_braille_dots_24578: number
export const KEY_braille_dots_2458: number
export const KEY_braille_dots_246: number
export const KEY_braille_dots_2467: number
export const KEY_braille_dots_24678: number
export const KEY_braille_dots_2468: number
export const KEY_braille_dots_247: number
export const KEY_braille_dots_2478: number
export const KEY_braille_dots_248: number
export const KEY_braille_dots_25: number
export const KEY_braille_dots_256: number
export const KEY_braille_dots_2567: number
export const KEY_braille_dots_25678: number
export const KEY_braille_dots_2568: number
export const KEY_braille_dots_257: number
export const KEY_braille_dots_2578: number
export const KEY_braille_dots_258: number
export const KEY_braille_dots_26: number
export const KEY_braille_dots_267: number
export const KEY_braille_dots_2678: number
export const KEY_braille_dots_268: number
export const KEY_braille_dots_27: number
export const KEY_braille_dots_278: number
export const KEY_braille_dots_28: number
export const KEY_braille_dots_3: number
export const KEY_braille_dots_34: number
export const KEY_braille_dots_345: number
export const KEY_braille_dots_3456: number
export const KEY_braille_dots_34567: number
export const KEY_braille_dots_345678: number
export const KEY_braille_dots_34568: number
export const KEY_braille_dots_3457: number
export const KEY_braille_dots_34578: number
export const KEY_braille_dots_3458: number
export const KEY_braille_dots_346: number
export const KEY_braille_dots_3467: number
export const KEY_braille_dots_34678: number
export const KEY_braille_dots_3468: number
export const KEY_braille_dots_347: number
export const KEY_braille_dots_3478: number
export const KEY_braille_dots_348: number
export const KEY_braille_dots_35: number
export const KEY_braille_dots_356: number
export const KEY_braille_dots_3567: number
export const KEY_braille_dots_35678: number
export const KEY_braille_dots_3568: number
export const KEY_braille_dots_357: number
export const KEY_braille_dots_3578: number
export const KEY_braille_dots_358: number
export const KEY_braille_dots_36: number
export const KEY_braille_dots_367: number
export const KEY_braille_dots_3678: number
export const KEY_braille_dots_368: number
export const KEY_braille_dots_37: number
export const KEY_braille_dots_378: number
export const KEY_braille_dots_38: number
export const KEY_braille_dots_4: number
export const KEY_braille_dots_45: number
export const KEY_braille_dots_456: number
export const KEY_braille_dots_4567: number
export const KEY_braille_dots_45678: number
export const KEY_braille_dots_4568: number
export const KEY_braille_dots_457: number
export const KEY_braille_dots_4578: number
export const KEY_braille_dots_458: number
export const KEY_braille_dots_46: number
export const KEY_braille_dots_467: number
export const KEY_braille_dots_4678: number
export const KEY_braille_dots_468: number
export const KEY_braille_dots_47: number
export const KEY_braille_dots_478: number
export const KEY_braille_dots_48: number
export const KEY_braille_dots_5: number
export const KEY_braille_dots_56: number
export const KEY_braille_dots_567: number
export const KEY_braille_dots_5678: number
export const KEY_braille_dots_568: number
export const KEY_braille_dots_57: number
export const KEY_braille_dots_578: number
export const KEY_braille_dots_58: number
export const KEY_braille_dots_6: number
export const KEY_braille_dots_67: number
export const KEY_braille_dots_678: number
export const KEY_braille_dots_68: number
export const KEY_braille_dots_7: number
export const KEY_braille_dots_78: number
export const KEY_braille_dots_8: number
export const KEY_breve: number
export const KEY_brokenbar: number
export const KEY_c: number
export const KEY_c_h: number
export const KEY_cabovedot: number
export const KEY_cacute: number
export const KEY_careof: number
export const KEY_caret: number
export const KEY_caron: number
export const KEY_ccaron: number
export const KEY_ccedilla: number
export const KEY_ccircumflex: number
export const KEY_cedilla: number
export const KEY_cent: number
export const KEY_ch: number
export const KEY_checkerboard: number
export const KEY_checkmark: number
export const KEY_circle: number
export const KEY_club: number
export const KEY_colon: number
export const KEY_comma: number
export const KEY_containsas: number
export const KEY_copyright: number
export const KEY_cr: number
export const KEY_crossinglines: number
export const KEY_cuberoot: number
export const KEY_currency: number
export const KEY_cursor: number
export const KEY_d: number
export const KEY_dabovedot: number
export const KEY_dagger: number
export const KEY_dcaron: number
export const KEY_dead_A: number
export const KEY_dead_E: number
export const KEY_dead_I: number
export const KEY_dead_O: number
export const KEY_dead_U: number
export const KEY_dead_a: number
export const KEY_dead_abovecomma: number
export const KEY_dead_abovedot: number
export const KEY_dead_abovereversedcomma: number
export const KEY_dead_abovering: number
export const KEY_dead_aboveverticalline: number
export const KEY_dead_acute: number
export const KEY_dead_belowbreve: number
export const KEY_dead_belowcircumflex: number
export const KEY_dead_belowcomma: number
export const KEY_dead_belowdiaeresis: number
export const KEY_dead_belowdot: number
export const KEY_dead_belowmacron: number
export const KEY_dead_belowring: number
export const KEY_dead_belowtilde: number
export const KEY_dead_belowverticalline: number
export const KEY_dead_breve: number
export const KEY_dead_capital_schwa: number
export const KEY_dead_caron: number
export const KEY_dead_cedilla: number
export const KEY_dead_circumflex: number
export const KEY_dead_currency: number
export const KEY_dead_dasia: number
export const KEY_dead_diaeresis: number
export const KEY_dead_doubleacute: number
export const KEY_dead_doublegrave: number
export const KEY_dead_e: number
export const KEY_dead_grave: number
export const KEY_dead_greek: number
export const KEY_dead_hook: number
export const KEY_dead_horn: number
export const KEY_dead_i: number
export const KEY_dead_invertedbreve: number
export const KEY_dead_iota: number
export const KEY_dead_longsolidusoverlay: number
export const KEY_dead_lowline: number
export const KEY_dead_macron: number
export const KEY_dead_o: number
export const KEY_dead_ogonek: number
export const KEY_dead_perispomeni: number
export const KEY_dead_psili: number
export const KEY_dead_semivoiced_sound: number
export const KEY_dead_small_schwa: number
export const KEY_dead_stroke: number
export const KEY_dead_tilde: number
export const KEY_dead_u: number
export const KEY_dead_voiced_sound: number
export const KEY_decimalpoint: number
export const KEY_degree: number
export const KEY_diaeresis: number
export const KEY_diamond: number
export const KEY_digitspace: number
export const KEY_dintegral: number
export const KEY_division: number
export const KEY_dollar: number
export const KEY_doubbaselinedot: number
export const KEY_doubleacute: number
export const KEY_doubledagger: number
export const KEY_doublelowquotemark: number
export const KEY_downarrow: number
export const KEY_downcaret: number
export const KEY_downshoe: number
export const KEY_downstile: number
export const KEY_downtack: number
export const KEY_dstroke: number
export const KEY_e: number
export const KEY_eabovedot: number
export const KEY_eacute: number
export const KEY_ebelowdot: number
export const KEY_ecaron: number
export const KEY_ecircumflex: number
export const KEY_ecircumflexacute: number
export const KEY_ecircumflexbelowdot: number
export const KEY_ecircumflexgrave: number
export const KEY_ecircumflexhook: number
export const KEY_ecircumflextilde: number
export const KEY_ediaeresis: number
export const KEY_egrave: number
export const KEY_ehook: number
export const KEY_eightsubscript: number
export const KEY_eightsuperior: number
export const KEY_elementof: number
export const KEY_ellipsis: number
export const KEY_em3space: number
export const KEY_em4space: number
export const KEY_emacron: number
export const KEY_emdash: number
export const KEY_emfilledcircle: number
export const KEY_emfilledrect: number
export const KEY_emopencircle: number
export const KEY_emopenrectangle: number
export const KEY_emptyset: number
export const KEY_emspace: number
export const KEY_endash: number
export const KEY_enfilledcircbullet: number
export const KEY_enfilledsqbullet: number
export const KEY_eng: number
export const KEY_enopencircbullet: number
export const KEY_enopensquarebullet: number
export const KEY_enspace: number
export const KEY_eogonek: number
export const KEY_equal: number
export const KEY_eth: number
export const KEY_etilde: number
export const KEY_exclam: number
export const KEY_exclamdown: number
export const KEY_ezh: number
export const KEY_f: number
export const KEY_fabovedot: number
export const KEY_femalesymbol: number
export const KEY_ff: number
export const KEY_figdash: number
export const KEY_filledlefttribullet: number
export const KEY_filledrectbullet: number
export const KEY_filledrighttribullet: number
export const KEY_filledtribulletdown: number
export const KEY_filledtribulletup: number
export const KEY_fiveeighths: number
export const KEY_fivesixths: number
export const KEY_fivesubscript: number
export const KEY_fivesuperior: number
export const KEY_fourfifths: number
export const KEY_foursubscript: number
export const KEY_foursuperior: number
export const KEY_fourthroot: number
export const KEY_function: number
export const KEY_g: number
export const KEY_gabovedot: number
export const KEY_gbreve: number
export const KEY_gcaron: number
export const KEY_gcedilla: number
export const KEY_gcircumflex: number
export const KEY_grave: number
export const KEY_greater: number
export const KEY_greaterthanequal: number
export const KEY_guillemotleft: number
export const KEY_guillemotright: number
export const KEY_h: number
export const KEY_hairspace: number
export const KEY_hcircumflex: number
export const KEY_heart: number
export const KEY_hebrew_aleph: number
export const KEY_hebrew_ayin: number
export const KEY_hebrew_bet: number
export const KEY_hebrew_beth: number
export const KEY_hebrew_chet: number
export const KEY_hebrew_dalet: number
export const KEY_hebrew_daleth: number
export const KEY_hebrew_doublelowline: number
export const KEY_hebrew_finalkaph: number
export const KEY_hebrew_finalmem: number
export const KEY_hebrew_finalnun: number
export const KEY_hebrew_finalpe: number
export const KEY_hebrew_finalzade: number
export const KEY_hebrew_finalzadi: number
export const KEY_hebrew_gimel: number
export const KEY_hebrew_gimmel: number
export const KEY_hebrew_he: number
export const KEY_hebrew_het: number
export const KEY_hebrew_kaph: number
export const KEY_hebrew_kuf: number
export const KEY_hebrew_lamed: number
export const KEY_hebrew_mem: number
export const KEY_hebrew_nun: number
export const KEY_hebrew_pe: number
export const KEY_hebrew_qoph: number
export const KEY_hebrew_resh: number
export const KEY_hebrew_samech: number
export const KEY_hebrew_samekh: number
export const KEY_hebrew_shin: number
export const KEY_hebrew_taf: number
export const KEY_hebrew_taw: number
export const KEY_hebrew_tet: number
export const KEY_hebrew_teth: number
export const KEY_hebrew_waw: number
export const KEY_hebrew_yod: number
export const KEY_hebrew_zade: number
export const KEY_hebrew_zadi: number
export const KEY_hebrew_zain: number
export const KEY_hebrew_zayin: number
export const KEY_hexagram: number
export const KEY_horizconnector: number
export const KEY_horizlinescan1: number
export const KEY_horizlinescan3: number
export const KEY_horizlinescan5: number
export const KEY_horizlinescan7: number
export const KEY_horizlinescan9: number
export const KEY_hstroke: number
export const KEY_ht: number
export const KEY_hyphen: number
export const KEY_i: number
export const KEY_iTouch: number
export const KEY_iacute: number
export const KEY_ibelowdot: number
export const KEY_ibreve: number
export const KEY_icircumflex: number
export const KEY_identical: number
export const KEY_idiaeresis: number
export const KEY_idotless: number
export const KEY_ifonlyif: number
export const KEY_igrave: number
export const KEY_ihook: number
export const KEY_imacron: number
export const KEY_implies: number
export const KEY_includedin: number
export const KEY_includes: number
export const KEY_infinity: number
export const KEY_integral: number
export const KEY_intersection: number
export const KEY_iogonek: number
export const KEY_itilde: number
export const KEY_j: number
export const KEY_jcircumflex: number
export const KEY_jot: number
export const KEY_k: number
export const KEY_kana_A: number
export const KEY_kana_CHI: number
export const KEY_kana_E: number
export const KEY_kana_FU: number
export const KEY_kana_HA: number
export const KEY_kana_HE: number
export const KEY_kana_HI: number
export const KEY_kana_HO: number
export const KEY_kana_HU: number
export const KEY_kana_I: number
export const KEY_kana_KA: number
export const KEY_kana_KE: number
export const KEY_kana_KI: number
export const KEY_kana_KO: number
export const KEY_kana_KU: number
export const KEY_kana_MA: number
export const KEY_kana_ME: number
export const KEY_kana_MI: number
export const KEY_kana_MO: number
export const KEY_kana_MU: number
export const KEY_kana_N: number
export const KEY_kana_NA: number
export const KEY_kana_NE: number
export const KEY_kana_NI: number
export const KEY_kana_NO: number
export const KEY_kana_NU: number
export const KEY_kana_O: number
export const KEY_kana_RA: number
export const KEY_kana_RE: number
export const KEY_kana_RI: number
export const KEY_kana_RO: number
export const KEY_kana_RU: number
export const KEY_kana_SA: number
export const KEY_kana_SE: number
export const KEY_kana_SHI: number
export const KEY_kana_SO: number
export const KEY_kana_SU: number
export const KEY_kana_TA: number
export const KEY_kana_TE: number
export const KEY_kana_TI: number
export const KEY_kana_TO: number
export const KEY_kana_TSU: number
export const KEY_kana_TU: number
export const KEY_kana_U: number
export const KEY_kana_WA: number
export const KEY_kana_WO: number
export const KEY_kana_YA: number
export const KEY_kana_YO: number
export const KEY_kana_YU: number
export const KEY_kana_a: number
export const KEY_kana_closingbracket: number
export const KEY_kana_comma: number
export const KEY_kana_conjunctive: number
export const KEY_kana_e: number
export const KEY_kana_fullstop: number
export const KEY_kana_i: number
export const KEY_kana_middledot: number
export const KEY_kana_o: number
export const KEY_kana_openingbracket: number
export const KEY_kana_switch: number
export const KEY_kana_tsu: number
export const KEY_kana_tu: number
export const KEY_kana_u: number
export const KEY_kana_ya: number
export const KEY_kana_yo: number
export const KEY_kana_yu: number
export const KEY_kappa: number
export const KEY_kcedilla: number
export const KEY_kra: number
export const KEY_l: number
export const KEY_lacute: number
export const KEY_latincross: number
export const KEY_lbelowdot: number
export const KEY_lcaron: number
export const KEY_lcedilla: number
export const KEY_leftanglebracket: number
export const KEY_leftarrow: number
export const KEY_leftcaret: number
export const KEY_leftdoublequotemark: number
export const KEY_leftmiddlecurlybrace: number
export const KEY_leftopentriangle: number
export const KEY_leftpointer: number
export const KEY_leftradical: number
export const KEY_leftshoe: number
export const KEY_leftsinglequotemark: number
export const KEY_leftt: number
export const KEY_lefttack: number
export const KEY_less: number
export const KEY_lessthanequal: number
export const KEY_lf: number
export const KEY_logicaland: number
export const KEY_logicalor: number
export const KEY_lowleftcorner: number
export const KEY_lowrightcorner: number
export const KEY_lstroke: number
export const KEY_m: number
export const KEY_mabovedot: number
export const KEY_macron: number
export const KEY_malesymbol: number
export const KEY_maltesecross: number
export const KEY_marker: number
export const KEY_masculine: number
export const KEY_minus: number
export const KEY_minutes: number
export const KEY_mu: number
export const KEY_multiply: number
export const KEY_musicalflat: number
export const KEY_musicalsharp: number
export const KEY_n: number
export const KEY_nabla: number
export const KEY_nacute: number
export const KEY_ncaron: number
export const KEY_ncedilla: number
export const KEY_ninesubscript: number
export const KEY_ninesuperior: number
export const KEY_nl: number
export const KEY_nobreakspace: number
export const KEY_notapproxeq: number
export const KEY_notelementof: number
export const KEY_notequal: number
export const KEY_notidentical: number
export const KEY_notsign: number
export const KEY_ntilde: number
export const KEY_numbersign: number
export const KEY_numerosign: number
export const KEY_o: number
export const KEY_oacute: number
export const KEY_obarred: number
export const KEY_obelowdot: number
export const KEY_ocaron: number
export const KEY_ocircumflex: number
export const KEY_ocircumflexacute: number
export const KEY_ocircumflexbelowdot: number
export const KEY_ocircumflexgrave: number
export const KEY_ocircumflexhook: number
export const KEY_ocircumflextilde: number
export const KEY_odiaeresis: number
export const KEY_odoubleacute: number
export const KEY_oe: number
export const KEY_ogonek: number
export const KEY_ograve: number
export const KEY_ohook: number
export const KEY_ohorn: number
export const KEY_ohornacute: number
export const KEY_ohornbelowdot: number
export const KEY_ohorngrave: number
export const KEY_ohornhook: number
export const KEY_ohorntilde: number
export const KEY_omacron: number
export const KEY_oneeighth: number
export const KEY_onefifth: number
export const KEY_onehalf: number
export const KEY_onequarter: number
export const KEY_onesixth: number
export const KEY_onesubscript: number
export const KEY_onesuperior: number
export const KEY_onethird: number
export const KEY_ooblique: number
export const KEY_openrectbullet: number
export const KEY_openstar: number
export const KEY_opentribulletdown: number
export const KEY_opentribulletup: number
export const KEY_ordfeminine: number
export const KEY_oslash: number
export const KEY_otilde: number
export const KEY_overbar: number
export const KEY_overline: number
export const KEY_p: number
export const KEY_pabovedot: number
export const KEY_paragraph: number
export const KEY_parenleft: number
export const KEY_parenright: number
export const KEY_partdifferential: number
export const KEY_partialderivative: number
export const KEY_percent: number
export const KEY_period: number
export const KEY_periodcentered: number
export const KEY_permille: number
export const KEY_phonographcopyright: number
export const KEY_plus: number
export const KEY_plusminus: number
export const KEY_prescription: number
export const KEY_prolongedsound: number
export const KEY_punctspace: number
export const KEY_q: number
export const KEY_quad: number
export const KEY_question: number
export const KEY_questiondown: number
export const KEY_quotedbl: number
export const KEY_quoteleft: number
export const KEY_quoteright: number
export const KEY_r: number
export const KEY_racute: number
export const KEY_radical: number
export const KEY_rcaron: number
export const KEY_rcedilla: number
export const KEY_registered: number
export const KEY_rightanglebracket: number
export const KEY_rightarrow: number
export const KEY_rightcaret: number
export const KEY_rightdoublequotemark: number
export const KEY_rightmiddlecurlybrace: number
export const KEY_rightmiddlesummation: number
export const KEY_rightopentriangle: number
export const KEY_rightpointer: number
export const KEY_rightshoe: number
export const KEY_rightsinglequotemark: number
export const KEY_rightt: number
export const KEY_righttack: number
export const KEY_s: number
export const KEY_sabovedot: number
export const KEY_sacute: number
export const KEY_scaron: number
export const KEY_scedilla: number
export const KEY_schwa: number
export const KEY_scircumflex: number
export const KEY_script_switch: number
export const KEY_seconds: number
export const KEY_section: number
export const KEY_semicolon: number
export const KEY_semivoicedsound: number
export const KEY_seveneighths: number
export const KEY_sevensubscript: number
export const KEY_sevensuperior: number
export const KEY_signaturemark: number
export const KEY_signifblank: number
export const KEY_similarequal: number
export const KEY_singlelowquotemark: number
export const KEY_sixsubscript: number
export const KEY_sixsuperior: number
export const KEY_slash: number
export const KEY_soliddiamond: number
export const KEY_space: number
export const KEY_squareroot: number
export const KEY_ssharp: number
export const KEY_sterling: number
export const KEY_stricteq: number
export const KEY_t: number
export const KEY_tabovedot: number
export const KEY_tcaron: number
export const KEY_tcedilla: number
export const KEY_telephone: number
export const KEY_telephonerecorder: number
export const KEY_therefore: number
export const KEY_thinspace: number
export const KEY_thorn: number
export const KEY_threeeighths: number
export const KEY_threefifths: number
export const KEY_threequarters: number
export const KEY_threesubscript: number
export const KEY_threesuperior: number
export const KEY_tintegral: number
export const KEY_topintegral: number
export const KEY_topleftparens: number
export const KEY_topleftradical: number
export const KEY_topleftsqbracket: number
export const KEY_topleftsummation: number
export const KEY_toprightparens: number
export const KEY_toprightsqbracket: number
export const KEY_toprightsummation: number
export const KEY_topt: number
export const KEY_topvertsummationconnector: number
export const KEY_trademark: number
export const KEY_trademarkincircle: number
export const KEY_tslash: number
export const KEY_twofifths: number
export const KEY_twosubscript: number
export const KEY_twosuperior: number
export const KEY_twothirds: number
export const KEY_u: number
export const KEY_uacute: number
export const KEY_ubelowdot: number
export const KEY_ubreve: number
export const KEY_ucircumflex: number
export const KEY_udiaeresis: number
export const KEY_udoubleacute: number
export const KEY_ugrave: number
export const KEY_uhook: number
export const KEY_uhorn: number
export const KEY_uhornacute: number
export const KEY_uhornbelowdot: number
export const KEY_uhorngrave: number
export const KEY_uhornhook: number
export const KEY_uhorntilde: number
export const KEY_umacron: number
export const KEY_underbar: number
export const KEY_underscore: number
export const KEY_union: number
export const KEY_uogonek: number
export const KEY_uparrow: number
export const KEY_upcaret: number
export const KEY_upleftcorner: number
export const KEY_uprightcorner: number
export const KEY_upshoe: number
export const KEY_upstile: number
export const KEY_uptack: number
export const KEY_uring: number
export const KEY_utilde: number
export const KEY_v: number
export const KEY_variation: number
export const KEY_vertbar: number
export const KEY_vertconnector: number
export const KEY_voicedsound: number
export const KEY_vt: number
export const KEY_w: number
export const KEY_wacute: number
export const KEY_wcircumflex: number
export const KEY_wdiaeresis: number
export const KEY_wgrave: number
export const KEY_x: number
export const KEY_xabovedot: number
export const KEY_y: number
export const KEY_yacute: number
export const KEY_ybelowdot: number
export const KEY_ycircumflex: number
export const KEY_ydiaeresis: number
export const KEY_yen: number
export const KEY_ygrave: number
export const KEY_yhook: number
export const KEY_ytilde: number
export const KEY_z: number
export const KEY_zabovedot: number
export const KEY_zacute: number
export const KEY_zcaron: number
export const KEY_zerosubscript: number
export const KEY_zerosuperior: number
export const KEY_zstroke: number
export const MAJOR_VERSION: number
export const MAX_TIMECOORD_AXES: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
/**
 * A special value, indicating that the background
 * for a window should be inherited from the parent window.
 */
export const PARENT_RELATIVE: number
/**
 * This is the priority that the idle handler processing window updates
 * is given in the
 * [GLib Main Loop][glib-The-Main-Event-Loop].
 */
export const PRIORITY_REDRAW: number
export function add_option_entries_libgtk_only(group: GLib.OptionGroup): void
export function atom_intern(atom_name: string, only_if_exists: boolean): Atom
export function atom_intern_static_string(atom_name: string): Atom
export function beep(): void
export function cairo_create(window: Window): cairo.Context
export function cairo_draw_from_gl(cr: cairo.Context, window: Window, source: number, source_type: number, buffer_scale: number, x: number, y: number, width: number, height: number): void
export function cairo_get_clip_rectangle(cr: cairo.Context): [ /* returnType */ boolean, /* rect */ Rectangle | null ]
export function cairo_get_drawing_context(cr: cairo.Context): DrawingContext | null
export function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void
export function cairo_region(cr: cairo.Context, region: cairo.Region): void
export function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region
export function cairo_set_source_color(cr: cairo.Context, color: Color): void
export function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void
export function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void
export function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void
export function cairo_surface_create_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, for_window?: Window | null): cairo.Surface
export function color_parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
export function disable_multidevice(): void
export function drag_abort(context: DragContext, time_: number): void
export function drag_begin(window: Window, targets: Atom[]): DragContext
export function drag_begin_for_device(window: Window, device: Device, targets: Atom[]): DragContext
export function drag_begin_from_point(window: Window, device: Device, targets: Atom[], x_root: number, y_root: number): DragContext
export function drag_drop(context: DragContext, time_: number): void
export function drag_drop_done(context: DragContext, success: boolean): void
export function drag_drop_succeeded(context: DragContext): boolean
export function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number): [ /* dest_window */ Window, /* protocol */ DragProtocol ]
export function drag_get_selection(context: DragContext): Atom
export function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean
export function drag_status(context: DragContext, action: DragAction, time_: number): void
export function drop_finish(context: DragContext, success: boolean, time_: number): void
export function drop_reply(context: DragContext, accepted: boolean, time_: number): void
export function error_trap_pop(): number
export function error_trap_pop_ignored(): void
export function error_trap_push(): void
export function event_get(): Event | null
export function event_handler_set(func: EventFunc): void
export function event_peek(): Event | null
export function event_request_motions(event: EventMotion): void
export function events_get_angle(event1: Event, event2: Event): [ /* returnType */ boolean, /* angle */ number ]
export function events_get_center(event1: Event, event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
export function events_get_distance(event1: Event, event2: Event): [ /* returnType */ boolean, /* distance */ number ]
export function events_pending(): boolean
export function flush(): void
export function get_default_root_window(): Window
export function get_display(): string
export function get_display_arg_name(): string | null
export function get_program_class(): string
export function get_show_events(): boolean
export function gl_error_quark(): GLib.Quark
export function init(argv: string[]): /* argv */ string[]
export function init_check(argv: string[]): [ /* returnType */ boolean, /* argv */ string[] ]
export function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus
export function keyboard_ungrab(time_: number): void
export function keyval_convert_case(symbol: number): [ /* lower */ number, /* upper */ number ]
export function keyval_from_name(keyval_name: string): number
export function keyval_is_lower(keyval: number): boolean
export function keyval_is_upper(keyval: number): boolean
export function keyval_name(keyval: number): string | null
export function keyval_to_lower(keyval: number): number
export function keyval_to_unicode(keyval: number): number
export function keyval_to_upper(keyval: number): number
export function list_visuals(): Visual[]
export function notify_startup_complete(): void
export function notify_startup_complete_with_id(startup_id: string): void
export function offscreen_window_get_embedder(window: Window): Window | null
export function offscreen_window_get_surface(window: Window): cairo.Surface | null
export function offscreen_window_set_embedder(window: Window, embedder: Window): void
export function pango_context_get(): Pango.Context
export function pango_context_get_for_display(display: Display): Pango.Context
export function pango_context_get_for_screen(screen: Screen): Pango.Context
export function parse_args(argv: string[]): /* argv */ string[]
export function pixbuf_get_from_surface(surface: cairo.Surface, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null
export function pixbuf_get_from_window(window: Window, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null
export function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window | null, cursor: Cursor | null, time_: number): GrabStatus
export function pointer_is_grabbed(): boolean
export function pointer_ungrab(time_: number): void
export function pre_parse_libgtk_only(): void
export function property_delete(window: Window, property: Atom): void
export function property_get(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number): [ /* returnType */ boolean, /* actual_property_type */ Atom, /* actual_format */ number, /* data */ Uint8Array ]
export function query_depths(): /* depths */ number[]
export function query_visual_types(): /* visual_types */ VisualType[]
export function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void
export function selection_owner_get(selection: Atom): Window | null
export function selection_owner_get_for_display(display: Display, selection: Atom): Window | null
export function selection_owner_set(owner: Window | null, selection: Atom, time_: number, send_event: boolean): boolean
export function selection_owner_set_for_display(display: Display, owner: Window | null, selection: Atom, time_: number, send_event: boolean): boolean
export function selection_send_notify(requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void
export function selection_send_notify_for_display(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void
export function set_allowed_backends(backends: string): void
export function set_double_click_time(msec: number): void
export function set_program_class(program_class: string): void
export function set_show_events(show_events: boolean): void
export function setting_get(name: string, value: any): boolean
export function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void
export function test_render_sync(window: Window): void
export function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean
export function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean
export function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: Uint8Array): [ /* returnType */ number, /* list */ string[] ]
export function threads_add_idle(priority: number, function_: GLib.SourceFunc): number
export function threads_add_timeout(priority: number, interval: number, function_: GLib.SourceFunc): number
export function threads_add_timeout_seconds(priority: number, interval: number, function_: GLib.SourceFunc): number
export function threads_enter(): void
export function threads_init(): void
export function threads_leave(): void
export function unicode_to_keyval(wc: number): number
export function utf8_to_string_target(str: string): string | null
/**
 * Specifies the type of function passed to gdk_event_handler_set() to
 * handle all GDK events.
 */
export interface EventFunc {
    (event: Event): void
}
/**
 * Specifies the type of function used to filter native events before they are
 * converted to GDK events.
 * 
 * When a filter is called, `event` is unpopulated, except for
 * `event->window`. The filter may translate the native
 * event to a GDK event and store the result in `event,` or handle it without
 * translation. If the filter translates the event and processing should
 * continue, it should return %GDK_FILTER_TRANSLATE.
 */
export interface FilterFunc {
    (xevent: XEvent, event: Event): FilterReturn
}
/**
 * Type of the callback used to set up `window` so it can be
 * grabbed. A typical action would be ensuring the window is
 * visible, although there's room for other initialization
 * actions.
 */
export interface SeatGrabPrepareFunc {
    (seat: Seat, window: Window): void
}
/**
 * A function of this type is passed to gdk_window_invalidate_maybe_recurse().
 * It gets called for each child of the window to determine whether to
 * recursively invalidate it or now.
 */
export interface WindowChildFunc {
    (window: Window): boolean
}
/**
 * Whenever some area of the window is invalidated (directly in the
 * window or in a child window) this gets called with `region` in
 * the coordinate space of `window`. You can use `region` to just
 * keep track of the dirty region, or you can actually change
 * `region` in case you are doing display tricks like showing
 * a child in multiple places.
 */
export interface WindowInvalidateHandlerFunc {
    (window: Window, region: cairo.Region): void
}
export interface DevicePad_ConstructProps extends Device_ConstructProps {
}
export class DevicePad {
    /* Properties of Gdk-3.0.Gdk.Device */
    /**
     * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
     * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
     */
    readonly associated_device: Device
    /**
     * The axes currently available for this device.
     */
    readonly axes: AxisFlags
    /**
     * The #GdkDeviceManager the #GdkDevice pertains to.
     */
    readonly device_manager: DeviceManager
    /**
     * The #GdkDisplay the #GdkDevice pertains to.
     */
    readonly display: Display
    /**
     * Whether the device is represented by a cursor on the screen. Devices of type
     * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
     */
    readonly has_cursor: boolean
    input_mode: InputMode
    /**
     * Source type for the device.
     */
    readonly input_source: InputSource
    /**
     * Number of axes in the device.
     */
    readonly n_axes: number
    /**
     * The device name.
     */
    readonly name: string
    /**
     * The maximal number of concurrent touches on a touch device.
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    readonly num_touches: number
    /**
     * Product ID of this device, see gdk_device_get_product_id().
     */
    readonly product_id: string
    /**
     * #GdkSeat of this device.
     */
    seat: Seat
    readonly tool: DeviceTool
    /**
     * Device role in the device manager.
     */
    readonly type: DeviceType
    /**
     * Vendor ID of this device, see gdk_device_get_vendor_id().
     */
    readonly vendor_id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DevicePad */
    /**
     * Returns the group the given `feature` and `idx` belong to,
     * or -1 if feature/index do not exist in `pad`.
     * @param feature the feature type to get the group from
     * @param feature_idx the index of the feature to get the group from
     */
    get_feature_group(feature: DevicePadFeature, feature_idx: number): number
    /**
     * Returns the number of modes that `group` may have.
     * @param group_idx group to get the number of available modes from
     */
    get_group_n_modes(group_idx: number): number
    /**
     * Returns the number of features a tablet pad has.
     * @param feature a pad feature
     */
    get_n_features(feature: DevicePadFeature): number
    /**
     * Returns the number of groups this pad device has. Pads have
     * at least one group. A pad group is a subcollection of
     * buttons/strip/rings that is affected collectively by a same
     * current mode.
     */
    get_n_groups(): number
    /* Methods of Gdk-3.0.Gdk.Device */
    /**
     * Returns the associated device to `device,` if `device` is of type
     * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
     * keyboard.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_SLAVE, it will return
     * the master device to which `device` is attached to.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
     * returned, as there is no associated device.
     */
    get_associated_device(): Device | null
    /**
     * Returns the axes currently available on the device.
     */
    get_axes(): AxisFlags
    /**
     * Returns the axis use for `index_`.
     * @param index_ the index of the axis.
     */
    get_axis_use(index_: number): AxisUse
    /**
     * Returns the device type for `device`.
     */
    get_device_type(): DeviceType
    /**
     * Returns the #GdkDisplay to which `device` pertains.
     */
    get_display(): Display
    /**
     * Determines whether the pointer follows device motion.
     * This is not meaningful for keyboard devices, which don't have a pointer.
     */
    get_has_cursor(): boolean
    /**
     * If `index_` has a valid keyval, this function will return %TRUE
     * and fill in `keyval` and `modifiers` with the keyval settings.
     * @param index_ the index of the macro button to get.
     */
    get_key(index_: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    /**
     * Gets information about which window the given pointer device is in, based on events
     * that have been received so far from the display server. If another application
     * has a pointer grab, or this application has a grab with owner_events = %FALSE,
     * %NULL may be returned even if the pointer is physically over one of this
     * application's windows.
     */
    get_last_event_window(): Window | null
    /**
     * Determines the mode of the device.
     */
    get_mode(): InputMode
    /**
     * Returns the number of axes the device currently has.
     */
    get_n_axes(): number
    /**
     * Returns the number of keys the device currently has.
     */
    get_n_keys(): number
    /**
     * Determines the name of the device.
     */
    get_name(): string
    /**
     * Gets the current location of `device`. As a slave device
     * coordinates are those of its master pointer, This function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_position(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the current location of `device` in double precision. As a slave device's
     * coordinates are those of its master pointer, this function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them. See gdk_device_grab().
     */
    get_position_double(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Returns the product ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it. See gdk_device_get_vendor_id() for more information.
     */
    get_product_id(): string | null
    /**
     * Returns the #GdkSeat the device belongs to.
     */
    get_seat(): Seat
    /**
     * Determines the type of the device.
     */
    get_source(): InputSource
    /**
     * Returns the vendor ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it.
     * 
     * This function, together with gdk_device_get_product_id(), can be used to eg.
     * compose #GSettings paths to store settings for this device.
     * 
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const gchar *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    gchar *path;
     * 
     *    vendor = gdk_device_get_vendor_id (device);
     *    product = gdk_device_get_product_id (device);
     * 
     *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
     *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
     *    g_free (path);
     * 
     *    return settings;
     *  }
     * ```
     * 
     */
    get_vendor_id(): string | null
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y`. Returns
     * %NULL if the window tree under `device` is not known to GDK (for example, belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position(): [ /* returnType */ Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y` in
     * double precision. Returns %NULL if the window tree under `device` is not known to GDK (for example,
     * belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position_double(): [ /* returnType */ Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Grabs the device so that all events coming from this device are passed to
     * this application until the device is ungrabbed with gdk_device_ungrab(),
     * or the window becomes unviewable. This overrides any previous grab on the device
     * by this client.
     * 
     * Note that `device` and `window` need to be on the same display.
     * 
     * Device grabs are used for operations which need complete control over the
     * given device events (either pointer or keyboard). For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of an X window has selected both button press
     * and button release events, then a button press event will cause an automatic
     * pointer grab until the button is released. X does this automatically since
     * most applications expect to receive button press and release events in pairs.
     * It is equivalent to a pointer grab on the window with `owner_events` set to
     * %TRUE.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     * @param window the #GdkWindow which will own the grab (the grab window)
     * @param grab_ownership specifies the grab ownership.
     * @param owner_events if %FALSE then all device events are reported with respect to                `window` and are only reported if selected by `event_mask`. If                %TRUE then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
     * @param event_mask specifies the event mask, which is used in accordance with              `owner_events`.
     * @param cursor the cursor to display while the grab is active if the device is          a pointer. If this is %NULL then the normal cursors are used for          `window` and its descendants, and the cursor for `window` is used          elsewhere.
     * @param time_ the timestamp of the event which led to this pointer grab. This         usually comes from the #GdkEvent struct, though %GDK_CURRENT_TIME         can be used if the time isn’t known.
     */
    grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor | null, time_: number): GrabStatus
    /**
     * Returns a #GList of #GdkAtoms, containing the labels for
     * the axes that `device` currently has.
     */
    list_axes(): Atom[]
    /**
     * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
     * the list of slave devices attached to it, otherwise it will return
     * %NULL
     */
    list_slave_devices(): Device[] | null
    /**
     * Specifies how an axis of a device is used.
     * @param index_ the index of the axis
     * @param use specifies how the axis is used
     */
    set_axis_use(index_: number, use: AxisUse): void
    /**
     * Specifies the X key event to generate when a macro button of a device
     * is pressed.
     * @param index_ the index of the macro button to set
     * @param keyval the keyval to generate
     * @param modifiers the modifiers to set
     */
    set_key(index_: number, keyval: number, modifiers: ModifierType): void
    /**
     * Sets a the mode of an input device. The mode controls if the
     * device is active and whether the device’s range is mapped to the
     * entire screen or to a single window.
     * 
     * Note: This is only meaningful for floating devices, master devices (and
     * slaves connected to these) drive the pointer cursor, which is not limited
     * by the input mode.
     * @param mode the input mode.
     */
    set_mode(mode: InputMode): boolean
    /**
     * Release any grab on `device`.
     * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
     */
    ungrab(time_: number): void
    /**
     * Warps `device` in `display` to the point `x,``y` on
     * the screen `screen,` unless the device is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     * @param screen the screen to warp `device` to.
     * @param x the X coordinate of the destination.
     * @param y the Y coordinate of the destination.
     */
    warp(screen: Screen, x: number, y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.Device */
    /**
     * The ::changed signal is emitted either when the #GdkDevice
     * has changed the number of either axes or keys. For example
     * In X this will normally happen when the slave device routing
     * events through the master device changes (for example, user
     * switches from the USB mouse to a tablet), in that case the
     * master device will change to reflect the new slave device
     * axes and keys.
     */
    connect(sigName: "changed", callback: (($obj: DevicePad) => void)): number
    connect_after(sigName: "changed", callback: (($obj: DevicePad) => void)): number
    emit(sigName: "changed"): void
    /**
     * The ::tool-changed signal is emitted on pen/eraser
     * #GdkDevices whenever tools enter or leave proximity.
     * @param tool The new current tool
     */
    connect(sigName: "tool-changed", callback: (($obj: DevicePad, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: DevicePad, tool: DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: DeviceTool): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associated-device", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::axes", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-manager", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-manager", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-cursor", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cursor", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-mode", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-source", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-source", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-touches", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-touches", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product-id", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-id", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor-id", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-id", callback: (($obj: DevicePad, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DevicePad_ConstructProps)
    _init (config?: DevicePad_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AppLaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.AppLaunchContext */
    display?: Display
}
export class AppLaunchContext {
    /* Properties of Gdk-3.0.Gdk.AppLaunchContext */
    readonly display: Display
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.AppLaunchContext */
    /**
     * Sets the workspace on which applications will be launched when
     * using this context when running under a window manager that
     * supports multiple workspaces, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * 
     * When the workspace is not specified or `desktop` is set to -1,
     * it is up to the window manager to pick one, typically it will
     * be the current workspace.
     * @param desktop the number of a workspace, or -1
     */
    set_desktop(desktop: number): void
    /**
     * Sets the display on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_screen().
     * @param display a #GdkDisplay
     */
    set_display(display: Display): void
    /**
     * Sets the icon for applications that are launched with this
     * context.
     * 
     * Window Managers can use this information when displaying startup
     * notification.
     * 
     * See also gdk_app_launch_context_set_icon_name().
     * @param icon a #GIcon, or %NULL
     */
    set_icon(icon?: Gio.Icon | null): void
    /**
     * Sets the icon for applications that are launched with this context.
     * The `icon_name` will be interpreted in the same way as the Icon field
     * in desktop files. See also gdk_app_launch_context_set_icon().
     * 
     * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
     * If neither `icon` or `icon_name` is set, the icon is taken from either
     * the file that is passed to launched application or from the #GAppInfo
     * for the launched application itself.
     * @param icon_name an icon name, or %NULL
     */
    set_icon_name(icon_name?: string | null): void
    /**
     * Sets the screen on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_display().
     * 
     * Note that, typically, a #GdkScreen represents a logical screen,
     * not a physical monitor.
     * 
     * If both `screen` and `display` are set, the `screen` takes priority.
     * If neither `screen` or `display` are set, the default screen and
     * display are used.
     * @param screen a #GdkScreen
     */
    set_screen(screen: Screen): void
    /**
     * Sets the timestamp of `context`. The timestamp should ideally
     * be taken from the event that triggered the launch.
     * 
     * Window managers can use this information to avoid moving the
     * focus to the newly launched application when the user is busy
     * typing in another window. This is also known as 'focus stealing
     * prevention'.
     * @param timestamp a timestamp
     */
    set_timestamp(timestamp: number): void
    /* Methods of Gio-2.0.Gio.AppLaunchContext */
    /**
     * Gets the display string for the `context`. This is used to ensure new
     * applications are started on the same display as the launching
     * application, by setting the `DISPLAY` environment variable.
     * @param info a #GAppInfo
     * @param files a #GList of #GFile objects
     */
    get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Gets the complete environment variable list to be passed to
     * the child process when `context` is used to launch an application.
     * This is a %NULL-terminated array of strings, where each string has
     * the form `KEY=VALUE`.
     */
    get_environment(): string[]
    /**
     * Initiates startup notification for the application and returns the
     * `DESKTOP_STARTUP_ID` for the launched operation, if supported.
     * 
     * Startup notification IDs are defined in the
     * [FreeDesktop.Org Startup Notifications standard](http://standards.freedesktop.org/startup-notification-spec/startup-notification-latest.txt).
     * @param info a #GAppInfo
     * @param files a #GList of of #GFile objects
     */
    get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Called when an application has failed to launch, so that it can cancel
     * the application startup notification started in g_app_launch_context_get_startup_notify_id().
     * @param startup_notify_id the startup notification id that was returned by g_app_launch_context_get_startup_notify_id().
     */
    launch_failed(startup_notify_id: string): void
    /**
     * Arranges for `variable` to be set to `value` in the child's
     * environment when `context` is used to launch an application.
     * @param variable the environment variable to set
     * @param value the value for to set the variable to.
     */
    setenv(variable: string, value: string): void
    /**
     * Arranges for `variable` to be unset in the child's environment
     * when `context` is used to launch an application.
     * @param variable the environment variable to remove
     */
    unsetenv(variable: string): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Virtual methods of Gio-2.0.Gio.AppLaunchContext */
    /**
     * Gets the display string for the `context`. This is used to ensure new
     * applications are started on the same display as the launching
     * application, by setting the `DISPLAY` environment variable.
     * @param info a #GAppInfo
     * @param files a #GList of #GFile objects
     */
    vfunc_get_display(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Initiates startup notification for the application and returns the
     * `DESKTOP_STARTUP_ID` for the launched operation, if supported.
     * 
     * Startup notification IDs are defined in the
     * [FreeDesktop.Org Startup Notifications standard](http://standards.freedesktop.org/startup-notification-spec/startup-notification-latest.txt).
     * @param info a #GAppInfo
     * @param files a #GList of of #GFile objects
     */
    vfunc_get_startup_notify_id(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Called when an application has failed to launch, so that it can cancel
     * the application startup notification started in g_app_launch_context_get_startup_notify_id().
     * @param startup_notify_id the startup notification id that was returned by g_app_launch_context_get_startup_notify_id().
     */
    vfunc_launch_failed(startup_notify_id: string): void
    vfunc_launch_started(info: Gio.AppInfo, platform_data: GLib.Variant): void
    vfunc_launched(info: Gio.AppInfo, platform_data: GLib.Variant): void
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
    /* Signals of Gio-2.0.Gio.AppLaunchContext */
    /**
     * The #GAppLaunchContext::launch-failed signal is emitted when a #GAppInfo launch
     * fails. The startup notification id is provided, so that the launcher
     * can cancel the startup notification.
     * @param startup_notify_id the startup notification id for the failed launch
     */
    connect(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    connect_after(sigName: "launch-failed", callback: (($obj: AppLaunchContext, startup_notify_id: string) => void)): number
    emit(sigName: "launch-failed", startup_notify_id: string): void
    /**
     * The #GAppLaunchContext::launch-started signal is emitted when a #GAppInfo is
     * about to be launched. If non-null the `platform_data` is an
     * GVariant dictionary mapping strings to variants (ie `a{sv}`), which
     * contains additional, platform-specific data about this launch. On
     * UNIX, at least the `startup-notification-id` keys will be
     * present.
     * 
     * The value of the `startup-notification-id` key (type `s`) is a startup
     * notification ID corresponding to the format from the [startup-notification
     * specification](https://specifications.freedesktop.org/startup-notification-spec/startup-notification-0.1.txt).
     * It allows tracking the progress of the launchee through startup.
     * 
     * It is guaranteed that this signal is followed by either a #GAppLaunchContext::launched or
     * #GAppLaunchContext::launch-failed signal.
     * @param info the #GAppInfo that is about to be launched
     * @param platform_data additional platform-specific data for this launch
     */
    connect(sigName: "launch-started", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data?: GLib.Variant | null) => void)): number
    connect_after(sigName: "launch-started", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data?: GLib.Variant | null) => void)): number
    emit(sigName: "launch-started", info: Gio.AppInfo, platform_data?: GLib.Variant | null): void
    /**
     * The #GAppLaunchContext::launched signal is emitted when a #GAppInfo is successfully
     * launched. The `platform_data` is an GVariant dictionary mapping
     * strings to variants (ie `a{sv}`), which contains additional,
     * platform-specific data about this launch. On UNIX, at least the
     * `pid` and `startup-notification-id` keys will be present.
     * 
     * Since 2.72 the `pid` may be 0 if the process id wasn't known (for
     * example if the process was launched via D-Bus). The `pid` may not be
     * set at all in subsequent releases.
     * @param info the #GAppInfo that was just launched
     * @param platform_data additional platform-specific data for this launch
     */
    connect(sigName: "launched", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    connect_after(sigName: "launched", callback: (($obj: AppLaunchContext, info: Gio.AppInfo, platform_data: GLib.Variant) => void)): number
    emit(sigName: "launched", info: Gio.AppInfo, platform_data: GLib.Variant): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    /* Function overloads */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
export interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Cursor */
    cursor_type?: CursorType
    display?: Display
}
export class Cursor {
    /* Properties of Gdk-3.0.Gdk.Cursor */
    readonly cursor_type: CursorType
    readonly display: Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Cursor */
    /**
     * Returns the cursor type for this cursor.
     */
    get_cursor_type(): CursorType
    /**
     * Returns the display on which the #GdkCursor is defined.
     */
    get_display(): Display
    /**
     * Returns a #GdkPixbuf with the image used to display the cursor.
     * 
     * Note that depending on the capabilities of the windowing system and
     * on the cursor, GDK may not be able to obtain the image data. In this
     * case, %NULL is returned.
     */
    get_image(): GdkPixbuf.Pixbuf | null
    /**
     * Returns a cairo image surface with the image used to display the cursor.
     * 
     * Note that depending on the capabilities of the windowing system and
     * on the cursor, GDK may not be able to obtain the image data. In this
     * case, %NULL is returned.
     */
    get_surface(): [ /* returnType */ cairo.Surface | null, /* x_hot */ number | null, /* y_hot */ number | null ]
    /**
     * Adds a reference to `cursor`.
     */
    ref(): Cursor
    /**
     * Removes a reference from `cursor,` deallocating the cursor
     * if no references remain.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor-type", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor-type", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Cursor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(cursor_type: CursorType): Cursor
    static new_for_display(display: Display, cursor_type: CursorType): Cursor
    static new_from_name(display: Display, name: string): Cursor
    static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor
    static new_from_surface(display: Display, surface: cairo.Surface, x: number, y: number): Cursor
    static $gtype: GObject.Type
}
export interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Device */
    /**
     * The #GdkDeviceManager the #GdkDevice pertains to.
     */
    device_manager?: DeviceManager
    /**
     * The #GdkDisplay the #GdkDevice pertains to.
     */
    display?: Display
    /**
     * Whether the device is represented by a cursor on the screen. Devices of type
     * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
     */
    has_cursor?: boolean
    input_mode?: InputMode
    /**
     * Source type for the device.
     */
    input_source?: InputSource
    /**
     * The device name.
     */
    name?: string
    /**
     * The maximal number of concurrent touches on a touch device.
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    num_touches?: number
    /**
     * Product ID of this device, see gdk_device_get_product_id().
     */
    product_id?: string
    /**
     * #GdkSeat of this device.
     */
    seat?: Seat
    /**
     * Device role in the device manager.
     */
    type?: DeviceType
    /**
     * Vendor ID of this device, see gdk_device_get_vendor_id().
     */
    vendor_id?: string
}
export class Device {
    /* Properties of Gdk-3.0.Gdk.Device */
    /**
     * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
     * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
     */
    readonly associated_device: Device
    /**
     * The axes currently available for this device.
     */
    readonly axes: AxisFlags
    /**
     * The #GdkDeviceManager the #GdkDevice pertains to.
     */
    readonly device_manager: DeviceManager
    /**
     * The #GdkDisplay the #GdkDevice pertains to.
     */
    readonly display: Display
    /**
     * Whether the device is represented by a cursor on the screen. Devices of type
     * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
     */
    readonly has_cursor: boolean
    input_mode: InputMode
    /**
     * Source type for the device.
     */
    readonly input_source: InputSource
    /**
     * Number of axes in the device.
     */
    readonly n_axes: number
    /**
     * The device name.
     */
    readonly name: string
    /**
     * The maximal number of concurrent touches on a touch device.
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    readonly num_touches: number
    /**
     * Product ID of this device, see gdk_device_get_product_id().
     */
    readonly product_id: string
    /**
     * #GdkSeat of this device.
     */
    seat: Seat
    readonly tool: DeviceTool
    /**
     * Device role in the device manager.
     */
    readonly type: DeviceType
    /**
     * Vendor ID of this device, see gdk_device_get_vendor_id().
     */
    readonly vendor_id: string
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Device */
    /**
     * Returns the associated device to `device,` if `device` is of type
     * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
     * keyboard.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_SLAVE, it will return
     * the master device to which `device` is attached to.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
     * returned, as there is no associated device.
     */
    get_associated_device(): Device | null
    /**
     * Returns the axes currently available on the device.
     */
    get_axes(): AxisFlags
    /**
     * Returns the axis use for `index_`.
     * @param index_ the index of the axis.
     */
    get_axis_use(index_: number): AxisUse
    /**
     * Returns the device type for `device`.
     */
    get_device_type(): DeviceType
    /**
     * Returns the #GdkDisplay to which `device` pertains.
     */
    get_display(): Display
    /**
     * Determines whether the pointer follows device motion.
     * This is not meaningful for keyboard devices, which don't have a pointer.
     */
    get_has_cursor(): boolean
    /**
     * If `index_` has a valid keyval, this function will return %TRUE
     * and fill in `keyval` and `modifiers` with the keyval settings.
     * @param index_ the index of the macro button to get.
     */
    get_key(index_: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    /**
     * Gets information about which window the given pointer device is in, based on events
     * that have been received so far from the display server. If another application
     * has a pointer grab, or this application has a grab with owner_events = %FALSE,
     * %NULL may be returned even if the pointer is physically over one of this
     * application's windows.
     */
    get_last_event_window(): Window | null
    /**
     * Determines the mode of the device.
     */
    get_mode(): InputMode
    /**
     * Returns the number of axes the device currently has.
     */
    get_n_axes(): number
    /**
     * Returns the number of keys the device currently has.
     */
    get_n_keys(): number
    /**
     * Determines the name of the device.
     */
    get_name(): string
    /**
     * Gets the current location of `device`. As a slave device
     * coordinates are those of its master pointer, This function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_position(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the current location of `device` in double precision. As a slave device's
     * coordinates are those of its master pointer, this function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them. See gdk_device_grab().
     */
    get_position_double(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Returns the product ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it. See gdk_device_get_vendor_id() for more information.
     */
    get_product_id(): string | null
    /**
     * Returns the #GdkSeat the device belongs to.
     */
    get_seat(): Seat
    /**
     * Determines the type of the device.
     */
    get_source(): InputSource
    /**
     * Returns the vendor ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it.
     * 
     * This function, together with gdk_device_get_product_id(), can be used to eg.
     * compose #GSettings paths to store settings for this device.
     * 
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const gchar *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    gchar *path;
     * 
     *    vendor = gdk_device_get_vendor_id (device);
     *    product = gdk_device_get_product_id (device);
     * 
     *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
     *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
     *    g_free (path);
     * 
     *    return settings;
     *  }
     * ```
     * 
     */
    get_vendor_id(): string | null
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y`. Returns
     * %NULL if the window tree under `device` is not known to GDK (for example, belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position(): [ /* returnType */ Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y` in
     * double precision. Returns %NULL if the window tree under `device` is not known to GDK (for example,
     * belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    get_window_at_position_double(): [ /* returnType */ Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Grabs the device so that all events coming from this device are passed to
     * this application until the device is ungrabbed with gdk_device_ungrab(),
     * or the window becomes unviewable. This overrides any previous grab on the device
     * by this client.
     * 
     * Note that `device` and `window` need to be on the same display.
     * 
     * Device grabs are used for operations which need complete control over the
     * given device events (either pointer or keyboard). For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of an X window has selected both button press
     * and button release events, then a button press event will cause an automatic
     * pointer grab until the button is released. X does this automatically since
     * most applications expect to receive button press and release events in pairs.
     * It is equivalent to a pointer grab on the window with `owner_events` set to
     * %TRUE.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     * @param window the #GdkWindow which will own the grab (the grab window)
     * @param grab_ownership specifies the grab ownership.
     * @param owner_events if %FALSE then all device events are reported with respect to                `window` and are only reported if selected by `event_mask`. If                %TRUE then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
     * @param event_mask specifies the event mask, which is used in accordance with              `owner_events`.
     * @param cursor the cursor to display while the grab is active if the device is          a pointer. If this is %NULL then the normal cursors are used for          `window` and its descendants, and the cursor for `window` is used          elsewhere.
     * @param time_ the timestamp of the event which led to this pointer grab. This         usually comes from the #GdkEvent struct, though %GDK_CURRENT_TIME         can be used if the time isn’t known.
     */
    grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor | null, time_: number): GrabStatus
    /**
     * Returns a #GList of #GdkAtoms, containing the labels for
     * the axes that `device` currently has.
     */
    list_axes(): Atom[]
    /**
     * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
     * the list of slave devices attached to it, otherwise it will return
     * %NULL
     */
    list_slave_devices(): Device[] | null
    /**
     * Specifies how an axis of a device is used.
     * @param index_ the index of the axis
     * @param use specifies how the axis is used
     */
    set_axis_use(index_: number, use: AxisUse): void
    /**
     * Specifies the X key event to generate when a macro button of a device
     * is pressed.
     * @param index_ the index of the macro button to set
     * @param keyval the keyval to generate
     * @param modifiers the modifiers to set
     */
    set_key(index_: number, keyval: number, modifiers: ModifierType): void
    /**
     * Sets a the mode of an input device. The mode controls if the
     * device is active and whether the device’s range is mapped to the
     * entire screen or to a single window.
     * 
     * Note: This is only meaningful for floating devices, master devices (and
     * slaves connected to these) drive the pointer cursor, which is not limited
     * by the input mode.
     * @param mode the input mode.
     */
    set_mode(mode: InputMode): boolean
    /**
     * Release any grab on `device`.
     * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
     */
    ungrab(time_: number): void
    /**
     * Warps `device` in `display` to the point `x,``y` on
     * the screen `screen,` unless the device is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     * @param screen the screen to warp `device` to.
     * @param x the X coordinate of the destination.
     * @param y the Y coordinate of the destination.
     */
    warp(screen: Screen, x: number, y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.Device */
    /**
     * The ::changed signal is emitted either when the #GdkDevice
     * has changed the number of either axes or keys. For example
     * In X this will normally happen when the slave device routing
     * events through the master device changes (for example, user
     * switches from the USB mouse to a tablet), in that case the
     * master device will change to reflect the new slave device
     * axes and keys.
     */
    connect(sigName: "changed", callback: (($obj: Device) => void)): number
    connect_after(sigName: "changed", callback: (($obj: Device) => void)): number
    emit(sigName: "changed"): void
    /**
     * The ::tool-changed signal is emitted on pen/eraser
     * #GdkDevices whenever tools enter or leave proximity.
     * @param tool The new current tool
     */
    connect(sigName: "tool-changed", callback: (($obj: Device, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-changed", callback: (($obj: Device, tool: DeviceTool) => void)): number
    emit(sigName: "tool-changed", tool: DeviceTool): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::associated-device", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::axes", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::device-manager", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-manager", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-cursor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cursor", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-source", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-source", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::n-axes", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::num-touches", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-touches", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::product-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vendor-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-id", callback: (($obj: Device, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Device_ConstructProps)
    _init (config?: Device_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Determines information about the current keyboard grab.
     * This is not public API and must not be used by applications.
     * @param display the display for which to get the grab information
     * @param device device to get the grab information from
     */
    static grab_info_libgtk_only(display: Display, device: Device): [ /* returnType */ boolean, /* grab_window */ Window, /* owner_events */ boolean ]
    static $gtype: GObject.Type
}
export interface DeviceManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DeviceManager */
    display?: Display
}
export class DeviceManager {
    /* Properties of Gdk-3.0.Gdk.DeviceManager */
    readonly display: Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceManager */
    /**
     * Returns the client pointer, that is, the master pointer that acts as the core pointer
     * for this application. In X11, window managers may change this depending on the interaction
     * pattern under the presence of several pointers.
     * 
     * You should use this function seldomly, only in code that isn’t triggered by a #GdkEvent
     * and there aren’t other means to get a meaningful #GdkDevice to operate on.
     */
    get_client_pointer(): Device
    /**
     * Gets the #GdkDisplay associated to `device_manager`.
     */
    get_display(): Display | null
    /**
     * Returns the list of devices of type `type` currently attached to
     * `device_manager`.
     * @param type device type to get.
     */
    list_devices(type: DeviceType): Device[]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.DeviceManager */
    /**
     * The ::device-added signal is emitted either when a new master
     * pointer is created, or when a slave (Hardware) input device
     * is plugged in.
     * @param device the newly added #GdkDevice.
     */
    connect(sigName: "device-added", callback: (($obj: DeviceManager, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: DeviceManager, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    /**
     * The ::device-changed signal is emitted whenever a device
     * has changed in the hierarchy, either slave devices being
     * disconnected from their master device or connected to
     * another one, or master devices being added or removed
     * a slave device.
     * 
     * If a slave device is detached from all master devices
     * (gdk_device_get_associated_device() returns %NULL), its
     * #GdkDeviceType will change to %GDK_DEVICE_TYPE_FLOATING,
     * if it's attached, it will change to %GDK_DEVICE_TYPE_SLAVE.
     * @param device the #GdkDevice that changed.
     */
    connect(sigName: "device-changed", callback: (($obj: DeviceManager, device: Device) => void)): number
    connect_after(sigName: "device-changed", callback: (($obj: DeviceManager, device: Device) => void)): number
    emit(sigName: "device-changed", device: Device): void
    /**
     * The ::device-removed signal is emitted either when a master
     * pointer is removed, or when a slave (Hardware) input device
     * is unplugged.
     * @param device the just removed #GdkDevice.
     */
    connect(sigName: "device-removed", callback: (($obj: DeviceManager, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: DeviceManager, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: DeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: DeviceManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceManager_ConstructProps)
    _init (config?: DeviceManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceTool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DeviceTool */
    axes?: AxisFlags
    hardware_id?: number
    serial?: number
    tool_type?: DeviceToolType
}
export class DeviceTool {
    /* Properties of Gdk-3.0.Gdk.DeviceTool */
    readonly axes: AxisFlags
    readonly hardware_id: number
    readonly serial: number
    readonly tool_type: DeviceToolType
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceTool */
    /**
     * Gets the hardware ID of this tool, or 0 if it's not known. When
     * non-zero, the identificator is unique for the given tool model,
     * meaning that two identical tools will share the same `hardware_id,`
     * but will have different serial numbers (see gdk_device_tool_get_serial()).
     * 
     * This is a more concrete (and device specific) method to identify
     * a #GdkDeviceTool than gdk_device_tool_get_tool_type(), as a tablet
     * may support multiple devices with the same #GdkDeviceToolType,
     * but having different hardware identificators.
     */
    get_hardware_id(): number
    /**
     * Gets the serial of this tool, this value can be used to identify a
     * physical tool (eg. a tablet pen) across program executions.
     */
    get_serial(): number
    /**
     * Gets the #GdkDeviceToolType of the tool.
     */
    get_tool_type(): DeviceToolType
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::axes", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hardware-id", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-id", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serial", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serial", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tool-type", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool-type", callback: (($obj: DeviceTool, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceTool_ConstructProps)
    _init (config?: DeviceTool_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
export class Display {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Display */
    /**
     * Emits a short beep on `display`
     */
    beep(): void
    /**
     * Closes the connection to the windowing system for the given display,
     * and cleans up associated resources.
     */
    close(): void
    /**
     * Returns %TRUE if there is an ongoing grab on `device` for `display`.
     * @param device a #GdkDevice
     */
    device_is_grabbed(device: Device): boolean
    /**
     * Flushes any requests queued for the windowing system; this happens automatically
     * when the main loop blocks waiting for new events, but if your application
     * is drawing without returning control to the main loop, you may need
     * to call this function explicitly. A common case where this function
     * needs to be called is when an application is executing drawing commands
     * from a thread other than the thread where the main loop is running.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    flush(): void
    /**
     * Returns a #GdkAppLaunchContext suitable for launching
     * applications on the given display.
     */
    get_app_launch_context(): AppLaunchContext
    /**
     * Returns the default size to use for cursors on `display`.
     */
    get_default_cursor_size(): number
    /**
     * Returns the default group leader window for all toplevel windows
     * on `display`. This window is implicitly created by GDK.
     * See gdk_window_set_group().
     */
    get_default_group(): Window
    /**
     * Get the default #GdkScreen for `display`.
     */
    get_default_screen(): Screen
    /**
     * Returns the default #GdkSeat for this display.
     */
    get_default_seat(): Seat
    /**
     * Returns the #GdkDeviceManager associated to `display`.
     */
    get_device_manager(): DeviceManager | null
    /**
     * Gets the next #GdkEvent to be processed for `display,` fetching events from the
     * windowing system if necessary.
     */
    get_event(): Event | null
    /**
     * Gets the maximal size to use for cursors on `display`.
     */
    get_maximal_cursor_size(): [ /* width */ number, /* height */ number ]
    /**
     * Gets a monitor associated with this display.
     * @param monitor_num number of the monitor
     */
    get_monitor(monitor_num: number): Monitor | null
    /**
     * Gets the monitor in which the point (`x,` `y)` is located,
     * or a nearby monitor if the point is not in any monitor.
     * @param x the x coordinate of the point
     * @param y the y coordinate of the point
     */
    get_monitor_at_point(x: number, y: number): Monitor
    /**
     * Gets the monitor in which the largest area of `window`
     * resides, or a monitor close to `window` if it is outside
     * of all monitors.
     * @param window a #GdkWindow
     */
    get_monitor_at_window(window: Window): Monitor
    /**
     * Gets the number of monitors that belong to `display`.
     * 
     * The returned number is valid until the next emission of the
     * #GdkDisplay::monitor-added or #GdkDisplay::monitor-removed signal.
     */
    get_n_monitors(): number
    /**
     * Gets the number of screen managed by the `display`.
     */
    get_n_screens(): number
    /**
     * Gets the name of the display.
     */
    get_name(): string
    /**
     * Gets the current location of the pointer and the current modifier
     * mask for a given display.
     */
    get_pointer(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the primary monitor for the display.
     * 
     * The primary monitor is considered the monitor where the “main desktop”
     * lives. While normal application windows typically allow the window
     * manager to place the windows, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     */
    get_primary_monitor(): Monitor | null
    /**
     * Returns a screen object for one of the screens of the display.
     * @param screen_num the screen number
     */
    get_screen(screen_num: number): Screen
    /**
     * Obtains the window underneath the mouse pointer, returning the location
     * of the pointer in that window in `win_x,` `win_y` for `screen`. Returns %NULL
     * if the window under the mouse pointer is not known to GDK (for example,
     * belongs to another application).
     */
    get_window_at_pointer(): [ /* returnType */ Window | null, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Returns whether the display has events that are waiting
     * to be processed.
     */
    has_pending(): boolean
    /**
     * Finds out if the display has been closed.
     */
    is_closed(): boolean
    /**
     * Release any keyboard grab
     * @param time_ a timestap (e.g #GDK_CURRENT_TIME).
     */
    keyboard_ungrab(time_: number): void
    /**
     * Returns the list of available input devices attached to `display`.
     * The list is statically allocated and should not be freed.
     */
    list_devices(): Device[]
    /**
     * Returns the list of seats known to `display`.
     */
    list_seats(): Seat[]
    /**
     * Indicates to the GUI environment that the application has
     * finished loading, using a given identifier.
     * 
     * GTK+ will call this function automatically for #GtkWindow
     * with custom startup-notification identifier unless
     * gtk_window_set_auto_startup_notification() is called to
     * disable that feature.
     * @param startup_id a startup-notification identifier, for which     notification process should be completed
     */
    notify_startup_complete(startup_id: string): void
    /**
     * Gets a copy of the first #GdkEvent in the `display’`s event queue, without
     * removing the event from the queue.  (Note that this function will
     * not get more events from the windowing system.  It only checks the events
     * that have already been moved to the GDK event queue.)
     */
    peek_event(): Event | null
    /**
     * Test if the pointer is grabbed.
     */
    pointer_is_grabbed(): boolean
    /**
     * Release any pointer grab.
     * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
     */
    pointer_ungrab(time_: number): void
    /**
     * Appends a copy of the given event onto the front of the event
     * queue for `display`.
     * @param event a #GdkEvent.
     */
    put_event(event: Event): void
    /**
     * Request #GdkEventOwnerChange events for ownership changes
     * of the selection named by the given atom.
     * @param selection the #GdkAtom naming the selection for which             ownership change notification is requested
     */
    request_selection_notification(selection: Atom): boolean
    /**
     * Sets the double click distance (two clicks within this distance
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * See also gdk_display_set_double_click_time().
     * Applications should not set this, it is a global
     * user-configured setting.
     * @param distance distance in pixels
     */
    set_double_click_distance(distance: number): void
    /**
     * Sets the double click time (two clicks within this time interval
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * Applications should not set this, it is a global
     * user-configured setting.
     * @param msec double click time in milliseconds (thousandths of a second)
     */
    set_double_click_time(msec: number): void
    /**
     * Issues a request to the clipboard manager to store the
     * clipboard data. On X11, this is a special program that works
     * according to the
     * [FreeDesktop Clipboard Specification](http://www.freedesktop.org/Standards/clipboard-manager-spec).
     * @param clipboard_window a #GdkWindow belonging to the clipboard owner
     * @param time_ a timestamp
     * @param targets an array of targets                    that should be saved, or %NULL                    if all available targets should be saved.
     */
    store_clipboard(clipboard_window: Window, time_: number, targets: Atom[] | null): void
    /**
     * Returns whether the speicifed display supports clipboard
     * persistance; i.e. if it’s possible to store the clipboard data after an
     * application has quit. On X11 this checks if a clipboard daemon is
     * running.
     */
    supports_clipboard_persistence(): boolean
    /**
     * Returns %TRUE if gdk_window_set_composited() can be used
     * to redirect drawing on the window using compositing.
     * 
     * Currently this only works on X11 with XComposite and
     * XDamage extensions available.
     */
    supports_composite(): boolean
    /**
     * Returns %TRUE if cursors can use an 8bit alpha channel
     * on `display`. Otherwise, cursors are restricted to bilevel
     * alpha (i.e. a mask).
     */
    supports_cursor_alpha(): boolean
    /**
     * Returns %TRUE if multicolored cursors are supported
     * on `display`. Otherwise, cursors have only a forground
     * and a background color.
     */
    supports_cursor_color(): boolean
    /**
     * Returns %TRUE if gdk_window_input_shape_combine_mask() can
     * be used to modify the input shape of windows on `display`.
     */
    supports_input_shapes(): boolean
    /**
     * Returns whether #GdkEventOwnerChange events will be
     * sent when the owner of a selection changes.
     */
    supports_selection_notification(): boolean
    /**
     * Returns %TRUE if gdk_window_shape_combine_mask() can
     * be used to create shaped windows on `display`.
     */
    supports_shapes(): boolean
    /**
     * Flushes any requests queued for the windowing system and waits until all
     * requests have been handled. This is often used for making sure that the
     * display is synchronized with the current state of the program. Calling
     * gdk_display_sync() before gdk_error_trap_pop() makes sure that any errors
     * generated from earlier requests are handled before the error trap is
     * removed.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    sync(): void
    /**
     * Warps the pointer of `display` to the point `x,``y` on
     * the screen `screen,` unless the pointer is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     * @param screen the screen of `display` to warp the pointer to
     * @param x the x coordinate of the destination
     * @param y the y coordinate of the destination
     */
    warp_pointer(screen: Screen, x: number, y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.Display */
    /**
     * The ::closed signal is emitted when the connection to the windowing
     * system for `display` is closed.
     * @param is_error %TRUE if the display was closed due to an error
     */
    connect(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Display, is_error: boolean) => void)): number
    emit(sigName: "closed", is_error: boolean): void
    /**
     * The ::monitor-added signal is emitted whenever a monitor is
     * added.
     * @param monitor the monitor that was just added
     */
    connect(sigName: "monitor-added", callback: (($obj: Display, monitor: Monitor) => void)): number
    connect_after(sigName: "monitor-added", callback: (($obj: Display, monitor: Monitor) => void)): number
    emit(sigName: "monitor-added", monitor: Monitor): void
    /**
     * The ::monitor-removed signal is emitted whenever a monitor is
     * removed.
     * @param monitor the monitor that was just removed
     */
    connect(sigName: "monitor-removed", callback: (($obj: Display, monitor: Monitor) => void)): number
    connect_after(sigName: "monitor-removed", callback: (($obj: Display, monitor: Monitor) => void)): number
    emit(sigName: "monitor-removed", monitor: Monitor): void
    /**
     * The ::opened signal is emitted when the connection to the windowing
     * system for `display` is opened.
     */
    connect(sigName: "opened", callback: (($obj: Display) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Display) => void)): number
    emit(sigName: "opened"): void
    /**
     * The ::seat-added signal is emitted whenever a new seat is made
     * known to the windowing system.
     * @param seat the seat that was just added
     */
    connect(sigName: "seat-added", callback: (($obj: Display, seat: Seat) => void)): number
    connect_after(sigName: "seat-added", callback: (($obj: Display, seat: Seat) => void)): number
    emit(sigName: "seat-added", seat: Seat): void
    /**
     * The ::seat-removed signal is emitted whenever a seat is removed
     * by the windowing system.
     * @param seat the seat that was just removed
     */
    connect(sigName: "seat-removed", callback: (($obj: Display, seat: Seat) => void)): number
    connect_after(sigName: "seat-removed", callback: (($obj: Display, seat: Seat) => void)): number
    emit(sigName: "seat-removed", seat: Seat): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the default #GdkDisplay. This is a convenience
     * function for:
     * `gdk_display_manager_get_default_display (gdk_display_manager_get ())`.
     */
    static get_default(): Display | null
    /**
     * Opens a display.
     * @param display_name the name of the display to open
     */
    static open(display_name: string): Display | null
    /**
     * Opens the default display specified by command line arguments or
     * environment variables, sets it as the default display, and returns
     * it. gdk_parse_args() must have been called first. If the default
     * display has previously been set, simply returns that. An internal
     * function that should not be used by applications.
     */
    static open_default_libgtk_only(): Display | null
    static $gtype: GObject.Type
}
export interface DisplayManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DisplayManager */
    default_display?: Display
}
export class DisplayManager {
    /* Properties of Gdk-3.0.Gdk.DisplayManager */
    default_display: Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DisplayManager */
    /**
     * Gets the default #GdkDisplay.
     */
    get_default_display(): Display | null
    /**
     * List all currently open displays.
     */
    list_displays(): Display[]
    /**
     * Opens a display.
     * @param name the name of the display to open
     */
    open_display(name: string): Display | null
    /**
     * Sets `display` as the default display.
     * @param display a #GdkDisplay
     */
    set_default_display(display: Display): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.DisplayManager */
    /**
     * The ::display-opened signal is emitted when a display is opened.
     * @param display the opened display
     */
    connect(sigName: "display-opened", callback: (($obj: DisplayManager, display: Display) => void)): number
    connect_after(sigName: "display-opened", callback: (($obj: DisplayManager, display: Display) => void)): number
    emit(sigName: "display-opened", display: Display): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: (($obj: DisplayManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DisplayManager_ConstructProps)
    _init (config?: DisplayManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the singleton #GdkDisplayManager object.
     * 
     * When called for the first time, this function consults the
     * `GDK_BACKEND` environment variable to find out which
     * of the supported GDK backends to use (in case GDK has been compiled
     * with multiple backends). Applications can use gdk_set_allowed_backends()
     * to limit what backends can be used.
     */
    static get(): DisplayManager
    static $gtype: GObject.Type
}
export interface DragContext_ConstructProps extends GObject.Object_ConstructProps {
}
export class DragContext {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DragContext */
    /**
     * Determines the bitmask of actions proposed by the source if
     * gdk_drag_context_get_suggested_action() returns %GDK_ACTION_ASK.
     */
    get_actions(): DragAction
    /**
     * Returns the destination window for the DND operation.
     */
    get_dest_window(): Window
    /**
     * Returns the #GdkDevice associated to the drag context.
     */
    get_device(): Device
    /**
     * Returns the window on which the drag icon should be rendered
     * during the drag operation. Note that the window may not be
     * available until the drag operation has begun. GDK will move
     * the window in accordance with the ongoing drag operation.
     * The window is owned by `context` and will be destroyed when
     * the drag operation is over.
     */
    get_drag_window(): Window | null
    /**
     * Returns the drag protocol that is used by this context.
     */
    get_protocol(): DragProtocol
    /**
     * Determines the action chosen by the drag destination.
     */
    get_selected_action(): DragAction
    /**
     * Returns the #GdkWindow where the DND operation started.
     */
    get_source_window(): Window
    /**
     * Determines the suggested drag action of the context.
     */
    get_suggested_action(): DragAction
    /**
     * Retrieves the list of targets of the context.
     */
    list_targets(): Atom[]
    /**
     * Requests the drag and drop operation to be managed by `context`.
     * When a drag and drop operation becomes managed, the #GdkDragContext
     * will internally handle all input and source-side #GdkEventDND events
     * as required by the windowing system.
     * 
     * Once the drag and drop operation is managed, the drag context will
     * emit the following signals:
     * - The #GdkDragContext::action-changed signal whenever the final action
     *   to be performed by the drag and drop operation changes.
     * - The #GdkDragContext::drop-performed signal after the user performs
     *   the drag and drop gesture (typically by releasing the mouse button).
     * - The #GdkDragContext::dnd-finished signal after the drag and drop
     *   operation concludes (after all #GdkSelection transfers happen).
     * - The #GdkDragContext::cancel signal if the drag and drop operation is
     *   finished but doesn't happen over an accepting destination, or is
     *   cancelled through other means.
     * @param ipc_window Window to use for IPC messaging/events
     * @param actions the actions supported by the drag source
     */
    manage_dnd(ipc_window: Window, actions: DragAction): boolean
    /**
     * Associates a #GdkDevice to `context,` so all Drag and Drop events
     * for `context` are emitted as if they came from this device.
     * @param device a #GdkDevice
     */
    set_device(device: Device): void
    /**
     * Sets the position of the drag window that will be kept
     * under the cursor hotspot. Initially, the hotspot is at the
     * top left corner of the drag window.
     * @param hot_x x coordinate of the drag window hotspot
     * @param hot_y y coordinate of the drag window hotspot
     */
    set_hotspot(hot_x: number, hot_y: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.DragContext */
    /**
     * A new action is being chosen for the drag and drop operation.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     * @param action The action currently chosen
     */
    connect(sigName: "action-changed", callback: (($obj: DragContext, action: DragAction) => void)): number
    connect_after(sigName: "action-changed", callback: (($obj: DragContext, action: DragAction) => void)): number
    emit(sigName: "action-changed", action: DragAction): void
    /**
     * The drag and drop operation was cancelled.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     * @param reason The reason the context was cancelled
     */
    connect(sigName: "cancel", callback: (($obj: DragContext, reason: DragCancelReason) => void)): number
    connect_after(sigName: "cancel", callback: (($obj: DragContext, reason: DragCancelReason) => void)): number
    emit(sigName: "cancel", reason: DragCancelReason): void
    /**
     * The drag and drop operation was finished, the drag destination
     * finished reading all data. The drag source can now free all
     * miscellaneous data.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     */
    connect(sigName: "dnd-finished", callback: (($obj: DragContext) => void)): number
    connect_after(sigName: "dnd-finished", callback: (($obj: DragContext) => void)): number
    emit(sigName: "dnd-finished"): void
    /**
     * The drag and drop operation was performed on an accepting client.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     * @param time the time at which the drop happened.
     */
    connect(sigName: "drop-performed", callback: (($obj: DragContext, time: number) => void)): number
    connect_after(sigName: "drop-performed", callback: (($obj: DragContext, time: number) => void)): number
    emit(sigName: "drop-performed", time: number): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DragContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DragContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DragContext_ConstructProps)
    _init (config?: DragContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DrawingContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DrawingContext */
    /**
     * The clip region applied to the drawing context.
     */
    clip?: cairo.Region
    /**
     * The #GdkWindow that created the drawing context.
     */
    window?: Window
}
export class DrawingContext {
    /* Properties of Gdk-3.0.Gdk.DrawingContext */
    /**
     * The clip region applied to the drawing context.
     */
    readonly clip: cairo.Region
    /**
     * The #GdkWindow that created the drawing context.
     */
    readonly window: Window
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DrawingContext */
    /**
     * Retrieves a Cairo context to be used to draw on the #GdkWindow
     * that created the #GdkDrawingContext.
     * 
     * The returned context is guaranteed to be valid as long as the
     * #GdkDrawingContext is valid, that is between a call to
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame().
     */
    get_cairo_context(): cairo.Context
    /**
     * Retrieves a copy of the clip region used when creating the `context`.
     */
    get_clip(): cairo.Region | null
    /**
     * Retrieves the window that created the drawing `context`.
     */
    get_window(): Window
    /**
     * Checks whether the given #GdkDrawingContext is valid.
     */
    is_valid(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: DrawingContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DrawingContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::clip", callback: (($obj: DrawingContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: DrawingContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: DrawingContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: DrawingContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DrawingContext_ConstructProps)
    _init (config?: DrawingContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FrameClock_ConstructProps extends GObject.Object_ConstructProps {
}
export class FrameClock {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.FrameClock */
    /**
     * Starts updates for an animation. Until a matching call to
     * gdk_frame_clock_end_updating() is made, the frame clock will continually
     * request a new frame with the %GDK_FRAME_CLOCK_PHASE_UPDATE phase.
     * This function may be called multiple times and frames will be
     * requested until gdk_frame_clock_end_updating() is called the same
     * number of times.
     */
    begin_updating(): void
    /**
     * Stops updates for an animation. See the documentation for
     * gdk_frame_clock_begin_updating().
     */
    end_updating(): void
    /**
     * Gets the frame timings for the current frame.
     */
    get_current_timings(): FrameTimings | null
    /**
     * A #GdkFrameClock maintains a 64-bit counter that increments for
     * each frame drawn.
     */
    get_frame_counter(): number
    /**
     * Gets the time that should currently be used for animations.  Inside
     * the processing of a frame, it’s the time used to compute the
     * animation position of everything in a frame. Outside of a frame, it's
     * the time of the conceptual “previous frame,” which may be either
     * the actual previous frame time, or if that’s too old, an updated
     * time.
     */
    get_frame_time(): number
    /**
     * #GdkFrameClock internally keeps a history of #GdkFrameTimings
     * objects for recent frames that can be retrieved with
     * gdk_frame_clock_get_timings(). The set of stored frames
     * is the set from the counter values given by
     * gdk_frame_clock_get_history_start() and
     * gdk_frame_clock_get_frame_counter(), inclusive.
     */
    get_history_start(): number
    /**
     * Using the frame history stored in the frame clock, finds the last
     * known presentation time and refresh interval, and assuming that
     * presentation times are separated by the refresh interval,
     * predicts a presentation time that is a multiple of the refresh
     * interval after the last presentation time, and later than `base_time`.
     * @param base_time base time for determining a presentaton time
     */
    get_refresh_info(base_time: number): [ /* refresh_interval_return */ number | null, /* presentation_time_return */ number ]
    /**
     * Retrieves a #GdkFrameTimings object holding timing information
     * for the current frame or a recent frame. The #GdkFrameTimings
     * object may not yet be complete: see gdk_frame_timings_get_complete().
     * @param frame_counter the frame counter value identifying the frame to  be received.
     */
    get_timings(frame_counter: number): FrameTimings | null
    /**
     * Asks the frame clock to run a particular phase. The signal
     * corresponding the requested phase will be emitted the next
     * time the frame clock processes. Multiple calls to
     * gdk_frame_clock_request_phase() will be combined together
     * and only one frame processed. If you are displaying animated
     * content and want to continually request the
     * %GDK_FRAME_CLOCK_PHASE_UPDATE phase for a period of time,
     * you should use gdk_frame_clock_begin_updating() instead, since
     * this allows GTK+ to adjust system parameters to get maximally
     * smooth animations.
     * @param phase the phase that is requested
     */
    request_phase(phase: FrameClockPhase): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.FrameClock */
    /**
     * This signal ends processing of the frame. Applications
     * should generally not handle this signal.
     */
    connect(sigName: "after-paint", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "after-paint", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "after-paint"): void
    /**
     * This signal begins processing of the frame. Applications
     * should generally not handle this signal.
     */
    connect(sigName: "before-paint", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "before-paint", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "before-paint"): void
    /**
     * This signal is used to flush pending motion events that
     * are being batched up and compressed together. Applications
     * should not handle this signal.
     */
    connect(sigName: "flush-events", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "flush-events", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "flush-events"): void
    /**
     * This signal is emitted as the second step of toolkit and
     * application processing of the frame. Any work to update
     * sizes and positions of application elements should be
     * performed. GTK+ normally handles this internally.
     */
    connect(sigName: "layout", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "layout", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "layout"): void
    /**
     * This signal is emitted as the third step of toolkit and
     * application processing of the frame. The frame is
     * repainted. GDK normally handles this internally and
     * produces expose events, which are turned into GTK+
     * #GtkWidget::draw signals.
     */
    connect(sigName: "paint", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "paint", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "paint"): void
    /**
     * This signal is emitted after processing of the frame is
     * finished, and is handled internally by GTK+ to resume normal
     * event processing. Applications should not handle this signal.
     */
    connect(sigName: "resume-events", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "resume-events", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "resume-events"): void
    /**
     * This signal is emitted as the first step of toolkit and
     * application processing of the frame. Animations should
     * be updated using gdk_frame_clock_get_frame_time().
     * Applications can connect directly to this signal, or
     * use gtk_widget_add_tick_callback() as a more convenient
     * interface.
     */
    connect(sigName: "update", callback: (($obj: FrameClock) => void)): number
    connect_after(sigName: "update", callback: (($obj: FrameClock) => void)): number
    emit(sigName: "update"): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: FrameClock, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FrameClock, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FrameClock_ConstructProps)
    _init (config?: FrameClock_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GLContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.GLContext */
    /**
     * The #GdkDisplay used to create the #GdkGLContext.
     */
    display?: Display
    /**
     * The #GdkGLContext that this context is sharing data with, or %NULL
     */
    shared_context?: GLContext
    /**
     * The #GdkWindow the gl context is bound to.
     */
    window?: Window
}
export class GLContext {
    /* Properties of Gdk-3.0.Gdk.GLContext */
    /**
     * The #GdkDisplay used to create the #GdkGLContext.
     */
    readonly display: Display
    /**
     * The #GdkGLContext that this context is sharing data with, or %NULL
     */
    readonly shared_context: GLContext
    /**
     * The #GdkWindow the gl context is bound to.
     */
    readonly window: Window
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.GLContext */
    /**
     * Retrieves the value set using gdk_gl_context_set_debug_enabled().
     */
    get_debug_enabled(): boolean
    /**
     * Retrieves the #GdkDisplay the `context` is created for
     */
    get_display(): Display | null
    /**
     * Retrieves the value set using gdk_gl_context_set_forward_compatible().
     */
    get_forward_compatible(): boolean
    /**
     * Retrieves the major and minor version requested by calling
     * gdk_gl_context_set_required_version().
     */
    get_required_version(): [ /* major */ number | null, /* minor */ number | null ]
    /**
     * Retrieves the #GdkGLContext that this `context` share data with.
     */
    get_shared_context(): GLContext | null
    /**
     * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
     */
    get_use_es(): boolean
    /**
     * Retrieves the OpenGL version of the `context`.
     * 
     * The `context` must be realized prior to calling this function.
     */
    get_version(): [ /* major */ number, /* minor */ number ]
    /**
     * Retrieves the #GdkWindow used by the `context`.
     */
    get_window(): Window | null
    /**
     * Whether the #GdkGLContext is in legacy mode or not.
     * 
     * The #GdkGLContext must be realized before calling this function.
     * 
     * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
     * profile; this profile removes all the OpenGL API that was deprecated
     * prior to the 3.2 version of the specification. If the realization is
     * successful, this function will return %FALSE.
     * 
     * If the underlying OpenGL implementation does not support core profiles,
     * GDK will fall back to a pre-3.2 compatibility profile, and this function
     * will return %TRUE.
     * 
     * You can use the value returned by this function to decide which kind
     * of OpenGL API to use, or whether to do extension discovery, or what
     * kind of shader programs to load.
     */
    is_legacy(): boolean
    /**
     * Makes the `context` the current one.
     */
    make_current(): void
    /**
     * Realizes the given #GdkGLContext.
     * 
     * It is safe to call this function on a realized #GdkGLContext.
     */
    realize(): boolean
    /**
     * Sets whether the #GdkGLContext should perform extra validations and
     * run time checking. This is useful during development, but has
     * additional overhead.
     * 
     * The #GdkGLContext must not be realized or made current prior to
     * calling this function.
     * @param enabled whether to enable debugging in the context
     */
    set_debug_enabled(enabled: boolean): void
    /**
     * Sets whether the #GdkGLContext should be forward compatible.
     * 
     * Forward compatibile contexts must not support OpenGL functionality that
     * has been marked as deprecated in the requested version; non-forward
     * compatible contexts, on the other hand, must support both deprecated and
     * non deprecated functionality.
     * 
     * The #GdkGLContext must not be realized or made current prior to calling
     * this function.
     * @param compatible whether the context should be forward compatible
     */
    set_forward_compatible(compatible: boolean): void
    /**
     * Sets the major and minor version of OpenGL to request.
     * 
     * Setting `major` and `minor` to zero will use the default values.
     * 
     * The #GdkGLContext must not be realized or made current prior to calling
     * this function.
     * @param major the major version to request
     * @param minor the minor version to request
     */
    set_required_version(major: number, minor: number): void
    /**
     * Requests that GDK create a OpenGL ES context instead of an OpenGL one,
     * if the platform and windowing system allows it.
     * 
     * The `context` must not have been realized.
     * 
     * By default, GDK will attempt to automatically detect whether the
     * underlying GL implementation is OpenGL or OpenGL ES once the `context`
     * is realized.
     * 
     * You should check the return value of gdk_gl_context_get_use_es() after
     * calling gdk_gl_context_realize() to decide whether to use the OpenGL or
     * OpenGL ES API, extensions, or shaders.
     * @param use_es whether the context should use OpenGL ES instead of OpenGL,   or -1 to allow auto-detection
     */
    set_use_es(use_es: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::shared-context", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-context", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::window", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: GLContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Clears the current #GdkGLContext.
     * 
     * Any OpenGL call after this function returns will be ignored
     * until gdk_gl_context_make_current() is called.
     */
    static clear_current(): void
    /**
     * Retrieves the current #GdkGLContext.
     */
    static get_current(): GLContext | null
    static $gtype: GObject.Type
}
export interface Keymap_ConstructProps extends GObject.Object_ConstructProps {
}
export class Keymap {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Keymap */
    /**
     * Maps the non-virtual modifiers (i.e Mod2, Mod3, ...) which are set
     * in `state` to the virtual modifiers (i.e. Super, Hyper and Meta) and
     * set the corresponding bits in `state`.
     * 
     * GDK already does this before delivering key events, but for
     * compatibility reasons, it only sets the first virtual modifier
     * it finds, whereas this function sets all matching virtual modifiers.
     * 
     * This function is useful when matching key events against
     * accelerators.
     * @param state pointer to the modifier mask to change
     */
    add_virtual_modifiers(state: ModifierType): /* state */ ModifierType
    /**
     * Returns whether the Caps Lock modifer is locked.
     */
    get_caps_lock_state(): boolean
    /**
     * Returns the direction of effective layout of the keymap.
     */
    get_direction(): Pango.Direction
    /**
     * Returns the keyvals bound to `hardware_keycode`.
     * The Nth #GdkKeymapKey in `keys` is bound to the Nth
     * keyval in `keyvals`. Free the returned arrays with g_free().
     * When a keycode is pressed by the user, the keyval from
     * this list of entries is selected by considering the effective
     * keyboard group and level. See gdk_keymap_translate_keyboard_state().
     * @param hardware_keycode a keycode
     */
    get_entries_for_keycode(hardware_keycode: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] | null, /* keyvals */ number[] | null ]
    /**
     * Obtains a list of keycode/group/level combinations that will
     * generate `keyval`. Groups and levels are two kinds of keyboard mode;
     * in general, the level determines whether the top or bottom symbol
     * on a key is used, and the group determines whether the left or
     * right symbol is used. On US keyboards, the shift key changes the
     * keyboard level, and there are no groups. A group switch key might
     * convert a keyboard between Hebrew to English modes, for example.
     * #GdkEventKey contains a %group field that indicates the active
     * keyboard group. The level is computed from the modifier mask.
     * The returned array should be freed
     * with g_free().
     * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
     */
    get_entries_for_keyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] ]
    /**
     * Returns the modifier mask the `keymap’`s windowing system backend
     * uses for a particular purpose.
     * 
     * Note that this function always returns real hardware modifiers, not
     * virtual ones (e.g. it will return #GDK_MOD1_MASK rather than
     * #GDK_META_MASK if the backend maps MOD1 to META), so there are use
     * cases where the return value of this function has to be transformed
     * by gdk_keymap_add_virtual_modifiers() in order to contain the
     * expected result.
     * @param intent the use case for the modifier mask
     */
    get_modifier_mask(intent: ModifierIntent): ModifierType
    /**
     * Returns the current modifier state.
     */
    get_modifier_state(): number
    /**
     * Returns whether the Num Lock modifer is locked.
     */
    get_num_lock_state(): boolean
    /**
     * Returns whether the Scroll Lock modifer is locked.
     */
    get_scroll_lock_state(): boolean
    /**
     * Determines if keyboard layouts for both right-to-left and left-to-right
     * languages are in use.
     */
    have_bidi_layouts(): boolean
    /**
     * Looks up the keyval mapped to a keycode/group/level triplet.
     * If no keyval is bound to `key,` returns 0. For normal user input,
     * you want to use gdk_keymap_translate_keyboard_state() instead of
     * this function, since the effective group/level may not be
     * the same as the current keyboard state.
     * @param key a #GdkKeymapKey with keycode, group, and level initialized
     */
    lookup_key(key: KeymapKey): number
    /**
     * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
     * are set in `state` to their non-virtual counterparts (i.e. Mod2,
     * Mod3,...) and set the corresponding bits in `state`.
     * 
     * This function is useful when matching key events against
     * accelerators.
     * @param state pointer to the modifier state to map
     */
    map_virtual_modifiers(state: ModifierType): [ /* returnType */ boolean, /* state */ ModifierType ]
    /**
     * Translates the contents of a #GdkEventKey into a keyval, effective
     * group, and level. Modifiers that affected the translation and
     * are thus unavailable for application use are returned in
     * `consumed_modifiers`.
     * See [Groups][key-group-explanation] for an explanation of
     * groups and levels. The `effective_group` is the group that was
     * actually used for the translation; some keys such as Enter are not
     * affected by the active keyboard group. The `level` is derived from
     * `state`. For convenience, #GdkEventKey already contains the translated
     * keyval, so this function isn’t as useful as you might think.
     * 
     * `consumed_modifiers` gives modifiers that should be masked outfrom `state`
     * when comparing this key press to a hot key. For instance, on a US keyboard,
     * the `plus` symbol is shifted, so when comparing a key press to a
     * `<Control>plus` accelerator `<Shift>` should be masked out.
     * 
     * 
     * ```c
     * // We want to ignore irrelevant modifiers like ScrollLock
     * #define ALL_ACCELS_MASK (GDK_CONTROL_MASK | GDK_SHIFT_MASK | GDK_MOD1_MASK)
     * gdk_keymap_translate_keyboard_state (keymap, event->hardware_keycode,
     *                                      event->state, event->group,
     *                                      &keyval, NULL, NULL, &consumed);
     * if (keyval == GDK_PLUS &&
     *     (event->state & ~consumed & ALL_ACCELS_MASK) == GDK_CONTROL_MASK)
     *   // Control was pressed
     * ```
     * 
     * 
     * An older interpretation `consumed_modifiers` was that it contained
     * all modifiers that might affect the translation of the key;
     * this allowed accelerators to be stored with irrelevant consumed
     * modifiers, by doing:
     * 
     * ```c
     * // XXX Don’t do this XXX
     * if (keyval == accel_keyval &&
     *     (event->state & ~consumed & ALL_ACCELS_MASK) == (accel_mods & ~consumed))
     *   // Accelerator was pressed
     * ```
     * 
     * 
     * However, this did not work if multi-modifier combinations were
     * used in the keymap, since, for instance, `<Control>` would be
     * masked out even if only `<Control><Alt>` was used in the keymap.
     * To support this usage as well as well as possible, all single
     * modifier combinations that could affect the key for any combination
     * of modifiers will be returned in `consumed_modifiers;` multi-modifier
     * combinations are returned only when actually found in `state`. When
     * you store accelerators, you should always store them with consumed
     * modifiers removed. Store `<Control>plus`, not `<Control><Shift>plus`,
     * @param hardware_keycode a keycode
     * @param state a modifier state
     * @param group active keyboard group
     */
    translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effective_group */ number | null, /* level */ number | null, /* consumed_modifiers */ ModifierType | null ]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.Keymap */
    /**
     * The ::direction-changed signal gets emitted when the direction of
     * the keymap changes.
     */
    connect(sigName: "direction-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "direction-changed"): void
    /**
     * The ::keys-changed signal is emitted when the mapping represented by
     * `keymap` changes.
     */
    connect(sigName: "keys-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "keys-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "keys-changed"): void
    /**
     * The ::state-changed signal is emitted when the state of the
     * keyboard changes, e.g when Caps Lock is turned on or off.
     * See gdk_keymap_get_caps_lock_state().
     */
    connect(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: Keymap) => void)): number
    emit(sigName: "state-changed"): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Keymap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Keymap_ConstructProps)
    _init (config?: Keymap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Returns the #GdkKeymap attached to the default display.
     */
    static get_default(): Keymap
    /**
     * Returns the #GdkKeymap attached to `display`.
     * @param display the #GdkDisplay.
     */
    static get_for_display(display: Display): Keymap
    static $gtype: GObject.Type
}
export interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Monitor */
    display?: Display
}
export class Monitor {
    /* Properties of Gdk-3.0.Gdk.Monitor */
    readonly display: Display
    readonly geometry: Rectangle
    readonly height_mm: number
    readonly manufacturer: string
    readonly model: string
    readonly refresh_rate: number
    readonly scale_factor: number
    readonly subpixel_layout: SubpixelLayout
    readonly width_mm: number
    readonly workarea: Rectangle
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Monitor */
    /**
     * Gets the display that this monitor belongs to.
     */
    get_display(): Display
    /**
     * Retrieves the size and position of an individual monitor within the
     * display coordinate space. The returned geometry is in  ”application pixels”,
     * not in ”device pixels” (see gdk_monitor_get_scale_factor()).
     */
    get_geometry(): /* geometry */ Rectangle
    /**
     * Gets the height in millimeters of the monitor.
     */
    get_height_mm(): number
    /**
     * Gets the name or PNP ID of the monitor's manufacturer, if available.
     * 
     * Note that this value might also vary depending on actual
     * display backend.
     * 
     * PNP ID registry is located at https://uefi.org/pnp_id_list
     */
    get_manufacturer(): string | null
    /**
     * Gets the a string identifying the monitor model, if available.
     */
    get_model(): string | null
    /**
     * Gets the refresh rate of the monitor, if available.
     * 
     * The value is in milli-Hertz, so a refresh rate of 60Hz
     * is returned as 60000.
     */
    get_refresh_rate(): number
    /**
     * Gets the internal scale factor that maps from monitor coordinates
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a window
     * where it is better to use gdk_window_get_scale_factor() instead.
     */
    get_scale_factor(): number
    /**
     * Gets information about the layout of red, green and blue
     * primaries for each pixel in this monitor, if available.
     */
    get_subpixel_layout(): SubpixelLayout
    /**
     * Gets the width in millimeters of the monitor.
     */
    get_width_mm(): number
    /**
     * Retrieves the size and position of the “work area” on a monitor
     * within the display coordinate space. The returned geometry is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_monitor_get_scale_factor()).
     * 
     * The work area should be considered when positioning menus and
     * similar popups, to avoid placing them below panels, docks or other
     * desktop components.
     * 
     * Note that not all backends may have a concept of workarea. This
     * function will return the monitor geometry if a workarea is not
     * available, or does not apply.
     */
    get_workarea(): /* workarea */ Rectangle
    /**
     * Gets whether this monitor should be considered primary
     * (see gdk_display_get_primary_monitor()).
     */
    is_primary(): boolean
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.Monitor */
    connect(sigName: "invalidate", callback: (($obj: Monitor) => void)): number
    connect_after(sigName: "invalidate", callback: (($obj: Monitor) => void)): number
    emit(sigName: "invalidate"): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::geometry", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::manufacturer", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::model", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::refresh-rate", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::subpixel-layout", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::workarea", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workarea", callback: (($obj: Monitor, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Screen_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Screen */
    font_options?: object
    resolution?: number
}
export class Screen {
    /* Properties of Gdk-3.0.Gdk.Screen */
    font_options: object
    resolution: number
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Screen */
    /**
     * Returns the screen’s currently active window.
     * 
     * On X11, this is done by inspecting the _NET_ACTIVE_WINDOW property
     * on the root window, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * If there is no currently currently active
     * window, or the window manager does not support the
     * _NET_ACTIVE_WINDOW hint, this function returns %NULL.
     * 
     * On other platforms, this function may return %NULL, depending on whether
     * it is implementable on that platform.
     * 
     * The returned window should be unrefed using g_object_unref() when
     * no longer needed.
     */
    get_active_window(): Window | null
    /**
     * Gets the display to which the `screen` belongs.
     */
    get_display(): Display
    /**
     * Gets any options previously set with gdk_screen_set_font_options().
     */
    get_font_options(): cairo.FontOptions | null
    /**
     * Gets the height of `screen` in pixels. The returned size is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    get_height(): number
    /**
     * Returns the height of `screen` in millimeters.
     * 
     * Note that this value is somewhat ill-defined when the screen
     * has multiple monitors of different resolution. It is recommended
     * to use the monitor dimensions instead.
     */
    get_height_mm(): number
    /**
     * Returns the monitor number in which the point (`x,``y)` is located.
     * @param x the x coordinate in the virtual screen.
     * @param y the y coordinate in the virtual screen.
     */
    get_monitor_at_point(x: number, y: number): number
    /**
     * Returns the number of the monitor in which the largest area of the
     * bounding rectangle of `window` resides.
     * @param window a #GdkWindow
     */
    get_monitor_at_window(window: Window): number
    /**
     * Retrieves the #GdkRectangle representing the size and position of
     * the individual monitor within the entire screen area. The returned
     * geometry is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     * 
     * Monitor numbers start at 0. To obtain the number of monitors of
     * `screen,` use gdk_screen_get_n_monitors().
     * 
     * Note that the size of the entire screen area can be retrieved via
     * gdk_screen_get_width() and gdk_screen_get_height().
     * @param monitor_num the monitor number
     */
    get_monitor_geometry(monitor_num: number): /* dest */ Rectangle | null
    /**
     * Gets the height in millimeters of the specified monitor.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_height_mm(monitor_num: number): number
    /**
     * Returns the output name of the specified monitor.
     * Usually something like VGA, DVI, or TV, not the actual
     * product name of the display device.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_plug_name(monitor_num: number): string | null
    /**
     * Returns the internal scale factor that maps from monitor coordinates
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a window
     * where it is better to use gdk_window_get_scale_factor() instead.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_scale_factor(monitor_num: number): number
    /**
     * Gets the width in millimeters of the specified monitor, if available.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_width_mm(monitor_num: number): number
    /**
     * Retrieves the #GdkRectangle representing the size and position of
     * the “work area” on a monitor within the entire screen area. The returned
     * geometry is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     * 
     * The work area should be considered when positioning menus and
     * similar popups, to avoid placing them below panels, docks or other
     * desktop components.
     * 
     * Note that not all backends may have a concept of workarea. This
     * function will return the monitor geometry if a workarea is not
     * available, or does not apply.
     * 
     * Monitor numbers start at 0. To obtain the number of monitors of
     * `screen,` use gdk_screen_get_n_monitors().
     * @param monitor_num the monitor number
     */
    get_monitor_workarea(monitor_num: number): /* dest */ Rectangle | null
    /**
     * Returns the number of monitors which `screen` consists of.
     */
    get_n_monitors(): number
    /**
     * Gets the index of `screen` among the screens in the display
     * to which it belongs. (See gdk_screen_get_display())
     */
    get_number(): number
    /**
     * Gets the primary monitor for `screen`.  The primary monitor
     * is considered the monitor where the “main desktop” lives.
     * While normal application windows typically allow the window
     * manager to place the windows, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     * 
     * If no primary monitor is configured by the user, the return value
     * will be 0, defaulting to the first monitor.
     */
    get_primary_monitor(): number
    /**
     * Gets the resolution for font handling on the screen; see
     * gdk_screen_set_resolution() for full details.
     */
    get_resolution(): number
    /**
     * Gets a visual to use for creating windows with an alpha channel.
     * The windowing system on which GTK+ is running
     * may not support this capability, in which case %NULL will
     * be returned. Even if a non-%NULL value is returned, its
     * possible that the window’s alpha channel won’t be honored
     * when displaying the window on the screen: in particular, for
     * X an appropriate windowing manager and compositing manager
     * must be running to provide appropriate display.
     * 
     * This functionality is not implemented in the Windows backend.
     * 
     * For setting an overall opacity for a top-level window, see
     * gdk_window_set_opacity().
     */
    get_rgba_visual(): Visual | null
    /**
     * Gets the root window of `screen`.
     */
    get_root_window(): Window
    /**
     * Retrieves a desktop-wide setting such as double-click time
     * for the #GdkScreen `screen`.
     * 
     * FIXME needs a list of valid settings here, or a link to
     * more information.
     * @param name the name of the setting
     * @param value location to store the value of the setting
     */
    get_setting(name: string, value: any): boolean
    /**
     * Get the system’s default visual for `screen`.
     * This is the visual for the root window of the display.
     * The return value should not be freed.
     */
    get_system_visual(): Visual
    /**
     * Obtains a list of all toplevel windows known to GDK on the screen `screen`.
     * A toplevel window is a child of the root window (see
     * gdk_get_default_root_window()).
     * 
     * The returned list should be freed with g_list_free(), but
     * its elements need not be freed.
     */
    get_toplevel_windows(): Window[]
    /**
     * Gets the width of `screen` in pixels. The returned size is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    get_width(): number
    /**
     * Gets the width of `screen` in millimeters.
     * 
     * Note that this value is somewhat ill-defined when the screen
     * has multiple monitors of different resolution. It is recommended
     * to use the monitor dimensions instead.
     */
    get_width_mm(): number
    /**
     * Returns a #GList of #GdkWindows representing the current
     * window stack.
     * 
     * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
     * property on the root window, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * If the window manager does not support the
     * _NET_CLIENT_LIST_STACKING hint, this function returns %NULL.
     * 
     * On other platforms, this function may return %NULL, depending on whether
     * it is implementable on that platform.
     * 
     * The returned list is newly allocated and owns references to the
     * windows it contains, so it should be freed using g_list_free() and
     * its windows unrefed using g_object_unref() when no longer needed.
     */
    get_window_stack(): Window[] | null
    /**
     * Returns whether windows with an RGBA visual can reasonably
     * be expected to have their alpha channel drawn correctly on
     * the screen.
     * 
     * On X11 this function returns whether a compositing manager is
     * compositing `screen`.
     */
    is_composited(): boolean
    /**
     * Lists the available visuals for the specified `screen`.
     * A visual describes a hardware image data format.
     * For example, a visual might support 24-bit color, or 8-bit color,
     * and might expect pixels to be in a certain format.
     * 
     * Call g_list_free() on the return value when you’re finished with it.
     */
    list_visuals(): Visual[]
    /**
     * Determines the name to pass to gdk_display_open() to get
     * a #GdkDisplay with this screen as the default screen.
     */
    make_display_name(): string
    /**
     * Sets the default font options for the screen. These
     * options will be set on any #PangoContext’s newly created
     * with gdk_pango_context_get_for_screen(). Changing the
     * default set of font options does not affect contexts that
     * have already been created.
     * @param options a #cairo_font_options_t, or %NULL to unset any   previously set default font options.
     */
    set_font_options(options?: cairo.FontOptions | null): void
    /**
     * Sets the resolution for font handling on the screen. This is a
     * scale factor between points specified in a #PangoFontDescription
     * and cairo units. The default value is 96, meaning that a 10 point
     * font will be 13 units high. (10 * 96. / 72. = 13.3).
     * @param dpi the resolution in “dots per inch”. (Physical inches aren’t actually   involved; the terminology is conventional.)
     */
    set_resolution(dpi: number): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.Screen */
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of the screen changes
     */
    connect(sigName: "composited-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "composited-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "composited-changed"): void
    /**
     * The ::monitors-changed signal is emitted when the number, size
     * or position of the monitors attached to the screen change.
     * 
     * Only for X11 and OS X for now. A future implementation for Win32
     * may be a possibility.
     */
    connect(sigName: "monitors-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "monitors-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "monitors-changed"): void
    /**
     * The ::size-changed signal is emitted when the pixel width or
     * height of a screen changes.
     */
    connect(sigName: "size-changed", callback: (($obj: Screen) => void)): number
    connect_after(sigName: "size-changed", callback: (($obj: Screen) => void)): number
    emit(sigName: "size-changed"): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::font-options", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::resolution", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: (($obj: Screen, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the default screen for the default display. (See
     * gdk_display_get_default ()).
     */
    static get_default(): Screen | null
    /**
     * Gets the height of the default screen in pixels. The returned
     * size is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    static height(): number
    /**
     * Returns the height of the default screen in millimeters.
     * Note that on many X servers this value will not be correct.
     */
    static height_mm(): number
    /**
     * Gets the width of the default screen in pixels. The returned
     * size is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    static width(): number
    /**
     * Returns the width of the default screen in millimeters.
     * Note that on many X servers this value will not be correct.
     */
    static width_mm(): number
    static $gtype: GObject.Type
}
export interface Seat_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Seat */
    /**
     * #GdkDisplay of this seat.
     */
    display?: Display
}
export class Seat {
    /* Properties of Gdk-3.0.Gdk.Seat */
    /**
     * #GdkDisplay of this seat.
     */
    readonly display: Display
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Seat */
    /**
     * Returns the capabilities this #GdkSeat currently has.
     */
    get_capabilities(): SeatCapabilities
    /**
     * Returns the #GdkDisplay this seat belongs to.
     */
    get_display(): Display
    /**
     * Returns the master device that routes keyboard events.
     */
    get_keyboard(): Device | null
    /**
     * Returns the master device that routes pointer events.
     */
    get_pointer(): Device | null
    /**
     * Returns the slave devices that match the given capabilities.
     * @param capabilities capabilities to get devices for
     */
    get_slaves(capabilities: SeatCapabilities): Device[]
    /**
     * Grabs the seat so that all events corresponding to the given `capabilities`
     * are passed to this application until the seat is ungrabbed with gdk_seat_ungrab(),
     * or the window becomes hidden. This overrides any previous grab on the
     * seat by this client.
     * 
     * As a rule of thumb, if a grab is desired over %GDK_SEAT_CAPABILITY_POINTER,
     * all other "pointing" capabilities (eg. %GDK_SEAT_CAPABILITY_TOUCH) should
     * be grabbed too, so the user is able to interact with all of those while
     * the grab holds, you should thus use %GDK_SEAT_CAPABILITY_ALL_POINTING most
     * commonly.
     * 
     * Grabs are used for operations which need complete control over the
     * events corresponding to the given capabilities. For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of a #GdkWindow has selected both button press
     * and button release events, or touch begin and touch end, then a press event
     * will cause an automatic grab until the button is released, equivalent to a
     * grab on the window with `owner_events` set to %TRUE. This is done because most
     * applications expect to receive paired press and release events.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     * @param window the #GdkWindow which will own the grab
     * @param capabilities capabilities that will be grabbed
     * @param owner_events if %FALSE then all device events are reported with respect to                `window` and are only reported if selected by `event_mask`. If                %TRUE then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
     * @param cursor the cursor to display while the grab is active. If          this is %NULL then the normal cursors are used for          `window` and its descendants, and the cursor for `window` is used          elsewhere.
     * @param event the event that is triggering the grab, or %NULL if none         is available.
     * @param prepare_func function to                prepare the window to be grabbed, it can be %NULL if `window` is                visible before this call.
     */
    grab(window: Window, capabilities: SeatCapabilities, owner_events: boolean, cursor?: Cursor | null, event?: Event | null, prepare_func?: SeatGrabPrepareFunc | null): GrabStatus
    /**
     * Releases a grab added through gdk_seat_grab().
     */
    ungrab(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Signals of Gdk-3.0.Gdk.Seat */
    /**
     * The ::device-added signal is emitted when a new input
     * device is related to this seat.
     * @param device the newly added #GdkDevice.
     */
    connect(sigName: "device-added", callback: (($obj: Seat, device: Device) => void)): number
    connect_after(sigName: "device-added", callback: (($obj: Seat, device: Device) => void)): number
    emit(sigName: "device-added", device: Device): void
    /**
     * The ::device-removed signal is emitted when an
     * input device is removed (e.g. unplugged).
     * @param device the just removed #GdkDevice.
     */
    connect(sigName: "device-removed", callback: (($obj: Seat, device: Device) => void)): number
    connect_after(sigName: "device-removed", callback: (($obj: Seat, device: Device) => void)): number
    emit(sigName: "device-removed", device: Device): void
    /**
     * The ::tool-added signal is emitted whenever a new tool
     * is made known to the seat. The tool may later be assigned
     * to a device (i.e. on proximity with a tablet). The device
     * will emit the #GdkDevice::tool-changed signal accordingly.
     * 
     * A same tool may be used by several devices.
     * @param tool the new #GdkDeviceTool known to the seat
     */
    connect(sigName: "tool-added", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-added", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    emit(sigName: "tool-added", tool: DeviceTool): void
    /**
     * This signal is emitted whenever a tool is no longer known
     * to this `seat`.
     * @param tool the just removed #GdkDeviceTool
     */
    connect(sigName: "tool-removed", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    connect_after(sigName: "tool-removed", callback: (($obj: Seat, tool: DeviceTool) => void)): number
    emit(sigName: "tool-removed", tool: DeviceTool): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::display", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Seat, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Seat_ConstructProps)
    _init (config?: Seat_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Visual_ConstructProps extends GObject.Object_ConstructProps {
}
export class Visual {
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Visual */
    /**
     * Returns the number of significant bits per red, green and blue value.
     * 
     * Not all GDK backend provide a meaningful value for this function.
     */
    get_bits_per_rgb(): number
    /**
     * Obtains values that are needed to calculate blue pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_blue_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Returns the byte order of this visual.
     * 
     * The information returned by this function is only relevant
     * when working with XImages, and not all backends return
     * meaningful information for this.
     */
    get_byte_order(): ByteOrder
    /**
     * Returns the size of a colormap for this visual.
     * 
     * You have to use platform-specific APIs to manipulate colormaps.
     */
    get_colormap_size(): number
    /**
     * Returns the bit depth of this visual.
     */
    get_depth(): number
    /**
     * Obtains values that are needed to calculate green pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_green_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Obtains values that are needed to calculate red pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    get_red_pixel_details(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Gets the screen to which this visual belongs
     */
    get_screen(): Screen
    /**
     * Returns the type of visual this is (PseudoColor, TrueColor, etc).
     */
    get_visual_type(): VisualType
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Visual, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Visual, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Visual_ConstructProps)
    _init (config?: Visual_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Get the visual with the most available colors for the default
     * GDK screen. The return value should not be freed.
     */
    static get_best(): Visual
    /**
     * Get the best available depth for the default GDK screen.  “Best”
     * means “largest,” i.e. 32 preferred over 24 preferred over 8 bits
     * per pixel.
     */
    static get_best_depth(): number
    /**
     * Return the best available visual type for the default GDK screen.
     */
    static get_best_type(): VisualType
    /**
     * Combines gdk_visual_get_best_with_depth() and
     * gdk_visual_get_best_with_type().
     * @param depth a bit depth
     * @param visual_type a visual type
     */
    static get_best_with_both(depth: number, visual_type: VisualType): Visual | null
    /**
     * Get the best visual with depth `depth` for the default GDK screen.
     * Color visuals and visuals with mutable colormaps are preferred
     * over grayscale or fixed-colormap visuals. The return value should
     * not be freed. %NULL may be returned if no visual supports `depth`.
     * @param depth a bit depth
     */
    static get_best_with_depth(depth: number): Visual
    /**
     * Get the best visual of the given `visual_type` for the default GDK screen.
     * Visuals with higher color depths are considered better. The return value
     * should not be freed. %NULL may be returned if no visual has type
     * `visual_type`.
     * @param visual_type a visual type
     */
    static get_best_with_type(visual_type: VisualType): Visual
    /**
     * Get the system’s default visual for the default GDK screen.
     * This is the visual for the root window of the display.
     * The return value should not be freed.
     */
    static get_system(): Visual
    static $gtype: GObject.Type
}
export interface Window_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Window */
    /**
     * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
     * gdk_window_get_cursor() for details.
     */
    cursor?: Cursor
}
export class Window {
    /* Properties of Gdk-3.0.Gdk.Window */
    /**
     * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
     * gdk_window_get_cursor() for details.
     */
    cursor: Cursor
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Window */
    /**
     * Emits a short beep associated to `window` in the appropriate
     * display, if supported. Otherwise, emits a short beep on
     * the display just as gdk_display_beep().
     */
    beep(): void
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on `window,` and provides you with a #GdkDrawingContext.
     * 
     * If `window` is a top level #GdkWindow, backed by a native window
     * implementation, a backing store (offscreen buffer) large enough to
     * contain `region` will be created. The backing store will be initialized
     * with the background color or background surface for `window`. Then, all
     * drawing operations performed on `window` will be diverted to the
     * backing store. When you call gdk_window_end_frame(), the contents of
     * the backing store will be copied to `window,` making it visible
     * on screen. Only the part of `window` contained in `region` will be
     * modified; that is, drawing operations are clipped to `region`.
     * 
     * The net result of all this is to remove flicker, because the user
     * sees the finished product appear all at once when you call
     * gdk_window_end_draw_frame(). If you draw to `window` directly without
     * calling gdk_window_begin_draw_frame(), the user may see flicker
     * as individual drawing operations are performed in sequence.
     * 
     * When using GTK+, the widget system automatically places calls to
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() around
     * emissions of the `GtkWidget::draw` signal. That is, if you’re
     * drawing the contents of the widget yourself, you can assume that the
     * widget has a cleared background, is already set as the clip region,
     * and already has a backing store. Therefore in most cases, application
     * code in GTK does not need to call gdk_window_begin_draw_frame()
     * explicitly.
     * @param region a Cairo region
     */
    begin_draw_frame(region: cairo.Region): DrawingContext
    /**
     * Begins a window move operation (for a toplevel window).
     * 
     * This function assumes that the drag is controlled by the
     * client pointer device, use gdk_window_begin_move_drag_for_device()
     * to begin a drag with a different device.
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag
     */
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Begins a window move operation (for a toplevel window).
     * You might use this function to implement a “window move grip,” for
     * example. The function works best with window managers that support the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
     * but has a fallback implementation for other window managers.
     * @param device the device used for the operation
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag
     */
    begin_move_drag_for_device(device: Device, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * A convenience wrapper around gdk_window_begin_paint_region() which
     * creates a rectangular region for you. See
     * gdk_window_begin_paint_region() for details.
     * @param rectangle rectangle you intend to draw to
     */
    begin_paint_rect(rectangle: Rectangle): void
    /**
     * Indicates that you are beginning the process of redrawing `region`.
     * A backing store (offscreen buffer) large enough to contain `region`
     * will be created. The backing store will be initialized with the
     * background color or background surface for `window`. Then, all
     * drawing operations performed on `window` will be diverted to the
     * backing store.  When you call gdk_window_end_paint(), the backing
     * store will be copied to `window,` making it visible onscreen. Only
     * the part of `window` contained in `region` will be modified; that is,
     * drawing operations are clipped to `region`.
     * 
     * The net result of all this is to remove flicker, because the user
     * sees the finished product appear all at once when you call
     * gdk_window_end_paint(). If you draw to `window` directly without
     * calling gdk_window_begin_paint_region(), the user may see flicker
     * as individual drawing operations are performed in sequence.  The
     * clipping and background-initializing features of
     * gdk_window_begin_paint_region() are conveniences for the
     * programmer, so you can avoid doing that work yourself.
     * 
     * When using GTK+, the widget system automatically places calls to
     * gdk_window_begin_paint_region() and gdk_window_end_paint() around
     * emissions of the expose_event signal. That is, if you’re writing an
     * expose event handler, you can assume that the exposed area in
     * #GdkEventExpose has already been cleared to the window background,
     * is already set as the clip region, and already has a backing store.
     * Therefore in most cases, application code need not call
     * gdk_window_begin_paint_region(). (You can disable the automatic
     * calls around expose events on a widget-by-widget basis by calling
     * gtk_widget_set_double_buffered().)
     * 
     * If you call this function multiple times before calling the
     * matching gdk_window_end_paint(), the backing stores are pushed onto
     * a stack. gdk_window_end_paint() copies the topmost backing store
     * onscreen, subtracts the topmost region from all other regions in
     * the stack, and pops the stack. All drawing operations affect only
     * the topmost backing store in the stack. One matching call to
     * gdk_window_end_paint() is required for each call to
     * gdk_window_begin_paint_region().
     * @param region region you intend to draw to
     */
    begin_paint_region(region: cairo.Region): void
    /**
     * Begins a window resize operation (for a toplevel window).
     * 
     * This function assumes that the drag is controlled by the
     * client pointer device, use gdk_window_begin_resize_drag_for_device()
     * to begin a drag with a different device.
     * @param edge the edge or corner from which the drag is started
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
     */
    begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Begins a window resize operation (for a toplevel window).
     * You might use this function to implement a “window resize grip,” for
     * example; in fact #GtkStatusbar uses it. The function works best
     * with window managers that support the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
     * but has a fallback implementation for other window managers.
     * @param edge the edge or corner from which the drag is started
     * @param device the device used for the operation
     * @param button the button being used to drag, or 0 for a keyboard-initiated drag
     * @param root_x root window X coordinate of mouse click that began the drag
     * @param root_y root window Y coordinate of mouse click that began the drag
     * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
     */
    begin_resize_drag_for_device(edge: WindowEdge, device: Device, button: number, root_x: number, root_y: number, timestamp: number): void
    /**
     * Does nothing, present only for compatiblity.
     */
    configure_finished(): void
    /**
     * Transforms window coordinates from a parent window to a child
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to subtracting
     * the return values of gdk_window_get_position() from the parent coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::from-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks down a window hierarchy.
     * 
     * See also: gdk_window_coords_to_parent()
     * @param parent_x X coordinate in parent’s coordinate system
     * @param parent_y Y coordinate in parent’s coordinate system
     */
    coords_from_parent(parent_x: number, parent_y: number): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Transforms window coordinates from a child window to its parent
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to adding
     * the return values of gdk_window_get_position() to the child coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::to-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks up a window hierarchy.
     * 
     * See also: gdk_window_coords_from_parent()
     * @param x X coordinate in child’s coordinate system
     * @param y Y coordinate in child’s coordinate system
     */
    coords_to_parent(x: number, y: number): [ /* parent_x */ number | null, /* parent_y */ number | null ]
    /**
     * Creates a new #GdkGLContext matching the
     * framebuffer format to the visual of the #GdkWindow. The context
     * is disconnected from any particular window or surface.
     * 
     * If the creation of the #GdkGLContext failed, `error` will be set.
     * 
     * Before using the returned #GdkGLContext, you will need to
     * call gdk_gl_context_make_current() or gdk_gl_context_realize().
     */
    create_gl_context(): GLContext
    /**
     * Create a new image surface that is efficient to draw on the
     * given `window`.
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * The `width` and `height` of the new surface are not affected by
     * the scaling factor of the `window,` or by the `scale` argument; they
     * are the size of the surface in device pixels. If you wish to create
     * an image surface capable of holding the contents of `window` you can
     * use:
     * 
     * 
     * ```c
     *   int scale = gdk_window_get_scale_factor (window);
     *   int width = gdk_window_get_width (window) * scale;
     *   int height = gdk_window_get_height (window) * scale;
     * 
     *   // format is set elsewhere
     *   cairo_surface_t *surface =
     *     gdk_window_create_similar_image_surface (window,
     *                                              format,
     *                                              width, height,
     *                                              scale);
     * ```
     * 
     * 
     * Note that unlike cairo_surface_create_similar_image(), the new
     * surface's device scale is set to `scale,` or to the scale factor of
     * `window` if `scale` is 0.
     * @param format the format for the new surface
     * @param width width of the new surface
     * @param height height of the new surface
     * @param scale the scale of the new surface, or 0 to use same as `window`
     */
    create_similar_image_surface(format: cairo.Format, width: number, height: number, scale: number): cairo.Surface
    /**
     * Create a new surface that is as compatible as possible with the
     * given `window`. For example the new surface will have the same
     * fallback resolution and font options as `window`. Generally, the new
     * surface will also use the same backend as `window,` unless that is
     * not possible for some reason. The type of the returned surface may
     * be examined with cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * @param content the content for the new surface
     * @param width width of the new surface
     * @param height height of the new surface
     */
    create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Attempt to deiconify (unminimize) `window`. On X11 the window manager may
     * choose to ignore the request to deiconify. When using GTK+,
     * use gtk_window_deiconify() instead of the #GdkWindow variant. Or better yet,
     * you probably want to use gtk_window_present_with_time(), which raises the window, focuses it,
     * unminimizes it, and puts it on the current desktop.
     */
    deiconify(): void
    /**
     * Destroys the window system resources associated with `window` and decrements `window'`s
     * reference count. The window system resources for all children of `window` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a window will not be destroyed automatically when its reference count
     * reaches zero. You must call this function yourself before that happens.
     */
    destroy(): void
    destroy_notify(): void
    /**
     * Does nothing, present only for compatiblity.
     */
    enable_synchronized_configure(): void
    /**
     * Indicates that the drawing of the contents of `window` started with
     * gdk_window_begin_frame() has been completed.
     * 
     * This function will take care of destroying the #GdkDrawingContext.
     * 
     * It is an error to call this function without a matching
     * gdk_window_begin_frame() first.
     * @param context the #GdkDrawingContext created by gdk_window_begin_draw_frame()
     */
    end_draw_frame(context: DrawingContext): void
    /**
     * Indicates that the backing store created by the most recent call
     * to gdk_window_begin_paint_region() should be copied onscreen and
     * deleted, leaving the next-most-recent backing store or no backing
     * store at all as the active paint region. See
     * gdk_window_begin_paint_region() for full details.
     * 
     * It is an error to call this function without a matching
     * gdk_window_begin_paint_region() first.
     */
    end_paint(): void
    /**
     * Tries to ensure that there is a window-system native window for this
     * GdkWindow. This may fail in some situations, returning %FALSE.
     * 
     * Offscreen window and children of them can never have native windows.
     * 
     * Some backends may not support native child windows.
     */
    ensure_native(): boolean
    /**
     * This function does nothing.
     */
    flush(): void
    /**
     * Sets keyboard focus to `window`. In most cases, gtk_window_present_with_time()
     * should be used on a #GtkWindow, rather than calling this function.
     * @param timestamp timestamp of the event triggering the window focus
     */
    focus(timestamp: number): void
    /**
     * Temporarily freezes a window and all its descendants such that it won't
     * receive expose events.  The window will begin receiving expose events
     * again when gdk_window_thaw_toplevel_updates_libgtk_only() is called. If
     * gdk_window_freeze_toplevel_updates_libgtk_only()
     * has been called more than once,
     * gdk_window_thaw_toplevel_updates_libgtk_only() must be called
     * an equal number of times to begin processing exposes.
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    freeze_toplevel_updates_libgtk_only(): void
    /**
     * Temporarily freezes a window such that it won’t receive expose
     * events.  The window will begin receiving expose events again when
     * gdk_window_thaw_updates() is called. If gdk_window_freeze_updates()
     * has been called more than once, gdk_window_thaw_updates() must be called
     * an equal number of times to begin processing exposes.
     */
    freeze_updates(): void
    /**
     * Moves the window into fullscreen mode. This means the
     * window covers the entire screen and is above any panels
     * or task bars.
     * 
     * If the window was already fullscreen, then this function does nothing.
     * 
     * On X11, asks the window manager to put `window` in a fullscreen
     * state, if the window manager supports this operation. Not all
     * window managers support this, and some deliberately ignore it or
     * don’t have a concept of “fullscreen”; so you can’t rely on the
     * fullscreenification actually happening. But it will happen with
     * most standard window managers, and GDK makes a best effort to get
     * it to happen.
     */
    fullscreen(): void
    /**
     * Moves the window into fullscreen mode on the given monitor. This means
     * the window covers the entire screen and is above any panels or task bars.
     * 
     * If the window was already fullscreen, then this function does nothing.
     * @param monitor Which monitor to display fullscreen on.
     */
    fullscreen_on_monitor(monitor: number): void
    /**
     * This function informs GDK that the geometry of an embedded
     * offscreen window has changed. This is necessary for GDK to keep
     * track of which offscreen window the pointer is in.
     */
    geometry_changed(): void
    /**
     * Determines whether or not the desktop environment shuld be hinted that
     * the window does not want to receive input focus.
     */
    get_accept_focus(): boolean
    /**
     * Gets the pattern used to clear the background on `window`.
     */
    get_background_pattern(): cairo.Pattern | null
    /**
     * Gets the list of children of `window` known to GDK.
     * This function only returns children created via GDK,
     * so for example it’s useless when used with the root window;
     * it only returns windows an application created itself.
     * 
     * The returned list must be freed, but the elements in the
     * list need not be.
     */
    get_children(): Window[]
    /**
     * Gets the list of children of `window` known to GDK with a
     * particular `user_data` set on it.
     * 
     * The returned list must be freed, but the elements in the
     * list need not be.
     * 
     * The list is returned in (relative) stacking order, i.e. the
     * lowest window is first.
     * @param user_data user data to look for
     */
    get_children_with_user_data(user_data?: object | null): Window[]
    /**
     * Computes the region of a window that potentially can be written
     * to by drawing primitives. This region may not take into account
     * other factors such as if the window is obscured by other windows,
     * but no area outside of this region will be affected by drawing
     * primitives.
     */
    get_clip_region(): cairo.Region
    /**
     * Determines whether `window` is composited.
     * 
     * See gdk_window_set_composited().
     */
    get_composited(): boolean
    /**
     * Retrieves a #GdkCursor pointer for the cursor currently set on the
     * specified #GdkWindow, or %NULL.  If the return value is %NULL then
     * there is no custom cursor set on the specified window, and it is
     * using the cursor for its parent window.
     */
    get_cursor(): Cursor | null
    /**
     * Returns the decorations set on the GdkWindow with
     * gdk_window_set_decorations().
     */
    get_decorations(): [ /* returnType */ boolean, /* decorations */ WMDecoration ]
    /**
     * Retrieves a #GdkCursor pointer for the `device` currently set on the
     * specified #GdkWindow, or %NULL.  If the return value is %NULL then
     * there is no custom cursor set on the specified window, and it is
     * using the cursor for its parent window.
     * @param device a master, pointer #GdkDevice.
     */
    get_device_cursor(device: Device): Cursor | null
    /**
     * Returns the event mask for `window` corresponding to an specific device.
     * @param device a #GdkDevice.
     */
    get_device_events(device: Device): EventMask
    /**
     * Obtains the current device position and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     * 
     * Use gdk_window_get_device_position_double() if you need subpixel precision.
     * @param device pointer #GdkDevice to query to.
     */
    get_device_position(device: Device): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Obtains the current device position in doubles and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     * @param device pointer #GdkDevice to query to.
     */
    get_device_position_double(device: Device): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the #GdkDisplay associated with a #GdkWindow.
     */
    get_display(): Display
    /**
     * Finds out the DND protocol supported by a window.
     */
    get_drag_protocol(): [ /* returnType */ DragProtocol, /* target */ Window | null ]
    /**
     * Obtains the parent of `window,` as known to GDK. Works like
     * gdk_window_get_parent() for normal windows, but returns the
     * window’s embedder for offscreen windows.
     * 
     * See also: gdk_offscreen_window_get_embedder()
     */
    get_effective_parent(): Window
    /**
     * Gets the toplevel window that’s an ancestor of `window`.
     * 
     * Works like gdk_window_get_toplevel(), but treats an offscreen window's
     * embedder as its parent, using gdk_window_get_effective_parent().
     * 
     * See also: gdk_offscreen_window_get_embedder()
     */
    get_effective_toplevel(): Window
    /**
     * Get the current event compression setting for this window.
     */
    get_event_compression(): boolean
    /**
     * Gets the event mask for `window` for all master input devices. See
     * gdk_window_set_events().
     */
    get_events(): EventMask
    /**
     * Determines whether or not the desktop environment should be hinted that the
     * window does not want to receive input focus when it is mapped.
     */
    get_focus_on_map(): boolean
    /**
     * Gets the frame clock for the window. The frame clock for a window
     * never changes unless the window is reparented to a new toplevel
     * window.
     */
    get_frame_clock(): FrameClock
    /**
     * Obtains the bounding box of the window, including window manager
     * titlebar/borders if any. The frame position is given in root window
     * coordinates. To get the position of the window itself (rather than
     * the frame) in root window coordinates, use gdk_window_get_origin().
     */
    get_frame_extents(): /* rect */ Rectangle
    /**
     * Obtains the #GdkFullscreenMode of the `window`.
     */
    get_fullscreen_mode(): FullscreenMode
    /**
     * Any of the return location arguments to this function may be %NULL,
     * if you aren’t interested in getting the value of that field.
     * 
     * The X and Y coordinates returned are relative to the parent window
     * of `window,` which for toplevels usually means relative to the
     * window decorations (titlebar, etc.) rather than relative to the
     * root window (screen-size background window).
     * 
     * On the X11 platform, the geometry is obtained from the X server,
     * so reflects the latest position of `window;` this may be out-of-sync
     * with the position of `window` delivered in the most-recently-processed
     * #GdkEventConfigure. gdk_window_get_position() in contrast gets the
     * position from the most recent configure event.
     * 
     * Note: If `window` is not a toplevel, it is much better
     * to call gdk_window_get_position(), gdk_window_get_width() and
     * gdk_window_get_height() instead, because it avoids the roundtrip to
     * the X server and because these functions support the full 32-bit
     * coordinate space, whereas gdk_window_get_geometry() is restricted to
     * the 16-bit coordinates of X11.
     */
    get_geometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the group leader window for `window`. See gdk_window_set_group().
     */
    get_group(): Window
    /**
     * Returns the height of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     */
    get_height(): number
    /**
     * Determines whether or not the window manager is hinted that `window`
     * has modal behaviour.
     */
    get_modal_hint(): boolean
    /**
     * Obtains the position of a window in root window coordinates.
     * (Compare with gdk_window_get_position() and
     * gdk_window_get_geometry() which return the position of a window
     * relative to its parent window.)
     */
    get_origin(): [ /* returnType */ number, /* x */ number | null, /* y */ number | null ]
    /**
     * Obtains the parent of `window,` as known to GDK. Does not query the
     * X server; thus this returns the parent as passed to gdk_window_new(),
     * not the actual parent. This should never matter unless you’re using
     * Xlib calls mixed with GDK calls on the X11 platform. It may also
     * matter for toplevel windows, because the window manager may choose
     * to reparent them.
     * 
     * Note that you should use gdk_window_get_effective_parent() when
     * writing generic code that walks up a window hierarchy, because
     * gdk_window_get_parent() will most likely not do what you expect if
     * there are offscreen windows in the hierarchy.
     */
    get_parent(): Window
    /**
     * Returns whether input to the window is passed through to the window
     * below.
     * 
     * See gdk_window_set_pass_through() for details
     */
    get_pass_through(): boolean
    /**
     * Obtains the current pointer position and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     */
    get_pointer(): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Obtains the position of the window as reported in the
     * most-recently-processed #GdkEventConfigure. Contrast with
     * gdk_window_get_geometry() which queries the X server for the
     * current window position, regardless of which events have been
     * received or processed.
     * 
     * The position coordinates are relative to the window’s parent window.
     */
    get_position(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Obtains the position of a window position in root
     * window coordinates. This is similar to
     * gdk_window_get_origin() but allows you to pass
     * in any position in the window, not just the origin.
     * @param x X coordinate in window
     * @param y Y coordinate in window
     */
    get_root_coords(x: number, y: number): [ /* root_x */ number, /* root_y */ number ]
    /**
     * Obtains the top-left corner of the window manager frame in root
     * window coordinates.
     */
    get_root_origin(): [ /* x */ number, /* y */ number ]
    /**
     * Returns the internal scale factor that maps from window coordiantes
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * A higher value means that drawing is automatically scaled up to
     * a higher resolution, so any code doing drawing will automatically look
     * nicer. However, if you are supplying pixel-based data the scale
     * value can be used to determine whether to use a pixel resource
     * with higher resolution data.
     * 
     * The scale of a window may change during runtime, if this happens
     * a configure event will be sent to the toplevel window.
     */
    get_scale_factor(): number
    /**
     * Gets the #GdkScreen associated with a #GdkWindow.
     */
    get_screen(): Screen
    /**
     * Returns the event mask for `window` corresponding to the device class specified
     * by `source`.
     * @param source a #GdkInputSource to define the source class.
     */
    get_source_events(source: InputSource): EventMask
    /**
     * Gets the bitwise OR of the currently active window state flags,
     * from the #GdkWindowState enumeration.
     */
    get_state(): WindowState
    /**
     * Returns %TRUE if the window is aware of the existence of multiple
     * devices.
     */
    get_support_multidevice(): boolean
    /**
     * Gets the toplevel window that’s an ancestor of `window`.
     * 
     * Any window type but %GDK_WINDOW_CHILD is considered a
     * toplevel window, as is a %GDK_WINDOW_CHILD window that
     * has a root window as parent.
     * 
     * Note that you should use gdk_window_get_effective_toplevel() when
     * you want to get to a window’s toplevel as seen on screen, because
     * gdk_window_get_toplevel() will most likely not do what you expect
     * if there are offscreen windows in the hierarchy.
     */
    get_toplevel(): Window
    /**
     * This function returns the type hint set for a window.
     */
    get_type_hint(): WindowTypeHint
    /**
     * Transfers ownership of the update area from `window` to the caller
     * of the function. That is, after calling this function, `window` will
     * no longer have an invalid/dirty region; the update area is removed
     * from `window` and handed to you. If a window has no update area,
     * gdk_window_get_update_area() returns %NULL. You are responsible for
     * calling cairo_region_destroy() on the returned region if it’s non-%NULL.
     */
    get_update_area(): cairo.Region
    /**
     * Retrieves the user data for `window,` which is normally the widget
     * that `window` belongs to. See gdk_window_set_user_data().
     */
    get_user_data(): /* data */ object | null
    /**
     * Computes the region of the `window` that is potentially visible.
     * This does not necessarily take into account if the window is
     * obscured by other windows, but no area outside of this region
     * is visible.
     */
    get_visible_region(): cairo.Region
    /**
     * Gets the #GdkVisual describing the pixel format of `window`.
     */
    get_visual(): Visual
    /**
     * Returns the width of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     */
    get_width(): number
    /**
     * Gets the type of the window. See #GdkWindowType.
     */
    get_window_type(): WindowType
    /**
     * Checks whether the window has a native window or not. Note that
     * you can use gdk_window_ensure_native() if a native window is needed.
     */
    has_native(): boolean
    /**
     * For toplevel windows, withdraws them, so they will no longer be
     * known to the window manager; for all windows, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of gtk_widget_hide().
     */
    hide(): void
    /**
     * Asks to iconify (minimize) `window`. The window manager may choose
     * to ignore the request, but normally will honor it. Using
     * gtk_window_iconify() is preferred, if you have a #GtkWindow widget.
     * 
     * This function only makes sense when `window` is a toplevel window.
     */
    iconify(): void
    /**
     * Like gdk_window_shape_combine_region(), but the shape applies
     * only to event handling. Mouse events which happen while
     * the pointer position corresponds to an unset bit in the
     * mask will be passed on the window below `window`.
     * 
     * An input shape is typically used with RGBA windows.
     * The alpha channel of the window defines which pixels are
     * invisible and allows for nicely antialiased borders,
     * and the input shape controls where the window is
     * “clickable”.
     * 
     * On the X11 platform, this requires version 1.1 of the
     * shape extension.
     * 
     * On the Win32 platform, this functionality is not present and the
     * function does nothing.
     * @param shape_region region of window to be non-transparent
     * @param offset_x X position of `shape_region` in `window` coordinates
     * @param offset_y Y position of `shape_region` in `window` coordinates
     */
    input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or “dirty region.” The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there’s no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `child_func` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * Only children for which `child_func` returns #TRUE will have the area
     * invalidated.
     * @param region a #cairo_region_t
     * @param child_func function to use to decide if to     recurse to a child, %NULL means never recurse.
     */
    invalidate_maybe_recurse(region: cairo.Region, child_func?: WindowChildFunc | null): void
    /**
     * A convenience wrapper around gdk_window_invalidate_region() which
     * invalidates a rectangular region. See
     * gdk_window_invalidate_region() for details.
     * @param rect rectangle to invalidate or %NULL to invalidate the whole      window
     * @param invalidate_children whether to also invalidate child windows
     */
    invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or “dirty region.” The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there’s no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `invalidate_children` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * If %FALSE, then the update area for child windows will remain
     * unaffected. See gdk_window_invalidate_maybe_recurse if you need
     * fine grained control over which children are invalidated.
     * @param region a #cairo_region_t
     * @param invalidate_children %TRUE to also invalidate child windows
     */
    invalidate_region(region: cairo.Region, invalidate_children: boolean): void
    /**
     * Check to see if a window is destroyed..
     */
    is_destroyed(): boolean
    /**
     * Determines whether or not the window is an input only window.
     */
    is_input_only(): boolean
    /**
     * Determines whether or not the window is shaped.
     */
    is_shaped(): boolean
    /**
     * Check if the window and all ancestors of the window are
     * mapped. (This is not necessarily "viewable" in the X sense, since
     * we only check as far as we have GDK window parents, not to the root
     * window.)
     */
    is_viewable(): boolean
    /**
     * Checks whether the window has been mapped (with gdk_window_show() or
     * gdk_window_show_unraised()).
     */
    is_visible(): boolean
    /**
     * Lowers `window` to the bottom of the Z-order (stacking order), so that
     * other windows with the same parent window appear above `window`.
     * This is true whether or not the other windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_lower() only
     * requests the restack, does not guarantee it.
     * 
     * Note that gdk_window_show() raises the window again, so don’t call this
     * function before gdk_window_show(). (Try gdk_window_show_unraised().)
     */
    lower(): void
    /**
     * If you call this during a paint (e.g. between gdk_window_begin_paint_region()
     * and gdk_window_end_paint() then GDK will mark the current clip region of the
     * window as being drawn. This is required when mixing GL rendering via
     * gdk_cairo_draw_from_gl() and cairo rendering, as otherwise GDK has no way
     * of knowing when something paints over the GL-drawn regions.
     * 
     * This is typically called automatically by GTK+ and you don't need
     * to care about this.
     * @param cr a #cairo_t
     */
    mark_paint_from_clip(cr: cairo.Context): void
    /**
     * Maximizes the window. If the window was already maximized, then
     * this function does nothing.
     * 
     * On X11, asks the window manager to maximize `window,` if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “maximized”; so you can’t rely on the maximization actually
     * happening. But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably maximizes the window.
     */
    maximize(): void
    /**
     * Merges the input shape masks for any child windows into the
     * input shape mask for `window`. i.e. the union of all input masks
     * for `window` and its children will become the new input mask
     * for `window`. See gdk_window_input_shape_combine_region().
     * 
     * This function is distinct from gdk_window_set_child_input_shapes()
     * because it includes `window’`s input shape mask in the set of
     * shapes to be merged.
     */
    merge_child_input_shapes(): void
    /**
     * Merges the shape masks for any child windows into the
     * shape mask for `window`. i.e. the union of all masks
     * for `window` and its children will become the new mask
     * for `window`. See gdk_window_shape_combine_region().
     * 
     * This function is distinct from gdk_window_set_child_shapes()
     * because it includes `window’`s shape mask in the set of shapes to
     * be merged.
     */
    merge_child_shapes(): void
    /**
     * Repositions a window relative to its parent window.
     * For toplevel windows, window managers may ignore or modify the move;
     * you should probably use gtk_window_move() on a #GtkWindow widget
     * anyway, instead of using GDK functions. For child windows,
     * the move will reliably succeed.
     * 
     * If you’re also planning to resize the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     * @param x X coordinate relative to window’s parent
     * @param y Y coordinate relative to window’s parent
     */
    move(x: number, y: number): void
    /**
     * Move the part of `window` indicated by `region` by `dy` pixels in the Y
     * direction and `dx` pixels in the X direction. The portions of `region`
     * that not covered by the new position of `region` are invalidated.
     * 
     * Child windows are not moved.
     * @param region The #cairo_region_t to move
     * @param dx Amount to move in the X direction
     * @param dy Amount to move in the Y direction
     */
    move_region(region: cairo.Region, dx: number, dy: number): void
    /**
     * Equivalent to calling gdk_window_move() and gdk_window_resize(),
     * except that both operations are performed at once, avoiding strange
     * visual effects. (i.e. the user may be able to see the window first
     * move, then resize, if you don’t use gdk_window_move_resize().)
     * @param x new X position relative to window’s parent
     * @param y new Y position relative to window’s parent
     * @param width new width
     * @param height new height
     */
    move_resize(x: number, y: number, width: number, height: number): void
    /**
     * Moves `window` to `rect,` aligning their anchor points.
     * 
     * `rect` is relative to the top-left corner of the window that `window` is
     * transient for. `rect_anchor` and `window_anchor` determine anchor points on
     * `rect` and `window` to pin together. `rect'`s anchor point can optionally be
     * offset by `rect_anchor_dx` and `rect_anchor_dy,` which is equivalent to
     * offsetting the position of `window`.
     * 
     * `anchor_hints` determines how `window` will be moved if the anchor points cause
     * it to move off-screen. For example, %GDK_ANCHOR_FLIP_X will replace
     * %GDK_GRAVITY_NORTH_WEST with %GDK_GRAVITY_NORTH_EAST and vice versa if
     * `window` extends beyond the left or right edges of the monitor.
     * 
     * Connect to the #GdkWindow::moved-to-rect signal to find out how it was
     * actually positioned.
     * @param rect the destination #GdkRectangle to align `window` with
     * @param rect_anchor the point on `rect` to align with `window'`s anchor point
     * @param window_anchor the point on `window` to align with `rect'`s anchor point
     * @param anchor_hints positioning hints to use when limited on space
     * @param rect_anchor_dx horizontal offset to shift `window,` i.e. `rect'`s anchor                  point
     * @param rect_anchor_dy vertical offset to shift `window,` i.e. `rect'`s anchor point
     */
    move_to_rect(rect: Rectangle, rect_anchor: Gravity, window_anchor: Gravity, anchor_hints: AnchorHints, rect_anchor_dx: number, rect_anchor_dy: number): void
    /**
     * Like gdk_window_get_children(), but does not copy the list of
     * children, so the list does not need to be freed.
     */
    peek_children(): Window[]
    /**
     * Sends one or more expose events to `window`. The areas in each
     * expose event will cover the entire update area for the window (see
     * gdk_window_invalidate_region() for details). Normally GDK calls
     * gdk_window_process_all_updates() on your behalf, so there’s no
     * need to call this function unless you want to force expose events
     * to be delivered immediately and synchronously (vs. the usual
     * case, where GDK delivers them in an idle handler). Occasionally
     * this is useful to produce nicer scrolling behavior, for example.
     * @param update_children whether to also process updates for child windows
     */
    process_updates(update_children: boolean): void
    /**
     * Raises `window` to the top of the Z-order (stacking order), so that
     * other windows with the same parent window appear below `window`.
     * This is true whether or not the windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_raise() only
     * requests the restack, does not guarantee it.
     */
    raise(): void
    /**
     * Registers a window as a potential drop destination.
     */
    register_dnd(): void
    /**
     * Reparents `window` into the given `new_parent`. The window being
     * reparented will be unmapped as a side effect.
     * @param new_parent new parent to move `window` into
     * @param x X location inside the new parent
     * @param y Y location inside the new parent
     */
    reparent(new_parent: Window, x: number, y: number): void
    /**
     * Resizes `window;` for toplevel windows, asks the window manager to resize
     * the window. The window manager may not allow the resize. When using GTK+,
     * use gtk_window_resize() instead of this low-level GDK function.
     * 
     * Windows may not be resized below 1x1.
     * 
     * If you’re also planning to move the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     * @param width new width of the window
     * @param height new height of the window
     */
    resize(width: number, height: number): void
    /**
     * Changes the position of  `window` in the Z-order (stacking order), so that
     * it is above `sibling` (if `above` is %TRUE) or below `sibling` (if `above` is
     * %FALSE).
     * 
     * If `sibling` is %NULL, then this either raises (if `above` is %TRUE) or
     * lowers the window.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_restack() only
     * requests the restack, does not guarantee it.
     * @param sibling a #GdkWindow that is a sibling of `window,` or %NULL
     * @param above a boolean
     */
    restack(sibling: Window | null, above: boolean): void
    /**
     * Scroll the contents of `window,` both pixels and children, by the
     * given amount. `window` itself does not move. Portions of the window
     * that the scroll operation brings in from offscreen areas are
     * invalidated. The invalidated region may be bigger than what would
     * strictly be necessary.
     * 
     * For X11, a minimum area will be invalidated if the window has no
     * subwindows, or if the edges of the window’s parent do not extend
     * beyond the edges of the window. In other cases, a multi-step process
     * is used to scroll the window which may produce temporary visual
     * artifacts and unnecessary invalidations.
     * @param dx Amount to scroll in the X direction
     * @param dy Amount to scroll in the Y direction
     */
    scroll(dx: number, dy: number): void
    /**
     * Setting `accept_focus` to %FALSE hints the desktop environment that the
     * window doesn’t want to receive input focus.
     * 
     * On X, it is the responsibility of the window manager to interpret this
     * hint. ICCCM-compliant window manager usually respect it.
     * @param accept_focus %TRUE if the window should receive input focus
     */
    set_accept_focus(accept_focus: boolean): void
    /**
     * Sets the background color of `window`.
     * 
     * However, when using GTK+, influence the background of a widget
     * using a style class or CSS — if you’re an application — or with
     * gtk_style_context_set_background() — if you're implementing a
     * custom widget.
     * @param color a #GdkColor
     */
    set_background(color: Color): void
    /**
     * Sets the background of `window`.
     * 
     * A background of %NULL means that the window won't have any background. On the
     * X11 backend it's also possible to inherit the background from the parent
     * window using gdk_x11_get_parent_relative_pattern().
     * 
     * The windowing system will normally fill a window with its background
     * when the window is obscured then exposed.
     * @param pattern a pattern to use, or %NULL
     */
    set_background_pattern(pattern?: cairo.Pattern | null): void
    /**
     * Sets the background color of `window`.
     * 
     * See also gdk_window_set_background_pattern().
     * @param rgba a #GdkRGBA color
     */
    set_background_rgba(rgba: RGBA): void
    /**
     * Sets the input shape mask of `window` to the union of input shape masks
     * for all children of `window,` ignoring the input shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_input_shapes() which includes
     * the input shape mask of `window` in the masks to be merged.
     */
    set_child_input_shapes(): void
    /**
     * Sets the shape mask of `window` to the union of shape masks
     * for all children of `window,` ignoring the shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_shapes() which includes
     * the shape mask of `window` in the masks to be merged.
     */
    set_child_shapes(): void
    /**
     * Sets a #GdkWindow as composited, or unsets it. Composited
     * windows do not automatically have their contents drawn to
     * the screen. Drawing is redirected to an offscreen buffer
     * and an expose event is emitted on the parent of the composited
     * window. It is the responsibility of the parent’s expose handler
     * to manually merge the off-screen content onto the screen in
     * whatever way it sees fit.
     * 
     * It only makes sense for child windows to be composited; see
     * gdk_window_set_opacity() if you need translucent toplevel
     * windows.
     * 
     * An additional effect of this call is that the area of this
     * window is no longer clipped from regions marked for
     * invalidation on its parent. Draws done on the parent
     * window are also no longer clipped by the child.
     * 
     * This call is only supported on some systems (currently,
     * only X11 with new enough Xcomposite and Xdamage extensions).
     * You must call gdk_display_supports_composite() to check if
     * setting a window as composited is supported before
     * attempting to do so.
     * @param composited %TRUE to set the window as composited
     */
    set_composited(composited: boolean): void
    /**
     * Sets the default mouse pointer for a #GdkWindow.
     * 
     * Note that `cursor` must be for the same display as `window`.
     * 
     * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to
     * create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     * Passing %NULL for the `cursor` argument to gdk_window_set_cursor() means
     * that `window` will use the cursor of its parent window. Most windows
     * should use this default.
     * @param cursor a cursor
     */
    set_cursor(cursor?: Cursor | null): void
    /**
     * “Decorations” are the features the window manager adds to a toplevel #GdkWindow.
     * This function sets the traditional Motif window manager hints that tell the
     * window manager which decorations you would like your window to have.
     * Usually you should use gtk_window_set_decorated() on a #GtkWindow instead of
     * using the GDK function directly.
     * 
     * The `decorations` argument is the logical OR of the fields in
     * the #GdkWMDecoration enumeration. If #GDK_DECOR_ALL is included in the
     * mask, the other bits indicate which decorations should be turned off.
     * If #GDK_DECOR_ALL is not included, then the other bits indicate
     * which decorations should be turned on.
     * 
     * Most window managers honor a decorations hint of 0 to disable all decorations,
     * but very few honor all possible combinations of bits.
     * @param decorations decoration hint mask
     */
    set_decorations(decorations: WMDecoration): void
    /**
     * Sets a specific #GdkCursor for a given device when it gets inside `window`.
     * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to create
     * the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR. Passing
     * %NULL for the `cursor` argument to gdk_window_set_cursor() means that
     * `window` will use the cursor of its parent window. Most windows should
     * use this default.
     * @param device a master, pointer #GdkDevice
     * @param cursor a #GdkCursor
     */
    set_device_cursor(device: Device, cursor: Cursor): void
    /**
     * Sets the event mask for a given device (Normally a floating device, not
     * attached to any visible pointer) to `window`. For example, an event mask
     * including #GDK_BUTTON_PRESS_MASK means the window should report button
     * press events. The event mask is the bitwise OR of values from the
     * #GdkEventMask enumeration.
     * 
     * See the [input handling overview][event-masks] for details.
     * @param device #GdkDevice to enable events for.
     * @param event_mask event mask for `window`
     */
    set_device_events(device: Device, event_mask: EventMask): void
    /**
     * Determines whether or not extra unprocessed motion events in
     * the event queue can be discarded. If %TRUE only the most recent
     * event will be delivered.
     * 
     * Some types of applications, e.g. paint programs, need to see all
     * motion events and will benefit from turning off event compression.
     * 
     * By default, event compression is enabled.
     * @param event_compression %TRUE if motion events should be compressed
     */
    set_event_compression(event_compression: boolean): void
    /**
     * The event mask for a window determines which events will be reported
     * for that window from all master input devices. For example, an event mask
     * including #GDK_BUTTON_PRESS_MASK means the window should report button
     * press events. The event mask is the bitwise OR of values from the
     * #GdkEventMask enumeration.
     * 
     * See the [input handling overview][event-masks] for details.
     * @param event_mask event mask for `window`
     */
    set_events(event_mask: EventMask): void
    /**
     * Setting `focus_on_map` to %FALSE hints the desktop environment that the
     * window doesn’t want to receive input focus when it is mapped.
     * focus_on_map should be turned off for windows that aren’t triggered
     * interactively (such as popups from network activity).
     * 
     * On X, it is the responsibility of the window manager to interpret
     * this hint. Window managers following the freedesktop.org window
     * manager extension specification should respect it.
     * @param focus_on_map %TRUE if the window should receive input focus when mapped
     */
    set_focus_on_map(focus_on_map: boolean): void
    /**
     * Specifies whether the `window` should span over all monitors (in a multi-head
     * setup) or only the current monitor when in fullscreen mode.
     * 
     * The `mode` argument is from the #GdkFullscreenMode enumeration.
     * If #GDK_FULLSCREEN_ON_ALL_MONITORS is specified, the fullscreen `window` will
     * span over all monitors from the #GdkScreen.
     * 
     * On X11, searches through the list of monitors from the #GdkScreen the ones
     * which delimit the 4 edges of the entire #GdkScreen and will ask the window
     * manager to span the `window` over these monitors.
     * 
     * If the XINERAMA extension is not available or not usable, this function
     * has no effect.
     * 
     * Not all window managers support this, so you can’t rely on the fullscreen
     * window to span over the multiple monitors when #GDK_FULLSCREEN_ON_ALL_MONITORS
     * is specified.
     * @param mode fullscreen mode
     */
    set_fullscreen_mode(mode: FullscreenMode): void
    /**
     * Sets hints about the window management functions to make available
     * via buttons on the window frame.
     * 
     * On the X backend, this function sets the traditional Motif window
     * manager hint for this purpose. However, few window managers do
     * anything reliable or interesting with this hint. Many ignore it
     * entirely.
     * 
     * The `functions` argument is the logical OR of values from the
     * #GdkWMFunction enumeration. If the bitmask includes #GDK_FUNC_ALL,
     * then the other bits indicate which functions to disable; if
     * it doesn’t include #GDK_FUNC_ALL, it indicates which functions to
     * enable.
     * @param functions bitmask of operations to allow on `window`
     */
    set_functions(functions: WMFunction): void
    /**
     * Sets the geometry hints for `window`. Hints flagged in `geom_mask`
     * are set, hints not flagged in `geom_mask` are unset.
     * To unset all hints, use a `geom_mask` of 0 and a `geometry` of %NULL.
     * 
     * This function provides hints to the windowing system about
     * acceptable sizes for a toplevel window. The purpose of
     * this is to constrain user resizing, but the windowing system
     * will typically  (but is not required to) also constrain the
     * current size of the window to the provided values and
     * constrain programatic resizing via gdk_window_resize() or
     * gdk_window_move_resize().
     * 
     * Note that on X11, this effect has no effect on windows
     * of type %GDK_WINDOW_TEMP or windows where override redirect
     * has been turned on via gdk_window_set_override_redirect()
     * since these windows are not resizable by the user.
     * 
     * Since you can’t count on the windowing system doing the
     * constraints for programmatic resizes, you should generally
     * call gdk_window_constrain_size() yourself to determine
     * appropriate sizes.
     * @param geometry geometry hints
     * @param geom_mask bitmask indicating fields of `geometry` to pay attention to
     */
    set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void
    /**
     * Sets the group leader window for `window`. By default,
     * GDK sets the group leader for all toplevel windows
     * to a global window implicitly created by GDK. With this function
     * you can override this default.
     * 
     * The group leader window allows the window manager to distinguish
     * all windows that belong to a single application. It may for example
     * allow users to minimize/unminimize all windows belonging to an
     * application at once. You should only set a non-default group window
     * if your application pretends to be multiple applications.
     * @param leader group leader window, or %NULL to restore the default group leader window
     */
    set_group(leader?: Window | null): void
    /**
     * Sets a list of icons for the window. One of these will be used
     * to represent the window when it has been iconified. The icon is
     * usually shown in an icon box or some sort of task bar. Which icon
     * size is shown depends on the window manager. The window manager
     * can scale the icon  but setting several size icons can give better
     * image quality since the window manager may only need to scale the
     * icon by a small amount or not at all.
     * 
     * Note that some platforms don't support window icons.
     * @param pixbufs      A list of pixbufs, of different sizes.
     */
    set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void
    /**
     * Windows may have a name used while minimized, distinct from the
     * name they display in their titlebar. Most of the time this is a bad
     * idea from a user interface standpoint. But you can set such a name
     * with this function, if you like.
     * 
     * After calling this with a non-%NULL `name,` calls to gdk_window_set_title()
     * will not update the icon title.
     * 
     * Using %NULL for `name` unsets the icon title; further calls to
     * gdk_window_set_title() will again update the icon title as well.
     * 
     * Note that some platforms don't support window icons.
     * @param name name of window while iconified (minimized)
     */
    set_icon_name(name?: string | null): void
    /**
     * Set if `window` must be kept above other windows. If the
     * window was already above, then this function does nothing.
     * 
     * On X11, asks the window manager to keep `window` above, if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “keep above”; so you can’t rely on the window being kept above.
     * But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * @param setting whether to keep `window` above other windows
     */
    set_keep_above(setting: boolean): void
    /**
     * Set if `window` must be kept below other windows. If the
     * window was already below, then this function does nothing.
     * 
     * On X11, asks the window manager to keep `window` below, if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “keep below”; so you can’t rely on the window being kept below.
     * But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * @param setting whether to keep `window` below other windows
     */
    set_keep_below(setting: boolean): void
    /**
     * The application can use this hint to tell the window manager
     * that a certain window has modal behaviour. The window manager
     * can use this information to handle modal windows in a special
     * way.
     * 
     * You should only use this on windows for which you have
     * previously called gdk_window_set_transient_for()
     * @param modal %TRUE if the window is modal, %FALSE otherwise.
     */
    set_modal_hint(modal: boolean): void
    /**
     * Set `window` to render as partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Values
     * of the opacity parameter are clamped to the [0,1] range.)
     * 
     * For toplevel windows this depends on support from the windowing system
     * that may not always be there. For instance, On X11, this works only on
     * X screens with a compositing manager running. On Wayland, there is no
     * per-window opacity value that the compositor would apply. Instead, use
     * `gdk_window_set_opaque_region (window, NULL)` to tell the compositor
     * that the entire window is (potentially) non-opaque, and draw your content
     * with alpha, or use gtk_widget_set_opacity() to set an overall opacity
     * for your widgets.
     * 
     * For child windows this function only works for non-native windows.
     * 
     * For setting up per-pixel alpha topelevels, see gdk_screen_get_rgba_visual(),
     * and for non-toplevels, see gdk_window_set_composited().
     * 
     * Support for non-toplevel windows was added in 3.8.
     * @param opacity opacity
     */
    set_opacity(opacity: number): void
    /**
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of windows, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel windows.
     * 
     * GTK+ will update this property automatically if
     * the `window` background is opaque, as we know where the opaque regions
     * are. If your window background is not opaque, please update this
     * property in your #GtkWidget::style-updated handler.
     * @param region a region, or %NULL
     */
    set_opaque_region(region?: cairo.Region | null): void
    /**
     * An override redirect window is not under the control of the window manager.
     * This means it won’t have a titlebar, won’t be minimizable, etc. - it will
     * be entirely under the control of the application. The window manager
     * can’t see the override redirect window at all.
     * 
     * Override redirect should only be used for short-lived temporary
     * windows, such as popup menus. #GtkMenu uses an override redirect
     * window in its implementation, for example.
     * @param override_redirect %TRUE if window should be override redirect
     */
    set_override_redirect(override_redirect: boolean): void
    /**
     * Sets whether input to the window is passed through to the window
     * below.
     * 
     * The default value of this is %FALSE, which means that pointer
     * events that happen inside the window are send first to the window,
     * but if the event is not selected by the event mask then the event
     * is sent to the parent window, and so on up the hierarchy.
     * 
     * If `pass_through` is %TRUE then such pointer events happen as if the
     * window wasn't there at all, and thus will be sent first to any
     * windows below `window`. This is useful if the window is used in a
     * transparent fashion. In the terminology of the web this would be called
     * "pointer-events: none".
     * 
     * Note that a window with `pass_through` %TRUE can still have a subwindow
     * without pass through, so you can get events on a subset of a window. And in
     * that cases you would get the in-between related events such as the pointer
     * enter/leave events on its way to the destination window.
     * @param pass_through a boolean
     */
    set_pass_through(pass_through: boolean): void
    /**
     * When using GTK+, typically you should use gtk_window_set_role() instead
     * of this low-level function.
     * 
     * The window manager and session manager use a window’s role to
     * distinguish it from other kinds of window in the same application.
     * When an application is restarted after being saved in a previous
     * session, all windows with the same title and role are treated as
     * interchangeable.  So if you have two windows with the same title
     * that should be distinguished for session management purposes, you
     * should set the role on those windows. It doesn’t matter what string
     * you use for the role, as long as you have a different role for each
     * non-interchangeable kind of window.
     * @param role a string indicating its role
     */
    set_role(role: string): void
    /**
     * Newer GTK+ windows using client-side decorations use extra geometry
     * around their frames for effects like shadows and invisible borders.
     * Window managers that want to maximize windows or snap to edges need
     * to know where the extents of the actual frame lie, so that users
     * don’t feel like windows are snapping against random invisible edges.
     * 
     * Note that this property is automatically updated by GTK+, so this
     * function should only be used by applications which do not use GTK+
     * to create toplevel windows.
     * @param left The left extent
     * @param right The right extent
     * @param top The top extent
     * @param bottom The bottom extent
     */
    set_shadow_width(left: number, right: number, top: number, bottom: number): void
    /**
     * Toggles whether a window should appear in a pager (workspace
     * switcher, or other desktop utility program that displays a small
     * thumbnail representation of the windows on the desktop). If a
     * window’s semantic type as specified with gdk_window_set_type_hint()
     * already fully describes the window, this function should
     * not be called in addition, instead you should
     * allow the window to be treated according to standard policy for
     * its semantic type.
     * @param skips_pager %TRUE to skip the pager
     */
    set_skip_pager_hint(skips_pager: boolean): void
    /**
     * Toggles whether a window should appear in a task list or window
     * list. If a window’s semantic type as specified with
     * gdk_window_set_type_hint() already fully describes the window, this
     * function should not be called in addition,
     * instead you should allow the window to be treated according to
     * standard policy for its semantic type.
     * @param skips_taskbar %TRUE to skip the taskbar
     */
    set_skip_taskbar_hint(skips_taskbar: boolean): void
    /**
     * Sets the event mask for any floating device (i.e. not attached to any
     * visible pointer) that has the source defined as `source`. This event
     * mask will be applied both to currently existing, newly added devices
     * after this call, and devices being attached/detached.
     * @param source a #GdkInputSource to define the source class.
     * @param event_mask event mask for `window`
     */
    set_source_events(source: InputSource, event_mask: EventMask): void
    /**
     * When using GTK+, typically you should use gtk_window_set_startup_id()
     * instead of this low-level function.
     * @param startup_id a string with startup-notification identifier
     */
    set_startup_id(startup_id: string): void
    /**
     * Used to set the bit gravity of the given window to static, and flag
     * it so all children get static subwindow gravity. This is used if you
     * are implementing scary features that involve deep knowledge of the
     * windowing system. Don’t worry about it.
     * @param use_static %TRUE to turn on static gravity
     */
    set_static_gravities(use_static: boolean): boolean
    /**
     * This function will enable multidevice features in `window`.
     * 
     * Multidevice aware windows will need to handle properly multiple,
     * per device enter/leave events, device grabs and grab ownerships.
     * @param support_multidevice %TRUE to enable multidevice support in `window`.
     */
    set_support_multidevice(support_multidevice: boolean): void
    /**
     * Sets the title of a toplevel window, to be displayed in the titlebar.
     * If you haven’t explicitly set the icon name for the window
     * (using gdk_window_set_icon_name()), the icon name will be set to
     * `title` as well. `title` must be in UTF-8 encoding (as with all
     * user-readable strings in GDK/GTK+). `title` may not be %NULL.
     * @param title title of `window`
     */
    set_title(title: string): void
    /**
     * Indicates to the window manager that `window` is a transient dialog
     * associated with the application window `parent`. This allows the
     * window manager to do things like center `window` on `parent` and
     * keep `window` above `parent`.
     * 
     * See gtk_window_set_transient_for() if you’re using #GtkWindow or
     * #GtkDialog.
     * @param parent another toplevel #GdkWindow
     */
    set_transient_for(parent: Window): void
    /**
     * The application can use this call to provide a hint to the window
     * manager about the functionality of a window. The window manager
     * can use this information when determining the decoration and behaviour
     * of the window.
     * 
     * The hint must be set before the window is mapped.
     * @param hint A hint of the function this window will have
     */
    set_type_hint(hint: WindowTypeHint): void
    /**
     * Toggles whether a window needs the user's
     * urgent attention.
     * @param urgent %TRUE if the window is urgent
     */
    set_urgency_hint(urgent: boolean): void
    /**
     * For most purposes this function is deprecated in favor of
     * g_object_set_data(). However, for historical reasons GTK+ stores
     * the #GtkWidget that owns a #GdkWindow as user data on the
     * #GdkWindow. So, custom widget implementations should use
     * this function for that. If GTK+ receives an event for a #GdkWindow,
     * and the user data for the window is non-%NULL, GTK+ will assume the
     * user data is a #GtkWidget, and forward the event to that widget.
     * @param user_data user data
     */
    set_user_data(user_data?: GObject.Object | null): void
    /**
     * Makes pixels in `window` outside `shape_region` be transparent,
     * so that the window may be nonrectangular.
     * 
     * If `shape_region` is %NULL, the shape will be unset, so the whole
     * window will be opaque again. `offset_x` and `offset_y` are ignored
     * if `shape_region` is %NULL.
     * 
     * On the X11 platform, this uses an X server extension which is
     * widely available on most common platforms, but not available on
     * very old X servers, and occasionally the implementation will be
     * buggy. On servers without the shape extension, this function
     * will do nothing.
     * 
     * This function works on both toplevel and child windows.
     * @param shape_region region of window to be non-transparent
     * @param offset_x X position of `shape_region` in `window` coordinates
     * @param offset_y Y position of `shape_region` in `window` coordinates
     */
    shape_combine_region(shape_region: cairo.Region | null, offset_x: number, offset_y: number): void
    /**
     * Like gdk_window_show_unraised(), but also raises the window to the
     * top of the window stack (moves the window to the front of the
     * Z-order).
     * 
     * This function maps a window so it’s visible onscreen. Its opposite
     * is gdk_window_hide().
     * 
     * When implementing a #GtkWidget, you should call this function on the widget's
     * #GdkWindow as part of the “map” method.
     */
    show(): void
    /**
     * Shows a #GdkWindow onscreen, but does not modify its stacking
     * order. In contrast, gdk_window_show() will raise the window
     * to the top of the window stack.
     * 
     * On the X11 platform, in Xlib terms, this function calls
     * XMapWindow() (it also updates some internal GDK state, which means
     * that you can’t really use XMapWindow() directly on a GDK window).
     */
    show_unraised(): void
    /**
     * Asks the windowing system to show the window menu. The window menu
     * is the menu shown when right-clicking the titlebar on traditional
     * windows managed by the window manager. This is useful for windows
     * using client-side decorations, activating it with a right-click
     * on the window decorations.
     * @param event a #GdkEvent to show the menu for
     */
    show_window_menu(event: Event): boolean
    /**
     * “Pins” a window such that it’s on all workspaces and does not scroll
     * with viewports, for window managers that have scrollable viewports.
     * (When using #GtkWindow, gtk_window_stick() may be more useful.)
     * 
     * On the X11 platform, this function depends on window manager
     * support, so may have no effect with many window managers. However,
     * GDK will do the best it can to convince the window manager to stick
     * the window. For window managers that don’t support this operation,
     * there’s nothing you can do to force it to happen.
     */
    stick(): void
    /**
     * Thaws a window frozen with
     * gdk_window_freeze_toplevel_updates_libgtk_only().
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    thaw_toplevel_updates_libgtk_only(): void
    /**
     * Thaws a window frozen with gdk_window_freeze_updates().
     */
    thaw_updates(): void
    /**
     * Moves the window out of fullscreen mode. If the window was not
     * fullscreen, does nothing.
     * 
     * On X11, asks the window manager to move `window` out of the fullscreen
     * state, if the window manager supports this operation. Not all
     * window managers support this, and some deliberately ignore it or
     * don’t have a concept of “fullscreen”; so you can’t rely on the
     * unfullscreenification actually happening. But it will happen with
     * most standard window managers, and GDK makes a best effort to get
     * it to happen.
     */
    unfullscreen(): void
    /**
     * Unmaximizes the window. If the window wasn’t maximized, then this
     * function does nothing.
     * 
     * On X11, asks the window manager to unmaximize `window,` if the
     * window manager supports this operation. Not all window managers
     * support this, and some deliberately ignore it or don’t have a
     * concept of “maximized”; so you can’t rely on the unmaximization
     * actually happening. But it will happen with most standard window
     * managers, and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably unmaximizes the window.
     */
    unmaximize(): void
    /**
     * Reverse operation for gdk_window_stick(); see gdk_window_stick(),
     * and gtk_window_unstick().
     */
    unstick(): void
    /**
     * Withdraws a window (unmaps it and asks the window manager to forget about it).
     * This function is not really useful as gdk_window_hide() automatically
     * withdraws toplevel windows before hiding them.
     */
    withdraw(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
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
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
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
     *   // retrieve the old string list
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
    /* Virtual methods of Gdk-3.0.Gdk.Window */
    vfunc_create_surface(width: number, height: number): cairo.Surface
    vfunc_from_embedder(embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number): void
    vfunc_to_embedder(offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Window */
    /**
     * The ::create-surface signal is emitted when an offscreen window
     * needs its surface (re)created, which happens either when the
     * window is first drawn to, or when the window is being
     * resized. The first signal handler that returns a non-%NULL
     * surface will stop any further signal emission, and its surface
     * will be used.
     * 
     * Note that it is not possible to access the window's previous
     * surface from within any callback of this signal. Calling
     * gdk_offscreen_window_get_surface() will lead to a crash.
     * @param width the width of the offscreen surface to create
     * @param height the height of the offscreen surface to create
     */
    connect(sigName: "create-surface", callback: (($obj: Window, width: number, height: number) => cairo.Surface)): number
    connect_after(sigName: "create-surface", callback: (($obj: Window, width: number, height: number) => cairo.Surface)): number
    emit(sigName: "create-surface", width: number, height: number): void
    /**
     * The ::from-embedder signal is emitted to translate coordinates
     * in the embedder of an offscreen window to the offscreen window.
     * 
     * See also #GdkWindow::to-embedder.
     * @param embedder_x x coordinate in the embedder window
     * @param embedder_y y coordinate in the embedder window
     */
    connect(sigName: "from-embedder", callback: (($obj: Window, embedder_x: number, embedder_y: number) => void)): number
    connect_after(sigName: "from-embedder", callback: (($obj: Window, embedder_x: number, embedder_y: number) => void)): number
    emit(sigName: "from-embedder", embedder_x: number, embedder_y: number): void
    /**
     * Emitted when the position of `window` is finalized after being moved to a
     * destination rectangle.
     * 
     * `window` might be flipped over the destination rectangle in order to keep
     * it on-screen, in which case `flipped_x` and `flipped_y` will be set to %TRUE
     * accordingly.
     * 
     * `flipped_rect` is the ideal position of `window` after any possible
     * flipping, but before any possible sliding. `final_rect` is `flipped_rect,`
     * but possibly translated in the case that flipping is still ineffective in
     * keeping `window` on-screen.
     * @param flipped_rect the position of `window` after any possible                flipping or %NULL if the backend can't obtain it
     * @param final_rect the final position of `window` or %NULL if the              backend can't obtain it
     * @param flipped_x %TRUE if the anchors were flipped horizontally
     * @param flipped_y %TRUE if the anchors were flipped vertically
     */
    connect(sigName: "moved-to-rect", callback: (($obj: Window, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    connect_after(sigName: "moved-to-rect", callback: (($obj: Window, flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean) => void)): number
    emit(sigName: "moved-to-rect", flipped_rect: object | null, final_rect: object | null, flipped_x: boolean, flipped_y: boolean): void
    /**
     * The ::pick-embedded-child signal is emitted to find an embedded
     * child at the given position.
     * @param x x coordinate in the window
     * @param y y coordinate in the window
     */
    connect(sigName: "pick-embedded-child", callback: (($obj: Window, x: number, y: number) => Window | null)): number
    connect_after(sigName: "pick-embedded-child", callback: (($obj: Window, x: number, y: number) => Window | null)): number
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    /**
     * The ::to-embedder signal is emitted to translate coordinates
     * in an offscreen window to its embedder.
     * 
     * See also #GdkWindow::from-embedder.
     * @param offscreen_x x coordinate in the offscreen window
     * @param offscreen_y y coordinate in the offscreen window
     */
    connect(sigName: "to-embedder", callback: (($obj: Window, offscreen_x: number, offscreen_y: number) => void)): number
    connect_after(sigName: "to-embedder", callback: (($obj: Window, offscreen_x: number, offscreen_y: number) => void)): number
    emit(sigName: "to-embedder", offscreen_x: number, offscreen_y: number): void
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
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     * @param pspec the #GParamSpec of the property which changed.
     */
    connect(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Window | null, attributes: WindowAttr, attributes_mask: WindowAttributesType): Window
    /**
     * Obtains the window underneath the mouse pointer, returning the
     * location of that window in `win_x,` `win_y`. Returns %NULL if the
     * window under the mouse pointer is not known to GDK (if the window
     * belongs to another application and a #GdkWindow hasn’t been created
     * for it with gdk_window_foreign_new())
     * 
     * NOTE: For multihead-aware widgets or applications use
     * gdk_display_get_window_at_pointer() instead.
     */
    static at_pointer(): [ /* returnType */ Window, /* win_x */ number | null, /* win_y */ number | null ]
    /**
     * Constrains a desired width and height according to a
     * set of geometry hints (such as minimum and maximum size).
     * @param geometry a #GdkGeometry structure
     * @param flags a mask indicating what portions of `geometry` are set
     * @param width desired width of window
     * @param height desired height of the window
     */
    static constrain_size(geometry: Geometry, flags: WindowHints, width: number, height: number): [ /* new_width */ number, /* new_height */ number ]
    /**
     * Calls gdk_window_process_updates() for all windows (see #GdkWindow)
     * in the application.
     */
    static process_all_updates(): void
    /**
     * With update debugging enabled, calls to
     * gdk_window_invalidate_region() clear the invalidated region of the
     * screen to a noticeable color, and GDK pauses for a short time
     * before sending exposes to windows during
     * gdk_window_process_updates().  The net effect is that you can see
     * the invalid region for each window and watch redraws as they
     * occur. This allows you to diagnose inefficiencies in your application.
     * 
     * In essence, because the GDK rendering model prevents all flicker,
     * if you are redrawing the same region 400 times you may never
     * notice, aside from noticing a speed problem. Enabling update
     * debugging causes GTK to flicker slowly and noticeably, so you can
     * see exactly what’s being redrawn when, in what order.
     * 
     * The --gtk-debug=updates command line option passed to GTK+ programs
     * enables this debug option at application startup time. That's
     * usually more useful than calling gdk_window_set_debug_updates()
     * yourself, though you might want to use this function to enable
     * updates sometime after application startup time.
     * @param setting %TRUE to turn on update debugging
     */
    static set_debug_updates(setting: boolean): void
    static $gtype: GObject.Type
}
export class Atom {
    /* Methods of Gdk-3.0.Gdk.Atom */
    /**
     * Determines the string corresponding to an atom.
     */
    name(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Finds or creates an atom corresponding to a given string.
     * @param atom_name a string.
     * @param only_if_exists if %TRUE, GDK is allowed to not create a new atom, but   just return %GDK_NONE if the requested atom doesn’t already   exists. Currently, the flag is ignored, since checking the   existance of an atom is as expensive as creating it.
     */
    static intern(atom_name: string, only_if_exists: boolean): Atom
    /**
     * Finds or creates an atom corresponding to a given string.
     * 
     * Note that this function is identical to gdk_atom_intern() except
     * that if a new #GdkAtom is created the string itself is used rather
     * than a copy. This saves memory, but can only be used if the string
     * will always exist. It can be used with statically
     * allocated strings in the main program, but not with statically
     * allocated memory in dynamically loaded modules, if you expect to
     * ever unload the module again (e.g. do not use this function in
     * GTK+ theme engines).
     * @param atom_name a static string
     */
    static intern_static_string(atom_name: string): Atom
}
export class Color {
    /* Fields of Gdk-3.0.Gdk.Color */
    /**
     * For allocated colors, the pixel value used to
     *     draw this color on the screen. Not used anymore.
     */
    pixel: number
    /**
     * The red component of the color. This is
     *     a value between 0 and 65535, with 65535 indicating
     *     full intensity
     */
    red: number
    /**
     * The green component of the color
     */
    green: number
    /**
     * The blue component of the color
     */
    blue: number
    /* Methods of Gdk-3.0.Gdk.Color */
    /**
     * Makes a copy of a #GdkColor.
     * 
     * The result must be freed using gdk_color_free().
     */
    copy(): Color
    /**
     * Compares two colors.
     * @param colorb another #GdkColor
     */
    equal(colorb: Color): boolean
    /**
     * Frees a #GdkColor created with gdk_color_copy().
     */
    free(): void
    /**
     * A hash function suitable for using for a hash
     * table that stores #GdkColors.
     */
    hash(): number
    /**
     * Returns a textual specification of `color` in the hexadecimal
     * form “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits
     * representing the red, green and blue components respectively.
     * 
     * The returned string can be parsed by gdk_color_parse().
     */
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parses a textual specification of a color and fill in the
     * `red,` `green,` and `blue` fields of a #GdkColor.
     * 
     * The string can either one of a large set of standard names
     * (taken from the X11 `rgb.txt` file), or it can be a hexadecimal
     * value in the form “\#rgb” “\#rrggbb”, “\#rrrgggbbb” or
     * “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits of
     * the red, green, and blue components of the color, respectively.
     * (White in the four forms is “\#fff”, “\#ffffff”, “\#fffffffff”
     * and “\#ffffffffffff”).
     * @param spec the string specifying the color
     */
    static parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
}
export abstract class DevicePadInterface {
    static name: string
}
export abstract class DrawingContextClass {
    static name: string
}
export class EventAny {
    /* Fields of Gdk-3.0.Gdk.EventAny */
    /**
     * the type of the event.
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    static name: string
}
export class EventButton {
    /* Fields of Gdk-3.0.Gdk.EventButton */
    /**
     * the type of the event (%GDK_BUTTON_PRESS, %GDK_2BUTTON_PRESS,
     *   %GDK_3BUTTON_PRESS or %GDK_BUTTON_RELEASE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    y: number
    /**
     * `x,` `y` translated to the axes of `device,` or %NULL if `device` is
     *   the mouse.
     */
    axes: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    state: ModifierType
    /**
     * the button which was pressed or released, numbered from 1 to 5.
     *   Normally button 1 is the left mouse button, 2 is the middle button,
     *   and 3 is the right button. On 2-button mice, the middle button can
     *   often be simulated by pressing both mouse buttons together.
     */
    button: number
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen.
     */
    x_root: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen.
     */
    y_root: number
    static name: string
}
export class EventConfigure {
    /* Fields of Gdk-3.0.Gdk.EventConfigure */
    /**
     * the type of the event (%GDK_CONFIGURE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the new x coordinate of the window, relative to its parent.
     */
    x: number
    /**
     * the new y coordinate of the window, relative to its parent.
     */
    y: number
    /**
     * the new width of the window.
     */
    width: number
    /**
     * the new height of the window.
     */
    height: number
    static name: string
}
export class EventCrossing {
    /* Fields of Gdk-3.0.Gdk.EventCrossing */
    /**
     * the type of the event (%GDK_ENTER_NOTIFY or %GDK_LEAVE_NOTIFY).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the window that was entered or left.
     */
    subwindow: Window
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    y: number
    /**
     * the x coordinate of the pointer relative to the root of the screen.
     */
    x_root: number
    /**
     * the y coordinate of the pointer relative to the root of the screen.
     */
    y_root: number
    /**
     * the crossing mode (%GDK_CROSSING_NORMAL, %GDK_CROSSING_GRAB,
     *  %GDK_CROSSING_UNGRAB, %GDK_CROSSING_GTK_GRAB, %GDK_CROSSING_GTK_UNGRAB or
     *  %GDK_CROSSING_STATE_CHANGED).  %GDK_CROSSING_GTK_GRAB, %GDK_CROSSING_GTK_UNGRAB,
     *  and %GDK_CROSSING_STATE_CHANGED were added in 2.14 and are always synthesized,
     *  never native.
     */
    mode: CrossingMode
    /**
     * the kind of crossing that happened (%GDK_NOTIFY_INFERIOR,
     *  %GDK_NOTIFY_ANCESTOR, %GDK_NOTIFY_VIRTUAL, %GDK_NOTIFY_NONLINEAR or
     *  %GDK_NOTIFY_NONLINEAR_VIRTUAL).
     */
    detail: NotifyType
    /**
     * %TRUE if `window` is the focus window or an inferior.
     */
    focus: boolean
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    state: ModifierType
    static name: string
}
export class EventDND {
    /* Fields of Gdk-3.0.Gdk.EventDND */
    /**
     * the type of the event (%GDK_DRAG_ENTER, %GDK_DRAG_LEAVE,
     *   %GDK_DRAG_MOTION, %GDK_DRAG_STATUS, %GDK_DROP_START or
     *   %GDK_DROP_FINISHED).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the #GdkDragContext for the current DND operation.
     */
    context: DragContext
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen, only set for %GDK_DRAG_MOTION and %GDK_DROP_START.
     */
    x_root: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen, only set for %GDK_DRAG_MOTION and %GDK_DROP_START.
     */
    y_root: number
    static name: string
}
export class EventExpose {
    /* Fields of Gdk-3.0.Gdk.EventExpose */
    /**
     * the type of the event (%GDK_EXPOSE or %GDK_DAMAGE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * bounding box of `region`.
     */
    area: Rectangle
    /**
     * the region that needs to be redrawn.
     */
    region: cairo.Region
    /**
     * the number of contiguous %GDK_EXPOSE events following this one.
     *   The only use for this is “exposure compression”, i.e. handling all
     *   contiguous %GDK_EXPOSE events in one go, though GDK performs some
     *   exposure compression so this is not normally needed.
     */
    count: number
    static name: string
}
export class EventFocus {
    /* Fields of Gdk-3.0.Gdk.EventFocus */
    /**
     * the type of the event (%GDK_FOCUS_CHANGE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * %TRUE if the window has gained the keyboard focus, %FALSE if
     *   it has lost the focus.
     */
    in_: number
    static name: string
}
export class EventGrabBroken {
    /* Fields of Gdk-3.0.Gdk.EventGrabBroken */
    /**
     * the type of the event (%GDK_GRAB_BROKEN)
     */
    type: EventType
    /**
     * the window which received the event, i.e. the window
     *   that previously owned the grab
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * %TRUE if a keyboard grab was broken, %FALSE if a pointer
     *   grab was broken
     */
    keyboard: boolean
    /**
     * %TRUE if the broken grab was implicit
     */
    implicit: boolean
    /**
     * If this event is caused by another grab in the same
     *   application, `grab_window` contains the new grab window. Otherwise
     *   `grab_window` is %NULL.
     */
    grab_window: Window
    static name: string
}
export class EventKey {
    /* Fields of Gdk-3.0.Gdk.EventKey */
    /**
     * the type of the event (%GDK_KEY_PRESS or %GDK_KEY_RELEASE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    state: ModifierType
    /**
     * the key that was pressed or released. See the
     *   `gdk/gdkkeysyms.h` header file for a
     *   complete list of GDK key codes.
     */
    keyval: number
    /**
     * the length of `string`.
     */
    length: number
    /**
     * a string containing an approximation of the text that
     *   would result from this keypress. The only correct way to handle text
     *   input of text is using input methods (see #GtkIMContext), so this
     *   field is deprecated and should never be used.
     *   (gdk_unicode_to_keyval() provides a non-deprecated way of getting
     *   an approximate translation for a key.) The string is encoded in the
     *   encoding of the current locale (Note: this for backwards compatibility:
     *   strings in GTK+ and GDK are typically in UTF-8.) and NUL-terminated.
     *   In some cases, the translation of the key code will be a single
     *   NUL byte, in which case looking at `length` is necessary to distinguish
     *   it from the an empty translation.
     */
    string: string
    /**
     * the raw code of the key that was pressed or released.
     */
    hardware_keycode: number
    /**
     * the keyboard group.
     */
    group: number
    /**
     * a flag that indicates if `hardware_keycode` is mapped to a
     *   modifier. Since 2.10
     */
    is_modifier: number
    static name: string
}
export class EventMotion {
    /* Fields of Gdk-3.0.Gdk.EventMotion */
    /**
     * the type of the event.
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    y: number
    /**
     * `x,` `y` translated to the axes of `device,` or %NULL if `device` is
     *   the mouse.
     */
    axes: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    state: ModifierType
    /**
     * set to 1 if this event is just a hint, see the
     *   %GDK_POINTER_MOTION_HINT_MASK value of #GdkEventMask.
     */
    is_hint: number
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen.
     */
    x_root: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen.
     */
    y_root: number
    static name: string
}
export class EventOwnerChange {
    /* Fields of Gdk-3.0.Gdk.EventOwnerChange */
    /**
     * the type of the event (%GDK_OWNER_CHANGE).
     */
    type: EventType
    /**
     * the window which received the event
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the new owner of the selection, or %NULL if there is none
     */
    owner: Window
    /**
     * the reason for the ownership change as a #GdkOwnerChange value
     */
    reason: OwnerChange
    /**
     * the atom identifying the selection
     */
    selection: Atom
    /**
     * the timestamp of the event
     */
    time: number
    /**
     * the time at which the selection ownership was taken
     *   over
     */
    selection_time: number
    static name: string
}
export class EventPadAxis {
    /* Fields of Gdk-3.0.Gdk.EventPadAxis */
    /**
     * the type of the event (%GDK_PAD_RING or %GDK_PAD_STRIP).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the pad group the ring/strip belongs to. A %GDK_SOURCE_TABLET_PAD
     *   device may have one or more groups containing a set of buttons/rings/strips
     *   each.
     */
    group: number
    /**
     * number of strip/ring that was interacted. This number is 0-indexed.
     */
    index: number
    /**
     * The current mode of `group`. Different groups in a %GDK_SOURCE_TABLET_PAD
     *   device may have different current modes.
     */
    mode: number
    /**
     * The current value for the given axis.
     */
    value: number
    static name: string
}
export class EventPadButton {
    /* Fields of Gdk-3.0.Gdk.EventPadButton */
    /**
     * the type of the event (%GDK_PAD_BUTTON_PRESS or %GDK_PAD_BUTTON_RELEASE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the pad group the button belongs to. A %GDK_SOURCE_TABLET_PAD device
     *   may have one or more groups containing a set of buttons/rings/strips each.
     */
    group: number
    /**
     * The pad button that was pressed.
     */
    button: number
    /**
     * The current mode of `group`. Different groups in a %GDK_SOURCE_TABLET_PAD
     *   device may have different current modes.
     */
    mode: number
    static name: string
}
export class EventPadGroupMode {
    /* Fields of Gdk-3.0.Gdk.EventPadGroupMode */
    /**
     * the type of the event (%GDK_PAD_GROUP_MODE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the pad group that is switching mode. A %GDK_SOURCE_TABLET_PAD
     *   device may have one or more groups containing a set of buttons/rings/strips
     *   each.
     */
    group: number
    /**
     * The new mode of `group`. Different groups in a %GDK_SOURCE_TABLET_PAD
     *   device may have different current modes.
     */
    mode: number
    static name: string
}
export class EventProperty {
    /* Fields of Gdk-3.0.Gdk.EventProperty */
    /**
     * the type of the event (%GDK_PROPERTY_NOTIFY).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the property that was changed.
     */
    atom: Atom
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * whether the property was changed
     *   (%GDK_PROPERTY_NEW_VALUE) or deleted (%GDK_PROPERTY_DELETE).
     */
    state: PropertyState
    static name: string
}
export class EventProximity {
    /* Fields of Gdk-3.0.Gdk.EventProximity */
    /**
     * the type of the event (%GDK_PROXIMITY_IN or %GDK_PROXIMITY_OUT).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    device: Device
    static name: string
}
export class EventScroll {
    /* Fields of Gdk-3.0.Gdk.EventScroll */
    /**
     * the type of the event (%GDK_SCROLL).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    y: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    state: ModifierType
    /**
     * the direction to scroll to (one of %GDK_SCROLL_UP,
     *   %GDK_SCROLL_DOWN, %GDK_SCROLL_LEFT, %GDK_SCROLL_RIGHT or
     *   %GDK_SCROLL_SMOOTH).
     */
    direction: ScrollDirection
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen.
     */
    x_root: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen.
     */
    y_root: number
    /**
     * the x coordinate of the scroll delta
     */
    delta_x: number
    /**
     * the y coordinate of the scroll delta
     */
    delta_y: number
    is_stop: number
    static name: string
}
export class EventSelection {
    /* Fields of Gdk-3.0.Gdk.EventSelection */
    /**
     * the type of the event (%GDK_SELECTION_CLEAR,
     *   %GDK_SELECTION_NOTIFY or %GDK_SELECTION_REQUEST).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the selection.
     */
    selection: Atom
    /**
     * the target to which the selection should be converted.
     */
    target: Atom
    /**
     * the property in which to place the result of the conversion.
     */
    property: Atom
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the window on which to place `property` or %NULL if none.
     */
    requestor: Window
    static name: string
}
export class EventSequence {
    static name: string
}
export class EventSetting {
    /* Fields of Gdk-3.0.Gdk.EventSetting */
    /**
     * the type of the event (%GDK_SETTING).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * what happened to the setting (%GDK_SETTING_ACTION_NEW,
     *   %GDK_SETTING_ACTION_CHANGED or %GDK_SETTING_ACTION_DELETED).
     */
    action: SettingAction
    /**
     * the name of the setting.
     */
    name: string
    static name: string
}
export class EventTouch {
    /* Fields of Gdk-3.0.Gdk.EventTouch */
    /**
     * the type of the event (%GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
     *   %GDK_TOUCH_END, %GDK_TOUCH_CANCEL)
     */
    type: EventType
    /**
     * the window which received the event
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the time of the event in milliseconds.
     */
    time: number
    /**
     * the x coordinate of the pointer relative to the window
     */
    x: number
    /**
     * the y coordinate of the pointer relative to the window
     */
    y: number
    /**
     * `x,` `y` translated to the axes of `device,` or %NULL if `device` is
     *   the mouse
     */
    axes: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType
     */
    state: ModifierType
    /**
     * the event sequence that the event belongs to
     */
    sequence: EventSequence
    /**
     * whether the event should be used for emulating
     *   pointer event
     */
    emulating_pointer: boolean
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen
     */
    x_root: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen
     */
    y_root: number
    static name: string
}
export class EventTouchpadPinch {
    /* Fields of Gdk-3.0.Gdk.EventTouchpadPinch */
    /**
     * the type of the event (%GDK_TOUCHPAD_PINCH)
     */
    type: EventType
    /**
     * the window which received the event
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly
     */
    send_event: number
    /**
     * the current phase of the gesture
     */
    phase: number
    /**
     * The number of fingers triggering the pinch
     */
    n_fingers: number
    /**
     * the time of the event in milliseconds
     */
    time: number
    /**
     * The X coordinate of the pointer
     */
    x: number
    /**
     * The Y coordinate of the pointer
     */
    y: number
    /**
     * Movement delta in the X axis of the swipe focal point
     */
    dx: number
    /**
     * Movement delta in the Y axis of the swipe focal point
     */
    dy: number
    /**
     * The angle change in radians, negative angles
     *   denote counter-clockwise movements
     */
    angle_delta: number
    /**
     * The current scale, relative to that at the time of
     *   the corresponding %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN event
     */
    scale: number
    /**
     * The X coordinate of the pointer, relative to the
     *   root of the screen.
     */
    x_root: number
    /**
     * The Y coordinate of the pointer, relative to the
     *   root of the screen.
     */
    y_root: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    state: ModifierType
    static name: string
}
export class EventTouchpadSwipe {
    /* Fields of Gdk-3.0.Gdk.EventTouchpadSwipe */
    /**
     * the type of the event (%GDK_TOUCHPAD_SWIPE)
     */
    type: EventType
    /**
     * the window which received the event
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly
     */
    send_event: number
    /**
     * the current phase of the gesture
     */
    phase: number
    /**
     * The number of fingers triggering the swipe
     */
    n_fingers: number
    /**
     * the time of the event in milliseconds
     */
    time: number
    /**
     * The X coordinate of the pointer
     */
    x: number
    /**
     * The Y coordinate of the pointer
     */
    y: number
    /**
     * Movement delta in the X axis of the swipe focal point
     */
    dx: number
    /**
     * Movement delta in the Y axis of the swipe focal point
     */
    dy: number
    /**
     * The X coordinate of the pointer, relative to the
     *   root of the screen.
     */
    x_root: number
    /**
     * The Y coordinate of the pointer, relative to the
     *   root of the screen.
     */
    y_root: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    state: ModifierType
    static name: string
}
export class EventVisibility {
    /* Fields of Gdk-3.0.Gdk.EventVisibility */
    /**
     * the type of the event (%GDK_VISIBILITY_NOTIFY).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * the new visibility state (%GDK_VISIBILITY_FULLY_OBSCURED,
     *   %GDK_VISIBILITY_PARTIAL or %GDK_VISIBILITY_UNOBSCURED).
     */
    state: VisibilityState
    static name: string
}
export class EventWindowState {
    /* Fields of Gdk-3.0.Gdk.EventWindowState */
    /**
     * the type of the event (%GDK_WINDOW_STATE).
     */
    type: EventType
    /**
     * the window which received the event.
     */
    window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    send_event: number
    /**
     * mask specifying what flags have changed.
     */
    changed_mask: WindowState
    /**
     * the new window state, a combination of
     *   #GdkWindowState bits.
     */
    new_window_state: WindowState
    static name: string
}
export abstract class FrameClockClass {
    static name: string
}
export class FrameClockPrivate {
    static name: string
}
export class FrameTimings {
    /* Methods of Gdk-3.0.Gdk.FrameTimings */
    /**
     * The timing information in a #GdkFrameTimings is filled in
     * incrementally as the frame as drawn and passed off to the
     * window system for processing and display to the user. The
     * accessor functions for #GdkFrameTimings can return 0 to
     * indicate an unavailable value for two reasons: either because
     * the information is not yet available, or because it isn't
     * available at all. Once gdk_frame_timings_get_complete() returns
     * %TRUE for a frame, you can be certain that no further values
     * will become available and be stored in the #GdkFrameTimings.
     */
    get_complete(): boolean
    /**
     * Gets the frame counter value of the #GdkFrameClock when this
     * this frame was drawn.
     */
    get_frame_counter(): number
    /**
     * Returns the frame time for the frame. This is the time value
     * that is typically used to time animations for the frame. See
     * gdk_frame_clock_get_frame_time().
     */
    get_frame_time(): number
    /**
     * Gets the predicted time at which this frame will be displayed. Although
     * no predicted time may be available, if one is available, it will
     * be available while the frame is being generated, in contrast to
     * gdk_frame_timings_get_presentation_time(), which is only available
     * after the frame has been presented. In general, if you are simply
     * animating, you should use gdk_frame_clock_get_frame_time() rather
     * than this function, but this function is useful for applications
     * that want exact control over latency. For example, a movie player
     * may want this information for Audio/Video synchronization.
     */
    get_predicted_presentation_time(): number
    /**
     * Reurns the presentation time. This is the time at which the frame
     * became visible to the user.
     */
    get_presentation_time(): number
    /**
     * Gets the natural interval between presentation times for
     * the display that this frame was displayed on. Frame presentation
     * usually happens during the “vertical blanking interval”.
     */
    get_refresh_interval(): number
    /**
     * Increases the reference count of `timings`.
     */
    ref(): FrameTimings
    /**
     * Decreases the reference count of `timings`. If `timings`
     * is no longer referenced, it will be freed.
     */
    unref(): void
    static name: string
}
export class Geometry {
    /* Fields of Gdk-3.0.Gdk.Geometry */
    /**
     * minimum width of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    min_width: number
    /**
     * minimum height of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    min_height: number
    /**
     * maximum width of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    max_width: number
    /**
     * maximum height of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    max_height: number
    /**
     * allowed window widths are `base_width` + `width_inc` * N where N
     *  is any integer (-1 allowed with #GtkWindow)
     */
    base_width: number
    /**
     * allowed window widths are `base_height` + `height_inc` * N where
     *  N is any integer (-1 allowed with #GtkWindow)
     */
    base_height: number
    /**
     * width resize increment
     */
    width_inc: number
    /**
     * height resize increment
     */
    height_inc: number
    /**
     * minimum width/height ratio
     */
    min_aspect: number
    /**
     * maximum width/height ratio
     */
    max_aspect: number
    /**
     * window gravity, see gtk_window_set_gravity()
     */
    win_gravity: Gravity
    static name: string
}
export class KeymapKey {
    /* Fields of Gdk-3.0.Gdk.KeymapKey */
    /**
     * the hardware keycode. This is an identifying number for a
     *   physical key.
     */
    keycode: number
    /**
     * indicates movement in a horizontal direction. Usually groups are used
     *   for two different languages. In group 0, a key might have two English
     *   characters, and in group 1 it might have two Hebrew characters. The Hebrew
     *   characters will be printed on the key next to the English characters.
     */
    group: number
    /**
     * indicates which symbol on the key will be used, in a vertical direction.
     *   So on a standard US keyboard, the key with the number “1” on it also has the
     *   exclamation point ("!") character on it. The level indicates whether to use
     *   the “1” or the “!” symbol. The letter keys are considered to have a lowercase
     *   letter at level 0, and an uppercase letter at level 1, though only the
     *   uppercase letter is printed.
     */
    level: number
    static name: string
}
export abstract class MonitorClass {
    static name: string
}
export class Point {
    /* Fields of Gdk-3.0.Gdk.Point */
    /**
     * the x coordinate of the point.
     */
    x: number
    /**
     * the y coordinate of the point.
     */
    y: number
    static name: string
}
export class RGBA {
    /* Fields of Gdk-3.0.Gdk.RGBA */
    /**
     * The intensity of the red channel from 0.0 to 1.0 inclusive
     */
    red: number
    /**
     * The intensity of the green channel from 0.0 to 1.0 inclusive
     */
    green: number
    /**
     * The intensity of the blue channel from 0.0 to 1.0 inclusive
     */
    blue: number
    /**
     * The opacity of the color from 0.0 for completely translucent to
     *   1.0 for opaque
     */
    alpha: number
    /* Methods of Gdk-3.0.Gdk.RGBA */
    /**
     * Makes a copy of a #GdkRGBA.
     * 
     * The result must be freed through gdk_rgba_free().
     */
    copy(): RGBA
    /**
     * Compares two RGBA colors.
     * @param p2 another #GdkRGBA pointer
     */
    equal(p2: RGBA): boolean
    /**
     * Frees a #GdkRGBA created with gdk_rgba_copy()
     */
    free(): void
    /**
     * A hash function suitable for using for a hash
     * table that stores #GdkRGBAs.
     */
    hash(): number
    /**
     * Parses a textual representation of a color, filling in
     * the `red,` `green,` `blue` and `alpha` fields of the `rgba` #GdkRGBA.
     * 
     * The string can be either one of:
     * - A standard name (Taken from the X11 rgb.txt file).
     * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
     *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
     * - A RGB color in the form “rgb(r,g,b)” (In this case the color will
     *   have full opacity)
     * - A RGBA color in the form “rgba(r,g,b,a)”
     * 
     * Where “r”, “g”, “b” and “a” are respectively the red, green, blue and
     * alpha color values. In the last two cases, “r”, “g”, and “b” are either integers
     * in the range 0 to 255 or percentage values in the range 0% to 100%, and
     * a is a floating point value in the range 0 to 1.
     * @param spec the string specifying the color
     */
    parse(spec: string): boolean
    /**
     * Returns a textual specification of `rgba` in the form
     * `rgb(r,g,b)` or
     * `rgba(r g,b,a)`,
     * where “r”, “g”, “b” and “a” represent the red, green,
     * blue and alpha values respectively. “r”, “g”, and “b” are
     * represented as integers in the range 0 to 255, and “a”
     * is represented as a floating point value in the range 0 to 1.
     * 
     * These string forms are string forms that are supported by
     * the CSS3 colors module, and can be parsed by gdk_rgba_parse().
     * 
     * Note that this string representation may lose some
     * precision, since “r”, “g” and “b” are represented as 8-bit
     * integers. If this is a concern, you should use a
     * different representation.
     */
    to_string(): string
    static name: string
}
export class Rectangle {
    /* Fields of Gdk-3.0.Gdk.Rectangle */
    x: number
    y: number
    width: number
    height: number
    /* Methods of Gdk-3.0.Gdk.Rectangle */
    /**
     * Checks if the two given rectangles are equal.
     * @param rect2 a #GdkRectangle
     */
    equal(rect2: Rectangle): boolean
    /**
     * Calculates the intersection of two rectangles. It is allowed for
     * `dest` to be the same as either `src1` or `src2`. If the rectangles
     * do not intersect, `dest’`s width and height is set to 0 and its x
     * and y values are undefined. If you are only interested in whether
     * the rectangles intersect, but not in the intersecting area itself,
     * pass %NULL for `dest`.
     * @param src2 a #GdkRectangle
     */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle | null ]
    /**
     * Calculates the union of two rectangles.
     * The union of rectangles `src1` and `src2` is the smallest rectangle which
     * includes both `src1` and `src2` within it.
     * It is allowed for `dest` to be the same as either `src1` or `src2`.
     * 
     * Note that this function does not ignore 'empty' rectangles (ie. with
     * zero width or height).
     * @param src2 a #GdkRectangle
     */
    union(src2: Rectangle): /* dest */ Rectangle
    static name: string
}
export class TimeCoord {
    /* Fields of Gdk-3.0.Gdk.TimeCoord */
    /**
     * The timestamp for this event.
     */
    time: number
    /**
     * the values of the device’s axes.
     */
    axes: number[]
    static name: string
}
export class WindowAttr {
    /* Fields of Gdk-3.0.Gdk.WindowAttr */
    /**
     * title of the window (for toplevel windows)
     */
    title: string
    /**
     * event mask (see gdk_window_set_events())
     */
    event_mask: number
    /**
     * X coordinate relative to parent window (see gdk_window_move())
     */
    x: number
    /**
     * Y coordinate relative to parent window (see gdk_window_move())
     */
    y: number
    /**
     * width of window
     */
    width: number
    /**
     * height of window
     */
    height: number
    /**
     * #GDK_INPUT_OUTPUT (normal window) or #GDK_INPUT_ONLY (invisible
     *  window that receives events)
     */
    wclass: WindowWindowClass
    /**
     * #GdkVisual for window
     */
    visual: Visual
    /**
     * type of window
     */
    window_type: WindowType
    /**
     * cursor for the window (see gdk_window_set_cursor())
     */
    cursor: Cursor
    /**
     * don’t use (see gtk_window_set_wmclass())
     */
    wmclass_name: string
    /**
     * don’t use (see gtk_window_set_wmclass())
     */
    wmclass_class: string
    /**
     * %TRUE to bypass the window manager
     */
    override_redirect: boolean
    /**
     * a hint of the function of the window
     */
    type_hint: WindowTypeHint
    static name: string
}
export abstract class WindowClass {
    /* Fields of Gdk-3.0.Gdk.WindowClass */
    parent_class: GObject.ObjectClass
    to_embedder: (window: Window, offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number) => void
    from_embedder: (window: Window, embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number) => void
    create_surface: (window: Window, width: number, height: number) => cairo.Surface
    static name: string
}
export class WindowRedirect {
    static name: string
}
export class Event {
    /* Methods of Gdk-3.0.Gdk.Event */
    /**
     * If both events contain X/Y information, this function will return %TRUE
     * and return in `angle` the relative angle from `event1` to `event2`. The rotation
     * direction for positive angles is from the positive X axis towards the positive
     * Y axis.
     * @param event2 second #GdkEvent
     */
    _get_angle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * If both events contain X/Y information, the center of both coordinates
     * will be returned in `x` and `y`.
     * @param event2 second #GdkEvent
     */
    _get_center(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * If both events have X/Y information, the distance between both coordinates
     * (as in a straight line going from `event1` to `event2`) will be returned.
     * @param event2 second #GdkEvent
     */
    _get_distance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Copies a #GdkEvent, copying or incrementing the reference count of the
     * resources associated with it (e.g. #GdkWindow’s and strings).
     */
    copy(): Event
    /**
     * Frees a #GdkEvent, freeing or decrementing any resources associated with it.
     * Note that this function should only be called with events returned from
     * functions such as gdk_event_peek(), gdk_event_get(), gdk_event_copy()
     * and gdk_event_new().
     */
    free(): void
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * @param axis_use the axis use to look for
     */
    get_axis(axis_use: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Extract the button number from an event.
     */
    get_button(): [ /* returnType */ boolean, /* button */ number ]
    /**
     * Extracts the click count from an event.
     */
    get_click_count(): [ /* returnType */ boolean, /* click_count */ number ]
    /**
     * Extract the event window relative x/y coordinates from an event.
     */
    get_coords(): [ /* returnType */ boolean, /* x_win */ number | null, /* y_win */ number | null ]
    /**
     * If the event contains a “device” field, this function will return
     * it, else it will return %NULL.
     */
    get_device(): Device | null
    /**
     * If the event was generated by a device that supports
     * different tools (eg. a tablet), this function will
     * return a #GdkDeviceTool representing the tool that
     * caused the event. Otherwise, %NULL will be returned.
     * 
     * Note: the #GdkDeviceTool<!-- -->s will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see gdk_device_tool_get_serial()
     */
    get_device_tool(): DeviceTool
    /**
     * If `event` if of type %GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
     * %GDK_TOUCH_END or %GDK_TOUCH_CANCEL, returns the #GdkEventSequence
     * to which the event belongs. Otherwise, return %NULL.
     */
    get_event_sequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    get_event_type(): EventType
    /**
     * Extracts the hardware keycode from an event.
     * 
     * Also see gdk_event_get_scancode().
     */
    get_keycode(): [ /* returnType */ boolean, /* keycode */ number ]
    /**
     * Extracts the keyval from an event.
     */
    get_keyval(): [ /* returnType */ boolean, /* keyval */ number ]
    /**
     * #event: a #GdkEvent
     * Returns whether this event is an 'emulated' pointer event (typically
     * from a touch event), as opposed to a real one.
     */
    get_pointer_emulated(): boolean
    /**
     * Extract the root window relative x/y coordinates from an event.
     */
    get_root_coords(): [ /* returnType */ boolean, /* x_root */ number | null, /* y_root */ number | null ]
    /**
     * Gets the keyboard low-level scancode of a key event.
     * 
     * This is usually hardware_keycode. On Windows this is the high
     * word of WM_KEY{DOWN,UP} lParam which contains the scancode and
     * some extended flags.
     */
    get_scancode(): number
    /**
     * Returns the screen for the event. The screen is
     * typically the screen for `event->any.window`, but
     * for events such as mouse events, it is the screen
     * where the pointer was when the event occurs -
     * that is, the screen which has the root window
     * to which `event->motion.x_root` and
     * `event->motion.y_root` are relative.
     */
    get_screen(): Screen
    /**
     * Retrieves the scroll deltas from a #GdkEvent
     * 
     * See also: gdk_event_get_scroll_direction()
     */
    get_scroll_deltas(): [ /* returnType */ boolean, /* delta_x */ number, /* delta_y */ number ]
    /**
     * Extracts the scroll direction from an event.
     * 
     * If `event` is not of type %GDK_SCROLL, the contents of `direction`
     * are undefined.
     * 
     * If you wish to handle both discrete and smooth scrolling, you
     * should check the return value of this function, or of
     * gdk_event_get_scroll_deltas(); for instance:
     * 
     * 
     * ```c
     *   GdkScrollDirection direction;
     *   double vscroll_factor = 0.0;
     *   double x_scroll, y_scroll;
     * 
     *   if (gdk_event_get_scroll_direction (event, &direction))
     *     {
     *       // Handle discrete scrolling with a known constant delta;
     *       const double delta = 12.0;
     * 
     *       switch (direction)
     *         {
     *         case GDK_SCROLL_UP:
     *           vscroll_factor = -delta;
     *           break;
     *         case GDK_SCROLL_DOWN:
     *           vscroll_factor = delta;
     *           break;
     *         default:
     *           // no scrolling
     *           break;
     *         }
     *     }
     *   else if (gdk_event_get_scroll_deltas (event, &x_scroll, &y_scroll))
     *     {
     *       // Handle smooth scrolling directly
     *       vscroll_factor = y_scroll;
     *     }
     * ```
     * 
     */
    get_scroll_direction(): [ /* returnType */ boolean, /* direction */ ScrollDirection ]
    /**
     * Returns the #GdkSeat this event was generated for.
     */
    get_seat(): Seat
    /**
     * This function returns the hardware (slave) #GdkDevice that has
     * triggered the event, falling back to the virtual (master) device
     * (as in gdk_event_get_device()) if the event wasn’t caused by
     * interaction with a hardware device. This may happen for example
     * in synthesized crossing events after a #GdkWindow updates its
     * geometry or a grab is acquired/released.
     * 
     * If the event does not contain a device field, this function will
     * return %NULL.
     */
    get_source_device(): Device | null
    /**
     * If the event contains a “state” field, puts that field in `state`. Otherwise
     * stores an empty state (0). Returns %TRUE if there was a state field
     * in the event. `event` may be %NULL, in which case it’s treated
     * as if the event had no state field.
     */
    get_state(): [ /* returnType */ boolean, /* state */ ModifierType ]
    /**
     * Returns the time stamp from `event,` if there is one; otherwise
     * returns #GDK_CURRENT_TIME. If `event` is %NULL, returns #GDK_CURRENT_TIME.
     */
    get_time(): number
    /**
     * Extracts the #GdkWindow associated with an event.
     */
    get_window(): Window
    /**
     * Check whether a scroll event is a stop scroll event. Scroll sequences
     * with smooth scroll information may provide a stop scroll event once the
     * interaction with the device finishes, e.g. by lifting a finger. This
     * stop scroll event is the signal that a widget may trigger kinetic
     * scrolling based on the current velocity.
     * 
     * Stop scroll events always have a a delta of 0/0.
     */
    is_scroll_stop_event(): boolean
    /**
     * Appends a copy of the given event onto the front of the event
     * queue for event->any.window’s display, or the default event
     * queue if event->any.window is %NULL. See gdk_display_put_event().
     */
    put(): void
    /**
     * Sets the device for `event` to `device`. The event must
     * have been allocated by GTK+, for instance, by
     * gdk_event_copy().
     * @param device a #GdkDevice
     */
    set_device(device: Device): void
    /**
     * Sets the device tool for this event, should be rarely used.
     * @param tool tool to set on the event, or %NULL
     */
    set_device_tool(tool?: DeviceTool | null): void
    /**
     * Sets the screen for `event` to `screen`. The event must
     * have been allocated by GTK+, for instance, by
     * gdk_event_copy().
     * @param screen a #GdkScreen
     */
    set_screen(screen: Screen): void
    /**
     * Sets the slave device for `event` to `device`.
     * 
     * The event must have been allocated by GTK+,
     * for instance by gdk_event_copy().
     * @param device a #GdkDevice
     */
    set_source_device(device: Device): void
    /**
     * This function returns whether a #GdkEventButton should trigger a
     * context menu, according to platform conventions. The right mouse
     * button always triggers context menus. Additionally, if
     * gdk_keymap_get_modifier_mask() returns a non-0 mask for
     * %GDK_MODIFIER_INTENT_CONTEXT_MENU, then the left mouse button will
     * also trigger a context menu if this modifier is pressed.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggers_context_menu(): boolean
    static name: string
    static new(type: EventType): Event
    constructor(type: EventType)
    /* Static methods and pseudo-constructors */
    static new(type: EventType): Event
    /**
     * Checks all open displays for a #GdkEvent to process,to be processed
     * on, fetching events from the windowing system if necessary.
     * See gdk_display_get_event().
     */
    static get(): Event | null
    /**
     * Sets the function to call to handle all events from GDK.
     * 
     * Note that GTK+ uses this to install its own event handler, so it is
     * usually not useful for GTK+ applications. (Although an application
     * can call this function then call gtk_main_do_event() to pass
     * events to GTK+.)
     * @param func the function to call to handle events from GDK.
     */
    static handler_set(func: EventFunc): void
    /**
     * If there is an event waiting in the event queue of some open
     * display, returns a copy of it. See gdk_display_peek_event().
     */
    static peek(): Event | null
    /**
     * Request more motion notifies if `event` is a motion notify hint event.
     * 
     * This function should be used instead of gdk_window_get_pointer() to
     * request further motion notifies, because it also works for extension
     * events where motion notifies are provided for devices other than the
     * core pointer. Coordinate extraction, processing and requesting more
     * motion events from a %GDK_MOTION_NOTIFY event usually works like this:
     * 
     * 
     * ```c
     * {
     *   // motion_event handler
     *   x = motion_event->x;
     *   y = motion_event->y;
     *   // handle (x,y) motion
     *   gdk_event_request_motions (motion_event); // handles is_hint events
     * }
     * ```
     * 
     * @param event a valid #GdkEvent
     */
    static request_motions(event: EventMotion): void
}
    export type XEvent = void