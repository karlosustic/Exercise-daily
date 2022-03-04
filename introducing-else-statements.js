// Task 1 - You should only have one if statement in the editor
// Task 2 - You should use an else statement
// Task 3 - testElse(4) should return the string 5 or Smaller
// Task 4 - testElse(5) should return the string 5 or Smaller
// Task 5 - testElse(6) should return the string Bigger than 5
// Task 6 - testElse(10) should return the string Bigger than 5
// Task 7 - You should not change the code above or below the specified comments.


function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
  result = "5 or Smaller";
}
  
  // Only change code above this line
  return result;
}

testElse(4);