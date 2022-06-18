import { Button, getObject } from "@local/gjs";
export default function app(builder) {
  let i = 0;
  const get = getObject(builder);
  get<Button>("_button1").connect("clicked", (sender) => {
    sender.label = `Clicks=${++i}`;
    getObject;
  });
}
