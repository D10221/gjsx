import { getObject } from "@local/gjsxml";
import { Builder, Button, Window } from "@local/gjs";
/**
 * Application logic
 * @param builder
 */
export default function app(builder: Builder) {
  const get = getObject(builder);
  let i = 0;
  get<Button>("_button1").connect("clicked", (sender) => {
    sender.label = `Clicks=${++i}`;
    getObject;
  });
  return get<Window>("MainWindow");
}
