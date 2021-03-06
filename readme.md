# gjsxml

gjs, jsx, xml and friends

Exploring with [GJS](https://gjs.guide/) [JSX](https://en.wikipedia.org/wiki/JSX_(JavaScript)) and [Typescript](https://www.typescriptlang.org/)

# Init & Run
```bash
yarn && yarn build && yarn start app
```

### Credits, inspiration and resources

- [Workbench](https://github.com/sonnyp/Workbench)
- [gi-ts](https://github.com/gi-ts)
- [gtk-guitar-tuner-jsx](https://github.com/meghprkh/gtk-guitar-tuner-jsx)
- [gjs-ts](https://github.com/niagr/gjs-ts)
- [GIR2TS](https://github.com/niagr/GIR2TS)
- [react-gtk](https://github.com/silicon-hills/react-gtk)
- [node-gtk](https://github.com/romgrk/node-gtk)
- [ts-for-gir](https://github.com/sammydre/ts-for-gir)
- [gjsify](https://github.com/gjsify)
- [gjsify ts-for-gjs](https://github.com/gjsify/ts-for-gjs)
- [types-gjs](https://github.com/Gr3q/types-gjs)
- [gir2dts](https://github.com/darkoverlordofdata/gir2dts)
- [gtk3](https://docs.gtk.org/gtk3/)
- [Gjs](https://gjs.guide/)
- [jsx-xml](https://github.com/smmoosavi/jsx-xml)
- [xmlbuilder](https://github.com/oozcitak/xmlbuilder-js)

### Debug
- enable [inspector](https://wiki.gnome.org/action/show/Projects/GTK/Inspector)
    ```bash
    $ gsettings set org.gtk.Settings.Debug enable-inspector-keybinding true
    ```

### Engine
- gjs: 1.72

### Known issues
  - [Wsl](https://docs.microsoft.com/en-us/windows/wsl/about) Ubuntu 20.4 ships with older gjs, it doesn't support modules
  - Can't use [jsx-xml](https://github.com/smmoosavi/jsx-xml), js engine doens't like the output syntax, it seems to be related to it's dependencies
  - flatpaked on ```wsl``` can' find ```$DISPLAY```, but it works over ```ssh -X``` with a bit of work
