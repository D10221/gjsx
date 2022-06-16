/**
 * src: https://github.com/smmoosavi/jsx-xml/blob/master/src/jsxxml.js
 */

/**
 * 
 * @param children 
 * @returns 
 */
const normalizeChildren = (children) => {
  //return _.reduce(_.flatMapDeep(children),
  return children.reduce((acc, child) => {
    if (typeof child === "string" || typeof child === "number") {
      if (acc.length === 0) {
        acc.push({ "#text": `${child}` });
        return acc;
      }
      const lastChild = acc[acc.length - 1];
      if ("#text" in lastChild) {
        lastChild["#text"] = `${lastChild["#text"]}${child}`;
        return acc;
      } else {
        acc.push({ "#text": `${child}` });
        return acc;
      }
    } else if (typeof child === "object") {
      acc.push(child);
      return acc;
    }
    return acc;
  }, []);
};
/**
 *
 */
export default (
  type?: string | Function,
  attr?: {} | null | undefined,
  ...children: any[]
) => {
  if (typeof type === "function") {
    return type({
      ...attr,
      ...(children.length > 0 ? { children } : {}),
    });
  }
  if (typeof type === "string") {
    children = normalizeChildren(children);
    // attr = _.omitBy(attr, (value, key) => key.startsWith("__"));
    // attr = _.mapKeys(attr, (value, key) => "@" + key);
    attr = mapKeys(attr || {});
    return {
      [type]: [...(isEmpty(attr) ? [] : [attr]), ...children],
    };
  }
  throw new Error("type should be function or string");
};

function mapKeys(attr) {
  return Object.entries(attr).reduce((o, [k, v]) => {
    o["@" + k] = v;
    return o;
  }, {});
}

function isEmpty(o: {}){
  return Object.keys(o).length == 0
}