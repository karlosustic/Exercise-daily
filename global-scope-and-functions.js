// Task 1 - myGlobal should be defined
// Task 2 - myGlobal should have a value of 10
// Task 3 - myGlobal should be declared using the let or const keywords
// Task 4 - oopsGlobal should be a global variable and have a value of 5



// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
  // Assign 5 to oopsGlobal Here

}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}