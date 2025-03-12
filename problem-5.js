function reverseString(str) {
  if (typeof str !== "string") {
   throw new Error("Input must be a string");
  }
  let reverseString = "";
  // your code here
  for(let i = str.length - 1; i >= 0; i--) {
    reverseString += str[i];
  }
  return reverseString;
}

console.log(reverseString("Hello")); // olleH
console.log(reverseString("world")); // dlrow
// console.log(reverseString("")); // ""
// console.log(reverseString(5)); // Error: Input must be a string

// function findLengthOfString(s) {
//   let count = 0;
//   for (let char of s) {
//       count++;
//   }
//   return count;
// }

function findLengthOfString(s){
  count = 0;
  for(let i = 0; s[i] !== undefined; i++){
    count++;
  }
  return count;
}

// Example usage
const string = "Hello, World!";
const length = findLengthOfString(string);
console.log("The length of the string is:", length);

