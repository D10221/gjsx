import { ApplicationWindow, MenuButton } from "@local/gjs";
import { MenuModel } from "@local/gjs/Gjs/Gio-2.0";
import { factory, getObject, addAction } from "@local/gjsxml";
import { jsxml, render } from "@local/jsxml";

type Context = {
  menuButton: MenuButton;
  window: ApplicationWindow;
  dispatch(action: { type: string; payload?: {} }): any;
};
/**
 *
 */
export default ({ menuButton, window, dispatch }: Context) =>
  factory(
    /* configure: */ (builder) => {
      const get = getObject(builder);
      const menu = get<MenuModel>("menu");
      menuButton.set_menu_model(menu);
      addAction(window, "one", (action) => {
        dispatch({ type: `window:action:${action.name}` });
      });
      addAction(window, "two", (action) => {
        dispatch({ type: `window:action:${action.name}` });
      });
      return menu;
    },
    /* xml: */ render(
      <interface>
        <menu id="menu">
          <section>
            <item>
              <attribute name="label">One</attribute>
              <attribute name="action">win.one</attribute>
            </item>
          </section>
          <section>
            <item>
              <attribute name="label">Two</attribute>
              <attribute name="action">win.two</attribute>
            </item>
          </section>
        </menu>
      </interface>
    )
  );
