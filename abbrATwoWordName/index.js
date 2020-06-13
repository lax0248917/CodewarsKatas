function abbrevName(name) {
  let firstInitial = name[0];
  let initial = name.split(" ")
  let lastInitial = (initial[1].charAt());
  let initials = (`${firstInitial}.${lastInitial}`).toUpperCase();
  return initials;
}
console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");