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
