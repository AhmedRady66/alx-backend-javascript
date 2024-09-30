export default function appendToEachArrayValue(array, appendString) {
  const array_full = [];
  for (const idx of array) {
    array_full.push(`${appendString}${idx}`);
  }

  return array_full;
}
