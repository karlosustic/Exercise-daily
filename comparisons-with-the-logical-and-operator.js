// Task 1 - You should use the && operator once
// Task 2 - You should only have one if statement
// Task 3 - testLogicalAnd(0) should return the string No
// Task 4 - testLogicalAnd(24) should return the string No
// Task 5 - testLogicalAnd(25) should return the string Yes
// Task 6 - testLogicalAnd(30) should return the string Yes
// Task 7 - testLogicalAnd(50) should return the string Yes
// Task 8 - testLogicalAnd(51) should return the string No
// Task 9 - testLogicalAnd(75) should return the string No
// Task 10 - testLogicalAnd(80) should return the string No


function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
  
      return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);