/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Atspi-2.0
 */

import type * as Gjs from './Gjs';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as DBus from './DBus-1.0';

/**
 * Enumeration used by #AtspiMatchRule to specify
 * how to interpret #AtspiAccessible objects.
 */
export enum CollectionMatchType {
    /**
     * Indicates an error condition or
     * uninitialized value.
     */
    INVALID,
    /**
     * #TRUE if all of the criteria are met.
     */
    ALL,
    /**
     * #TRUE if any of the criteria are met.
     */
    ANY,
    /**
     * #TRUE if none of the criteria are met.
     */
    NONE,
    /**
     * Same as `ATSPI_Collection_MATCH_ALL` if
     * the criteria is non-empty; for empty criteria this rule requires returned
     * value to also have empty set.
     */
    EMPTY,
    /**
     * Used only to determine the end of the
     * enumeration.
     */
    LAST_DEFINED,
}
/**
 * Enumeration used by interface #AtspiCollection to specify
 * the way #AtspiAccesible objects should be sorted.
 */
export enum CollectionSortOrder {
    /**
     * Invalid sort order
     */
    INVALID,
    /**
     * Canonical sort order
     */
    CANONICAL,
    /**
     * Flow sort order
     */
    FLOW,
    /**
     * Tab sort order
     */
    TAB,
    /**
     * Reverse canonical sort order
     */
    REVERSE_CANONICAL,
    /**
     * Reverse flow sort order
     */
    REVERSE_FLOW,
    /**
     * Reverse tab sort order
     */
    REVERSE_TAB,
    /**
     * Used only to determine the end of the
     * enumeration.
     */
    LAST_DEFINED,
}
/**
 * Enumeration used by interface #AtspiCollection to specify
 * restrictions on #AtspiAccesible objects to be traversed.
 */
export enum CollectionTreeTraversalType {
    /**
     * Restrict children tree traveral
     */
    RESTRICT_CHILDREN,
    /**
     * Restrict sibling tree traversal
     */
    RESTRICT_SIBLING,
    /**
     * In-order tree traversal.
     */
    INORDER,
    /**
     * Used only to determine the end of the
     * enumeration.
     */
    LAST_DEFINED,
}
/**
 * The #AtspiComponentLayer of an #AtspiComponent instance indicates its
 * relative stacking order with respect to the onscreen visual representation
 * of the UI. #AtspiComponentLayer, in combination with #AtspiComponent bounds
 * information, can be used to compute the visibility of all or part of a
 * component.  This is important in programmatic determination of
 * region-of-interest for magnification, and in
 * flat screen review models of the screen, as well as
 * for other uses. Objects residing in two of the #AtspiComponentLayer
 * categories support further z-ordering information, with respect to their
 * peers in the same layer: namely, `ATSPI_LAYER_WINDOW` and
 * `ATSPI_LAYER_MDI`.  Relative stacking order for other objects within the
 * same layer is not available; the recommended heuristic is
 * first child paints first. In other words, assume that the
 * first siblings in the child list are subject to being overpainted by later
 * siblings if their bounds intersect. The order of layers, from bottom to top,
 *  is: `ATSPI_LAYER_BACKGROUND,` `ATSPI_LAYER_WINDOW,` `ATSPI_LAYER_MDI,`
 * `ATSPI_LAYER_CANVAS,` `ATSPI_LAYER_WIDGET,` `ATSPI_LAYER_POPUP,` and
 * `ATSPI_LAYER_OVERLAY`.
 */
export enum ComponentLayer {
    /**
     * Indicates an error condition or uninitialized value.
     */
    INVALID,
    /**
     * The bottom-most layer, over which everything else
     * is painted.        The 'desktop background' is generally in this layer.
     */
    BACKGROUND,
    /**
     * The 'background' layer for most content renderers and
     * UI #AtspiComponent containers.
     */
    CANVAS,
    /**
     * The layer in which the majority of ordinary
     * 'foreground' widgets reside.
     */
    WIDGET,
    /**
     * A special layer between `ATSPI_LAYER_CANVAS` and
     * `ATSPI_LAYER_WIDGET,` in which the 'pseudo windows' (e.g. the MDI frames)
     * reside. See #atspi_component_get_mdi_z_order.
     */
    MDI,
    /**
     * A layer for popup window content, above
     * `ATSPI_LAYER_WIDGET`.
     */
    POPUP,
    /**
     * The topmost layer.
     */
    OVERLAY,
    /**
     * The layer in which a toplevel window background usually
     * resides.
     */
    WINDOW,
    /**
     * Used only to determine the end of the
     * enumeration.
     */
    LAST_DEFINED,
}
/**
 * Enumeration used by #AtspiComponent, #AtspiImage, and #AtspiText interfaces
 * to specify whether coordinates are relative to the window or the screen.
 */
export enum CoordType {
    /**
     * Specifies xy coordinates relative to the screen.
     */
    SCREEN,
    /**
     * Specifies xy coordinates relative to the widget's
     * top-level window.
     */
    WINDOW,
    /**
     * Specifies xy coordinates relative to the widget's
     * immediate parent.
     */
    PARENT,
}
/**
 * Enumeration used to specify the event types of interest to an
 * #AtspiEventListener, or
 * to identify the type of an event for which notification has been sent.
 */
export enum EventType {
    /**
     * Indicates that a key on a keyboard device was
     * pressed.
     */
    KEY_PRESSED_EVENT,
    /**
     * Indicates that a key on a keyboard device was
     * released.
     */
    KEY_RELEASED_EVENT,
    /**
     * Indicates that a button on a non-keyboard
     * human interface device (HID) was pressed.
     */
    BUTTON_PRESSED_EVENT,
    /**
     * Indicates that a button on a non-keyboard
     * human interface device (HID) was released.
     */
    BUTTON_RELEASED_EVENT,
}
/**
 * Deprecated. Should not be used.
 */
export enum KeyEventType {
    /**
     * Key press event
     */
    PRESSED,
    /**
     * Key release event
     */
    RELEASED,
}
/**
 * Enumeration used when synthesizing keyboard input via
 * #atspi_generate_keyboard_event.
 */
export enum KeySynthType {
    /**
     * Emulates the pressing of a hardware keyboard key.
     */
    PRESS,
    /**
     * Emulates the release of a hardware keyboard key.
     */
    RELEASE,
    /**
     * Emulates the pressing and immediate releasing
     * of a hardware keyboard key.
     */
    PRESSRELEASE,
    /**
     * A symbolic key event is generated, without specifying a
     * hardware key. Note: if the keysym is not present in the current keyboard
     * map, the #AtspiDeviceEventController instance has a limited ability to
     * generate such keysyms on-the-fly. Reliability of GenerateKeyboardEvent
     * calls using out-of-keymap keysyms will vary from system to system, and on
     * the number of different out-of-keymap keysyms being generated in quick
     * succession.
     * In practice this is rarely significant, since the keysyms of interest to
     * AT clients and keyboard emulators are usually part of the current keymap,
     * i.e., present on the system keyboard for the current locale (even if a
     * physical hardware keyboard is not connected).
     */
    SYM,
    /**
     * A string is converted to its equivalent keyboard events
     * and emitted. If the string consists of complex characters or composed
     * characters which are not in the current keymap, string emission is
     * subject to the out-of-keymap limitations described for
     * `ATSPI_KEY_SYM`. In practice this limitation primarily effects
     * Chinese and Japanese locales.
     */
    STRING,
    /**
     * Emulates locking a set of modifiers.
     */
    LOCKMODIFIERS,
    /**
     * Emulates unlocking a set of modifiers.
     */
    UNLOCKMODIFIERS,
}
/**
 * Used by interfaces #AtspiText and #AtspiDocument, this
 * enumeration corresponds to the POSIX 'setlocale' enum values.
 */
export enum LocaleType {
    /**
     * For localizable natural-language messages.
     */
    MESSAGES,
    /**
     * For regular expression matching and string
     * collation.
     */
    COLLATE,
    /**
     * For regular expression matching, character
     * classification, conversion, case-sensitive comparison, and wide character
     * functions.
     */
    CTYPE,
    /**
     * For monetary formatting.
     */
    MONETARY,
    /**
     * For number formatting (such as the decimal
     * point and the thousands separator).
     */
    NUMERIC,
    /**
     * For time and date formatting.
     */
    TIME,
}
export enum ModifierType {
    /**
     * The left or right 'Shift' key.
     */
    SHIFT,
    /**
     * The ShiftLock or CapsLock key.
     */
    SHIFTLOCK,
    /**
     * 'Control'/'Ctrl'.
     */
    CONTROL,
    /**
     * The Alt key (as opposed to AltGr).
     */
    ALT,
    /**
     * Depending on the platform, this may map to 'Window',
     * 'Function', 'Meta', 'Menu', or 'NumLock'. Such 'Meta keys' will
     * map to one of META, META2, META3. On X Windows platforms these META
     * values map to the modifier masks Mod1Mask, Mod2Mask, Mod3Mask, e.g. an
     * event having `ATSPI_MODIFIER_META2` means that the 'Mod2Mask' bit
     * is set in the corresponding XEvent.
     */
    META,
    /**
     * See `ATSPI_MODIFIER_META`.
     */
    META2,
    /**
     * See `ATSPI_MODIFIER_META`.
     */
    META3,
    /**
     * A symbolic meta key name that is mapped by AT-SPI
     * to the appropriate META value, for the convenience of the client.
     */
    NUMLOCK,
}
/**
 * #AtspiRelationType specifies a relationship between objects
 * (possibly one-to-many
 * or many-to-one) outside of the normal parent/child hierarchical
 * relationship. It allows better semantic       identification of how objects
 * are associated with one another.       For instance the
 * `ATSPI_RELATION_LABELLED_BY`
 * relationship may be used to identify labelling information       that should
 * accompany the accessible name property when presenting an object's content or
 * identity       to the end user.  Similarly,
 * `ATSPI_RELATION_CONTROLLER_FOR` can be used
 * to further specify the context in which a valuator is useful, and/or the
 * other UI components which are directly effected by user interactions with
 * the valuator. Common examples include association of scrollbars with the
 * viewport or panel which they control.
 * 
 * 
 * Enumeration used to specify
 * the type of relation encapsulated in an #AtspiRelation object.
 */
export enum RelationType {
    /**
     * Not a meaningful relationship; clients should not
     * normally encounter this #AtspiRelationType value.
     */
    NULL,
    /**
     * Object is a label for one or more other objects.
     */
    LABEL_FOR,
    /**
     * Object is labelled by one or more other
     * objects.
     */
    LABELLED_BY,
    /**
     * Object is an interactive object which
     * modifies the state, onscreen location, or other attributes of one or more
     * target objects.
     */
    CONTROLLER_FOR,
    /**
     * Object state, position, etc. is
     * modified/controlled by user interaction with one or more other objects.
     * For instance a viewport or scroll pane may be `ATSPI_RELATION_CONTROLLED_BY`
     * scrollbars.
     */
    CONTROLLED_BY,
    /**
     * Object has a grouping relationship (e.g. 'same
     * group as') to one or more other objects.
     */
    MEMBER_OF,
    /**
     * Object is a tooltip associated with another
     * object.
     */
    TOOLTIP_FOR,
    /**
     * Object is a child of the target.
     */
    NODE_CHILD_OF,
    /**
     * Object is a parent of the target.
     */
    NODE_PARENT_OF,
    /**
     * Used to indicate that a relationship exists, but
     * its type is not specified in the enumeration.
     */
    EXTENDED,
    /**
     * Object renders content which flows logically to
     * another object. For instance, text in a paragraph may flow to another
     * object which is not the 'next sibling' in the accessibility hierarchy.
     */
    FLOWS_TO,
    /**
     * Reciprocal of `ATSPI_RELATION_FLOWS_TO`.
     */
    FLOWS_FROM,
    /**
     * Object is visually and semantically considered
     * a subwindow of another object, even though it is not the object's child.
     * Useful when dealing with embedded applications and other cases where the
     * widget hierarchy does not map cleanly to the onscreen presentation.
     */
    SUBWINDOW_OF,
    /**
     * Similar to `ATSPI_RELATION_SUBWINDOW_OF,` but
     * specifically used for cross-process embedding.
     */
    EMBEDS,
    /**
     * Reciprocal of `ATSPI_RELATION_EMBEDS`. Used to
     * denote content rendered by embedded renderers that live in a separate process
     * space from the embedding context.
     */
    EMBEDDED_BY,
    /**
     * Denotes that the object is a transient window or
     * frame associated with another onscreen object. Similar to `ATSPI_TOOLTIP_FOR,`
     * but more general. Useful for windows which are technically toplevels
     * but which, for one or more reasons, do not explicitly cause their
     * associated window to lose 'window focus'. Creation of an `ATSPI_ROLE_WINDOW`
     * object with the `ATSPI_RELATION_POPUP_FOR` relation usually requires
     * some presentation action on the part
     * of assistive technology clients, even though the previous toplevel
     * `ATSPI_ROLE_FRAME` object may still be the active window.
     */
    POPUP_FOR,
    /**
     * This is the reciprocal relation to
     * `ATSPI_RELATION_POPUP_FOR`.
     */
    PARENT_WINDOW_OF,
    /**
     * Reciprocal of %ATSPI_RELATION_DESCRIBED_BY.
     * Indicates that this object provides descriptive information about the target
     * object(s). See also %ATSPI_RELATION_DETAILS_FOR and %ATSPI_RELATION_ERROR_FOR.
     */
    DESCRIPTION_FOR,
    /**
     * Reciprocal of %ATSPI_RELATION_DESCRIPTION_FOR.
     * Indicates that one or more target objects provide descriptive information
     * about this object. This relation type is most appropriate for information
     * that is not essential as its presentation may be user-configurable and/or
     * limited to an on-demand mechanism such as an assistive technology command.
     * For brief, essential information such as can be found in a widget's on-screen
     * label, use %ATSPI_RELATION_LABELLED_BY. For an on-screen error message, use
     * %ATSPI_RELATION_ERROR_MESSAGE. For lengthy extended descriptive information
     * contained in an on-screen object, consider using %ATSPI_RELATION_DETAILS as
     * assistive technologies may provide a means for the user to navigate to
     * objects containing detailed descriptions so that their content can be more
     * closely reviewed.
     */
    DESCRIBED_BY,
    /**
     * Reciprocal of %ATSPI_RELATION_DETAILS_FOR. Indicates
     * that this object has a detailed or extended description, the contents of
     * which can be found in the target object(s). This relation type is most
     * appropriate for information that is sufficiently lengthy as to make
     * navigation to the container of that information desirable. For less verbose
     * information suitable for announcement only, see %ATSPI_RELATION_DESCRIBED_BY.
     * If the detailed information describes an error condition,
     * %ATSPI_RELATION_ERROR_FOR should be used instead. `Since:` 2.26.
     */
    DETAILS,
    /**
     * Reciprocal of %ATSPI_RELATION_DETAILS. Indicates
     * that this object provides a detailed or extended description about the target
     * object(s). See also %ATSPI_RELATION_DESCRIPTION_FOR and
     * %ATSPI_RELATION_ERROR_FOR. `Since:` 2.26.
     */
    DETAILS_FOR,
    /**
     * Reciprocal of %ATSPI_RELATION_ERROR_FOR.
     * Indicates that this object has one or more errors, the nature of which is
     * described in the contents of the target object(s). Objects that have this
     * relation type should also contain %ATSPI_STATE_INVALID_ENTRY in their
     * #AtspiStateSet. `Since:` 2.26.
     */
    ERROR_MESSAGE,
    /**
     * Reciprocal of %ATSPI_RELATION_ERROR_MESSAGE.
     * Indicates that this object contains an error message describing an invalid
     * condition in the target object(s). `Since:` 2.26.
     */
    ERROR_FOR,
    /**
     * Do not use as a parameter value, used to
     * determine the size of the enumeration.
     */
    LAST_DEFINED,
}
/**
 * Enumeration used by interface #AtspiAccessible to specify the role
 * of an #AtspiAccessible object.
 */
