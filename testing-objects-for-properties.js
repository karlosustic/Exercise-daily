// Task 1 - checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
// Task 2 - checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
// Task 3 - checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
// Task 4 - checkObj({city: "Seattle"}, "city") should return the string Seattle.
// Task 5 - checkObj({city: "Seattle"}, "district") should return the string Not Found.
// Task 6 - checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.


function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
  return "Not Found";
  }
  // Only change code above this line
}