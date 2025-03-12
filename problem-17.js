// function isPrime(n){
//   if(n < 2) return false;
//   for(let i = 2; i < n / 2; i++){
//     if(n % i === 0) return false;
//   }
//   return true;
// }

// function isPrime(n){
//   if(n < 2) return false;
//   for(let i = 2; i < Math.sqrt(n); i++){
//     if(n % i === 0) return false;
//   }
//   return true;
// }

// function isPrime(n){
//   let result = true;
//   for(let i = 2; i < n; i++){
//     console.log(n, '%', i, n % i);
//     if(n % i === 0) return false;
//     break;
//   }
//   return result;
// }

function isPrime(n){
  let result = true;
  if(n === 2) return true;
  if(n < 2 || n % 2 === 0) return false;
  for(let i = 3; i < n; i += 2){
    if(n % i === 0) return false;
  }
  return result;
}

// Test cases
console.log(isPrime(4)); 
console.log(isPrime(51));