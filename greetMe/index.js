var greet = function(name) {
  let lowerName = name.slice(1);
  let firstLetter = name.charAt(0);
  if (name === name.toUpperCase()) {
    return 'Hello ' + firstLetter + lowerName.toLowerCase() + '!';
  }else if (name === name.toLowerCase()) {
    return 'Hello ' + name.charAt(0).toUpperCase() + name.slice(1) + '!';
  }else {
    return 'Hello ' + firstLetter + lowerName.toLowerCase() + '!';
  }
};

console.log(greet('riley'), 'Hello Riley!');
console.log(greet('RILEY'), 'Hello Riley!');
console.log(greet('Qadsfhaksdfhkasdjhf'), 'Hello Riley!');