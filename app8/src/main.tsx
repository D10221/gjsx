import Gtk from "gi://Gtk?version=3.0";
import gjsx from "./gjsx";

Gtk.init(null);

const title = "Hellow World";
let i = 0;
let window: Gtk.Window = await new Promise(resolve=>
//
<window
  $ref={(x) => {
    window = x;
    log(`window.name${window.name}`);
    resolve(window);
  }}
  title={title}
  border_width={100}
  $connect={{ destroy: () => Gtk.main_quit() }}
>
  <box>
    <button
      label="Click me!"
      $connect={{
        clicked: (sender) => {
          sender.label = `Clicks=${++i}`;
          window.title = title + " Click!";
          const a = <aboutDialog></aboutDialog>;
          a.present();
        },
      }}
    />
  </box>
</window>);
window.show_all()
Gtk.main();
