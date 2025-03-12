function calculateAverages(str){
  let sum = 0;
  let avg = 0;
  for(let i = 0; i < str.length; i++){
    sum += str[i];
    avg = sum / str.length;
  }
  return avg;
}

console.log(calculateAverages([2,4,5]));
console.log(calculateAverages([2,4,35,45]));