import jsx from "./jsx";
import { GtkClass } from "gjsxml/types";

export type GtkProps<T> = T & { children?: any; id?: string };
/**
 * Component Fty
 * @param className
 * @returns Component
 */
export default function GtkComponent<T>(className: GtkClass) {
  /**
   * Component
   * @returns element
   */
  return ({ children, id, ...props }: GtkProps<T>) => (
    <object class={className} id={id}>
      {Object.entries(props).map(([key, value]) => (
        <property name={key}>{propValue(value)}</property>
      ))}
      {children}
    </object>
  );
}
/**
 *
 * @param value
 * @returns string
 */
function propValue(value: any) {
  if (typeof value === "boolean") return value ? "True" : "False";
  return value;
}
/**
 * this is wrong, packing depends on parent Element
 */
type PackingProps = {
  expand?: boolean;
  fill?: boolean;
  position?: number;
  "pack-type"?: "end" | "start";
  children?: any;
};
/**
 *
 * @param props
 * @returns
 */
export function Packing(props: PackingProps) {
  const packingProps = () =>
    Object.entries(props).map(([key, value]) => (
      <property name={key}>{propValue(value)}</property>
    ));
  return <packing>{packingProps()}</packing>;
}
