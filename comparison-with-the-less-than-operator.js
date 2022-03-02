// Task 1 - testLessThan(0) should return the string Under 25
// Task 2 - testLessThan(24) should return the string Under 25
// Task 3 - testLessThan(25) should return the string Under 55
// Task 4 - testLessThan(54) should return the string Under 55
// Task 5 - testLessThan(55) should return the string 55 or Over
// Task 6 - testLessThan(99) should return the string 55 or Over
// Task 7 - You should use the < operator at least twice


function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);