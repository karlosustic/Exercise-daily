// Task 1 - You should have at least two else statements
// Task 2 - You should have at least two if statements
// Task 3 - You should have closing and opening curly braces for each if else code block.
// Task 4 - testElseIf(0) should return the string Smaller than 5
// Task 5 - testElseIf(5) should return the string Between 5 and 10
// Task 6 - testElseIf(7) should return the string Between 5 and 10
// Task 7 - testElseIf(10) should return the string Between 5 and 10
// Task 8 - testElseIf(12) should return the string Greater than 10



function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else {

  return "Between 5 and 10";
}

testElseIf(7); }