// Task 1 - testNotEqual(99) should return the string Equal
// Task 2 - testNotEqual("99") should return the string Equal
// Task 3 - testNotEqual(12) should return the string Not Equal
// Task 4 - testNotEqual("12") should return the string Not Equal
// Task 5 - testNotEqual("bob") should return the string Not Equal
// Task 6 - You should use the != operator


// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);