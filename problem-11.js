// function checkIfPalindrome(str) {
//   if(str == null) {
//     return false;
//   }
//   for(let i = 0; i <= str.length / 2; i++) {
//     if(str[i] !== str[str.length -1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkIfPalindrome(str) {
//   str = str.toLowerCase();
//   let start = 0;
//   let end = str.length - 1;
//   for(start, end; start < end; start++, end--) {
//     if(str[start] !== str[end]) {
//       return false;
//     }
//   }
//   return true;
// }

function checkIfPalindrome(str) {
  str = str.toLowerCase();
  const splitString = str.split('');
  const reverseString = splitString.reverse();
  const joinString = reverseString.join('');
  if(str === joinString) {
    return true;
  }
  return false;
}
console.log(checkIfPalindrome('hello'));
console.log(checkIfPalindrome('madam'));