export enum Role {
    /**
     * A role indicating an error condition, such as
     * uninitialized Role data.
     */
    INVALID,
    /**
     * Object is a label indicating the keyboard
     * accelerators for the parent.
     */
    ACCELERATOR_LABEL,
    /**
     * Object is used to alert the user about something.
     */
    ALERT,
    /**
     * Object contains a dynamic or moving image of some
     * kind.
     */
    ANIMATION,
    /**
     * Object is a 2d directional indicator.
     */
    ARROW,
    /**
     * Object contains one or more dates, usually arranged
     * into a 2d list.
     */
    CALENDAR,
    /**
     * Object that can be drawn into and is used to trap
     * events.
     */
    CANVAS,
    /**
     * A choice that can be checked or unchecked and
     * provides a separate       indicator for the current state.
     */
    CHECK_BOX,
    /**
     * A menu item that behaves like a check box. See
     * `ATSPI_ROLE_CHECK_BOX`.
     */
    CHECK_MENU_ITEM,
    /**
     * A specialized dialog that lets the user choose a
     * color.
     */
    COLOR_CHOOSER,
    /**
     * The header for a column of data.
     */
    COLUMN_HEADER,
    /**
     * A list of choices the user can select from.
     */
    COMBO_BOX,
    /**
     * An object which allows entry of a date.
     */
    DATE_EDITOR,
    /**
     * An inconifed internal frame within a DESKTOP_PANE.
     */
    DESKTOP_ICON,
    /**
     * A pane that supports internal frames and
     * iconified versions of those internal frames.
     */
    DESKTOP_FRAME,
    /**
     * An object that allows a value to be changed via rotating a
     * visual element, or which displays a value via such a rotating element.
     */
    DIAL,
    /**
     * A top level window with title bar and a border.
     */
    DIALOG,
    /**
     * A pane that allows the user to navigate through
     * and select the contents of a directory.
     */
    DIRECTORY_PANE,
    /**
     * A specialized dialog that displays the files in
     * the directory and lets the user select a file, browse a different
     * directory, or specify a filename.
     */
    DRAWING_AREA,
    /**
     * An object used for drawing custom user interface
     * elements.
     */
    FILE_CHOOSER,
    /**
     * A object that fills up space in a user interface.
     */
    FILLER,
    /**
     * Don't use, reserved for future use.
     */
    FOCUS_TRAVERSABLE,
    /**
     * Allows selection of a display font.
     */
    FONT_CHOOSER,
    /**
     * A top level window with a title bar, border, menubar,
     * etc.
     */
    FRAME,
    /**
     * A pane that is guaranteed to be painted on top of
     * all panes beneath it.
     */
    GLASS_PANE,
    /**
     * A document container for HTML, whose children
     * represent the document content.
     */
    HTML_CONTAINER,
    /**
     * A small fixed size picture, typically used to decorate
     * components.
     */
    ICON,
    /**
     * An image, typically static.
     */
    IMAGE,
    /**
     * A frame-like object that is clipped by a desktop
     * pane.
     */
    INTERNAL_FRAME,
    /**
     * An object used to present an icon or short string in an
     * interface.
     */
    LABEL,
    /**
     * A specialized pane that allows its children to be
     * drawn in layers, providing a form of stacking order.
     */
    LAYERED_PANE,
    /**
     * An object that presents a list of objects to the user and
     * allows the user to select one or more of them.
     */
    LIST,
    /**
     * An object that represents an element of a list.
     */
    LIST_ITEM,
    /**
     * An object usually found inside a menu bar that contains a
     * list of actions the user can choose from.
     */
    MENU,
    /**
     * An object usually drawn at the top of the primary
     * dialog box of an application that contains a list of menus the user can
     * choose from.
     */
    MENU_BAR,
    /**
     * An object usually contained in a menu that presents
     * an action the user can choose.
     */
    MENU_ITEM,
    /**
     * A specialized pane whose primary use is inside a
     * dialog.
     */
    OPTION_PANE,
    /**
     * An object that is a child of a page tab list.
     */
    PAGE_TAB,
    /**
     * An object that presents a series of panels (or
     * page tabs), one at a time,through some mechanism provided by the
     * object.
     */
    PAGE_TAB_LIST,
    /**
     * A generic container that is often used to group objects.
     */
    PANEL,
    /**
     * A text object uses for passwords, or other places
     * where the text content is not shown visibly to the user.
     */
    PASSWORD_TEXT,
    /**
     * A temporary window that is usually used to offer the
     * user a list of choices, and then hides when the user selects one of those
     * choices.
     */
    POPUP_MENU,
    /**
     * An object used to indicate how much of a task has
     * been completed.
     */
    PROGRESS_BAR,
    /**
     * An object the user can manipulate to tell the
     * application to do something.
     */
    PUSH_BUTTON,
    /**
     * A specialized check box that will cause other
     * radio buttons in the same group to become unchecked when this one is
     * checked.
     */
    RADIO_BUTTON,
    /**
     * Object is both a menu item and a "radio button"
     * . See `ATSPI_ROLE_RADIO_BUTTON`.
     */
    RADIO_MENU_ITEM,
    /**
     * A specialized pane that has a glass pane and a
     * layered pane as its children.
     */
    ROOT_PANE,
    /**
     * The header for a row of data.
     */
    ROW_HEADER,
    /**
     * An object usually used to allow a user to
     * incrementally view a large amount of data by moving the bounds of a
     * viewport along a one-dimensional axis.
     */
    SCROLL_BAR,
    /**
     * An object that allows a user to incrementally view
     * a large amount of information. `ATSPI_ROLE_SCROLL_PANE` objects are usually
     * accompanied by `ATSPI_ROLE_SCROLL_BAR` controllers, on which the
     * `ATSPI_RELATION_CONTROLLER_FOR` and `ATSPI_RELATION_CONTROLLED_BY`
     * reciprocal relations are set. See  #atspi_get_relation_set.
     */
    SCROLL_PANE,
    /**
     * An object usually contained in a menu to provide a
     * visible and logical separation of the contents in a menu.
     */
    SEPARATOR,
    /**
     * An object that allows the user to select from a bounded
     * range.
     */
    SLIDER,
    /**
     * An object which allows one of a set of choices to
     * be selected, and which displays the current choice.  Unlike
     * `ATSPI_ROLE_SCROLL_BAR,` `ATSPI_ROLE_SLIDER` objects need not control
     * 'viewport'-like objects.
     */
    SPIN_BUTTON,
    /**
     * A specialized panel that presents two other panels
     * at the same time.
     */
    SPLIT_PANE,
    /**
     * Object displays non-quantitative status information
     * (c.f. `ATSPI_ROLE_PROGRESS_BAR)`
     */
    STATUS_BAR,
    /**
     * An object used to repesent information in terms of rows
     * and columns.
     */
    TABLE,
    /**
     * A 'cell' or discrete child within a Table. Note:
     * Table cells need not have `ATSPI_ROLE_TABLE_CELL,` other
     * #AtspiRoleType values are valid as well.
     */
    TABLE_CELL,
    /**
     * An object which labels a particular column
     * in an #AtspiTable.
     */
    TABLE_COLUMN_HEADER,
    /**
     * An object which labels a particular row in a
     * #AtspiTable. #AtspiTable rows and columns may also be labelled via the
     * `ATSPI_RELATION_LABEL_FOR/``ATSPI_RELATION_LABELLED_BY` relationships.
     * See #atspi_get_relation_set.
     */
    TABLE_ROW_HEADER,
    /**
     * Object allows menu to be removed from menubar
     * and shown in its own window.
     */
    TEAROFF_MENU_ITEM,
    /**
     * An object that emulates a terminal.
     */
    TERMINAL,
    /**
     * An interactive widget that supports multiple lines of text
     * and optionally accepts user input, but whose purpose is not to solicit user
     * input. Thus `ATSPI_ROLE_TEXT` is appropriate for the text view in a plain text
     * editor but inappropriate for an input field in a dialog box or web form. For
     * widgets whose purpose is to solicit input from the user, see `ATSPI_ROLE_ENTRY`
     * and `ATSPI_ROLE_PASSWORD_TEXT`. For generic objects which display a brief amount
     * of textual information, see `ATSPI_ROLE_STATIC`.
     */
    TEXT,
    /**
     * A specialized push button that can be checked or
     * unchecked, but does not procide a separate indicator for the current
     * state.
     */
    TOGGLE_BUTTON,
    /**
     * A bar or palette usually composed of push buttons or
     * toggle buttons.
     */
    TOOL_BAR,
    /**
     * An object that provides information about another
     * object.
     */
    TOOL_TIP,
    /**
     * An object used to repsent hierarchical information to the
     * user.
     */
    TREE,
    /**
     * An object that presents both tabular and
     * hierarchical info to the user.
     */
    TREE_TABLE,
    /**
     * The object contains some #AtspiAccessible information,
     * but its role is not known.
     */
    UNKNOWN,
    /**
     * An object usually used in a scroll pane, or to
     * otherwise clip a larger object or content renderer to a specific
     * onscreen viewport.
     */
    VIEWPORT,
    /**
     * A top level window with no title or border.
     */
    WINDOW,
    /**
     * means that the role for this item is known, but not
     * included in the core enumeration. Deprecated since 2.24.
     */
    EXTENDED,
    /**
     * An object that serves as a document header.
     */
    HEADER,
    /**
     * An object that serves as a document footer.
     */
    FOOTER,
    /**
     * An object which is contains a single paragraph of
     * text content. See also `ATSPI_ROLE_TEXT`.
     */
    PARAGRAPH,
    /**
     * An object which describes margins and tab stops, etc.
     *    for text objects which it controls (should have
     * `ATSPI_RELATION_CONTROLLER_FOR` relation to such).
     */
    RULER,
    /**
     * An object corresponding to the toplevel accessible
     * of an application, which may contain `ATSPI_ROLE_FRAME` objects or other
     * accessible objects. Children of #AccessibleDesktop objects  are generally
     * `ATSPI_ROLE_APPLICATION` objects.
     */
    APPLICATION,
    /**
     * The object is a dialog or list containing items
     * for insertion into an entry widget, for instance a list of words for
     * completion of a text entry.
     */
    AUTOCOMPLETE,
    /**
     * The object is an editable text object in a toolbar.
     */
    EDITBAR,
    /**
     * The object is an embedded component container.  This
     * role is a "grouping" hint that the contained objects share a context
     * which is different from the container in which this accessible is
     * embedded. In particular, it is used for some kinds of document embedding,
     * and for embedding of out-of-process component, "panel applets", etc.
     */
    EMBEDDED,
    /**
     * The object is a component whose textual content may be
     * entered or modified by the user, provided `ATSPI_STATE_EDITABLE` is present.
     * A readonly `ATSPI_ROLE_ENTRY` object (i.e. where `ATSPI_STATE_EDITABLE` is
     * not present) implies a read-only 'text field' in a form, as opposed to a
     * title, label, or caption.
     */
    ENTRY,
    /**
     * The object is a graphical depiction of quantitative data.
     * It may contain multiple subelements whose attributes and/or description
     * may be queried to obtain both the  quantitative data and information about
     * how the data is being presented. The `ATSPI_LABELLED_BY` relation is
     * particularly important in interpreting objects of this type, as is the
     * accessible description property. See `ATSPI_ROLE_CAPTION`.
     */
    CHART,
    /**
     * The object contains descriptive information, usually
     * textual, about another user interface element such as a table, chart, or
     * image.
     */
    CAPTION,
    /**
     * The object is a visual frame or container which
     * contains a view of document content. #AtspiDocument frames may occur within
     * another #AtspiDocument instance, in which case the second  document may be
     * said to be embedded in the containing instance.  HTML frames are often
     * ATSPI_ROLE_DOCUMENT_FRAME:  Either this object, or a singleton descendant,
     * should implement the #AtspiDocument interface.
     */
    DOCUMENT_FRAME,
    /**
     * The object serves as a heading for content which
     * follows it in a document. The 'heading level' of the heading, if
     * availabe,  may be obtained by       querying the object's attributes.
     */
    HEADING,
    /**
     * The object is a containing instance which encapsulates a
     * page of information. `ATSPI_ROLE_PAGE` is used in documents and content which
     * support a paginated navigation model.
     */
    PAGE,
    /**
     * The object is a containing instance of document content
     * which constitutes a particular 'logical' section of the document.  The
     * type of content within a section, and the nature of the section division
     * itself, may be obtained by querying the object's attributes.  Sections
     * may be nested.
     */
    SECTION,
    /**
     * The object is redundant with another object in
     * the hierarchy, and is exposed for purely technical reasons.  Objects of
     * this role should be ignored by clients, if they are encountered at all.
     */
    REDUNDANT_OBJECT,
    /**
     * The object is a containing instance of document content
     * which has within it components with which the user can interact in order
     * to input information; i.e. the object is a container for pushbuttons,
     * comboboxes, text input fields, and other 'GUI' components. `ATSPI_ROLE_FORM`
     * should not, in general, be used for toplevel GUI containers or dialogs,
     * but should be reserved for 'GUI' containers which occur within document
     * content, for instance within Web documents, presentations, or text
     * documents.  Unlike other GUI containers and dialogs which occur inside
     * application instances, `ATSPI_ROLE_FORM` containers' components are
     * associated with the current document, rather than the current foreground
     * application or viewer instance.
     */
    FORM,
    /**
     * The object is a hypertext anchor, i.e. a "link" in a
     * hypertext document.  Such objects are distinct from 'inline'       content
     * which may also use the #AtspiHypertext/#AtspiHyperlink interfacesto indicate
     * the range/location within a text object where an inline or embedded object
     * lies.
     */
    LINK,
    /**
     * The object is a window or similar viewport
     * which is used to allow composition or input of a 'complex character',
     * in other words it is an "input method window".
     */
    INPUT_METHOD_WINDOW,
    /**
     * A row in a table.
     */
    TABLE_ROW,
    /**
     * An object that represents an element of a tree.
     */
    TREE_ITEM,
    /**
     * A document frame which contains a
     * spreadsheet.
     */
    DOCUMENT_SPREADSHEET,
    /**
     * A document frame which contains a
     * presentation or slide content.
     */
    DOCUMENT_PRESENTATION,
    /**
     * A document frame which contains textual content,
     * such as found in a word processing
     * application.
     */
    DOCUMENT_TEXT,
    /**
     * A document frame which contains HTML or other
     * markup suitable for display in a web browser.
     */
    DOCUMENT_WEB,
    /**
     * A document frame which contains email content
     * to be displayed or composed either in plain text or
     * HTML.
     */
    DOCUMENT_EMAIL,
    /**
     * An object found within a document and designed to
     * present a comment, note, or other annotation. In some cases, this object
     * might not be visible until activated.
     */
    COMMENT,
    /**
     * A non-collapsible list of choices the user can
     * select from.
     */
    LIST_BOX,
    /**
     * A group of related widgets. This group typically has
     * a label.
     */
    GROUPING,
    /**
     * An image map object. Usually a graphic with multiple
     * hotspots, where each hotspot can be activated resulting in the loading of
     * another document or section of a document.
     */
    IMAGE_MAP,
    /**
     * A transitory object designed to present a
     * message to the user, typically at the desktop level rather than inside a
     * particular application.
     */
    NOTIFICATION,
    /**
     * An object designed to present a message to the user
     * within an existing window.
     */
    INFO_BAR,
    /**
     * A bar that serves as a level indicator to, for
     * instance, show the strength of a password or the state of a battery. `Since:` 2.8
     */
    LEVEL_BAR,
    /**
     * A bar that serves as the title of a window or a
     *  dialog. `Since:` 2.12
     */
    TITLE_BAR,
    /**
     * An object which contains a text section
     *  that is quoted from another source.  `Since:` 2.12
     */
    BLOCK_QUOTE,
    /**
     * An object which represents an audio
     *  element. `Since:` 2.12
     */
    AUDIO,
    /**
     * An object which represents a video
     *  element. `Since:` 2.12
     */
    VIDEO,
    /**
     * A definition of a term or concept. `Since:` 2.12
     */
    DEFINITION,
    /**
     * A section of a page that consists of a
     *  composition that forms an independent part of a document, page, or
     *  site. Examples: A blog entry, a news story, a forum post. `Since:`
     *  2.12
     */
    ARTICLE,
    /**
     * A region of a web page intended as a
     *  navigational landmark. This is designed to allow Assistive
     *  Technologies to provide quick navigation among key regions within a
     *  document. `Since:` 2.12
     */
    LANDMARK,
    /**
     * A text widget or container holding log content, such
     *  as chat history and error logs. In this role there is a
     *  relationship between the arrival of new items in the log and the
     *  reading order. The log contains a meaningful sequence and new
     *  information is added only to the end of the log, not at arbitrary
     *  points. `Since:` 2.12
     */
    LOG,
    /**
     * A container where non-essential information
     *  changes frequently. Common usages of marquee include stock tickers
     *  and ad banners. The primary difference between a marquee and a log
     *  is that logs usually have a meaningful order or sequence of
     *  important content changes. `Since:` 2.12
     */
    MARQUEE,
    /**
     * A text widget or container that holds a mathematical
     *  expression. `Since:` 2.12
     */
    MATH,
    /**
     * A widget whose purpose is to display a rating,
     *  such as the number of stars associated with a song in a media
     *  player. Objects of this role should also implement
     *  AtspiValue. `Since:` 2.12
     */
    RATING,
    /**
     * An object containing a numerical counter which
     *  indicates an amount of elapsed time from a start point, or the time
     *  remaining until an end point. `Since:` 2.12
     */
    TIMER,
    /**
     * A generic non-container object whose purpose is to display
     *  a brief amount of information to the user and whose role is known by the
     *  implementor but lacks semantic value for the user. Examples in which
     *  `ATSPI_ROLE_STATIC` is appropriate include the message displayed in a message
     *  box and an image used as an alternative means to display text.
     *  `ATSPI_ROLE_STATIC` should not be applied to widgets which are traditionally
     *  interactive, objects which display a significant amount of content, or any
     *  object which has an accessible relation pointing to another object. The
     *  displayed information, as a general rule, should be exposed through the
     *  accessible name of the object. For labels which describe another widget, see
     *  `ATSPI_ROLE_LABEL`. For text views, see `ATSPI_ROLE_TEXT`. For generic
     *  containers, see `ATSPI_ROLE_PANEL`. For objects whose role is not known by the
     *  implementor, see `ATSPI_ROLE_UNKNOWN`. `Since:` 2.16.
     */
    STATIC,
    /**
     * An object that represents a mathematical fraction. `Since:` 2.16.
     */
    MATH_FRACTION,
    /**
     * An object that represents a mathematical expression
     *  displayed with a radical. `Since:` 2.16.
     */
    MATH_ROOT,
    /**
     * An object that contains text that is displayed as a
     *  subscript. `Since:` 2.16.
     */
    SUBSCRIPT,
    /**
     * An object that contains text that is displayed as a
     *  superscript. `Since:` 2.16.
     */
    SUPERSCRIPT,
    /**
     * An object that represents a list of term-value
     *  groups. A term-value group represents an individual description and consist
     *  of one or more names (`ATSPI_ROLE_DESCRIPTION_TERM)` followed by one or more
     *  values (`ATSPI_ROLE_DESCRIPTION_VALUE)`. For each list, there should not be
     *  more than one group with the same term name. `Since:` 2.26.
     */
    DESCRIPTION_LIST,
    /**
     * An object that represents a term or phrase
     *  with a corresponding definition. `Since:` 2.26.
     */
    DESCRIPTION_TERM,
    /**
     * An object that represents the description,
     *  definition, or value of a term. `Since:` 2.26.
     */
    DESCRIPTION_VALUE,
    /**
     * An object that contains the text of a footnote. `Since:` 2.26.
     */
    FOOTNOTE,
    /**
     * Content previously deleted or proposed to be
     * deleted, e.g. in revision history or a content view providing suggestions
     * from reviewers. `Since:` 2.34.
     */
    CONTENT_DELETION,
    /**
     * Content previously inserted or proposed to be
     * inserted, e.g. in revision history or a content view providing suggestions
     * from reviewers. `Since:` 2.34.
     */
    CONTENT_INSERTION,
    /**
     * A run of content that is marked or highlighted, such as for
     * reference purposes, or to call it out as having a special purpose. If the
     * marked content has an associated section in the document elaborating on the
     * reason for the mark, then %ATSPI_RELATION_DETAILS should be used on the mark
     * to point to that associated section. In addition, the reciprocal relation
     * %ATSPI_RELATION_DETAILS_FOR should be used on the associated content section
     * to point back to the mark. `Since:` 2.36.
     */
    MARK,
    /**
     * A container for content that is called out as a proposed
     * change from the current version of the document, such as by a reviewer of the
     * content. This role should include either %ATSPI_ROLE_CONTENT_DELETION and/or
     * %ATSPI_ROLE_CONTENT_INSERTION children, in any order, to indicate what the
     * actual change is. `Since:` 2.36
     */
    SUGGESTION,
    /**
     * Not a valid role, used for finding end of
     *  enumeration.
     */
    LAST_DEFINED,
}
/**
 * Enumeration used by interface #AtspiAccessible to specify where an
 * #AtspiAccessible object should be placed on the screen when using scroll_to.
 */
