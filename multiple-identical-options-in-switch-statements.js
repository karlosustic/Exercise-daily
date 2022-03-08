// Task 1 - sequentialSizes(1) should return the string Low
// Task 2 - sequentialSizes(2) should return the string Low
// Task 3 - sequentialSizes(3) should return the string Low
// Task 4 - sequentialSizes(4) should return the string Mid
// Task 5 - sequentialSizes(5) should return the string Mid
// Task 6 - sequentialSizes(6) should return the string Mid
// Task 7 - sequentialSizes(7) should return the string High
// Task 8 - sequentialSizes(8) should return the string High
// Task 9 - sequentialSizes(9) should return the string High
// Task 10 - You should not use any if or else statements
// Task 11 - You should have nine case statements


function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;

}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);