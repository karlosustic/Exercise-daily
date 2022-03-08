// task 1 -switchOfStuff("a") should return the string apple
// Task 2 - switchOfStuff("b") should return the string bird
// Task 3 - switchOfStuff("c") should return the string cat
// Task 4 - switchOfStuff("d") should return the string stuff
// Task 5 - switchOfStuff(4) should return the string stuff
// Task 6 - You should not use any if or else statements
// Task 7 - You should use a default statement
// Task 8 - You should have at least 3 break statements



function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff"
    break;

}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);