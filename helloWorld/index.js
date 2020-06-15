// Write a function "greet" that returns "hello world!" in this format

function greet() {
  let phrase = {
    greeting: "hello",
    location: "world!",
  };
  return phrase.greeting + " " + phrase.location;
}

console.log(greet(), "hello world!");