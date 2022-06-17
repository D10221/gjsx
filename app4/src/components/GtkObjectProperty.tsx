import jsxml from "@local/jsxml";
/**
 *
 */
export default function GtkObjectProperty({
  key,
  value,
}: {
  key: string;
  value: any;
}): any {
  return <property name={key}>{propValue(value)}</property>;
}
/**
 * 
 * @param value 
 * @returns 
 */
function propValue(value: any){
  if(typeof value === "boolean")return value ? "True": "False";
  return value;
}