function digitize(n) {
  const reverseArrayOfNumbers = Array.from(String(n), Number).reverse();
  return reverseArrayOfNumbers;
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);