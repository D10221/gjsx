/**
 *
 */
declare namespace JSX {
  type Maybe<T> = T | null | undefined;

  type IntrinsicElement<T, K extends keyof T = keyof T> = Partial<
    Record<K, T[K]>
  > & {
    signals?: Maybe<Partial<Record<K, Function>>>;
  };

  interface IntrinsicElements {
    aboutDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").AboutDialog
    >;
    accelLabel: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").AccelLabel
    >;
    actionBar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ActionBar
    >;
    alignment: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").Alignment
    >;
    appChooserButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").AppChooserButton
    >;
    appChooserDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").AppChooserDialog
    >;
    appChooserWidget: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").AppChooserWidget
    >;
    applicationWindow: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ApplicationWindow
    >;
    arrow: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Arrow>;
    aspectFrame: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").AspectFrame
    >;
    assistant: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").Assistant
    >;
    box: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Box>;
    button: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Button>;
    buttonBox: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ButtonBox
    >;
    calendar: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Calendar>;
    cellView: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").CellView>;
    checkButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").CheckButton
    >;
    checkMenuItem: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").CheckMenuItem
    >;
    colorButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ColorButton
    >;
    colorChooserDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ColorChooserDialog
    >;
    colorChooserWidget: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ColorChooserWidget
    >;
    colorSelection: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ColorSelection
    >;
    colorSelectionDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ColorSelectionDialog
    >;
    comboBox: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").ComboBox>;
    comboBoxText: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ComboBoxText
    >;
    dialog: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Dialog>;
    drawingArea: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").DrawingArea
    >;
    entry: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Entry>;
    eventBox: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").EventBox>;
    expander: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Expander>;
    fileChooserButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FileChooserButton
    >;
    fileChooserDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FileChooserDialog
    >;
    fileChooserWidget: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FileChooserWidget
    >;
    fixed: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Fixed>;
    flowBox: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").FlowBox>;
    flowBoxChild: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FlowBoxChild
    >;
    fontButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FontButton
    >;
    fontChooserDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FontChooserDialog
    >;
    fontChooserWidget: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FontChooserWidget
    >;
    fontSelection: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FontSelection
    >;
    fontSelectionDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").FontSelectionDialog
    >;
    frame: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Frame>;
    gLArea: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").GLArea>;
    grid: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Grid>;
    hBox: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").HBox>;
    hButtonBox: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").HButtonBox
    >;
    hPaned: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").HPaned>;
    hSV: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").HSV>;
    hScale: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").HScale>;
    hScrollbar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").HScrollbar
    >;
    hSeparator: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").HSeparator
    >;
    handleBox: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").HandleBox
    >;
    headerBar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").HeaderBar
    >;
    iconView: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").IconView>;
    image: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Image>;
    imageMenuItem: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ImageMenuItem
    >;
    infoBar: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").InfoBar>;
    invisible: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").Invisible
    >;
    label: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Label>;
    layout: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Layout>;
    levelBar: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").LevelBar>;
    linkButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").LinkButton
    >;
    listBox: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").ListBox>;
    listBoxRow: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ListBoxRow
    >;
    lockButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").LockButton
    >;
    menu: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Menu>;
    menuBar: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").MenuBar>;
    menuButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").MenuButton
    >;
    menuItem: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").MenuItem>;
    menuToolButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").MenuToolButton
    >;
    messageDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").MessageDialog
    >;
    modelButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ModelButton
    >;
    notebook: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Notebook>;
    offscreenWindow: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").OffscreenWindow
    >;
    overlay: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Overlay>;
    paned: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Paned>;
    placesSidebar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").PlacesSidebar
    >;
    plug: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Plug>;
    popover: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Popover>;
    popoverMenu: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").PopoverMenu
    >;
    progressBar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ProgressBar
    >;
    radioButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").RadioButton
    >;
    radioMenuItem: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").RadioMenuItem
    >;
    radioToolButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").RadioToolButton
    >;
    recentChooserDialog: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").RecentChooserDialog
    >;
    recentChooserMenu: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").RecentChooserMenu
    >;
    recentChooserWidget: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").RecentChooserWidget
    >;
    revealer: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Revealer>;
    scale: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Scale>;
    scaleButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ScaleButton
    >;
    scrollbar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").Scrollbar
    >;
    scrolledWindow: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ScrolledWindow
    >;
    searchBar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").SearchBar
    >;
    searchEntry: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").SearchEntry
    >;
    separator: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").Separator
    >;
    separatorMenuItem: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").SeparatorMenuItem
    >;
    separatorToolItem: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").SeparatorToolItem
    >;
    shortcutLabel: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ShortcutLabel
    >;
    shortcutsGroup: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ShortcutsGroup
    >;
    shortcutsSection: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ShortcutsSection
    >;
    shortcutsShortcut: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ShortcutsShortcut
    >;
    shortcutsWindow: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ShortcutsWindow
    >;
    socket: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Socket>;
    spinButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").SpinButton
    >;
    spinner: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Spinner>;
    stack: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Stack>;
    stackSidebar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").StackSidebar
    >;
    stackSwitcher: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").StackSwitcher
    >;
    statusbar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").Statusbar
    >;
    switch: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Switch>;
    table: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Table>;
    tearoffMenuItem: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").TearoffMenuItem
    >;
    textView: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").TextView>;
    toggleButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ToggleButton
    >;
    toggleToolButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ToggleToolButton
    >;
    toolButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ToolButton
    >;
    toolItem: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").ToolItem>;
    toolItemGroup: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ToolItemGroup
    >;
    toolPalette: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").ToolPalette
    >;
    toolbar: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Toolbar>;
    treeView: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").TreeView>;
    vBox: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").VBox>;
    vButtonBox: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").VButtonBox
    >;
    vPaned: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").VPaned>;
    vScale: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").VScale>;
    vScrollbar: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").VScrollbar
    >;
    vSeparator: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").VSeparator
    >;
    viewport: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Viewport>;
    volumeButton: IntrinsicElement<
      import("@local/gjs/types/gjs/Gtk-3.0").VolumeButton
    >;
    window: IntrinsicElement<import("@local/gjs/types/gjs/Gtk-3.0").Window>;
  }
}
