/*
 JavaScript interview code challenges on Array
*/

//1. Write a method which will flatten any array
/*inputArray = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
function flatten(inputArray) => output [1, 2, 3, 4, 5, 6, 7, 8, 9]*/
// function flatten(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//       return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
//   }
  const inputArr = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
  const flatten = (arr) => {
    return arr.reduce((total, cur) => {
      return total.concat(Array.isArray(cur) ? flatten(cur) : cur)
    },[])
  }
const arr1 = flatten(inputArr); // [1, 1.1, 2, 3, 4, 5]
console.log(`\n1. Write a method which will flatten any array [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]}: \n O/P: ${arr1}`)


//2. Find first repeating characher from string
const str = "abcbad"
const findRepeatingChar = (s) => {    
    const strArray = s.split("")
    let n = new Set(strArray)
    const duplicateVal = strArray.filter((item) => {        
     if(n.has(item)) {
         n.delete(item)
     } else {
         return item
     }
    })
    console.log(`\n2. Find first repeating characher from string ${str}:\n O/P: ${duplicateVal[0]}`)
}
findRepeatingChar(str)

//3. Find element from array. if not exist then find smaller number than provided number
const arr2 = [1, 2, 4, 5, 5, 7 , 9]
const findNumber = (a) => {
    const n = arr2.filter((cur) => { return  cur < a })
    return n[n.length - 1]
}
const foundNumber = findNumber(9)
console.log(`\n3. Find element from array. if not exist then find smaller number than provided number  ${arr2}:\n O/P: ${foundNumber}`)