export enum ScrollType {
    /**
     * Scroll the object to the top left corner of the
     * window.
     */
    TOP_LEFT,
    /**
     * Scroll the object to the bottom right corner of
     * the window.
     */
    BOTTOM_RIGHT,
    /**
     * Scroll the object to the top edge of the window.
     */
    TOP_EDGE,
    /**
     * Scroll the object to the bottom edge of the
     * window.
     */
    BOTTOM_EDGE,
    /**
     * Scroll the object to the left edge of the
     * window.
     */
    LEFT_EDGE,
    /**
     * Scroll the object to the right edge of the
     * window.
     */
    RIGHT_EDGE,
    /**
     * Scroll the object to application-dependent position
     * on the window.
     */
    ANYWHERE,
}
/**
 * Enumeration used by various interfaces indicating every possible state
 * an #AtspiAccesible object can assume.
 */
export enum StateType {
    /**
     * Indicates an invalid state - probably an error
     * condition.
     */
    INVALID,
    /**
     * Indicates a window is currently the active window, or
     * an object is the active subelement within a container or table.
     * `ATSPI_STATE_ACTIVE` should not be used for objects which have
     * #ATSPI_STATE_FOCUSABLE or #ATSPI_STATE_SELECTABLE: Those objects should use
     * `ATSPI_STATE_FOCUSED` and `ATSPI_STATE_SELECTED` respectively.
     * `ATSPI_STATE_ACTIVE` is a means to indicate that an object which is not
     * focusable and not selectable is the currently-active item within its
     * parent container.
     */
    ACTIVE,
    /**
     * Indicates that the object is armed.
     */
    ARMED,
    /**
     * Indicates the current object is busy, i.e. onscreen
     * representation is in the process of changing, or       the object is
     * temporarily unavailable for interaction due to activity already in progress.
     */
    BUSY,
    /**
     * Indicates this object is currently checked.
     */
    CHECKED,
    /**
     * Indicates this object is collapsed.
     */
    COLLAPSED,
    /**
     * Indicates that this object no longer has a valid
     * backing widget        (for instance, if its peer object has been destroyed).
     */
    DEFUNCT,
    /**
     * Indicates the user can change the contents of this
     * object.
     */
    EDITABLE,
    /**
     * Indicates that this object is enabled, i.e. that it
     * currently reflects some application state. Objects that are "greyed out"
     * may lack this state, and may lack the `ATSPI_STATE_SENSITIVE` if direct
     * user interaction cannot cause them to acquire `ATSPI_STATE_ENABLED`.
     * See `ATSPI_STATE_SENSITIVE`.
     */
    ENABLED,
    /**
     * Indicates this object allows progressive
     * disclosure of its children.
     */
    EXPANDABLE,
    /**
     * Indicates this object is expanded.
     */
    EXPANDED,
    /**
     * Indicates this object can accept keyboard focus,
     * which means all events resulting from typing on the keyboard will
     * normally be passed to it when it has focus.
     */
    FOCUSABLE,
    /**
     * Indicates this object currently has the keyboard
     * focus.
     */
    FOCUSED,
    /**
     * Indicates that the object has an associated
     * tooltip.
     */
    HAS_TOOLTIP,
    /**
     * Indicates the orientation of this object is
     * horizontal.
     */
    HORIZONTAL,
    /**
     * Indicates this object is minimized and is
     * represented only by an icon.
     */
    ICONIFIED,
    /**
     * Indicates something must be done with this object
     * before the user can interact with an object in a different window.
     */
    MODAL,
    /**
     * Indicates this (text) object can contain multiple
     * lines of text.
     */
    MULTI_LINE,
    /**
     * Indicates this object allows more than one of
     * its children to be selected at the same time, or in the case of text
     * objects, that the object supports non-contiguous text selections.
     */
    MULTISELECTABLE,
    /**
     * Indicates this object paints every pixel within its
     * rectangular region. It also indicates an alpha value of unity, if it
     * supports alpha blending.
     */
    OPAQUE,
    /**
     * Indicates this object is currently pressed.
     */
    PRESSED,
    /**
     * Indicates the size of this object's size is not
     * fixed.
     */
    RESIZABLE,
    /**
     * Indicates this object is the child of an object
     * that allows its children to be selected and that this child is one of
     * those children       that can be selected.
     */
    SELECTABLE,
    /**
     * Indicates this object is the child of an object that
     * allows its children to be selected and that this child is one of those
     * children that has been selected.
     */
    SELECTED,
    /**
     * Indicates this object is sensitive, e.g. to user
     * interaction. `ATSPI_STATE_SENSITIVE` usually accompanies.
     * `ATSPI_STATE_ENABLED` for user-actionable controls, but may be found in the
     * absence of `ATSPI_STATE_ENABLED` if the current visible state of the control
     * is "disconnected" from the application state.  In such cases, direct user
     * interaction can often result in the object gaining `ATSPI_STATE_SENSITIVE,`
     * for instance if a user makes an explicit selection using an object whose
     * current state is ambiguous or undefined. See `ATSPI_STATE_ENABLED,`
     * `ATSPI_STATE_INDETERMINATE`.
     */
    SENSITIVE,
    /**
     * Indicates this object, the object's parent, the
     * object's parent's parent, and so on, are all 'shown' to the end-user,
     * i.e. subject to "exposure" if blocking or obscuring objects do not
     * interpose between this object and the top of the window stack.
     */
    SHOWING,
    /**
     * Indicates this (text) object can contain only a
     * single line of text.
     */
    SINGLE_LINE,
    /**
     * Indicates that the information returned for this object
     * may no longer be synchronized with the application state.  This can occur
     * if the object has `ATSPI_STATE_TRANSIENT,` and can also occur towards the
     * end of the object peer's lifecycle.
     */
    STALE,
    /**
     * Indicates this object is transient.
     */
    TRANSIENT,
    /**
     * Indicates the orientation of this object is vertical;
     * for example this state may appear on such objects as scrollbars, text
     * objects (with vertical text flow), separators, etc.
     */
    VERTICAL,
    /**
     * Indicates this object is visible, e.g. has been
     * explicitly marked for exposure to the user. `ATSPI_STATE_VISIBLE` is no
     * guarantee that the object is actually unobscured on the screen, only that
     * it is 'potentially' visible, barring obstruction, being scrolled or clipped
     * out of the field of view, or having an ancestor container that has not yet
     * made visible. A widget is potentially onscreen if it has both
     * `ATSPI_STATE_VISIBLE` and `ATSPI_STATE_SHOWING`. The absence of
     * `ATSPI_STATE_VISIBLE` and `ATSPI_STATE_SHOWING` is
     * semantically equivalent to saying that an object is 'hidden'.
     */
    VISIBLE,
    /**
     * Indicates that "active-descendant-changed"
     * event is sent when children become 'active' (i.e. are selected or
     * navigated to onscreen).  Used to prevent need to enumerate all children
     * in very large containers, like tables. The presence of
     * `ATSPI_STATE_MANAGES_DESCENDANTS` is an indication to the client that the
     * children should not, and need not, be enumerated by the client.
     * Objects implementing this state are expected to provide relevant state
     * notifications to listening clients, for instance notifications of
     * visibility changes and activation of their contained child objects, without
     * the client having previously requested references to those children.
     */
    MANAGES_DESCENDANTS,
    /**
     * Indicates that a check box or other boolean
     * indicator is in a state other than checked or not checked.  This
     * usually means that the boolean value reflected or controlled by the
     * object does not apply consistently to the entire current context.
     * For example, a checkbox for the "Bold" attribute of text may have
     * `ATSPI_STATE_INDETERMINATE` if the currently selected text contains a mixture
     * of weight attributes. In many cases interacting with a
     * `ATSPI_STATE_INDETERMINATE` object will cause the context's corresponding
     * boolean attribute to be homogenized, whereupon the object will lose
     * `ATSPI_STATE_INDETERMINATE` and a corresponding state-changed event will be
     * fired.
     */
    INDETERMINATE,
    /**
     * Indicates that user interaction with this object is
     * 'required' from the user, for instance before completing the
     * processing of a form.
     */
    REQUIRED,
    /**
     * Indicates that an object's onscreen content
     * is truncated, e.g. a text value in a spreadsheet cell.
     */
    TRUNCATED,
    /**
     * Indicates this object's visual representation is
     * dynamic, not static. This state may be applied to an object during an
     * animated 'effect' and be removed from the object once its visual
     * representation becomes static. Some applications, notably content viewers,
     * may not be able to detect all kinds of animated content.  Therefore the
     * absence of this state should not be taken as
     * definitive evidence that the object's visual representation is
     * static; this state is advisory.
     */
    ANIMATED,
    /**
     * This object has indicated an error condition
     * due to failure of input validation.  For instance, a form control may
     * acquire this state in response to invalid or malformed user input.
     */
    INVALID_ENTRY,
    /**
     * This state indicates that the object
     * in question implements some form of typeahead or
     * pre-selection behavior whereby entering the first character of one or more
     * sub-elements causes those elements to scroll into view or become
     * selected. Subsequent character input may narrow the selection further as
     * long as one or more sub-elements match the string. This state is normally
     * only useful and encountered on objects that implement #AtspiSelection.
     * In some cases the typeahead behavior may result in full or partial
     * completion of the data in the input field, in which case
     * these input events may trigger text-changed events from the source.
     */
    SUPPORTS_AUTOCOMPLETION,
    /**
     * This state indicates that the object in
     * question supports text selection. It should only be exposed on objects
     * which implement the #AtspiText interface, in order to distinguish this state
     * from `ATSPI_STATE_SELECTABLE,` which infers that the object in question is a
     * selectable child of an object which implements #AtspiSelection. While
     * similar, text selection and subelement selection are distinct operations.
     */
    SELECTABLE_TEXT,
    /**
     * This state indicates that the object in question is
     * the 'default' interaction object in a dialog, i.e. the one that gets
     * activated if the user presses "Enter" when the dialog is initially
     * posted.
     */
    IS_DEFAULT,
    /**
     * This state indicates that the object (typically a
     * hyperlink) has already been activated or invoked, with the result that
     * some backing data has been downloaded or rendered.
     */
    VISITED,
    /**
     * Indicates this object has the potential to
     *  be checked, such as a checkbox or toggle-able table cell. `Since:`
     *  2.12
     */
    CHECKABLE,
    /**
     * Indicates that the object has a popup
     * context menu or sub-level menu which may or may not be
     * showing. This means that activation renders conditional content.
     * Note that ordinary tooltips are not considered popups in this
     * context. `Since:` 2.12
     */
    HAS_POPUP,
    /**
     * Indicates that an object which is ENABLED and
     * SENSITIVE has a value which can be read, but not modified, by the
     * user. `Since:` 2.16
     */
    READ_ONLY,
    /**
     * This value of the enumeration should not be used
     * as a parameter, it indicates the number of items in the #AtspiStateType
     * enumeration.
     */
    LAST_DEFINED,
}
/**
 * Specifies the boundary conditions determining a run of text as returned from
 * #atspi_text_get_text_at_offset, #atspi_text_get_text_after_offset, and
 * #atspi_text_get_text_before_offset.
 * 
 * This enumerationis deprecated since 2.9.90 and should not be used. Use
 * AtspiTextGranularity with #atspi_text_get_string_at_offset instead.
 */
export enum TextBoundaryType {
    /**
     * An #AtspiText instance is bounded by this
     * character only. Start and end offsets differ by one, by definition,
     * for this value.
     */
    CHAR,
    /**
     * Boundary condition is start of a word; i.e.
     * range is from start of one word to the start of another word.
     */
    WORD_START,
    /**
     * Boundary condition is the end of a word; i.e.
     * range is from the end of one word to the end of another. Some locales
     * may not distinguish between words and characters or glyphs. In particular,
     * those locales which use wholly or partially ideographic character sets.
     * In these cases, characters may be returned in lieu of multi-character
     * substrings.
     */
    WORD_END,
    /**
     * Boundary condition is start of a
     * sentence, as determined by the application. Some locales or
     * character sets may not include explicit sentence delimiters, so this
     * boundary type can not always be honored. Some locales will return lines
     * of text instead of grammatical sentences.
     */
    SENTENCE_START,
    /**
     * Boundary condition is end of a sentence,
     * as determined by the application, including the sentence-delimiting
     * character, for instance '.' Some locales or character sets may not
     * include explicit sentence delimiters, so this boundary type can not
     * always be honored. Some locales will return lines of text instead of
     * grammatical sentences.
     */
    SENTENCE_END,
    /**
     * Boundary condition is the start of a line;
     * i.e. range is from start of one line to the start of another.  This
     * generally means that an end-of-line character will appear at the end of
     * the range.
     */
    LINE_START,
    /**
     * Boundary condition is the end of a line; i.e.
     * range is from start of one line to the start of another.  This generally
     * means that an end-of-line character will be the first character of the
     * range.
     */
    LINE_END,
}
/**
 * Enumeration used by interface #AtspiText to indicate
 * how to treat characters intersecting bounding boxes.
 */
export enum TextClipType {
    /**
     * No characters/glyphs are omitted.
     */
    NONE,
    /**
     * Characters/glyphs clipped by the minimum coordinate
     * are omitted.
     */
    MIN,
    /**
     * Characters/glyphs which intersect the maximum
     * coordinate are omitted.
     */
    MAX,
    /**
     * Only glyphs falling entirely within the region
     * bounded by min and max are retained.
     */
    BOTH,
}
/**
 * Text granularity types used for specifying the granularity of the region of
 * text we are interested in.
 */
export enum TextGranularity {
    /**
     * Granularity is defined by the boundaries between characters
     * (including non-printing characters)
     */
    CHAR,
    /**
     * Granularity is defined by the boundaries of a word,
     * starting at the beginning of the current word and finishing at the beginning of
     * the following one, if present.
     */
    WORD,
    /**
     * Granularity is defined by the boundaries of a sentence,
     * starting at the beginning of the current sentence and finishing at the beginning of
     * the following one, if present.
     */
    SENTENCE,
    /**
     * Granularity is defined by the boundaries of a line,
     * starting at the beginning of the current line and finishing at the beginning of
     * the following one, if present.
     */
    LINE,
    /**
     * Granularity is defined by the boundaries of a paragraph,
     * starting at the beginning of the current paragraph and finishing at the beginning of
     * the following one, if present.
     */
    PARAGRAPH,
}
/**
 * @bitfield 
 */
export enum Cache {
    NONE,
    PARENT,
    CHILDREN,
    NAME,
    DESCRIPTION,
    STATES,
    ROLE,
    INTERFACES,
    ATTRIBUTES,
    ALL,
    DEFAULT,
    UNDEFINED,
}
/**
 * Specifies the type of a key listener event.
 * The values above can and should be bitwise-'OR'-ed
 * together, observing the compatibility limitations specified in the description of
 * each value.  For instance, #ATSPI_KEYLISTENER_ALL_WINDOWS | #ATSPI_KEYLISTENER_CANCONSUME is
 * a commonly used combination which gives the AT complete control over the delivery of matching
 * events.  However, such filters should be used sparingly as they may have a negative impact on
 * system performance.
 * @bitfield 
 */
export enum KeyListenerSyncType {
    /**
     * Events may be delivered asynchronously,
     * which means in some cases they may already have been delivered to the
     * application before the AT client receives the notification.
     */
    NOSYNC,
    /**
     * Events are delivered synchronously, before the
     * currently focussed application sees them.
     */
    SYNCHRONOUS,
    /**
     * Events may be consumed by the AT client.  Presumes and
     * requires #ATSPI_KEYLISTENER_SYNCHRONOUS, incompatible with #ATSPI_KEYLISTENER_NOSYNC.
     */
    CANCONSUME,
    /**
     * Events are received not from the application toolkit layer, but
     * from the device driver or windowing system subsystem; such notifications are 'global' in the
     * sense that they are not broken or defeated by applications that participate poorly
     * in the accessibility APIs, or not at all; however because of the intrusive nature of
     * such snooping, it can have side-effects on certain older platforms.  If unconditional
     * event notifications, even when inaccessible or "broken" applications have focus, are not
     * required, it may be best to avoid this enum value/flag.
     */
    ALL_WINDOWS,
}
/**
 * One higher than the highest valid value of #AtspiComponentLayer.
 */
