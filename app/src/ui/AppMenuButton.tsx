import { GtkMenuButton } from "@local/gjsxml/components";
import jsx from "@local/gjsxml/jsx.js";
/**
 * @returns jsx's ouput
 */
export default function AppMenuButton({ id }: { id: string }) {
  return (
    <child>
      <GtkMenuButton
        id={id}
        visible={true}
        can_focus={true}
        focus_on_click={true}
        receives_default={true}
      >
        {/* <child>
          <object class="GtkImage">
            <property name="visible">True</property>
            <property name="can-focus">False</property>
            <property name="icon-name">open_menu_symbolic</property>
          </object>
        </child> */}
      </GtkMenuButton>
    </child>
  );
}
