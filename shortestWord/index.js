function findShort(s) {
  const stringArray = s.split(" ");
  const shortestWord = stringArray.reduce((a, b) => {
    return (b.length < a.length) ? b : a;
  });
  return shortestWord.length;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);