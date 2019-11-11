function hero(bullets, dragons){
  var shotsFired = bullets / dragons;
  if (bullets > (2 * dragons)) {
    return true;
  } else {
    return false;
  }
};

hero(100, 40)

Test.assertEquals(hero(10, 5), true);
Test.assertEquals(hero(7, 4), false);
Test.assertEquals(hero(4, 5), false);
Test.assertEquals(hero(100, 40), true);
Test.assertEquals(hero(1500, 751), false);
Test.assertEquals(hero(0, 1), false);
