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
      import("@local/gjs").AboutDialog
    >;
    accelLabel: IntrinsicElement<
      import("@local/gjs").AccelLabel
    >;
    actionBar: IntrinsicElement<
      import("@local/gjs").ActionBar
    >;
    alignment: IntrinsicElement<
      import("@local/gjs").Alignment
    >;
    appChooserButton: IntrinsicElement<
      import("@local/gjs").AppChooserButton
    >;
    appChooserDialog: IntrinsicElement<
      import("@local/gjs").AppChooserDialog
    >;
    appChooserWidget: IntrinsicElement<
      import("@local/gjs").AppChooserWidget
    >;
    applicationWindow: IntrinsicElement<
      import("@local/gjs").ApplicationWindow
    >;
    arrow: IntrinsicElement<import("@local/gjs").Arrow>;
    aspectFrame: IntrinsicElement<
      import("@local/gjs").AspectFrame
    >;
    assistant: IntrinsicElement<
      import("@local/gjs").Assistant
    >;
    box: IntrinsicElement<import("@local/gjs").Box>;
    button: IntrinsicElement<import("@local/gjs").Button>;
    buttonBox: IntrinsicElement<
      import("@local/gjs").ButtonBox
    >;
    calendar: IntrinsicElement<import("@local/gjs").Calendar>;
    cellView: IntrinsicElement<import("@local/gjs").CellView>;
    checkButton: IntrinsicElement<
      import("@local/gjs").CheckButton
    >;
    checkMenuItem: IntrinsicElement<
      import("@local/gjs").CheckMenuItem
    >;
    colorButton: IntrinsicElement<
      import("@local/gjs").ColorButton
    >;
    colorChooserDialog: IntrinsicElement<
      import("@local/gjs").ColorChooserDialog
    >;
    colorChooserWidget: IntrinsicElement<
      import("@local/gjs").ColorChooserWidget
    >;
    colorSelection: IntrinsicElement<
      import("@local/gjs").ColorSelection
    >;
    colorSelectionDialog: IntrinsicElement<
      import("@local/gjs").ColorSelectionDialog
    >;
    comboBox: IntrinsicElement<import("@local/gjs").ComboBox>;
    comboBoxText: IntrinsicElement<
      import("@local/gjs").ComboBoxText
    >;
    dialog: IntrinsicElement<import("@local/gjs").Dialog>;
    drawingArea: IntrinsicElement<
      import("@local/gjs").DrawingArea
    >;
    entry: IntrinsicElement<import("@local/gjs").Entry>;
    eventBox: IntrinsicElement<import("@local/gjs").EventBox>;
    expander: IntrinsicElement<import("@local/gjs").Expander>;
    fileChooserButton: IntrinsicElement<
      import("@local/gjs").FileChooserButton
    >;
    fileChooserDialog: IntrinsicElement<
      import("@local/gjs").FileChooserDialog
    >;
    fileChooserWidget: IntrinsicElement<
      import("@local/gjs").FileChooserWidget
    >;
    fixed: IntrinsicElement<import("@local/gjs").Fixed>;
    flowBox: IntrinsicElement<import("@local/gjs").FlowBox>;
    flowBoxChild: IntrinsicElement<
      import("@local/gjs").FlowBoxChild
    >;
    fontButton: IntrinsicElement<
      import("@local/gjs").FontButton
    >;
    fontChooserDialog: IntrinsicElement<
      import("@local/gjs").FontChooserDialog
    >;
    fontChooserWidget: IntrinsicElement<
      import("@local/gjs").FontChooserWidget
    >;
    fontSelection: IntrinsicElement<
      import("@local/gjs").FontSelection
    >;
    fontSelectionDialog: IntrinsicElement<
      import("@local/gjs").FontSelectionDialog
    >;
    frame: IntrinsicElement<import("@local/gjs").Frame>;
    gLArea: IntrinsicElement<import("@local/gjs").GLArea>;
    grid: IntrinsicElement<import("@local/gjs").Grid>;
    hBox: IntrinsicElement<import("@local/gjs").HBox>;
    hButtonBox: IntrinsicElement<
      import("@local/gjs").HButtonBox
    >;
    hPaned: IntrinsicElement<import("@local/gjs").HPaned>;
    hSV: IntrinsicElement<import("@local/gjs").HSV>;
    hScale: IntrinsicElement<import("@local/gjs").HScale>;
    hScrollbar: IntrinsicElement<
      import("@local/gjs").HScrollbar
    >;
    hSeparator: IntrinsicElement<
      import("@local/gjs").HSeparator
    >;
    handleBox: IntrinsicElement<
      import("@local/gjs").HandleBox
    >;
    headerBar: IntrinsicElement<
      import("@local/gjs").HeaderBar
    >;
    iconView: IntrinsicElement<import("@local/gjs").IconView>;
    image: IntrinsicElement<import("@local/gjs").Image>;
    imageMenuItem: IntrinsicElement<
      import("@local/gjs").ImageMenuItem
    >;
    infoBar: IntrinsicElement<import("@local/gjs").InfoBar>;
    invisible: IntrinsicElement<
      import("@local/gjs").Invisible
    >;
    label: IntrinsicElement<import("@local/gjs").Label>;
    layout: IntrinsicElement<import("@local/gjs").Layout>;
    levelBar: IntrinsicElement<import("@local/gjs").LevelBar>;
    linkButton: IntrinsicElement<
      import("@local/gjs").LinkButton
    >;
    listBox: IntrinsicElement<import("@local/gjs").ListBox>;
    listBoxRow: IntrinsicElement<
      import("@local/gjs").ListBoxRow
    >;
    lockButton: IntrinsicElement<
      import("@local/gjs").LockButton
    >;
    menu: IntrinsicElement<import("@local/gjs").Menu>;
    menuBar: IntrinsicElement<import("@local/gjs").MenuBar>;
    menuButton: IntrinsicElement<
      import("@local/gjs").MenuButton
    >;
    menuItem: IntrinsicElement<import("@local/gjs").MenuItem>;
    menuToolButton: IntrinsicElement<
      import("@local/gjs").MenuToolButton
    >;
    messageDialog: IntrinsicElement<
      import("@local/gjs").MessageDialog
    >;
    modelButton: IntrinsicElement<
      import("@local/gjs").ModelButton
    >;
    notebook: IntrinsicElement<import("@local/gjs").Notebook>;
    offscreenWindow: IntrinsicElement<
      import("@local/gjs").OffscreenWindow
    >;
    overlay: IntrinsicElement<import("@local/gjs").Overlay>;
    paned: IntrinsicElement<import("@local/gjs").Paned>;
    placesSidebar: IntrinsicElement<
      import("@local/gjs").PlacesSidebar
    >;
    plug: IntrinsicElement<import("@local/gjs").Plug>;
    popover: IntrinsicElement<import("@local/gjs").Popover>;
    popoverMenu: IntrinsicElement<
      import("@local/gjs").PopoverMenu
    >;
    progressBar: IntrinsicElement<
      import("@local/gjs").ProgressBar
    >;
    radioButton: IntrinsicElement<
      import("@local/gjs").RadioButton
    >;
    radioMenuItem: IntrinsicElement<
      import("@local/gjs").RadioMenuItem
    >;
    radioToolButton: IntrinsicElement<
      import("@local/gjs").RadioToolButton
    >;
    recentChooserDialog: IntrinsicElement<
      import("@local/gjs").RecentChooserDialog
    >;
    recentChooserMenu: IntrinsicElement<
      import("@local/gjs").RecentChooserMenu
    >;
    recentChooserWidget: IntrinsicElement<
      import("@local/gjs").RecentChooserWidget
    >;
    revealer: IntrinsicElement<import("@local/gjs").Revealer>;
    scale: IntrinsicElement<import("@local/gjs").Scale>;
    scaleButton: IntrinsicElement<
      import("@local/gjs").ScaleButton
    >;
    scrollbar: IntrinsicElement<
      import("@local/gjs").Scrollbar
    >;
    scrolledWindow: IntrinsicElement<
      import("@local/gjs").ScrolledWindow
    >;
    searchBar: IntrinsicElement<
      import("@local/gjs").SearchBar
    >;
    searchEntry: IntrinsicElement<
      import("@local/gjs").SearchEntry
    >;
    separator: IntrinsicElement<
      import("@local/gjs").Separator
    >;
    separatorMenuItem: IntrinsicElement<
      import("@local/gjs").SeparatorMenuItem
    >;
    separatorToolItem: IntrinsicElement<
      import("@local/gjs").SeparatorToolItem
    >;
    shortcutLabel: IntrinsicElement<
      import("@local/gjs").ShortcutLabel
    >;
    shortcutsGroup: IntrinsicElement<
      import("@local/gjs").ShortcutsGroup
    >;
    shortcutsSection: IntrinsicElement<
      import("@local/gjs").ShortcutsSection
    >;
    shortcutsShortcut: IntrinsicElement<
      import("@local/gjs").ShortcutsShortcut
    >;
    shortcutsWindow: IntrinsicElement<
      import("@local/gjs").ShortcutsWindow
    >;
    socket: IntrinsicElement<import("@local/gjs").Socket>;
    spinButton: IntrinsicElement<
      import("@local/gjs").SpinButton
    >;
    spinner: IntrinsicElement<import("@local/gjs").Spinner>;
    stack: IntrinsicElement<import("@local/gjs").Stack>;
    stackSidebar: IntrinsicElement<
      import("@local/gjs").StackSidebar
    >;
    stackSwitcher: IntrinsicElement<
      import("@local/gjs").StackSwitcher
    >;
    statusbar: IntrinsicElement<
      import("@local/gjs").Statusbar
    >;
    switch: IntrinsicElement<import("@local/gjs").Switch>;
    table: IntrinsicElement<import("@local/gjs").Table>;
    tearoffMenuItem: IntrinsicElement<
      import("@local/gjs").TearoffMenuItem
    >;
    textView: IntrinsicElement<import("@local/gjs").TextView>;
    toggleButton: IntrinsicElement<
      import("@local/gjs").ToggleButton
    >;
    toggleToolButton: IntrinsicElement<
      import("@local/gjs").ToggleToolButton
    >;
    toolButton: IntrinsicElement<
      import("@local/gjs").ToolButton
    >;
    toolItem: IntrinsicElement<import("@local/gjs").ToolItem>;
    toolItemGroup: IntrinsicElement<
      import("@local/gjs").ToolItemGroup
    >;
    toolPalette: IntrinsicElement<
      import("@local/gjs").ToolPalette
    >;
    toolbar: IntrinsicElement<import("@local/gjs").Toolbar>;
    treeView: IntrinsicElement<import("@local/gjs").TreeView>;
    vBox: IntrinsicElement<import("@local/gjs").VBox>;
    vButtonBox: IntrinsicElement<
      import("@local/gjs").VButtonBox
    >;
    vPaned: IntrinsicElement<import("@local/gjs").VPaned>;
    vScale: IntrinsicElement<import("@local/gjs").VScale>;
    vScrollbar: IntrinsicElement<
      import("@local/gjs").VScrollbar
    >;
    vSeparator: IntrinsicElement<
      import("@local/gjs").VSeparator
    >;
    viewport: IntrinsicElement<import("@local/gjs").Viewport>;
    volumeButton: IntrinsicElement<
      import("@local/gjs").VolumeButton
    >;
    window: IntrinsicElement<import("@local/gjs").Window>;
  }
}
