// Task 1 - compareEquality(10, "10") should return the string Not Equal
// Task 2 - compareEquality("20", 20) should return the string Not Equal
// Task 3 - You should use the === operator


// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");