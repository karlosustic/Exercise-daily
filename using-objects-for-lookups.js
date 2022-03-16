// Task 1 - phoneticLookup("alpha") should equal the string Adams
// Task 2 - phoneticLookup("bravo") should equal the string Boston
// Task 3 - phoneticLookup("charlie") should equal the string Chicago
// Task 4 - phoneticLookup("delta") should equal the string Denver
// Task 5 - phoneticLookup("echo") should equal the string Easy
// Task 6 - phoneticLookup("foxtrot") should equal the string Frank
// Task 7 - phoneticLookup("") should equal undefined
// Task 8 - You should not modify the return statement
// Task 9 - You should not use case, switch, or if statements



// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
}
    result = lookup[val];

  // Only change code above this line
  return result;
}

phoneticLookup("charlie");