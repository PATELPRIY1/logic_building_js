function check_factorial_number(num){
  if(num < 0){
    throw new Error("Number must be a positive number");
  }
  let fact = 1;
  for(let i = 1; i<=num; i++){
    fact *= i;
  }
  return fact;
}

console.log(check_factorial_number(3));
console.log(check_factorial_number(5)); // 120
console.log(check_factorial_number(0)); // 24

function calculateFactorialUsingRecursion(inputNumber){
  //console.log('inputNumber is', inputNumber)
  if(inputNumber < 0) {
      throw new Error("inputNumber should be greater than or equal to zero");
  }

  if(inputNumber === 0 || inputNumber === 1) {
      return 1;
  }

  return inputNumber * calculateFactorialUsingRecursion(inputNumber - 1);
  //return 4 * calculateFactorialUsingRecursion(3); 4 * 6
  //return 3 * calculateFactorialUsingRecursion(2); 3 * 2
  //return 2 * calculateFactorialUsingRecursion(1); 2 * 1
}

console.log("calculateFactorialUsingRecursion");
console.log(calculateFactorialUsingRecursion(4));
console.log("3!", calculateFactorialUsingRecursion(3));
console.log("10!", calculateFactorialUsingRecursion(10));
console.log("0!", calculateFactorialUsingRecursion(0));
console.log("1!", calculateFactorialUsingRecursion(1));