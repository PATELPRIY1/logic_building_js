// function ckeckPerfectNumber(n){
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//         if (n % i === 0) {
//             sum += i;
//         }
//     }
//     return sum === n;
// }

function ckeckPerfectNumber(n){
  let sum = 0;
  for(let i = 1; i < n; i++){
    if(n % i === 0){
      sum += i;
    }
  }
  if(sum === n){
    return true;
  }else{
    return false;
  }
}


console.log(ckeckPerfectNumber(28)); // true
console.log(ckeckPerfectNumber(29)); // false