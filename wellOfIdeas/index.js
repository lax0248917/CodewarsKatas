function well(x){
  var arr = x;
  var word = arr.includes('good');
  console.log(word);
  if(word == true) {
    console.log('Publish!');
  } else {
    console.log('Fail!')
  } 
};

well(['bad', 'bad', 'bad']);






// Test.describe("Example tests",_=>{
//   Test.assertEquals(well(['bad', 'bad', 'bad']), 'Fail!');
//   Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//   Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//   });