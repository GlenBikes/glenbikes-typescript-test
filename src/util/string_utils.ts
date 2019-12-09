/**
 * Compares two strings that represent numbers. Comparing as strings
 * will return inconsistent results if the numbers have different number
 * of digits.
 *
 * Params:
 *   a: fist string
 *   b: second string
 * Returns:
 *   0 -   a and b are numberically equal (may not be string equal though)
 *   < 0 - a < b (a is numerically less than b)
 *   > 0 - a > b (a is numerically greater than b)
**/
export function CompareNumericStrings(a: string, b: string): number {
  if (a.length > b.length) {
    b = b.lpad('0', a.length);
  }
  
  if (b.length > a.length) {
    a = a.lpad('0', b.length);
  }
  
  if (a == b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

/**
 * Recursively dumps any javascript object.
 *
 * Params:
 *   o:      Object to dump
 *   Indent: # characters to indent. This allows creating an intented 
 *           tree structure of an obect.
 *
 * Returns:
 *   String representing a dump of o and all it's values.
 */
export function DumpObject(o: any, indent: number = 0): string {
  var out: string = "";
  if (typeof indent === "undefined") {
    indent = 0;
  }
  for (var p in o) {
    if (o.hasOwnProperty(p)) {
      var val: any = o[p];
      out += new Array(4 * indent + 1).join(" ") + p + ": ";
      if (typeof val === "object") {
        if (val instanceof Date) {
          out += 'Date "' + val.toISOString() + '"';
        } else {
          out +=
            "{\n" +
            DumpObject(val, indent + 1) +
            new Array(4 * indent + 1).join(" ") +
            "}";
        }
      } else if (typeof val === "function") {
      } else {
        out += '"' + val + '"';
      }
      out += ",\n";
    }
  }
  return out;
}
