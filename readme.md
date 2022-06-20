# GJSX

Explore JSX and Typescript usage with [GJS](https://gjs.guide/)

## Apps

- app1  
   using a simple jsx factory function to create Gtk windgets class instances
- app2  
   using `ts-for-gir` for classic Gtk 
- app3  
   using `ts-for-gir` for classic Gtk, from glade UI xml templates
- app4
    using jsx factory function to create glade xml
- app5
    using jsx and components

# Init

```bash
# TODO: generate gjs types
yarn && yarn build && yarn start app1 
# where app1 is a @local/app1 workspace name
```
### Types:

- Generated by [ts-for-gir](https://github.com/sammydre/ts-for-gir)
- gir dependencies: 'apt install gnome-devel')

### Credits and resources

- [gtk-guitar-tuner-jsx](https://github.com/meghprkh/gtk-guitar-tuner-jsx)
- [gjs-ts](https://github.com/niagr/gjs-ts)
- [GIR2TS](https://github.com/niagr/GIR2TS)
- [react-gtk](https://github.com/silicon-hills/react-gtk)
- [node-gtk](https://github.com/romgrk/node-gtk)
- [ts-for-gir](https://github.com/sammydre/ts-for-gir)
- [gjsify](https://github.com/gjsify)
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