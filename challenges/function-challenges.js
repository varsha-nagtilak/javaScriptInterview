/*Design a function which can keep recieving the arguments on each function call and returns the sum when no argument is passed

- The function can be designed to return another function which maintains the closure over the previous sum value
- The check for breaking condition can be added using the argument check for `undefined`

// Example
/*sum(2)(4)(6)(1)();          // 13
sum(2)(4)();                // 6
sum(3)();                   // 3
```*/
//Solution 1:
// const sum = (a) => {
//     return function (b) {
//         if(b === undefined) {
//             return a;
//         } else {
//             return sum(a + b)
//         }
//     }
// }
//Solution 2:
const sum = a => b => b === undefined ? a : sum(a + b);
const s = sum(2)(4)(6)(1)();
console.log(s)

//2. Write a "mul" function which will work properly when invoked as below
//console.log(mul(2)(3)(4)()); // output : 24
//console.log(mul(4)(3)(4)()); // output : 48
function multiplyNnumbers(a) {        
    return function (b) {
        if(b === undefined) {
            return a;
        } else {
            return multiplyNnumbers(a * b)
        }
    }
}
  const multiplyNresult = multiplyNnumbers(2)(3)(4)(6)()
  console.log(multiplyNresult)

//3. Write a "mul" function which will work properly when invoked as below
//console.log(mul(2)(3)(4)); // output : 24
//console.log(mul(4)(3)(4)); // output : 48
function multiplyThreeNumbers(a) {        
    return function (b) {
         return function (c) {
            return a * b * c;
         }      
    }
}
  const multiply3result = multiplyThreeNumbers(2)(3)(4)
  console.log(multiply3result)