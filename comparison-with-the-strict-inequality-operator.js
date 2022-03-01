// Task 1 - testStrictNotEqual(17) should return the string Equal
// Task 2 - testStrictNotEqual("17") should return the string Not Equal
// Task 3 - testStrictNotEqual(12) should return the string Not Equal
// Task 4 - testStrictNotEqual("bob") should return the string Not Equal
// Task 5 - You should use the !== operator


// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);