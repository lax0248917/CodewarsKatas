function sakuraFall(v) {
  let height = 80 * 5;
  if (v > 0) {
    let result = height / v;
    return result;
  } else {
    return 0;
  }
}

console.log(sakuraFall(5), 80);
console.log(sakuraFall(10), 40);
console.log(sakuraFall(-1), 0);
