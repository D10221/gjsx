import { GtkMenuButton } from "@local/gjsxml/components";
import jsx from "@local/gjsxml/jsx.js";

export default function AppMenuButton({ id }: { id: string }) {
  return (
    <child>
      <GtkMenuButton
        id={id}
        visible={true}
        can_focus={true}
        focus_on_click={true}
        receives_default={true}
      ></GtkMenuButton>
    </child>
  );
}
