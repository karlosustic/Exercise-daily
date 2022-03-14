// Task 1 - playerNumber should be a number
// Task 2 - The variable player should be a string
// Task 3 - The value of player should be the string Montana
// Task 4 - You should use bracket notation to access testObj
// Task 5 - You should not assign the value Montana to the variable player directly.
// Task 6 - You should be using the variable playerNumber in your bracket notation



// Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;
const playerName = testObj[playerNumber];
console.log(playerName);  // Change this line

const player = testObj[playerNumber];   // Change this line