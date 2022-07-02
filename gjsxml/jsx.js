/**
 * re-exporting from js to hide JSXXML.JSX definition
 * otherwise the 'jsx-xml' JSX defition wins over the locall global.JSX
 */
export { JSXXML as default } from "jsx-xml";
export { Fragment as fragment } from "jsx-xml"
import { render as _render } from "jsx-xml";
/**
 * TODO:
 *    transform boolean values to Uppercase strings?
 *    or ... create  component <GtkProperty {...atributes}>{value}<GtkProperty>
 *    where {value} is custom toString()
 * @param {import("jsx-xml").JSXNode} jsx
 * @param {import("jsx-xml").Options} options
 * @returns
 */
export const render = (jsx, options) => _render(jsx, options);
