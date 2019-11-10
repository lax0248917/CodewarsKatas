function enough(cap, on, wait) {
  var seatsAvail = cap - on;
  var result = seatsAvail - wait;
  if(result >= 0) {
    return 0;
  } else {
    return Math.abs(result);
  }
};

enough(55, 45, 10);

// describe('Example Tests', function(){
//   Test.assertEquals(enough(10, 5, 5), 0);
//   Test.assertEquals(enough(100, 60, 50), 10);
//   Test.assertEquals(enough(20, 5, 5), 0);
// });