import { Builder } from "@local/gjs/types/gjs/Gtk-3.0";

export default function build(string: string) {
  return Builder.new_from_string(string, string?.length);
}
