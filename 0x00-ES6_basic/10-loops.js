export default function appendToEachArrayValue(array, appendString) {
  const arrayFull = [];
  for (const idx of array) {
    arrayFull.push(`${appendString}${idx}`);
  }

  return arrayFull;
}
