// Task 1 - testStrict(10) should return the string Not Equal
// Task 2 - testStrict(7) should return the string Equal
// task 3 - testStrict("7") should return the string Not Equal
// Task 4 - You should use the === operator


// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);