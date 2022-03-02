// Task 1 - testGreaterThan(0) should return the string 10 or Under
// Task 2 - testGreaterThan(10) should return the string 10 or Under
// Task 3 - testGreaterThan(11) should return the string Over 10
// Task 4 - testGreaterThan(99) should return the string Over 10
// Task 5 - testGreaterThan(100) should return the string Over 10
// Task 6 - testGreaterThan(101) should return the string Over 100
// Task 7 - testGreaterThan(150) should return the string Over 100
// Task 8 - You should use the > operator at least twice


function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);