// Task 1 - testGreaterOrEqual(0) should return the string Less than 10
// Task 2 - testGreaterOrEqual(9) should return the string Less than 10
// Task 3 - testGreaterOrEqual(10) should return the string 10 or Over
// Task 4 - testGreaterOrEqual(11) should return the string 10 or Over
// Task 5 - testGreaterOrEqual(19) should return the string 10 or Over
// Task 6 - testGreaterOrEqual(100) should return the string 20 or Over
// Task 7 - testGreaterOrEqual(21) should return the string 20 or Over
// Task 8 - You should use the >= operator at least twice


function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);