// function exponentCalculator(base, exponent){
//   result = 1;
//   for(let i = 1; i <= exponent; i++){
//     result = result * base;
//   }
//   return result;
// }

function exponentCalculator(base, exponent){
  return base ** exponent;
}
console.log(exponentCalculator(5,5));