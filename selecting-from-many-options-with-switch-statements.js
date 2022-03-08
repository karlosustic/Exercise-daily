// Task 1 - caseInSwitch(1) should have a value of the string alpha
// Task 2 - caseInSwitch(2) should have a value of the string beta
// Task 3 - caseInSwitch(3) should have a value of the string gamma
// Task 4 - caseInSwitch(4) should have a value of the string delta
// Task 5 - You should not use any if or else statements
// Task 6 - You should have at least 3 break statements


function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);