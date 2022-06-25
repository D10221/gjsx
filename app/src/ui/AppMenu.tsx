import Gio from "gi://Gio?version=2.0";
import { builder, build } from "@local/gjsxml/builder";
import jsx, { render } from "@local/gjsxml/jsx";
/**
 *
 */
export type AppMenuOptions = {
  /**
   * TODO: should be optional,
   *  else autogen with randomstring? or empty ?,
   *  ...then return id of top level element?
   */
  id: string,
  target: "win"|"app"
}
/**
 *
 * @returns menu model builder
 */
export function AppMenu({ id, target }: AppMenuOptions) {
  return build<Gio.MenuModel>(
    id,
    builder(
      render(
        <interface>
          <menu id={id}>
            <section>
              <item>
                <attribute name="label">_Quit</attribute>
                <attribute name="action">{target}.quit</attribute>
              </item>
            </section>
          </menu>
        </interface>
      )
    )
  );
}
