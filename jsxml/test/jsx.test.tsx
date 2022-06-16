import jsxml from "../src/jsxml";
import render from "../src/render";
const jso = (
  <a x={1}>
    <b y={"2"}>
      <c>3</c>
    </b>
  </a>
);
// console.dir(x, { depth: 5 });
let expected = '<a x="1"><b y="2"><c>3</c></b></a>';
let actual = render(jso);
if (actual !== expected) {
  throw new Error(`${actual} != ${expected}`);
}
console.log("OK");
