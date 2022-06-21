import type { Builder, Button, Window } from "@local/gjs";
import { Store } from "redux";
/**
 * 
 */
export default ({ builder, store }: { builder: Builder, store: Store }) => {

  const window: Window = builder.get_object("mainWindow") as Window;
  const button1: Button = builder.get_object("button1") as Button;

  store.subscribe(() => {
    const { title, clicks } = store.getState();
    window.title = title;
    button1.label = clicks == 0 ? "Click me!" :
      `Clicks=${clicks}`
  });

  button1.connect("clicked", () => store.dispatch({ type: "click" }));
  return window;
}