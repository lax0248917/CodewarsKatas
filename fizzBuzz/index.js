// Return an Array


// this works as expected, however it was unclear that once the new array has been created, any value in that array
// that meets the fizzify conditions should be changed. So if its 10 then 3 should be altered 5 should be altered 6, 9, and 10 as well
function fizzbuzz(n) {
  // create a new array
  let arr = [];

  if (n % 5 == 0 && n % 3 == 0) {
    for (let i = 1; i < n; i++) {
      arr.push(i);
    }
    arr.push("FizzBuzz");
  } else if (n % 5 == 0) {
    for (let i = 1; i < n; i++) {
      arr.push(i);
    }
    arr.push("Buzz");
  } else if (n % 3 == 0) {
    for (let i = 1; i < n; i++) {
      arr.push(i);
    }
    arr.push("Fizz");
  } else {
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
  }
  console.log(arr);
}

fizzbuzz(3);
