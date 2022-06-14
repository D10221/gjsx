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
    aboutDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").AboutDialog>;
    accelLabel: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").AccelLabel>;
    actionBar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ActionBar>;
    alignment: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Alignment>;
    appChooserButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").AppChooserButton>;
    appChooserDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").AppChooserDialog>;
    appChooserWidget: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").AppChooserWidget>;
    applicationWindow: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ApplicationWindow>;
    arrow: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Arrow>;
    aspectFrame: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").AspectFrame>;
    assistant: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Assistant>;
    box: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Box>;
    button: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Button>;
    buttonBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ButtonBox>;
    calendar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Calendar>;
    cellView: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").CellView>;
    checkButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").CheckButton>;
    checkMenuItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").CheckMenuItem>;
    colorButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ColorButton>;
    colorChooserDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ColorChooserDialog>;
    colorChooserWidget: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ColorChooserWidget>;
    colorSelection: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ColorSelection>;
    colorSelectionDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ColorSelectionDialog>;
    comboBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ComboBox>;
    comboBoxText: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ComboBoxText>;
    dialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Dialog>;
    drawingArea: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").DrawingArea>;
    entry: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Entry>;
    eventBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").EventBox>;
    expander: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Expander>;
    fileChooserButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FileChooserButton>;
    fileChooserDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FileChooserDialog>;
    fileChooserWidget: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FileChooserWidget>;
    fixed: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Fixed>;
    flowBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FlowBox>;
    flowBoxChild: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FlowBoxChild>;
    fontButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FontButton>;
    fontChooserDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FontChooserDialog>;
    fontChooserWidget: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FontChooserWidget>;
    fontSelection: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FontSelection>;
    fontSelectionDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").FontSelectionDialog>;
    frame: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Frame>;
    gLArea: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").GLArea>;
    grid: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Grid>;
    hBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HBox>;
    hButtonBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HButtonBox>;
    hPaned: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HPaned>;
    hSV: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HSV>;
    hScale: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HScale>;
    hScrollbar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HScrollbar>;
    hSeparator: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HSeparator>;
    handleBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HandleBox>;
    headerBar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").HeaderBar>;
    iconView: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").IconView>;
    image: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Image>;
    imageMenuItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ImageMenuItem>;
    infoBar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").InfoBar>;
    invisible: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Invisible>;
    label: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Label>;
    layout: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Layout>;
    levelBar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").LevelBar>;
    linkButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").LinkButton>;
    listBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ListBox>;
    listBoxRow: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ListBoxRow>;
    lockButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").LockButton>;
    menu: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Menu>;
    menuBar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").MenuBar>;
    menuButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").MenuButton>;
    menuItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").MenuItem>;
    menuToolButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").MenuToolButton>;
    messageDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").MessageDialog>;
    modelButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ModelButton>;
    notebook: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Notebook>;
    offscreenWindow: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").OffscreenWindow>;
    overlay: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Overlay>;
    paned: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Paned>;
    placesSidebar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").PlacesSidebar>;
    plug: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Plug>;
    popover: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Popover>;
    popoverMenu: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").PopoverMenu>;
    progressBar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ProgressBar>;
    radioButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").RadioButton>;
    radioMenuItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").RadioMenuItem>;
    radioToolButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").RadioToolButton>;
    recentChooserDialog: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").RecentChooserDialog>;
    recentChooserMenu: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").RecentChooserMenu>;
    recentChooserWidget: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").RecentChooserWidget>;
    revealer: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Revealer>;
    scale: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Scale>;
    scaleButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ScaleButton>;
    scrollbar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Scrollbar>;
    scrolledWindow: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ScrolledWindow>;
    searchBar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").SearchBar>;
    searchEntry: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").SearchEntry>;
    separator: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Separator>;
    separatorMenuItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").SeparatorMenuItem>;
    separatorToolItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").SeparatorToolItem>;
    shortcutLabel: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ShortcutLabel>;
    shortcutsGroup: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ShortcutsGroup>;
    shortcutsSection: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ShortcutsSection>;
    shortcutsShortcut: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ShortcutsShortcut>;
    shortcutsWindow: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ShortcutsWindow>;
    socket: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Socket>;
    spinButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").SpinButton>;
    spinner: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Spinner>;
    stack: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Stack>;
    stackSidebar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").StackSidebar>;
    stackSwitcher: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").StackSwitcher>;
    statusbar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Statusbar>;
    switch: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Switch>;
    table: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Table>;
    tearoffMenuItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").TearoffMenuItem>;
    textView: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").TextView>;
    toggleButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ToggleButton>;
    toggleToolButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ToggleToolButton>;
    toolButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ToolButton>;
    toolItem: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ToolItem>;
    toolItemGroup: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ToolItemGroup>;
    toolPalette: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").ToolPalette>;
    toolbar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Toolbar>;
    treeView: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").TreeView>;
    vBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").VBox>;
    vButtonBox: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").VButtonBox>;
    vPaned: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").VPaned>;
    vScale: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").VScale>;
    vScrollbar: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").VScrollbar>;
    vSeparator: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").VSeparator>;
    viewport: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Viewport>;
    volumeButton: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").VolumeButton>;
    window: IntrinsicElement<import("../@types/Gjs/Gtk-3.0").Window>;
  }
}
