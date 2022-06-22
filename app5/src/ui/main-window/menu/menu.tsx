import { jsxml, render } from "@local/jsxml";
import { actionTypes, signals } from "app/actions";
/**
 *
 */
export default render(
  <interface>
    <menu id="menu">
      <section>
        <item>
          <attribute name="label">_Help</attribute>
          <attribute name="action">win.help</attribute>
        </item>
      </section>
      <section>
        <item>
          <attribute name="label">_About</attribute>
          <attribute name="action">win.one</attribute>
        </item>
      </section>
      <section>
        <item>
          <attribute name="label">_Quit</attribute>
          <attribute name="action">{signals[actionTypes.QUIT].name}</attribute>
        </item>
      </section>
    </menu>
  </interface>
);
