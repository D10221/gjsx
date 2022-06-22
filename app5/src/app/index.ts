import * as pkgJson from "../../package.json";
import activate from "./activate";
const { Gtk } = imports.gi;
log(`pkg.id=${pkgJson.id}`);
const app = new Gtk.Application({
  application_id: pkgJson.id,
  flags: imports.gi.Gio.ApplicationFlags.FLAGS_NONE,
});
app.connect("activate", activate)
export default app;