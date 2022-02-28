// Task 1 - testEqual(10) should return the string Not Equal
// Task 2 - testEqual(12) should return the string Equal
// Task 3 - testEqual("12") should return the string Equal
// Task 4 - You should use the == operator


// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);