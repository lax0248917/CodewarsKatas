function bonusTime(salary, bonus) {
  var result = salary * 10;
  if(bonus == true) {
    console.log("£" + result)
  } else {
    console.log("£" + salary);
  }
};

bonusTime(2, true)