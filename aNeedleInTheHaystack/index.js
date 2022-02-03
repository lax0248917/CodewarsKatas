function findNeedle(haystack) {
  // Function must take an array
  const needle = (e) => e == "needle";
  let needleIndex = haystack.findIndex(needle);
  return `found the needle at position ${needleIndex}`;
}
