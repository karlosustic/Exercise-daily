// Task 1 - You should have at least four else statements
// Task 2 - You should have at least four if statements
// Task 3 - You should have at least one return statement
// Task 4 - testSize(0) should return the string Tiny
// Task 5 - testSize(4) should return the string Tiny
// Task 6 - testSize(5) should return the string Small
// Task 7 - testSize(8) should return the string Small
// Task 8 - testSize(10) should return the string Medium
// Task 9 - testSize(14) should return the string Medium
// Task 10 - testSize(15) should return the string Large
// Task 11 - testSize(17) should return the string Large
// Task 12 - testSize(20) should return the string Huge
// Task 13 - testSize(25) should return the string Huge



function testSize(num) {
  // Only change code below this line
if (num < 5) {
return "Tiny";
} else if (num < 10) {
  return "Small";
} else if (num < 15) {
  return "Medium";
} else if (num < 20) {
  return "Large";
} else if (num >= 20) {
  return "Huge";
}
  
  // Only change code above this line
}

testSize(7);