export const COMPONENTLAYER_COUNT: number
/**
 * One higher than the highest valid value of #AtspiCoordType.
 */
export const COORD_TYPE_COUNT: number
export const DBUS_INTERFACE_ACCESSIBLE: string
export const DBUS_INTERFACE_ACTION: string
export const DBUS_INTERFACE_APPLICATION: string
export const DBUS_INTERFACE_CACHE: string
export const DBUS_INTERFACE_COLLECTION: string
export const DBUS_INTERFACE_COMPONENT: string
export const DBUS_INTERFACE_DEC: string
export const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string
export const DBUS_INTERFACE_DOCUMENT: string
export const DBUS_INTERFACE_EDITABLE_TEXT: string
export const DBUS_INTERFACE_EVENT_KEYBOARD: string
export const DBUS_INTERFACE_EVENT_MOUSE: string
export const DBUS_INTERFACE_EVENT_OBJECT: string
export const DBUS_INTERFACE_EVENT_SCREEN_READER: string
export const DBUS_INTERFACE_HYPERLINK: string
export const DBUS_INTERFACE_HYPERTEXT: string
export const DBUS_INTERFACE_IMAGE: string
export const DBUS_INTERFACE_REGISTRY: string
export const DBUS_INTERFACE_SELECTION: string
export const DBUS_INTERFACE_SOCKET: string
export const DBUS_INTERFACE_TABLE: string
export const DBUS_INTERFACE_TABLE_CELL: string
export const DBUS_INTERFACE_TEXT: string
export const DBUS_INTERFACE_VALUE: string
export const DBUS_NAME_REGISTRY: string
export const DBUS_PATH_DEC: string
export const DBUS_PATH_NULL: string
export const DBUS_PATH_REGISTRY: string
export const DBUS_PATH_ROOT: string
export const DBUS_PATH_SCREEN_READER: string
/**
 * One higher than the highest valid value of #AtspiEventType.
 */
export const EVENTTYPE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiKeyEventType.
 */
export const KEYEVENTTYPE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiKeySynthType.
 */
export const KEYSYNTHTYPE_COUNT: number
export const MATCHTYPES_COUNT: number
/**
 * One higher than the highest valid value of #AtspiModifierType.
 */
export const MODIFIERTYPE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiRelationType.
 */
export const RELATIONTYPE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiRole.
 */
export const ROLE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiScrollType.
 */
export const SCROLLTYPE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiCollectionSortOrder.
 */
export const SORTORDER_COUNT: number
/**
 * One higher than the highest valid value of #AtspiStateType.
 */
export const STATETYPE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiTextBoundaryType.
 */
export const TEXT_BOUNDARY_TYPE_COUNT: number
/**
 * One higher than the highest valid value of #AtspiTextClipType.
 */
export const TEXT_CLIP_TYPE_COUNT: number
export function deregister_device_event_listener(listener: DeviceListener, filter: object | null): boolean
export function deregister_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask): boolean
export function event_main(): void
export function event_quit(): void
export function exit(): number
export function generate_keyboard_event(keyval: number, keystring: string | null, synth_type: KeySynthType): boolean
export function generate_mouse_event(x: number, y: number, name: string): boolean
export function get_desktop(i: number): Accessible
export function get_desktop_count(): number
export function get_desktop_list(): Accessible[]
export function init(): number
export function is_initialized(): boolean
export function register_device_event_listener(listener: DeviceListener, event_types: DeviceEventMask, filter: object | null): boolean
export function register_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask, sync_type: KeyListenerSyncType): boolean
export function role_get_name(role: Role): string
export function set_main_context(cnx: GLib.MainContext): void
export function set_reference_window(accessible: Accessible): void
export function set_timeout(val: number, startup_time: number): void
/**
 * A callback function prototype via which clients receive device event notifications.
 * @callback 
 */
export interface DeviceListenerCB {
    (stroke: DeviceEvent): boolean
}
/**
 * Similar to #AtspiDeviceListenerCB, but with no user data.
 * @callback 
 */
export interface DeviceListenerSimpleCB {
    (stroke: DeviceEvent): boolean
}
/**
 * A function prototype for callbacks via which clients are notified of AT-SPI events.
 * @callback 
 */
export interface EventListenerCB {
    (event: Event): void
}
/**
 * Like #AtspiEventlistenerCB, but with no user_data.
 * @callback 
 */
