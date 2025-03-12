function calculateFactor(str){
  if(typeof str !== 'number'){
    throw new Error('Please provide a number');
  }
  result = [];
  for(i = 0; i <= str; i++){
    if(str % i === 0){
      result.push(i);
      console.log(`${i} is a factor number.`);
    }
  }
  return result;
}

console.log(calculateFactor(10));
console.log(calculateFactor(14));