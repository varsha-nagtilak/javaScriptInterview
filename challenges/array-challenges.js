/*
 JavaScript interview code challenges on Array
*/

//1. Write a method which will flatten any array
/*inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]*/
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }
const arr1 = flatten([[1, 2, 3], [4, 5]]); // [1, 2, 3, 4, 5]
console.log(arr1)
const arr2 = flatten([[[1, [1.1]], 2, 3], [4, 5]]); // [1, 1.1, 2, 3, 4, 5]
console.log(arr2)
