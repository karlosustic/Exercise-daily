// Task 1 - gloveBoxContents should equal the string maps.
// Task 2 - Your code should use dot and bracket notation to access myStorage.



const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);