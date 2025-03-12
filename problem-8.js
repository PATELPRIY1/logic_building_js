// function sum(num){
//   if(num < 1){
//     throw new Error('Number must be greater than 1');
//   }
//    const stringNumber = num.toString();
//    const splitNumber = stringNumber.split('');
//    let result = 0;
//     splitNumber.forEach((number) => {
//       result += parseInt(number);
//     });
//     return result;
// }

function sum(num) {
  let sumDigit = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    sumDigit += lastDigit;
    num = Math.floor(num / 10); 
  }
  return sumDigit;
}

console.log(sum(5)); 
console.log(sum(123)); 
console.log(sum(123456)); 

