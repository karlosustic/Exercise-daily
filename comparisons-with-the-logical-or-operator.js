// Task 1 - You should use the || operator once
// Task 2 - You should only have one if statement
// Task 3 - testLogicalOr(0) should return the string Outside
// Task 4 - testLogicalOr(9) should return the string Outside
// Task 5 - testLogicalOr(10) should return the string Inside
// Task 6 - testLogicalOr(15) should return the string Inside
// Task 7 - testLogicalOr(19) should return the string Inside
// Task 8 - testLogicalOr(20) should return the string Inside
// Task 9 - testLogicalOr(21) should return the string Outside
// Task 10 - testLogicalOr(25) should return the string Outside


function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);