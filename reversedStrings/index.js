// function solution(str){
//   var splitString = str.split('');
//   console.log(splitString);
//   var reverseArray = splitString.reverse();
//   console.log(reverseArray);
//   var joinArray = reverseArray.join('');
//   return joinArray;
// }

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution('world') == 'dlrow')