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
const inputArr = [1, 2, [3, 4], 5, [[[6, 7], 8, [[[[9]]]]]]]
 
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
    const n = arr2.filter((cur) => { return  cur <= a })
    return n[n.length - 1]
}
const foundNumber = findNumber(9)
console.log(`\n3. Find element from array. if not exist then find smaller number than provided number  ${arr2}:\n O/P: ${foundNumber}`)


//4. Given a string, reverse each word in the sentence
var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}
console.log(`\n 4. Given a string, reverse each word in the sentence ${string}: \n O/P ${reverseEachWord} or \n ${reverseEntireSentence}`)


//5. Write a function to find count character occurrence from string 
// input: "dddkkkl"
let objQ5 = {}
let strQ5 = "dddkkkl".split("");
const findCharCount = (str) => {
  str.forEach((element) => {
    if(objQ5.hasOwnProperty(element)) {
      objQ5[element] = objQ5[element] + 1;
     } else {
      objQ5[element] = 1
     }
  });
}
findCharCount(strQ5)
console.log(`Q5. Write a function to find count character occurrence from string: `, objQ5)


//6. Write function to for fibonacci series like 0, 1, 1, 2, 3, 5, 8, 13, 21
//input: 0, 1, 1, 2, 3, 5, 8, 13, 21

const createFebo = (n) => {
   var n1 = 0, n2 = 1, nextNum;
   let fiboNums = [0, 1];
   while(n > 0) {
    nextNum = n1 + n2;
     n1 = n2;
     n2 = nextNum;
     fiboNums.push(nextNum)
     n--;
   }
   console.log(fiboNums)
}
createFebo(21)


//6. Convert nestead object to flat object
const nesteadObj1 = {
  nane: "Varsha",
  age: 30,
  address: {
  city: "Pune",
  state: "Maharashtra",
  }
  }
let  flatObj = {}
const createFlatObject = (toFlat) => {  
  for (let k in toFlat) {
    typeof(toFlat[k]) == 'object' ?  createFlatObject(toFlat[k]) : flatObj[k] = toFlat[k];   
  }
  
}
createFlatObject(nesteadObj1)
console.log(flatObj)

//7. Create Currying function to print "Hello Word" 
// console.log(curryingFunction("Hello")("Word"))

const curryingFunction = (a) => {
  return (b) => { return `${a} ${b}`}
}
console.log(curryingFunction("Hello")("Word"))

//8. Wrate function for "ABC".hello() 
// OP: Hello ABC

String.prototype.hello = function () {
  return "Hello " + this.valueOf();
}
"ABC".hello()

