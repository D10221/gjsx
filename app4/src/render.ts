import * as xmlbuilder from "xmlbuilder";
/**
 *
 * @returns
 */
export default function render(
  jso: {},
  o?: {
    pretty?: boolean;
    headless?: boolean;
  }
) {
  return xmlbuilder
    .create(jso, { separateArrayItems: true, headless: o ? o.headless : true })
    .end({ pretty: o ? o.pretty : false });
}
