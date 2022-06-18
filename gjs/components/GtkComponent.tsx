import { jsxml } from "@local/jsxml";
type GtkProps<T> = T & { children?: any; id?: string };
/**
 *
 * @param className
 * @returns GtkElement
 */
export default function GtkComponent<T>(className: JSX.GtkClass) {
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

type PackingProps = {
  expand?: boolean;
  fill?: boolean;
  position?: number;
  padding?: number;
  "pack-type"?: "end" | "start";
  children?: any;
};

export function GtkPacking({ children, ...props }: PackingProps) {
  const packingProps = Object.entries(props).map(([key, value]) => (
    <property name={key}>{propValue(value)}</property>
  ));
  if (children) {
    return (
      <child>
        {children}
        <packing>{packingProps}</packing>;
      </child>
    );
  }
  return <packing>{packingProps}</packing>;
}
