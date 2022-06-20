import { jsxml, render } from "@local/jsxml";
/**
 *
 */
export default render(
  <interface>
    <menu id="menu">
      <section>
        <item>
          <attribute name="label">_One</attribute>
          <attribute name="action">win.one</attribute>
        </item>
      </section>
      <section>
        <item>
          <attribute name="label">_Two</attribute>
          <attribute name="action">win.two</attribute>
        </item>
      </section>
    </menu>
  </interface>
);
