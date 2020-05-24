function hydrate(str) {
  let r = str.match(/\d/g);
  console.log(r);
  let result = r.map(function (x) { 
    return parseInt(x, 10); 
  });
  console.log(result);
  let sum = result.reduce(function(a, b) { return a + b; }, 0);
  console.log(sum);
  let numOfDrinks = sum.toString();
  console.log(numOfDrinks);
  if(numOfDrinks == "1") {
    return numOfDrinks + " glass of water";
  }else {
    return numOfDrinks + " glasses of water";
  };
}

console.log(hydrate("1 beer"), "1 glass of water");
console.log(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");