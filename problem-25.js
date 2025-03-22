function isStringAlphabeticOrder(str){
  for(let i = 0; i < str.length - 1; i++){
    if(str[i] > str[i + 1]){
      return false;
    }
  }
  return true;
}

console.log(isStringAlphabeticOrder('abc')); // true
console.log(isStringAlphabeticOrder('xyz')); // true
console.log(isStringAlphabeticOrder('xyaz')); // false
console.log(isStringAlphabeticOrder('xyaa')); // false