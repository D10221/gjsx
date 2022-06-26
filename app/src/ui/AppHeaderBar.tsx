import { GtkHeaderBar } from "@local/gjsxml/components";
import jsx from "@local/gjsxml/jsx.js";
/**
 *
 * @param param0
 * @returns jsx
 */
export default function AppHeaderBar({
  id,
  title,
  subtitle,
  children
}: {
  id: string;
  title: string;
  subtitle: string | undefined;
  children?: any;
}) {
  return (
    <child type="titlebar">
      <GtkHeaderBar
        id={`${id}`}
        show_close_button={true}
        visible={true}
        title={title}
        subtitle={subtitle}
      >
        {children}
      </GtkHeaderBar>
    </child>
  );
}
