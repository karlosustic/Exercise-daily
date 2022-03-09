// Task 1 - You should not use any else statements anywhere in the editor
// Task 2 - You should not use any if statements anywhere in the editor
// Task 3 - You should have at least four break statements
// Task 4 - chainToSwitch("bob") should be the string Marley
// Task 5 - chainToSwitch(42) should be the string The Answer
// Task 6 - chainToSwitch(1) should be the string There is no #1
// Task 7 - chainToSwitch(99) should be the string Missed me by this much!
// Task 8 - chainToSwitch(7) should be the string Ate Nine
// Task 9 - chainToSwitch("John") should be "" (empty string)
// Task 10 - chainToSwitch(156) should be "" (empty string)


function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);