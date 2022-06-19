import { getObject } from "@local/gjsxml";
import { Builder, Button, Window } from "@local/gjs";
/**
 * Application logic
 * @param builder
 */
export default function app(builder: Builder) {
  let i = 0;
  const get = getObject(builder);
  get<Button>("_button1").connect("clicked", (sender) => {
    sender.label = `Clicks=${++i}`;
    getObject;
  });
  return {
    builder,
    window: get<Window>("MainWindow"),
  };
}