export interface EventListenerSimpleCB {
    (event: Event): void
}
export interface Action_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Action {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Action */
    /**
     * Invoke the action indicated by #index.
     * @param i an integer specifying which action to invoke.
     */
    do_action(i: number): boolean
    /**
     * Get the description of '`i-th'` action invocable on an
     *      object implementing #AtspiAction.
     * @param i an integer indicating which action to query.
     */
    get_action_description(i: number): string
    /**
     * Get the keybindings for the `i-th` action invocable on an
     *      object implementing #AtspiAction, if any are defined.
     *      The keybindings string format is as follows:
     *        there are multiple parts to a keybinding string (typically 3).
     *        They are delimited with ";".  The first is the action's
     *        keybinding which is usable if the object implementing the action
     *        is currently posted to the screen, e.g. if a menu is posted
     *        then these keybindings for the corresponding menu-items are
     *        available.  The second keybinding substring is the full key sequence
     *        necessary to post the action's widget and activate it, e.g. for
     *        a menu item such as "File->Open" it would both post the menu and
     *        activate the item.  Thus the second keybinding string is available
     *        during the lifetime of the containing toplevel window as a whole,
     *        whereas the first keybinding string only works while the object
     *        implementing AtkAction is posted.  The third (and optional)
     *        keybinding string is the "keyboard shortcut" which invokes the
     *        action without posting any menus.
     *        Meta-keys are indicated by the conventional strings
     *        "&lt;Control&gt;", "&lt;Alt&gt;", "&lt;Shift&gt;", "&lt;Mod2&gt;",
     *        etc. (we use the same string as gtk_accelerator_name() in
     *        gtk+-2.X.
     * @param i an integer indicating which action to query.
     */
    get_key_binding(i: number): string
    /**
     * Get the name of the '`i-th'` action invocable on an
     *      object implementing #AtspiAction.
     * @param i an integer indicating which action to query.
     */
    get_localized_name(i: number): string
    /**
     * Get the number of actions invokable on an #AtspiAction implementor.
     */
    get_n_actions(): number
    /**
     * Get the name of the '`i-th'` action invocable on an
     *      object implementing #AtspiAction.
     * @param i an integer indicating which action to query.
     */
    get_action_name(i: number): string
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
    connect(sigName: "notify", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Action, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Action_ConstructProps)
    _init (config?: Action_ConstructProps): void
    static $gtype: GObject.GType<Action>
}
export interface Collection_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Collection {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Collection */
    get_active_descendant(): Accessible
    /**
     * Gets all #AtspiAccessible objects from the `collection` matching a given
     * `rule`.
     * @param rule An #AtspiMatchRule describing the match criteria.
     * @param sortby An #AtspiCollectionSortOrder specifying the way the results are to          be sorted.
     * @param count The maximum number of results to return, or 0 for no limit.
     * @param traverse Not supported.
     */
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    /**
     * Gets all #AtspiAccessible objects from the `collection,` before
     * `current_object,` matching a given `rule`.
     * @param current_object Upon reaching this object, searching should stop.
     * @param rule An #AtspiMatchRule describing the match criteria.
     * @param sortby An #AtspiCollectionSortOrder specifying the way the results are to          be sorted.
     * @param tree An #AtspiCollectionTreeTraversalType specifying restrictions on          the objects to be traversed.
     * @param count The maximum number of results to return, or 0 for no limit.
     * @param traverse Not supported.
     */
    get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    /**
     * Gets all #AtspiAccessible objects from the `collection,` after
     * `current_object,` matching a given `rule`.
     * @param current_object The object at which to start searching.
     * @param rule An #AtspiMatchRule describing the match criteria.
     * @param sortby An #AtspiCollectionSortOrder specifying the way the results are to          be sorted.
     * @param tree An #AtspiCollectionTreeTraversalType specifying restrictions on          the objects to be traversed.
     * @param limit_scope If #TRUE, only descendants of `current_object'`s parent          will be returned. Otherwise (if #FALSE), any accessible may be          returned if it would preceed `current_object` in a flattened          hierarchy.
     * @param count The maximum number of results to return, or 0 for no limit.
     * @param traverse Not supported.
     */
    get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[]
    /**
     * Not yet implemented.
     * @param test 
     */
    is_ancestor_of(test: Accessible): boolean
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
    connect(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Collection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Collection_ConstructProps)
    _init (config?: Collection_ConstructProps): void
    static $gtype: GObject.GType<Collection>
}
export interface Component_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Component {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Component */
    /**
     * Queries whether a given #AtspiComponent contains a particular point.
     * @param x a #gint specifying the x coordinate in question.
     * @param y a #gint specifying the y coordinate in question.
     * @param ctype the desired coordinate system of the point (`x,` `y)`         (e.g. CSPI_COORD_TYPE_WINDOW, CSPI_COORD_TYPE_SCREEN).
     */
    contains(x: number, y: number, ctype: CoordType): boolean
    /**
     * Gets the accessible child at a given coordinate within an #AtspiComponent.
     * @param x a #gint specifying the x coordinate of the point in question.
     * @param y a #gint specifying the y coordinate of the point in question.
     * @param ctype the coordinate system of the point (`x,` `y)`         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null
    /**
     * Gets the opacity/alpha value of a component, if alpha blending is in use.
     */
    get_alpha(): number
    /**
     * Gets the bounding box of the specified #AtspiComponent.
     * The returned values are meaningful only if the Component has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_extents(ctype: CoordType): Rect
    /**
     * Queries which layer the component is painted into, to help determine its
     *      visibility in terms of stacking order.
     */
    get_layer(): ComponentLayer
    /**
     * Queries the z stacking order of a component which is in the MDI or window
     *       layer. (Bigger z-order numbers mean nearer the top)
     */
    get_mdi_z_order(): number
    /**
     * Gets the minimum x and y coordinates of the specified #AtspiComponent.
     * The returned values are meaningful only if the Component has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_position(ctype: CoordType): Point
    /**
     * Gets the size of the specified #AtspiComponent.
     * The returned values are meaningful only if the Component has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_size(): Point
    /**
     * Attempts to set the keyboard input focus to the specified
     *         #AtspiComponent.
     */
    grab_focus(): boolean
    /**
     * Scrolls whatever container of the #AtspiComponent object so it becomes
     * visible on the screen.
     * @param type a #AtspiScrollType indicating where the object should be placed on the        screen.
     */
    scroll_to(type: ScrollType): boolean
    /**
     * Scrolls whatever container of the #AtspiComponent object so it becomes
     * visible on the screen at a given position.
     * @param coords a #AtspiCoordType indicating whether the coordinates are relative to          the screen, to the window, or to the parent object.
     * @param x the x coordinate of the point to reach
     * @param y the y coordinate of the point to reach
     */
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    /**
     * Moves and resizes the specified component.
     * @param x the new vertical position to which the component should be moved.
     * @param y the new horizontal position to which the component should be moved.
     * @param width the width to which the component should be resized.
     * @param height the height to which the component should be resized.
     * @param ctype the coordinate system in which the position is specified.         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    /**
     * Moves the component to the specified position.
     * @param x the new vertical position to which the component should be moved.
     * @param y the new horizontal position to which the component should be moved.
     * @param ctype the coordinate system in which the position is specified.         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    set_position(x: number, y: number, ctype: CoordType): boolean
    /**
     * Resizes the specified component to the given coordinates.
     * @param width the width to which the component should be resized.
     * @param height the height to which the component should be resized.
     */
    set_size(width: number, height: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Component, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Component_ConstructProps)
    _init (config?: Component_ConstructProps): void
    static $gtype: GObject.GType<Component>
}
export interface Document_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Document {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Document */
    /**
     * Gets the value of a single attribute, if specified for the document as a whole.
     * @param attribute a string indicating the name of a specific attribute.
     */
    get_document_attribute_value(attribute: string): string
    /**
     * Gets all constant attributes for the document as a whole. For attributes
     * that change within the document content, see `atspi_text_get_attribute_run` instead.
     */
    get_document_attributes(): GLib.HashTable
    /**
     * Gets the current page number of an #AccessibleDocument object.
     */
    get_current_page_number(): number
    /**
     * Gets the locale associated with the document's content,
     * e.g. the locale for LOCALE_TYPE_MESSAGES.
     */
    get_locale(): string
    /**
     * Gets the page count of an #AccessibleDocument object.
     */
    get_page_count(): number
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
    connect(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Document, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Document_ConstructProps)
    _init (config?: Document_ConstructProps): void
    static $gtype: GObject.GType<Document>
}
export interface EditableText_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class EditableText {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.EditableText */
    /**
     * Copies text from an #AtspiEditableText object into the system clipboard.
     * 
     * see: #atspi_editable_text_paste_text
     * @param start_pos a #gint indicating the starting character offset       of the text to copy.
     * @param end_pos a #gint indicating the offset of the first character       past the end of the text section to be copied.
     */
    copy_text(start_pos: number, end_pos: number): boolean
    /**
     * Deletes text from an #AtspiEditableText object, copying the
     *       excised portion into the system clipboard.
     * 
     * see: #atspi_editable_text_paste_text
     * @param start_pos a #gint indicating the starting character offset       of the text to cut.
     * @param end_pos a #gint indicating the offset of the first character       past the end of the text section to be cut.
     */
    cut_text(start_pos: number, end_pos: number): boolean
    /**
     * Deletes text from an #AtspiEditableText object, without copying the
     *       excised portion into the system clipboard.
     * 
     * see: #atspi_editable_text_cut_text
     * @param start_pos a #gint indicating the starting character offset       of the text to delete.
     * @param end_pos a #gint indicating the offset of the first character       past the end of the text section to be deleted.
     */
    delete_text(start_pos: number, end_pos: number): boolean
    /**
     * Inserts text into an #AtspiEditableText object.
     * As with all character offsets, the specified `position` may not be the
     * same as the resulting byte offset, since the text is in a
     * variable-width encoding.
     * @param position a #gint indicating the character offset at which to insert       the new text.
     * @param text a string representing the text to insert, in UTF-8 encoding.
     * @param length the number of characters of text to insert, in bytes. If the byte count of text is less than or equal to length, the entire contents of text will be inserted.
     */
    insert_text(position: number, text: string, length: number): boolean
    /**
     * Inserts text from the system clipboard into an #AtspiEditableText object.
     * As with all character offsets, the specified `position` may not be the
     *       same as the resulting byte offset, since the text is in a
     *       variable-width encoding.
     * @param position a #gint indicating the character offset at which to insert       the new text.
     */
    paste_text(position: number): boolean
    /**
     * Replace the entire text contents of an #AtspiEditableText object.
     * @param new_contents a character string, encoded in UTF-8, which is to      become the new text contents of the #AtspiEditableText object.
     */
    set_text_contents(new_contents: string): boolean
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
    connect(sigName: "notify", callback: (($obj: EditableText, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EditableText, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EditableText_ConstructProps)
    _init (config?: EditableText_ConstructProps): void
    static $gtype: GObject.GType<EditableText>
}
export interface Hypertext_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Hypertext {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Hypertext */
    /**
     * Gets the #AtspiHyperlink object at a specified index.
     * @param link_index a (zero-index) #gint indicating which hyperlink to query.
     */
    get_link(link_index: number): Hyperlink | null
    /**
     * Gets the index of the #AtspiHyperlink object at a specified
     *        character offset.
     * @param character_offset a #gint specifying the character offset to query.
     */
    get_link_index(character_offset: number): number
    /**
     * Gets the total number of #AtspiHyperlink objects that an
     * #AtspiHypertext implementor has.
     */
    get_n_links(): number
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
    connect(sigName: "notify", callback: (($obj: Hypertext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hypertext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Hypertext_ConstructProps)
    _init (config?: Hypertext_ConstructProps): void
    static $gtype: GObject.GType<Hypertext>
}
export interface Image_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Image {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Image */
    /**
     * Gets the description of the image displayed in an #AtspiImage object.
     */
    get_image_description(): string
    /**
     * Gets the bounding box of the image displayed in a
     *         specified #AtspiImage implementor.
     * The returned values are meaningful only if the Image has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_image_extents(ctype: CoordType): Rect
    /**
     * Gets the locale associated with an image and its textual representation.
     */
    get_image_locale(): string
    /**
     * Gets the minimum x and y coordinates of the image displayed in a
     *         specified #AtspiImage implementor.
     * The returned values are meaningful only if the Image has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_image_position(ctype: CoordType): Point
    /**
     * Gets the size of the image displayed in a specified #AtspiImage object.
     * The returned values are meaningful only if the Image has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_image_size(): Point
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
    connect(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Image, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Image_ConstructProps)
    _init (config?: Image_ConstructProps): void
    static $gtype: GObject.GType<Image>
}
export interface Selection_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Selection {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Selection */
    /**
     * Clears the current selection, removing all selected children from the
     *       specified #AtspiSelection implementor's selection list.
     */
    clear_selection(): boolean
    /**
     * Deselects a specific child of an #AtspiSelection.
     *          Note that `child_index` is the index of the child
     *          in the parent container.
     * 
     * See #atspi_selection_deselect_selected_child
     * @param child_index a #gint indicating which of the children              of the #AtspiAccessible is to be de-selected.
     */
    deselect_child(child_index: number): boolean
    /**
     * Removes a child from the selected children list of an #AtspiSelection.
     *          Note that `child_index` is the index in the selected-children list,
     *          not the index in the parent container.  `selectedChildIndex` in this
     *          method, and `child_index` in #atspi_selection_select_child
     *          are asymmetric.
     * @param selected_child_index a #gint indicating which of the selected children              of the #Accessible is to be selected.
     */
    deselect_selected_child(selected_child_index: number): boolean
    /**
     * Gets the number of children of an #AtspiSelection implementor which are
     *        currently selected.
     */
    get_n_selected_children(): number
    /**
     * Gets the i-th selected #AtspiAccessible child of an #AtspiSelection.
     *      Note that `selected_child_index` refers to the index in the list
     *      of 'selected'
     *      children and generally differs from that used in
     *      #atspi_accessible_get_child_at_index or returned by
     *      #atspi_accessible_get_index_in_parent.
     *      `selected_child_index` must lie between 0
     *      and #atspi_selection_get_n_selected_children - 1, inclusive.
     * @param selected_child_index a #gint indicating which of the selected      children is specified.
     */
    get_selected_child(selected_child_index: number): Accessible
    /**
     * Determines whether a particular child of an #AtspiSelection implementor
     *        is currently selected.  Note that `child_index` is the index into the
     *        standard #AtspiAccessible container's list of children.
     * @param child_index an index into the #AtspiSelection's list of children.
     */
    is_child_selected(child_index: number): boolean
    /**
     * Attempts to select all of the children of an #AtspiSelection implementor.
     * Not all #AtspiSelection implementors support this operation.
     */
    select_all(): boolean
    /**
     * Adds a child to the selected children list of an #AtspiSelection.
     *         For #AtspiSelection implementors that only allow
     *         single selections, this may replace the (single) current
     *         selection.
     * @param child_index a #gint indicating which child of the #Accessible              is to be selected.
     */
    select_child(child_index: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Selection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Selection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Selection_ConstructProps)
    _init (config?: Selection_ConstructProps): void
    static $gtype: GObject.GType<Selection>
}
export interface Table_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Table {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Table */
    /**
     * Selects the specified column, adding it to the current column selection.
     * Not all tables support column selection.
     * @param column the zero-indexed column number of the column being selected.
     */
    add_column_selection(column: number): boolean
    /**
     * Selects the specified row, adding it to the current row selection.
     * Not all tables support row selection.
     * @param row the zero-indexed row number of the row being selected.
     */
    add_row_selection(row: number): boolean
    /**
     * Gets the table cell at the specified row and column indices.
     * To get the accessible object at a particular (x, y) screen
     * coordinate, use #atspi_component_get_accessible_at_point.
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_accessible_at(row: number, column: number): Accessible
    /**
     * Gets an accessible representation of the caption for an #AtspiTable.
     */
    get_caption(): Accessible
    /**
     * Gets the table column index occupied by the child at a particular 1-D
     * child index.
     * 
     * `see` #atspi_table_get_index_at, #atspi_table_get_row_at_index
     * @param index the specified child index, zero-indexed.
     */
    get_column_at_index(index: number): number
    /**
     * Gets a text description of a particular table column.  This differs from
     * #atspi_table_get_column_header, which returns an #Accessible.
     * @param column the specified table column, zero-indexed.
     */
    get_column_description(column: number): string
    /**
     * Gets the number of columns spanned by the table cell at the specific
     * row and column (some tables can have cells which span multiple
     * rows and/or columns).
     * The returned values are meaningful only if the Table has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_column_extent_at(row: number, column: number): number
    /**
     * Gets the header associated with a table column, if available.
     * This differs from #atspi_table_get_column_description, which
     * returns a string.
     * @param column the specified table column, zero-indexed.
     */
    get_column_header(column: number): Accessible
    /**
     * Gets the 1-D child index corresponding to the specified 2-D row and
     * column indices. To get the accessible object at a particular (x, y) screen
     * coordinate, use #atspi_component_get_accessible_at_point.
     * 
     * `see` #atspi_table_get_row_at_index, #atspi_table_get_column_at_index
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_index_at(row: number, column: number): number
    /**
     * Gets the number of columns in an #AtspiTable,
     *        exclusive of any columns that are programmatically hidden, but inclusive
     *        of columns that may be outside of the current scrolling window or viewport.
     */
    get_n_columns(): number
    /**
     * Gets the number of rows in an #AtspiTable,
     *        exclusive of any rows that are programmatically hidden, but inclusive
     *        of rows that may be outside of the current scrolling window or viewport.
     */
    get_n_rows(): number
    /**
     * Queries a table to find out how many columns are currently selected.
     * Not all tables support column selection.
     */
    get_n_selected_columns(): number
    /**
     * Query a table to find out how many rows are currently selected.
     * Not all tables support row selection.
     */
    get_n_selected_rows(): number
    /**
     * Gets the table row index occupied by the child at a particular 1-D
     * child index.
     * 
     * `see` #atspi_table_get_index_at, #atspi_table_get_column_at_index
     * @param index the specified child index, zero-indexed.
     */
    get_row_at_index(index: number): number
    /**
     * Given a child index, determines the row and column indices and
     * extents, and whether the cell is currently selected.  If
     * the child at index is not a cell (for instance, if it is
     * a summary, caption, etc.), #FALSE is returned.
     * The returned values are meaningful only if the Table has both
     * STATE_VISIBLE and STATE_SHOWING.
     * 
     * Example:
     * If the #AtspiTable child at index '6' extends across columns 5 and 6 of
     * row 2 of an #AtspiTable instance, and is currently selected, then
     * 
     * retval = atspi_table_get_row_column_extents_at_index (table, 6,
     *                                             row, col,
     *                                             row_extents,
     *                                             col_extents,
     *                                             is_selected);
     * 
     * will return #TRUE, and after the call
     * row, col, row_extents, col_extents,
     * and is_selected will contain 2, 5, 1, 2, and
     * #TRUE, respectively.
     * @param index the index of the #AtspiTable child whose row/column extents are requested.
     */
    get_row_column_extents_at_index(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* row_extents */ number, /* col_extents */ number, /* is_selected */ boolean ]
    /**
     * Gets a text description of a particular table row.  This differs from
     * #atspi_table_get_row_header, which returns an #AtspiAccessible.
     * @param row the specified table row, zero-indexed.
     */
    get_row_description(row: number): string
    /**
     * Gets the number of rows spanned by the table cell at the specific row
     * and column. (some tables can have cells which span multiple rows
     * and/or columns).
     * The returned values are meaningful only if the Table has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_row_extent_at(row: number, column: number): number
    /**
     * Gets the header associated with a table row, if available. This differs from
     * #atspi_table_get_row_description, which returns a string.
     * @param row the specified table row, zero-indexed.
     */
    get_row_header(row: number): Accessible
    /**
     * Queries a table for a list of indices of columns which are currently
     * selected.
     */
    get_selected_columns(): number[]
    /**
     * Queries a table for a list of indices of rows which are currently selected.
     */
    get_selected_rows(): number[]
    /**
     * Gets an accessible object which summarizes the contents of an #AtspiTable.
     */
    get_summary(): Accessible
    /**
     * Determines whether specified table column is selected.
     * Not all tables support column selection.
     * @param column the zero-indexed column number of the column being queried.
     */
    is_column_selected(column: number): boolean
    /**
     * Determines whether a table row is selected.  Not all tables support
     * row selection.
     * @param row the zero-indexed row number of the row being queried.
     */
    is_row_selected(row: number): boolean
    /**
     * Determines whether the cell at a specific row and column is selected.
     * @param row the zero-indexed row of the cell being queried.
     * @param column the zero-indexed column of the cell being queried.
     */
    is_selected(row: number, column: number): boolean
    /**
     * De-selects the specified column, removing it from the current column
     * selection.
     * Not all tables support column selection.
     * @param column the zero-indexed column number of the column being de-selected.
     */
    remove_column_selection(column: number): boolean
    /**
     * De-selects the specified row, removing it from the current row selection.
     * Not all tables support row selection.
     * @param row the zero-indexed number of the row being de-selected.
     */
    remove_row_selection(row: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Table, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Table, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Table_ConstructProps)
    _init (config?: Table_ConstructProps): void
    static $gtype: GObject.GType<Table>
}
export interface TableCell_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class TableCell {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.TableCell */
    /**
     * Returns the column headers as an array of cell accessibles.
     */
    get_column_header_cells(): Accessible[]
    get_column_index(): number
    /**
     * Returns the number of columns occupied by this cell accessible.
     * The returned values are meaningful only if the table cell has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_column_span(): number
    /**
     * Retrieves the tabular position of this cell.
     */
    get_position(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    /**
     * Gets the row and column indexes and extents of this cell accessible.
     * The returned values are meaningful only if the table cell has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_row_column_span(): [ /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    /**
     * Returns the row headers as an array of cell accessibles.
     */
    get_row_header_cells(): Accessible[]
    /**
     * Returns the number of rows occupied by this cell accessible.
     * The returned values are meaningful only if the table cell has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_row_span(): number
    /**
     * Returns a reference to the accessible of the containing table.
     */
    get_table(): Accessible
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
    connect(sigName: "notify", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: TableCell, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: TableCell_ConstructProps)
    _init (config?: TableCell_ConstructProps): void
    static $gtype: GObject.GType<TableCell>
}
export interface Text_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Text {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Text */
    /**
     * Selects some text (adds a text selection) in an #AtspiText object.
     * @param start_offset the starting offset of the desired new selection.
     * @param end_offset the offset of the first character after the new selection.
     */
    add_selection(start_offset: number, end_offset: number): boolean
    /**
     * Gets a set of attributes applied to a range of text from an #AtspiText object, optionally
     * including its 'default' attributes.
     * @param offset a #gint indicating the offset from which the attribute        search is based.
     * @param include_defaults a #bool that, when set as #FALSE, indicates the call should only return those attributes which are explicitly set on the current attribute run, omitting any attributes which are inherited from the default values.
     */
    get_attribute_run(offset: number, include_defaults: boolean): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the value of a named attribute at a given offset.
     * @param offset The character offset at which to query the attribute.
     * @param attribute_name The attribute to query.
     */
    get_text_attribute_value(offset: number, attribute_name: string): string | null
    /**
     * Gets the attributes applied to a range of text from an #AtspiText
     * object. The text attributes correspond to CSS attributes
     * where possible.
     * <em>DEPRECATED</em>
     * @param offset a #gint indicating the offset from which the attribute        search is based.
     */
    get_text_attributes(offset: number): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the ranges of text from an #AtspiText object which lie within the
     *          bounds defined by (`x,` `y)` and (`x+``width,` `y+``height)`.
     * @param x the 'starting' x coordinate of the bounding box.
     * @param y the 'starting' y coordinate of the bounding box.
     * @param width the x extent of the bounding box.
     * @param height the y extent of the bounding box.
     * @param type an #AccessibleCoordType indicating the coordinate system to use        for the returned values.
     * @param clipTypeX an #AtspiTextClipType indicating how to treat characters that        intersect the bounding box's x extents.
     * @param clipTypeY an #AtspiTextClipType indicating how to treat characters that        intersect the bounding box's y extents.
     */
    get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    /**
     * Gets the current offset of the text caret in an #AtspiText object.
     */
    get_caret_offset(): number
    /**
     * Gets the character at a given offset for an #AtspiText object.
     * @param offset a #gint indicating the text offset where the desired          character is located.
     */
    get_character_at_offset(offset: number): number
    /**
     * Gets the character count of an #AccessibleText object.
     */
    get_character_count(): number
    /**
     * Gets a bounding box containing the glyph representing
     *        the character at a particular text offset.
     * The returned values are meaningful only if the Text has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param offset a #gint indicating the offset of the text character for        whom boundary information is requested.
     * @param type an #AccessibleCoordType indicating the coordinate system to use        for the returned values.
     */
    get_character_extents(offset: number, type: CoordType): Rect
    /**
     * Gets the default attributes applied to an #AtspiText
     * object. The text attributes correspond to CSS attributes
     * where possible. The combination of this attribute set and
     * the attributes reported by #atspi_text_get_attributes
     * describes the entire set of text attributes over a range.
     */
    get_default_attributes(): GLib.HashTable
    /**
     * Gets the number of active non-contiguous selections for an
     *          #AtspiText object.
     */
    get_n_selections(): number
    /**
     * Gets the character offset into the text at a given point.
     * @param x the x coordinate of the point to be queried.
     * @param y the y coordinate of the point to be queried.
     * @param type an #AtspiCoordType indicating the coordinate system in which       the values should be returned.
     */
    get_offset_at_point(x: number, y: number, type: CoordType): number
    /**
     * Gets the bounding box for text within a range in an  #AtspiText object.
     * The returned values are meaningful only if the Text has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param start_offset a #gint indicating the offset of the first text character for        whom boundary information is requested.
     * @param end_offset a #gint indicating the offset of the text character        after the last character for whom boundary information is requested.
     * @param type an #AtspiCoordType indicating the coordinate system to use        for the returned values.
     */
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect
    /**
     * Gets the bounds of the `selection_num-th` active text selection for an
     *         #AtspiText object.
     * @param selection_num a #gint indicating which selection to query.
     */
    get_selection(selection_num: number): Range
    /**
     * Gets a portion of the text exposed through an #AtspiText according to a given `offset`
     * and a specific `granularity,` along with the start and end offsets defining the
     * boundaries of such a portion of text.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_CHAR the character at the
     * offset is returned.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_WORD the returned string
     * is from the word start at or before the offset to the word start after
     * the offset.
     * 
     * The returned string will contain the word at the offset if the offset
     * is inside a word and will contain the word before the offset if the
     * offset is not inside a word.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_SENTENCE the returned string
     * is from the sentence start at or before the offset to the sentence
     * start after the offset.
     * 
     * The returned string will contain the sentence at the offset if the offset
     * is inside a sentence and will contain the sentence before the offset
     * if the offset is not inside a sentence.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_LINE the returned string
     * is from the line start at or before the offset to the line
     * start after the offset.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_PARAGRAPH the returned string
     * is from the start of the paragraph at or before the offset to the start
     * of the following paragraph after the offset.
     * @param offset position
     * @param granularity An #AtspiTextGranularity
     */
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange
    /**
     * Gets a range of text from an #AtspiText object.  The number of bytes
     *          in the returned string may exceed either end_offset or start_offset, since
     *          UTF-8 is a variable-width encoding.
     * @param start_offset a #gint indicating the start of the desired text range.
     * @param end_offset a #gint indicating the first character past the desired range.
     */
    get_text(start_offset: number, end_offset: number): string
    /**
     * Gets delimited text from an #AtspiText object which follows a given
     *          text offset.
     * @param offset a #gint indicating the offset from which the delimiter        search is based.
     * @param type an #AtspiTextBoundaryType indicating whether the desired       text string is a word, sentence, line, or attribute run.
     */
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange
    /**
     * Gets delimited text from an #AtspiText object which includes a given
     *          text offset.
     * @param offset a #gint indicating the offset from which the delimiter        search is based.
     * @param type an #AtspiTextBoundaryType indicating whether the desired       text string is a word, sentence, line, or attribute run.
     */
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange
    /**
     * Gets delimited text from an #AtspiText object which precedes a given
     *          text offset.
     * @param offset a #gint indicating the offset from which the delimiter        search is based.
     * @param type an #AtspiTextBoundaryType indicating whether the desired       text string is a word, sentence, line, or attribute run.
     */
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange
    /**
     * De-selects a text selection.
     * @param selection_num a #gint indicating which text selection to remove.
     */
    remove_selection(selection_num: number): boolean
    /**
     * Scrolls whatever container of the #AtspiText text range so it becomes
     * visible on the screen.
     * @param start_offset a #gint indicating the start of the desired text range.
     * @param end_offset a #gint indicating the first character past the desired range.
     * @param type a #AtspiScrollType indicating where the object should be placed on the        screen.
     */
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    /**
     * Scrolls whatever container of the #AtspiText text range so it becomes
     * visible on the screen at a given position.
     * @param start_offset a #gint indicating the start of the desired text range.
     * @param end_offset a #gint indicating the first character past the desired range.
     * @param coords a #AtspiCoordType indicating whether the coordinates are relative to          the screen, to the window, or to the parent object.
     * @param x the x coordinate of the point to reach
     * @param y the y coordinate of the point to reach
     */
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    /**
     * Moves the text caret to a given position.
     * @param new_offset the offset to which the text caret is to be moved.
     */
    set_caret_offset(new_offset: number): boolean
    /**
     * Changes the bounds of an existing #AtspiText text selection.
     * @param selection_num a zero-offset index indicating which text selection to modify.
     * @param start_offset a #gint indicating the new starting offset for the selection.
     * @param end_offset a #gint indicating the desired new offset of the first character             after the selection.
     */
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Text, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Text_ConstructProps)
    _init (config?: Text_ConstructProps): void
    static $gtype: GObject.GType<Text>
}
export interface Value_ConstructProps extends GObject.Object_ConstructProps {
}
/**
 * @interface 
 */
export class Value {
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Value */
    /**
     * Gets the current value for an #AtspiValue.
     */
    get_current_value(): number
    /**
     * Gets the maximum allowed value for an #AtspiValue.
     */
    get_maximum_value(): number
    /**
     * Gets the minimum increment by which an #AtspiValue can be adjusted.
     */
    get_minimum_increment(): number
    /**
     * Gets the minimum allowed value for an #AtspiValue.
     */
    get_minimum_value(): number
    /**
     * Sets the current value of an #AtspiValue.
     * @param new_value a #gdouble value which is the desired new value of the object.
     */
    set_current_value(new_value: number): boolean
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
    connect(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Value, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Value_ConstructProps)
    _init (config?: Value_ConstructProps): void
    static $gtype: GObject.GType<Value>
}
export interface Accessible_ConstructProps extends Object_ConstructProps {
}
export class Accessible {
    /* Own fields of Atspi-2.0.Atspi.Accessible */
    parent: Object
    accessible_parent: Accessible
    children: object[]
    role: Role
    interfaces: number
    name: string
    description: string
    states: StateSet
    attributes: GLib.HashTable
    cached_properties: number
    priv: AccessiblePrivate
    /* Extended fields of Atspi-2.0.Atspi.Object */
    app: Application
    path: string
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Accessible */
    /**
     * Clears the cached information for the given accessible and all of its
     * descendants.
     */
    clear_cache(): void
    /**
     * Gets the accessible id of the accessible.  This is not meant to be presented
     * to the user, but to be an id which is stable over application development.
     * Typically, this is the gtkbuilder id.
     */
    get_accessible_id(): string
    /**
     * Gets the #AtspiAction interface for an #AtspiAccessible.
     */
    get_action_iface(): Action
    /**
     * Gets the containing #AtspiApplication for an object.
     */
    get_application(): Accessible
    /**
     * Gets the AT-SPI IPC specification version supported by the application
     * pointed to by the #AtspiAccessible object.
     * Only works on application root objects.
     */
    get_atspi_version(): string
    /**
     * Gets the #AttributeSet representing any assigned
     * name-value pair attributes or annotations for this object.
     * For typographic, textual, or textually-semantic attributes, see
     * atspi_text_get_attributes instead.
     */
    get_attributes(): GLib.HashTable
    /**
     * Gets a #GArray representing any assigned
     * name-value pair attributes or annotations for this object.
     * For typographic, textual, or textually-semantic attributes, see
     * atspi_text_get_attributes_as_array instead.
     */
    get_attributes_as_array(): string[]
    /**
     * Gets the #AtspiAccessible child of an #AtspiAccessible object at a given index.
     * @param child_index a #long indicating which child is specified.
     */
    get_child_at_index(child_index: number): Accessible
    /**
     * Gets the number of children contained by an #AtspiAccessible object.
     */
    get_child_count(): number
    /**
     * Gets the #AtspiCollection interface for an #AtspiAccessible.
     */
    get_collection_iface(): Collection
    /**
     * Gets the #AtspiComponent interface for an #AtspiAccessible.
     */
    get_component_iface(): Component
    /**
     * Gets the description of an #AtspiAccessible object.
     */
    get_description(): string
    /**
     * Gets the #AtspiDocument interface for an #AtspiAccessible.
     */
    get_document_iface(): Document
    /**
     * Gets the #AtspiEditableText interface for an #AtspiAccessible.
     */
    get_editable_text_iface(): EditableText
    /**
     * Gets the #AtspiHyperlink interface for an #AtspiAccessible.
     */
    get_hyperlink(): Hyperlink
    /**
     * Gets the #AtspiHypertext interface for an #AtspiAccessible.
     */
    get_hypertext_iface(): Hypertext
    /**
     * Gets the application id for a #AtspiAccessible object.
     * Only works on application root objects.
     */
    get_id(): number
    /**
     * Gets the #AtspiImage interface for an #AtspiAccessible.
     */
    get_image_iface(): Image
    /**
     * Gets the index of an #AtspiAccessible object within its parent's
     * #AtspiAccessible children list.
     */
    get_index_in_parent(): number
    /**
     * A set of pointers to all interfaces supported by an #AtspiAccessible.
     */
    get_interfaces(): string[]
    /**
     * Gets a UTF-8 string corresponding to the name of the role played by an
     * object, translated to the current locale.
     * This method will return useful values for roles that fall outside the
     * enumeration used in atspi_accessible_getRole ().
     */
    get_localized_role_name(): string
    /**
     * Gets the name of an #AtspiAccessible object.
     */
    get_name(): string
    get_object_locale(): string
    /**
     * Gets an #AtspiAccessible object's parent container.
     */
    get_parent(): Accessible | null
    /**
     * Returns the process id associated with the given accessible.  Mainly
     * added for debugging; it is a shortcut to explicitly querying the
     * accessible's app->bus_name and then calling GetConnectionUnixProcessID.
     */
    get_process_id(): number
    /**
     * Gets the set of #AtspiRelation objects which describes this #AtspiAccessible object's
     * relationships with other #AtspiAccessible objects.
     */
    get_relation_set(): Relation[]
    /**
     * Gets the UI role played by an #AtspiAccessible object.
     * This role's name can be obtained via atspi_accessible_get_role_name ().
     */
    get_role(): Role
    /**
     * Gets a UTF-8 string corresponding to the name of the role played by an object.
     * This method will return useful values for roles that fall outside the
     * enumeration used in atspi_accessible_get_role ().
     */
    get_role_name(): string
    /**
     * Gets the #AtspiSelection interface for an #AtspiAccessible.
     */
    get_selection_iface(): Selection
    /**
     * Gets the states currently held by an object.
     */
    get_state_set(): StateSet
    /**
     * Gets the #AtspiTable interface for an #AtspiAccessible.
     */
    get_table_iface(): Table
    /**
     * Gets the #AtspiTableCell interface for an #AtspiAccessible.
     */
    get_table_cell(): TableCell
    /**
     * Gets the #AtspiTable interface for an #AtspiAccessible.
     */
    get_text_iface(): Text
    /**
     * Gets the toolkit name for an #AtspiAccessible object.
     * Only works on application root objects.
     */
    get_toolkit_name(): string
    /**
     * Gets the toolkit version for an #AtspiAccessible object.
     * Only works on application root objects.
     */
    get_toolkit_version(): string
    /**
     * Gets the #AtspiTable interface for an #AtspiAccessible.
     */
    get_value_iface(): Value
    /**
     * Sets the type of data to cache for accessibles.
     * If this is not set for an application or is reset to ATSPI_CACHE_UNDEFINED,
     * then the desktop's cache flag will be used.
     * If the desktop's cache flag is also undefined, then all possible data will
     * be cached.
     * This function is intended to work around bugs in toolkits where the proper
     * events are not raised / to aid in testing for such bugs.
     * @param mask An #AtspiCache specifying a bit mask of the types of data to cache.
     */
    set_cache_mask(mask: Cache): void
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
    /* Implemented methods of Atspi-2.0.Atspi.Action */
    /**
     * Invoke the action indicated by #index.
     * @param i an integer specifying which action to invoke.
     */
    do_action(i: number): boolean
    /**
     * Get the description of '`i-th'` action invocable on an
     *      object implementing #AtspiAction.
     * @param i an integer indicating which action to query.
     */
    get_action_description(i: number): string
    /**
     * Get the keybindings for the `i-th` action invocable on an
     *      object implementing #AtspiAction, if any are defined.
     *      The keybindings string format is as follows:
     *        there are multiple parts to a keybinding string (typically 3).
     *        They are delimited with ";".  The first is the action's
     *        keybinding which is usable if the object implementing the action
     *        is currently posted to the screen, e.g. if a menu is posted
     *        then these keybindings for the corresponding menu-items are
     *        available.  The second keybinding substring is the full key sequence
     *        necessary to post the action's widget and activate it, e.g. for
     *        a menu item such as "File->Open" it would both post the menu and
     *        activate the item.  Thus the second keybinding string is available
     *        during the lifetime of the containing toplevel window as a whole,
     *        whereas the first keybinding string only works while the object
     *        implementing AtkAction is posted.  The third (and optional)
     *        keybinding string is the "keyboard shortcut" which invokes the
     *        action without posting any menus.
     *        Meta-keys are indicated by the conventional strings
     *        "&lt;Control&gt;", "&lt;Alt&gt;", "&lt;Shift&gt;", "&lt;Mod2&gt;",
     *        etc. (we use the same string as gtk_accelerator_name() in
     *        gtk+-2.X.
     * @param i an integer indicating which action to query.
     */
    get_key_binding(i: number): string
    /**
     * Get the name of the '`i-th'` action invocable on an
     *      object implementing #AtspiAction.
     * @param i an integer indicating which action to query.
     */
    get_localized_name(i: number): string
    /**
     * Get the number of actions invokable on an #AtspiAction implementor.
     */
    get_n_actions(): number
    /**
     * Get the name of the '`i-th'` action invocable on an
     *      object implementing #AtspiAction.
     * @param i an integer indicating which action to query.
     */
    get_action_name(i: number): string
    /* Implemented methods of Atspi-2.0.Atspi.Collection */
    get_active_descendant(): Accessible
    /**
     * Gets all #AtspiAccessible objects from the `collection` matching a given
     * `rule`.
     * @param rule An #AtspiMatchRule describing the match criteria.
     * @param sortby An #AtspiCollectionSortOrder specifying the way the results are to          be sorted.
     * @param count The maximum number of results to return, or 0 for no limit.
     * @param traverse Not supported.
     */
    get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[]
    /**
     * Gets all #AtspiAccessible objects from the `collection,` before
     * `current_object,` matching a given `rule`.
     * @param current_object Upon reaching this object, searching should stop.
     * @param rule An #AtspiMatchRule describing the match criteria.
     * @param sortby An #AtspiCollectionSortOrder specifying the way the results are to          be sorted.
     * @param tree An #AtspiCollectionTreeTraversalType specifying restrictions on          the objects to be traversed.
     * @param count The maximum number of results to return, or 0 for no limit.
     * @param traverse Not supported.
     */
    get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[]
    /**
     * Gets all #AtspiAccessible objects from the `collection,` after
     * `current_object,` matching a given `rule`.
     * @param current_object The object at which to start searching.
     * @param rule An #AtspiMatchRule describing the match criteria.
     * @param sortby An #AtspiCollectionSortOrder specifying the way the results are to          be sorted.
     * @param tree An #AtspiCollectionTreeTraversalType specifying restrictions on          the objects to be traversed.
     * @param limit_scope If #TRUE, only descendants of `current_object'`s parent          will be returned. Otherwise (if #FALSE), any accessible may be          returned if it would preceed `current_object` in a flattened          hierarchy.
     * @param count The maximum number of results to return, or 0 for no limit.
     * @param traverse Not supported.
     */
    get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[]
    /**
     * Not yet implemented.
     * @param test 
     */
    is_ancestor_of(test: Accessible): boolean
    /* Implemented methods of Atspi-2.0.Atspi.Component */
    /**
     * Queries whether a given #AtspiComponent contains a particular point.
     * @param x a #gint specifying the x coordinate in question.
     * @param y a #gint specifying the y coordinate in question.
     * @param ctype the desired coordinate system of the point (`x,` `y)`         (e.g. CSPI_COORD_TYPE_WINDOW, CSPI_COORD_TYPE_SCREEN).
     */
    contains(x: number, y: number, ctype: CoordType): boolean
    /**
     * Gets the accessible child at a given coordinate within an #AtspiComponent.
     * @param x a #gint specifying the x coordinate of the point in question.
     * @param y a #gint specifying the y coordinate of the point in question.
     * @param ctype the coordinate system of the point (`x,` `y)`         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null
    /**
     * Gets the opacity/alpha value of a component, if alpha blending is in use.
     */
    get_alpha(): number
    /**
     * Gets the bounding box of the specified #AtspiComponent.
     * The returned values are meaningful only if the Component has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_extents(ctype: CoordType): Rect
    /**
     * Queries which layer the component is painted into, to help determine its
     *      visibility in terms of stacking order.
     */
    get_layer(): ComponentLayer
    /**
     * Queries the z stacking order of a component which is in the MDI or window
     *       layer. (Bigger z-order numbers mean nearer the top)
     */
    get_mdi_z_order(): number
    /**
     * Gets the minimum x and y coordinates of the specified #AtspiComponent.
     * The returned values are meaningful only if the Component has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_position(ctype: CoordType): Point
    /**
     * Gets the size of the specified #AtspiComponent.
     * The returned values are meaningful only if the Component has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_size(): Point
    /**
     * Attempts to set the keyboard input focus to the specified
     *         #AtspiComponent.
     */
    grab_focus(): boolean
    /**
     * Scrolls whatever container of the #AtspiComponent object so it becomes
     * visible on the screen.
     * @param type a #AtspiScrollType indicating where the object should be placed on the        screen.
     */
    scroll_to(type: ScrollType): boolean
    /**
     * Scrolls whatever container of the #AtspiComponent object so it becomes
     * visible on the screen at a given position.
     * @param coords a #AtspiCoordType indicating whether the coordinates are relative to          the screen, to the window, or to the parent object.
     * @param x the x coordinate of the point to reach
     * @param y the y coordinate of the point to reach
     */
    scroll_to_point(coords: CoordType, x: number, y: number): boolean
    /**
     * Moves and resizes the specified component.
     * @param x the new vertical position to which the component should be moved.
     * @param y the new horizontal position to which the component should be moved.
     * @param width the width to which the component should be resized.
     * @param height the height to which the component should be resized.
     * @param ctype the coordinate system in which the position is specified.         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean
    /**
     * Moves the component to the specified position.
     * @param x the new vertical position to which the component should be moved.
     * @param y the new horizontal position to which the component should be moved.
     * @param ctype the coordinate system in which the position is specified.         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    set_position(x: number, y: number, ctype: CoordType): boolean
    /**
     * Resizes the specified component to the given coordinates.
     * @param width the width to which the component should be resized.
     * @param height the height to which the component should be resized.
     */
    set_size(width: number, height: number): boolean
    /* Implemented methods of Atspi-2.0.Atspi.Document */
    /**
     * Gets the value of a single attribute, if specified for the document as a whole.
     * @param attribute a string indicating the name of a specific attribute.
     */
    get_document_attribute_value(attribute: string): string
    /**
     * Gets all constant attributes for the document as a whole. For attributes
     * that change within the document content, see `atspi_text_get_attribute_run` instead.
     */
    get_document_attributes(): GLib.HashTable
    /**
     * Gets the current page number of an #AccessibleDocument object.
     */
    get_current_page_number(): number
    /**
     * Gets the locale associated with the document's content,
     * e.g. the locale for LOCALE_TYPE_MESSAGES.
     */
    get_locale(): string
    /**
     * Gets the page count of an #AccessibleDocument object.
     */
    get_page_count(): number
    /* Implemented methods of Atspi-2.0.Atspi.EditableText */
    /**
     * Copies text from an #AtspiEditableText object into the system clipboard.
     * 
     * see: #atspi_editable_text_paste_text
     * @param start_pos a #gint indicating the starting character offset       of the text to copy.
     * @param end_pos a #gint indicating the offset of the first character       past the end of the text section to be copied.
     */
    copy_text(start_pos: number, end_pos: number): boolean
    /**
     * Deletes text from an #AtspiEditableText object, copying the
     *       excised portion into the system clipboard.
     * 
     * see: #atspi_editable_text_paste_text
     * @param start_pos a #gint indicating the starting character offset       of the text to cut.
     * @param end_pos a #gint indicating the offset of the first character       past the end of the text section to be cut.
     */
    cut_text(start_pos: number, end_pos: number): boolean
    /**
     * Deletes text from an #AtspiEditableText object, without copying the
     *       excised portion into the system clipboard.
     * 
     * see: #atspi_editable_text_cut_text
     * @param start_pos a #gint indicating the starting character offset       of the text to delete.
     * @param end_pos a #gint indicating the offset of the first character       past the end of the text section to be deleted.
     */
    delete_text(start_pos: number, end_pos: number): boolean
    /**
     * Inserts text into an #AtspiEditableText object.
     * As with all character offsets, the specified `position` may not be the
     * same as the resulting byte offset, since the text is in a
     * variable-width encoding.
     * @param position a #gint indicating the character offset at which to insert       the new text.
     * @param text a string representing the text to insert, in UTF-8 encoding.
     * @param length the number of characters of text to insert, in bytes. If the byte count of text is less than or equal to length, the entire contents of text will be inserted.
     */
    insert_text(position: number, text: string, length: number): boolean
    /**
     * Inserts text from the system clipboard into an #AtspiEditableText object.
     * As with all character offsets, the specified `position` may not be the
     *       same as the resulting byte offset, since the text is in a
     *       variable-width encoding.
     * @param position a #gint indicating the character offset at which to insert       the new text.
     */
    paste_text(position: number): boolean
    /**
     * Replace the entire text contents of an #AtspiEditableText object.
     * @param new_contents a character string, encoded in UTF-8, which is to      become the new text contents of the #AtspiEditableText object.
     */
    set_text_contents(new_contents: string): boolean
    /* Implemented methods of Atspi-2.0.Atspi.Hypertext */
    /**
     * Gets the #AtspiHyperlink object at a specified index.
     * @param link_index a (zero-index) #gint indicating which hyperlink to query.
     */
    get_link(link_index: number): Hyperlink | null
    /**
     * Gets the index of the #AtspiHyperlink object at a specified
     *        character offset.
     * @param character_offset a #gint specifying the character offset to query.
     */
    get_link_index(character_offset: number): number
    /**
     * Gets the total number of #AtspiHyperlink objects that an
     * #AtspiHypertext implementor has.
     */
    get_n_links(): number
    /* Implemented methods of Atspi-2.0.Atspi.Image */
    /**
     * Gets the description of the image displayed in an #AtspiImage object.
     */
    get_image_description(): string
    /**
     * Gets the bounding box of the image displayed in a
     *         specified #AtspiImage implementor.
     * The returned values are meaningful only if the Image has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_image_extents(ctype: CoordType): Rect
    /**
     * Gets the locale associated with an image and its textual representation.
     */
    get_image_locale(): string
    /**
     * Gets the minimum x and y coordinates of the image displayed in a
     *         specified #AtspiImage implementor.
     * The returned values are meaningful only if the Image has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param ctype the desired coordinate system into which to return the results,         (e.g. ATSPI_COORD_TYPE_WINDOW, ATSPI_COORD_TYPE_SCREEN).
     */
    get_image_position(ctype: CoordType): Point
    /**
     * Gets the size of the image displayed in a specified #AtspiImage object.
     * The returned values are meaningful only if the Image has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_image_size(): Point
    /* Implemented methods of Atspi-2.0.Atspi.Selection */
    /**
     * Clears the current selection, removing all selected children from the
     *       specified #AtspiSelection implementor's selection list.
     */
    clear_selection(): boolean
    /**
     * Deselects a specific child of an #AtspiSelection.
     *          Note that `child_index` is the index of the child
     *          in the parent container.
     * 
     * See #atspi_selection_deselect_selected_child
     * @param child_index a #gint indicating which of the children              of the #AtspiAccessible is to be de-selected.
     */
    deselect_child(child_index: number): boolean
    /**
     * Removes a child from the selected children list of an #AtspiSelection.
     *          Note that `child_index` is the index in the selected-children list,
     *          not the index in the parent container.  `selectedChildIndex` in this
     *          method, and `child_index` in #atspi_selection_select_child
     *          are asymmetric.
     * @param selected_child_index a #gint indicating which of the selected children              of the #Accessible is to be selected.
     */
    deselect_selected_child(selected_child_index: number): boolean
    /**
     * Gets the number of children of an #AtspiSelection implementor which are
     *        currently selected.
     */
    get_n_selected_children(): number
    /**
     * Gets the i-th selected #AtspiAccessible child of an #AtspiSelection.
     *      Note that `selected_child_index` refers to the index in the list
     *      of 'selected'
     *      children and generally differs from that used in
     *      #atspi_accessible_get_child_at_index or returned by
     *      #atspi_accessible_get_index_in_parent.
     *      `selected_child_index` must lie between 0
     *      and #atspi_selection_get_n_selected_children - 1, inclusive.
     * @param selected_child_index a #gint indicating which of the selected      children is specified.
     */
    get_selected_child(selected_child_index: number): Accessible
    /**
     * Determines whether a particular child of an #AtspiSelection implementor
     *        is currently selected.  Note that `child_index` is the index into the
     *        standard #AtspiAccessible container's list of children.
     * @param child_index an index into the #AtspiSelection's list of children.
     */
    is_child_selected(child_index: number): boolean
    /**
     * Attempts to select all of the children of an #AtspiSelection implementor.
     * Not all #AtspiSelection implementors support this operation.
     */
    select_all(): boolean
    /**
     * Adds a child to the selected children list of an #AtspiSelection.
     *         For #AtspiSelection implementors that only allow
     *         single selections, this may replace the (single) current
     *         selection.
     * @param child_index a #gint indicating which child of the #Accessible              is to be selected.
     */
    select_child(child_index: number): boolean
    /* Implemented methods of Atspi-2.0.Atspi.Table */
    /**
     * Selects the specified column, adding it to the current column selection.
     * Not all tables support column selection.
     * @param column the zero-indexed column number of the column being selected.
     */
    add_column_selection(column: number): boolean
    /**
     * Selects the specified row, adding it to the current row selection.
     * Not all tables support row selection.
     * @param row the zero-indexed row number of the row being selected.
     */
    add_row_selection(row: number): boolean
    /**
     * Gets the table cell at the specified row and column indices.
     * To get the accessible object at a particular (x, y) screen
     * coordinate, use #atspi_component_get_accessible_at_point.
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_accessible_at(row: number, column: number): Accessible
    /**
     * Gets an accessible representation of the caption for an #AtspiTable.
     */
    get_caption(): Accessible
    /**
     * Gets the table column index occupied by the child at a particular 1-D
     * child index.
     * 
     * `see` #atspi_table_get_index_at, #atspi_table_get_row_at_index
     * @param index the specified child index, zero-indexed.
     */
    get_column_at_index(index: number): number
    /**
     * Gets a text description of a particular table column.  This differs from
     * #atspi_table_get_column_header, which returns an #Accessible.
     * @param column the specified table column, zero-indexed.
     */
    get_column_description(column: number): string
    /**
     * Gets the number of columns spanned by the table cell at the specific
     * row and column (some tables can have cells which span multiple
     * rows and/or columns).
     * The returned values are meaningful only if the Table has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_column_extent_at(row: number, column: number): number
    /**
     * Gets the header associated with a table column, if available.
     * This differs from #atspi_table_get_column_description, which
     * returns a string.
     * @param column the specified table column, zero-indexed.
     */
    get_column_header(column: number): Accessible
    /**
     * Gets the 1-D child index corresponding to the specified 2-D row and
     * column indices. To get the accessible object at a particular (x, y) screen
     * coordinate, use #atspi_component_get_accessible_at_point.
     * 
     * `see` #atspi_table_get_row_at_index, #atspi_table_get_column_at_index
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_index_at(row: number, column: number): number
    /**
     * Gets the number of columns in an #AtspiTable,
     *        exclusive of any columns that are programmatically hidden, but inclusive
     *        of columns that may be outside of the current scrolling window or viewport.
     */
    get_n_columns(): number
    /**
     * Gets the number of rows in an #AtspiTable,
     *        exclusive of any rows that are programmatically hidden, but inclusive
     *        of rows that may be outside of the current scrolling window or viewport.
     */
    get_n_rows(): number
    /**
     * Queries a table to find out how many columns are currently selected.
     * Not all tables support column selection.
     */
    get_n_selected_columns(): number
    /**
     * Query a table to find out how many rows are currently selected.
     * Not all tables support row selection.
     */
    get_n_selected_rows(): number
    /**
     * Gets the table row index occupied by the child at a particular 1-D
     * child index.
     * 
     * `see` #atspi_table_get_index_at, #atspi_table_get_column_at_index
     * @param index the specified child index, zero-indexed.
     */
    get_row_at_index(index: number): number
    /**
     * Given a child index, determines the row and column indices and
     * extents, and whether the cell is currently selected.  If
     * the child at index is not a cell (for instance, if it is
     * a summary, caption, etc.), #FALSE is returned.
     * The returned values are meaningful only if the Table has both
     * STATE_VISIBLE and STATE_SHOWING.
     * 
     * Example:
     * If the #AtspiTable child at index '6' extends across columns 5 and 6 of
     * row 2 of an #AtspiTable instance, and is currently selected, then
     * 
     * retval = atspi_table_get_row_column_extents_at_index (table, 6,
     *                                             row, col,
     *                                             row_extents,
     *                                             col_extents,
     *                                             is_selected);
     * 
     * will return #TRUE, and after the call
     * row, col, row_extents, col_extents,
     * and is_selected will contain 2, 5, 1, 2, and
     * #TRUE, respectively.
     * @param index the index of the #AtspiTable child whose row/column extents are requested.
     */
    get_row_column_extents_at_index(index: number): [ /* returnType */ boolean, /* row */ number, /* col */ number, /* row_extents */ number, /* col_extents */ number, /* is_selected */ boolean ]
    /**
     * Gets a text description of a particular table row.  This differs from
     * #atspi_table_get_row_header, which returns an #AtspiAccessible.
     * @param row the specified table row, zero-indexed.
     */
    get_row_description(row: number): string
    /**
     * Gets the number of rows spanned by the table cell at the specific row
     * and column. (some tables can have cells which span multiple rows
     * and/or columns).
     * The returned values are meaningful only if the Table has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param row the specified table row, zero-indexed.
     * @param column the specified table column, zero-indexed.
     */
    get_row_extent_at(row: number, column: number): number
    /**
     * Gets the header associated with a table row, if available. This differs from
     * #atspi_table_get_row_description, which returns a string.
     * @param row the specified table row, zero-indexed.
     */
    get_row_header(row: number): Accessible
    /**
     * Queries a table for a list of indices of columns which are currently
     * selected.
     */
    get_selected_columns(): number[]
    /**
     * Queries a table for a list of indices of rows which are currently selected.
     */
    get_selected_rows(): number[]
    /**
     * Gets an accessible object which summarizes the contents of an #AtspiTable.
     */
    get_summary(): Accessible
    /**
     * Determines whether specified table column is selected.
     * Not all tables support column selection.
     * @param column the zero-indexed column number of the column being queried.
     */
    is_column_selected(column: number): boolean
    /**
     * Determines whether a table row is selected.  Not all tables support
     * row selection.
     * @param row the zero-indexed row number of the row being queried.
     */
    is_row_selected(row: number): boolean
    /**
     * Determines whether the cell at a specific row and column is selected.
     * @param row the zero-indexed row of the cell being queried.
     * @param column the zero-indexed column of the cell being queried.
     */
    is_selected(row: number, column: number): boolean
    /**
     * De-selects the specified column, removing it from the current column
     * selection.
     * Not all tables support column selection.
     * @param column the zero-indexed column number of the column being de-selected.
     */
    remove_column_selection(column: number): boolean
    /**
     * De-selects the specified row, removing it from the current row selection.
     * Not all tables support row selection.
     * @param row the zero-indexed number of the row being de-selected.
     */
    remove_row_selection(row: number): boolean
    /* Implemented methods of Atspi-2.0.Atspi.TableCell */
    /**
     * Returns the column headers as an array of cell accessibles.
     */
    get_column_header_cells(): Accessible[]
    get_column_index(): number
    /**
     * Returns the number of columns occupied by this cell accessible.
     * The returned values are meaningful only if the table cell has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_column_span(): number
    /**
     * Retrieves the tabular position of this cell.
     */
    get_position(): [ /* returnType */ number, /* row */ number, /* column */ number ]
    /**
     * Gets the row and column indexes and extents of this cell accessible.
     * The returned values are meaningful only if the table cell has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_row_column_span(): [ /* row */ number, /* column */ number, /* row_span */ number, /* column_span */ number ]
    /**
     * Returns the row headers as an array of cell accessibles.
     */
    get_row_header_cells(): Accessible[]
    /**
     * Returns the number of rows occupied by this cell accessible.
     * The returned values are meaningful only if the table cell has both
     * STATE_VISIBLE and STATE_SHOWING.
     */
    get_row_span(): number
    /**
     * Returns a reference to the accessible of the containing table.
     */
    get_table(): Accessible
    /* Implemented methods of Atspi-2.0.Atspi.Text */
    /**
     * Selects some text (adds a text selection) in an #AtspiText object.
     * @param start_offset the starting offset of the desired new selection.
     * @param end_offset the offset of the first character after the new selection.
     */
    add_selection(start_offset: number, end_offset: number): boolean
    /**
     * Gets a set of attributes applied to a range of text from an #AtspiText object, optionally
     * including its 'default' attributes.
     * @param offset a #gint indicating the offset from which the attribute        search is based.
     * @param include_defaults a #bool that, when set as #FALSE, indicates the call should only return those attributes which are explicitly set on the current attribute run, omitting any attributes which are inherited from the default values.
     */
    get_attribute_run(offset: number, include_defaults: boolean): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the value of a named attribute at a given offset.
     * @param offset The character offset at which to query the attribute.
     * @param attribute_name The attribute to query.
     */
    get_text_attribute_value(offset: number, attribute_name: string): string | null
    /**
     * Gets the attributes applied to a range of text from an #AtspiText
     * object. The text attributes correspond to CSS attributes
     * where possible.
     * <em>DEPRECATED</em>
     * @param offset a #gint indicating the offset from which the attribute        search is based.
     */
    get_text_attributes(offset: number): [ /* returnType */ GLib.HashTable, /* start_offset */ number, /* end_offset */ number ]
    /**
     * Gets the ranges of text from an #AtspiText object which lie within the
     *          bounds defined by (`x,` `y)` and (`x+``width,` `y+``height)`.
     * @param x the 'starting' x coordinate of the bounding box.
     * @param y the 'starting' y coordinate of the bounding box.
     * @param width the x extent of the bounding box.
     * @param height the y extent of the bounding box.
     * @param type an #AccessibleCoordType indicating the coordinate system to use        for the returned values.
     * @param clipTypeX an #AtspiTextClipType indicating how to treat characters that        intersect the bounding box's x extents.
     * @param clipTypeY an #AtspiTextClipType indicating how to treat characters that        intersect the bounding box's y extents.
     */
    get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[]
    /**
     * Gets the current offset of the text caret in an #AtspiText object.
     */
    get_caret_offset(): number
    /**
     * Gets the character at a given offset for an #AtspiText object.
     * @param offset a #gint indicating the text offset where the desired          character is located.
     */
    get_character_at_offset(offset: number): number
    /**
     * Gets the character count of an #AccessibleText object.
     */
    get_character_count(): number
    /**
     * Gets a bounding box containing the glyph representing
     *        the character at a particular text offset.
     * The returned values are meaningful only if the Text has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param offset a #gint indicating the offset of the text character for        whom boundary information is requested.
     * @param type an #AccessibleCoordType indicating the coordinate system to use        for the returned values.
     */
    get_character_extents(offset: number, type: CoordType): Rect
    /**
     * Gets the default attributes applied to an #AtspiText
     * object. The text attributes correspond to CSS attributes
     * where possible. The combination of this attribute set and
     * the attributes reported by #atspi_text_get_attributes
     * describes the entire set of text attributes over a range.
     */
    get_default_attributes(): GLib.HashTable
    /**
     * Gets the number of active non-contiguous selections for an
     *          #AtspiText object.
     */
    get_n_selections(): number
    /**
     * Gets the character offset into the text at a given point.
     * @param x the x coordinate of the point to be queried.
     * @param y the y coordinate of the point to be queried.
     * @param type an #AtspiCoordType indicating the coordinate system in which       the values should be returned.
     */
    get_offset_at_point(x: number, y: number, type: CoordType): number
    /**
     * Gets the bounding box for text within a range in an  #AtspiText object.
     * The returned values are meaningful only if the Text has both
     * STATE_VISIBLE and STATE_SHOWING.
     * @param start_offset a #gint indicating the offset of the first text character for        whom boundary information is requested.
     * @param end_offset a #gint indicating the offset of the text character        after the last character for whom boundary information is requested.
     * @param type an #AtspiCoordType indicating the coordinate system to use        for the returned values.
     */
    get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect
    /**
     * Gets the bounds of the `selection_num-th` active text selection for an
     *         #AtspiText object.
     * @param selection_num a #gint indicating which selection to query.
     */
    get_selection(selection_num: number): Range
    /**
     * Gets a portion of the text exposed through an #AtspiText according to a given `offset`
     * and a specific `granularity,` along with the start and end offsets defining the
     * boundaries of such a portion of text.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_CHAR the character at the
     * offset is returned.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_WORD the returned string
     * is from the word start at or before the offset to the word start after
     * the offset.
     * 
     * The returned string will contain the word at the offset if the offset
     * is inside a word and will contain the word before the offset if the
     * offset is not inside a word.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_SENTENCE the returned string
     * is from the sentence start at or before the offset to the sentence
     * start after the offset.
     * 
     * The returned string will contain the sentence at the offset if the offset
     * is inside a sentence and will contain the sentence before the offset
     * if the offset is not inside a sentence.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_LINE the returned string
     * is from the line start at or before the offset to the line
     * start after the offset.
     * 
     * If `granularity` is ATSPI_TEXT_GRANULARITY_PARAGRAPH the returned string
     * is from the start of the paragraph at or before the offset to the start
     * of the following paragraph after the offset.
     * @param offset position
     * @param granularity An #AtspiTextGranularity
     */
    get_string_at_offset(offset: number, granularity: TextGranularity): TextRange
    /**
     * Gets a range of text from an #AtspiText object.  The number of bytes
     *          in the returned string may exceed either end_offset or start_offset, since
     *          UTF-8 is a variable-width encoding.
     * @param start_offset a #gint indicating the start of the desired text range.
     * @param end_offset a #gint indicating the first character past the desired range.
     */
    get_text(start_offset: number, end_offset: number): string
    /**
     * Gets delimited text from an #AtspiText object which follows a given
     *          text offset.
     * @param offset a #gint indicating the offset from which the delimiter        search is based.
     * @param type an #AtspiTextBoundaryType indicating whether the desired       text string is a word, sentence, line, or attribute run.
     */
    get_text_after_offset(offset: number, type: TextBoundaryType): TextRange
    /**
     * Gets delimited text from an #AtspiText object which includes a given
     *          text offset.
     * @param offset a #gint indicating the offset from which the delimiter        search is based.
     * @param type an #AtspiTextBoundaryType indicating whether the desired       text string is a word, sentence, line, or attribute run.
     */
    get_text_at_offset(offset: number, type: TextBoundaryType): TextRange
    /**
     * Gets delimited text from an #AtspiText object which precedes a given
     *          text offset.
     * @param offset a #gint indicating the offset from which the delimiter        search is based.
     * @param type an #AtspiTextBoundaryType indicating whether the desired       text string is a word, sentence, line, or attribute run.
     */
    get_text_before_offset(offset: number, type: TextBoundaryType): TextRange
    /**
     * De-selects a text selection.
     * @param selection_num a #gint indicating which text selection to remove.
     */
    remove_selection(selection_num: number): boolean
    /**
     * Scrolls whatever container of the #AtspiText text range so it becomes
     * visible on the screen.
     * @param start_offset a #gint indicating the start of the desired text range.
     * @param end_offset a #gint indicating the first character past the desired range.
     * @param type a #AtspiScrollType indicating where the object should be placed on the        screen.
     */
    scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean
    /**
     * Scrolls whatever container of the #AtspiText text range so it becomes
     * visible on the screen at a given position.
     * @param start_offset a #gint indicating the start of the desired text range.
     * @param end_offset a #gint indicating the first character past the desired range.
     * @param coords a #AtspiCoordType indicating whether the coordinates are relative to          the screen, to the window, or to the parent object.
     * @param x the x coordinate of the point to reach
     * @param y the y coordinate of the point to reach
     */
    scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean
    /**
     * Moves the text caret to a given position.
     * @param new_offset the offset to which the text caret is to be moved.
     */
    set_caret_offset(new_offset: number): boolean
    /**
     * Changes the bounds of an existing #AtspiText text selection.
     * @param selection_num a zero-offset index indicating which text selection to modify.
     * @param start_offset a #gint indicating the new starting offset for the selection.
     * @param end_offset a #gint indicating the desired new offset of the first character             after the selection.
     */
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean
    /* Implemented methods of Atspi-2.0.Atspi.Value */
    /**
     * Gets the current value for an #AtspiValue.
     */
    get_current_value(): number
    /**
     * Gets the maximum allowed value for an #AtspiValue.
     */
    get_maximum_value(): number
    /**
     * Gets the minimum increment by which an #AtspiValue can be adjusted.
     */
    get_minimum_increment(): number
    /**
     * Gets the minimum allowed value for an #AtspiValue.
     */
    get_minimum_value(): number
    /**
     * Sets the current value of an #AtspiValue.
     * @param new_value a #gdouble value which is the desired new value of the object.
     */
    set_current_value(new_value: number): boolean
    /* Own virtual methods of Atspi-2.0.Atspi.Accessible */
    vfunc_region_changed(current_offset: number, last_offset: number): void
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
    /* Own signals of Atspi-2.0.Atspi.Accessible */
    /**
     * The signal "region-changed" is emitted by a screen reader to indicate
     * that it is now reading or tracking a new object, or, a new piece of
     * text within an object. This allows a magnifier to gain the information
     * needed to highlight the object that the screen reader is reading.
     * @signal 
     * @param arg1 an integer specifying the current offset of the text being read,        if the object is textual.
     * @param arg2 an integer specifying the ending offset of the text being read,        if the object is textual.
     */
    connect(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    connect_after(sigName: "region-changed", callback: (($obj: Accessible, arg1: number, arg2: number) => void)): number
    emit(sigName: "region-changed", arg1: number, arg2: number): void
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
    connect(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Accessible, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Accessible_ConstructProps)
    _init (config?: Accessible_ConstructProps): void
    static $gtype: GObject.GType<Accessible>
}
export interface Application_ConstructProps extends GObject.Object_ConstructProps {
}
export class Application {
    /* Own fields of Atspi-2.0.Atspi.Application */
    parent: GObject.Object
    hash: GLib.HashTable
    bus_name: string
    bus: DBus.Connection
    root: object
    cache: Cache
    toolkit_name: string
    toolkit_version: string
    atspi_version: string
    time_added: object
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Application, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Application_ConstructProps)
    _init (config?: Application_ConstructProps): void
    static $gtype: GObject.GType<Application>
}
export interface DeviceListener_ConstructProps extends GObject.Object_ConstructProps {
}
export class DeviceListener {
    /* Own fields of Atspi-2.0.Atspi.DeviceListener */
    parent: GObject.Object
    id: number
    callbacks: object[]
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.DeviceListener */
    /**
     * Adds an in-process callback function to an existing #AtspiDeviceListener.
     * @param callback an #AtspiDeviceListenerCB function pointer.
     */
    add_callback(callback: DeviceListenerCB): void
    /**
     * Removes an in-process callback function from an existing
     * #AtspiDeviceListener.
     * @param callback an #AtspiDeviceListenerCB function pointer.
     */
    remove_callback(callback: DeviceListenerCB): void
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
    /* Own virtual methods of Atspi-2.0.Atspi.DeviceListener */
    vfunc_device_event(event: DeviceEvent): boolean
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
    connect(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceListener_ConstructProps)
    _init (config?: DeviceListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: DeviceListenerCB): DeviceListener
    static $gtype: GObject.GType<DeviceListener>
}
export interface EventListener_ConstructProps extends GObject.Object_ConstructProps {
}
export class EventListener {
    /* Own fields of Atspi-2.0.Atspi.EventListener */
    parent: GObject.Object
    callback: EventListenerCB
    user_data: object
    cb_destroyed: GLib.DestroyNotify
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.EventListener */
    /**
     * Deregisters an #AtspiEventListener from the registry, for a specific
     *             event type.
     * @param event_type a string specifying the event type for which this             listener is to be deregistered.
     */
    deregister(event_type: string): boolean
    /**
     * Adds an in-process callback function to an existing #AtspiEventListener.
     * 
     * Legal object event types:
     * 
     *    (property change events)
     * 
     *            object:property-change
     *            object:property-change:accessible-name
     *            object:property-change:accessible-description
     *            object:property-change:accessible-parent
     *            object:property-change:accessible-value
     *            object:property-change:accessible-role
     *            object:property-change:accessible-table-caption
     *            object:property-change:accessible-table-column-description
     *            object:property-change:accessible-table-column-header
     *            object:property-change:accessible-table-row-description
     *            object:property-change:accessible-table-row-header
     *            object:property-change:accessible-table-summary
     * 
     *    (other object events)
     * 
     *            object:state-changed
     *            object:children-changed
     *            object:visible-data-changed
     *            object:selection-changed
     *            object:text-selection-changed
     *            object:text-changed
     *            object:text-caret-moved
     *            object:row-inserted
     *            object:row-reordered
     *            object:row-deleted
     *            object:column-inserted
     *            object:column-reordered
     *            object:column-deleted
     *            object:model-changed
     *            object:active-descendant-changed
     * 
     *  (screen reader events)
     *             screen-reader:region-changed
     * 
     *  (window events)
     * 
     *            window:minimize
     *            window:maximize
     *            window:restore
     *            window:close
     *            window:create
     *            window:reparent
     *            window:desktop-create
     *            window:desktop-destroy
     *            window:activate
     *            window:deactivate
     *            window:raise
     *            window:lower
     *            window:move
     *            window:resize
     *            window:shade
     *            window:unshade
     *            window:restyle
     * 
     *  (other events)
     * 
     *            focus:
     *            mouse:abs
     *            mouse:rel
     *            mouse:b1p
     *            mouse:b1r
     *            mouse:b2p
     *            mouse:b2r
     *            mouse:b3p
     *            mouse:b3r
     * 
     * NOTE: this character string may be UTF-8, but should not contain byte
     * value 56
     *            (ascii ':'), except as a delimiter, since non-UTF-8 string
     *            delimiting functions are used internally.
     *            In general, listening to
     *            toolkit-specific events is not recommended.
     * 
     * Currently, object:text-reading-position needs to be specified explicitly
     * (it is not implied by object:text), since it is generated by the screen
     * reader and is thus a special case internally.
     * @param event_type a character string indicating the type of events for which            notification is requested.  Format is            EventClass:major_type:minor_type:detail            where all subfields other than EventClass are optional.            EventClasses include "object", "window", "mouse",            and toolkit events (e.g. "Gtk", "AWT").            Examples: "focus:", "Gtk:GtkWidget:button_press_event".
     */
    register(event_type: string): boolean
    /**
     * Adds an in-process callback function to an existing #AtspiEventListener.
     * @param event_type a character string indicating the type of events for which            notification is requested.  See #atspi_event_listener_register for a description of the format and legal event types.
     * @param properties a list of             properties that should be sent along with the event. The             properties are valued for the duration of the event callback.k             TODO: Document.
     */
    register_full(event_type: string, properties: string[] | null): boolean
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
    connect(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EventListener, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EventListener_ConstructProps)
    _init (config?: EventListener_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(callback: EventListenerCB): EventListener
    /**
     * Deregisters an #AtspiEventListenerCB from the registry, for a specific
     *             event type.
     * @param callback the #AtspiEventListenerCB registered against an            event type.
     * @param event_type a string specifying the event type for which this             listener is to be deregistered.
     */
    static deregister_from_callback(callback: EventListenerCB, event_type: string): boolean
    /**
     * Registers an #AtspiEventListenerCB against an `event_type`.
     * @param callback the #AtspiEventListenerCB to be registered against an event type.
     * @param event_type a character string indicating the type of events for which            notification is requested.  See #atspi_event_listener_register for a description of the format.
     */
    static register_from_callback(callback: EventListenerCB, event_type: string): boolean
    static register_from_callback_full(event_type: string, properties: string[]): boolean
    static $gtype: GObject.GType<EventListener>
}
export interface Hyperlink_ConstructProps extends Object_ConstructProps {
}
export class Hyperlink {
    /* Own fields of Atspi-2.0.Atspi.Hyperlink */
    parent: Object
    /* Extended fields of Atspi-2.0.Atspi.Object */
    app: Application
    path: string
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Hyperlink */
    /**
     * Gets the ending character offset of the text range associated with
     *       an #AtspiHyperlink, in its originating #AtspiHypertext.
     */
    get_end_index(): number
    /**
     * Gets the starting and ending character offsets of the text range
     * associated with an #AtspiHyperlink, in its originating #AtspiHypertext.
     */
    get_index_range(): Range
    /**
     * Gets the total number of anchors which an #AtspiHyperlink implementor has.
     * Though typical hyperlinks have only one anchor, client-side image maps and
     * other hypertext objects may potentially activate or refer to multiple
     * URIs.  For each anchor there is a corresponding URI and object.
     * 
     * see: #atspi_hyperlink_get_uri and #atspi_hyperlink_get_object.
     */
    get_n_anchors(): number
    /**
     * Gets the object associated with a particular hyperlink anchor, as an
     * #AtspiAccessible.
     * @param i a (zero-index) #gint indicating which hyperlink anchor to query.
     */
    get_object(i: number): Accessible
    /**
     * Gets the starting character offset of the text range associated with
     *       an #AtspiHyperlink, in its originating #AtspiHypertext.
     */
    get_start_index(): number
    /**
     * Gets the URI associated with a particular hyperlink anchor.
     * @param i a (zero-index) integer indicating which hyperlink anchor to query.
     */
    get_uri(i: number): string
    /**
     * Tells whether an #AtspiHyperlink object is still valid with respect to its
     *          originating hypertext object.
     */
    is_valid(): boolean
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
    connect(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Hyperlink, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Hyperlink_ConstructProps)
    _init (config?: Hyperlink_ConstructProps): void
    static $gtype: GObject.GType<Hyperlink>
}
export interface MatchRule_ConstructProps extends GObject.Object_ConstructProps {
}
export class MatchRule {
    /* Own fields of Atspi-2.0.Atspi.MatchRule */
    parent: GObject.Object
    states: StateSet
    statematchtype: CollectionMatchType
    attributes: GLib.HashTable
    attributematchtype: CollectionMatchType
    interfaces: object[]
    interfacematchtype: CollectionMatchType
    roles: number[]
    rolematchtype: CollectionMatchType
    invert: boolean
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MatchRule, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MatchRule_ConstructProps)
    _init (config?: MatchRule_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(states: StateSet, statematchtype: CollectionMatchType, attributes: GLib.HashTable, attributematchtype: CollectionMatchType, roles: Role[], rolematchtype: CollectionMatchType, interfaces: string[], interfacematchtype: CollectionMatchType, invert: boolean): MatchRule
    static $gtype: GObject.GType<MatchRule>
}
export interface Object_ConstructProps extends GObject.Object_ConstructProps {
}
export class Object {
    /* Own fields of Atspi-2.0.Atspi.Object */
    parent: GObject.Object
    app: Application
    path: string
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
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
    connect(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Object, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Object_ConstructProps)
    _init (config?: Object_ConstructProps): void
    static $gtype: GObject.GType<Object>
}
export interface Relation_ConstructProps extends GObject.Object_ConstructProps {
}
export class Relation {
    /* Own fields of Atspi-2.0.Atspi.Relation */
    parent: GObject.Object
    relation_type: RelationType
    targets: object[]
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.Relation */
    /**
     * Gets the number of objects which this relationship has as its
     *       target objects (the subject is the #AtspiAccessible from which this
     *       #AtspiRelation originated).
     */
    get_n_targets(): number
    /**
     * Gets the type of relationship represented by an #AtspiRelation.
     */
    get_relation_type(): RelationType
    /**
     * Gets the `i-th` target of a specified #AtspiRelation relationship.
     * @param i a (zero-index) #gint indicating which (of possibly several) target is requested.
     */
    get_target(i: number): Accessible
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
    connect(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Relation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Relation_ConstructProps)
    _init (config?: Relation_ConstructProps): void
    static $gtype: GObject.GType<Relation>
}
export interface StateSet_ConstructProps extends GObject.Object_ConstructProps {
}
export class StateSet {
    /* Own fields of Atspi-2.0.Atspi.StateSet */
    parent: GObject.Object
    accessible: object
    states: number
    /* Extended fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Owm methods of Atspi-2.0.Atspi.StateSet */
    /**
     * Adds a particular #AtspiState to an #AtspiStateSet (i.e. sets the
     *       given state to #TRUE in the stateset).
     * @param state an #AtspiStateType to be added to the specified #AtspiStateSet.
     */
    add(state: StateType): void
    /**
     * Determines the differences between two instances of #AtspiStateSet.
     * 
     * `see` #atspi_state_set_equals.
     * @param set2 a pointer to the second #AtspiStateSet object on which to operate.
     */
    compare(set2: StateSet): StateSet
    /**
     * Determines whether a given #AtspiStateSet includes a given state; that is,
     *          whether `state` is true for the `set` in question.
     * @param state an #AtspiStateType for which the specified #AtspiStateSet          will be queried.
     */
    contains(state: StateType): boolean
    /**
     * Determines whether two instances of #AtspiStateSet are equivalent (i.e.
     *          consist of the same #AtspiStates).  Useful for checking multiple
     *          state variables at once.
     * 
     * `see` #atspi_state_set_compare.
     * @param set2 a pointer to the second #AtspiStateSet object on which to operate.
     */
    equals(set2: StateSet): boolean
    /**
     * Returns the states in an #AtspiStateSet as an array.
     */
    get_states(): StateType[]
    is_empty(): boolean
    /**
     * Removes a particular #AtspiState to an #AtspiStateSet (i.e. sets the
     *       given state to #FALSE in the stateset.)
     * @param state an #AtspiStateType to remove from the specified `set`.
     */
    remove(state: StateType): void
    /**
     * Enables/disables a state in an #AtspiStateSet according to its `name`.
     * @param name a string corresponding to a state name.
     * @param enabled if #TRUE, `name` should be enabled in the `set` in question;          otherwise, it should be disabled.
     */
    set_by_name(name: string, enabled: boolean): void
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
    connect(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: StateSet, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: StateSet_ConstructProps)
    _init (config?: StateSet_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(states: StateType[]): StateSet
    static $gtype: GObject.GType<StateSet>
}
export abstract class AccessibleClass {
    /* Own fields of Atspi-2.0.Atspi.AccessibleClass */
    parent_class: ObjectClass
    region_changed: (accessible: Accessible, current_offset: number, last_offset: number) => void
    static name: string
}
export class AccessiblePrivate {
    static name: string
}
export abstract class ApplicationClass {
    /* Own fields of Atspi-2.0.Atspi.ApplicationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DeviceEvent {
    /* Own fields of Atspi-2.0.Atspi.DeviceEvent */
    type: EventType
    id: number
    hw_code: number
    modifiers: number
    timestamp: number
    event_string: string
    is_text: boolean
    static name: string
}
export abstract class DeviceListenerClass {
    /* Own fields of Atspi-2.0.Atspi.DeviceListenerClass */
    parent_class: GObject.ObjectClass
    device_event: (listener: DeviceListener, event: DeviceEvent) => boolean
    static name: string
}
export class Event {
    /* Own fields of Atspi-2.0.Atspi.Event */
    type: string
    source: Accessible
    detail1: number
    detail2: number
    any_data: any
    sender: Accessible
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Starts/enters the main event loop for the AT-SPI services.
     * 
     * NOTE: This method does not return control; it is exited via a call to
     * #atspi_event_quit from within an event handler.
     */
    static main(): void
    /**
     * Quits the last main event loop for the AT-SPI services,
     * See: #atspi_event_main
     */
    static quit(): void
}
export abstract class EventListenerClass {
    /* Own fields of Atspi-2.0.Atspi.EventListenerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class EventListenerMode {
    /* Own fields of Atspi-2.0.Atspi.EventListenerMode */
    synchronous: boolean
    preemptive: boolean
    global: boolean
    static name: string
}
export abstract class HyperlinkClass {
    /* Own fields of Atspi-2.0.Atspi.HyperlinkClass */
    parent_class: ObjectClass
    static name: string
}
export class KeyDefinition {
    /* Own fields of Atspi-2.0.Atspi.KeyDefinition */
    keycode: number
    keysym: number
    keystring: string
    unused: number
    static name: string
}
/**
 * Structure containing identifying information about a set of keycode or
 *        keysyms.
 */
export class KeySet {
    /* Own fields of Atspi-2.0.Atspi.KeySet */
    keysyms: number
    keycodes: number
    keystrings: string
    len: number
    static name: string
}
export abstract class MatchRuleClass {
    /* Own fields of Atspi-2.0.Atspi.MatchRuleClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ObjectClass {
    /* Own fields of Atspi-2.0.Atspi.ObjectClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class Point {
    /* Own fields of Atspi-2.0.Atspi.Point */
    x: number
    y: number
    /* Owm methods of Atspi-2.0.Atspi.Point */
    copy(): Point
    static name: string
}
export class Range {
    /* Own fields of Atspi-2.0.Atspi.Range */
    start_offset: number
    end_offset: number
    /* Owm methods of Atspi-2.0.Atspi.Range */
    /**
     * Gets a copy of an #AtspiRange object.
     */
    copy(): Range
    static name: string
}
export class Rect {
    /* Own fields of Atspi-2.0.Atspi.Rect */
    x: number
    y: number
    width: number
    height: number
    /* Owm methods of Atspi-2.0.Atspi.Rect */
    copy(): Rect
    static name: string
}
export abstract class RelationClass {
    /* Own fields of Atspi-2.0.Atspi.RelationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class StateSetClass {
    /* Own fields of Atspi-2.0.Atspi.StateSetClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class TextRange {
    /* Own fields of Atspi-2.0.Atspi.TextRange */
    start_offset: number
    end_offset: number
    content: string
    static name: string
}
    export type ControllerEventMask = number
    export type DeviceEventMask = number
    export type KeyEventMask = number
    export type KeyMaskType = number
    export type KeystrokeListener = void