import * as pkgJson from "../../package.json";
import activate from "./activate";
const { Gtk } = imports.gi;
log(`pkg.id=${pkgJson.application_id}`);
const app = new Gtk.Application({
  application_id: pkgJson.application_id,
  flags: imports.gi.Gio.ApplicationFlags.FLAGS_NONE,
});
app.connect("activate", activate)
export default app;
