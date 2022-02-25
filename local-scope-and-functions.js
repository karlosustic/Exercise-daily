// Task 1 - The code should not contain a global myVar variable.
// Task 2 - You should add a local myVar variable.


function myLocalScope() {
  // Only change code below this line
var myVar = "foo";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);