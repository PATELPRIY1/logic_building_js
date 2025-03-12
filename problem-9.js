// function multiplication(num,end) {
//   if(typeof num !== 'number'){
//     throw new Error('Input must be a number');
//   }
//   for(let i = 1; i <= end; i++){
//     console.log(`${num} x ${i} = ${num * i}`);
//   }
// }

function multiplication(num,end) {
  if(typeof num !== 'number'){
    throw new Error('Input must be a number');
  }
  for(let i = num; i <= num * end; i = i + num){
    console.log(i);
  }
}

function table(num,end) {
  if(typeof num !== 'number'){
    throw new Error('Input must be a number');
  }
  for(let i = 1; i <= end; i++){
    for(let j = 1; j <= end; j++){
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

table(5,10);

// multiplication(5,20);
multiplication(7,10);