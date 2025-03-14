function fizzBuzz(num) {
  if(num < 0){
    throw new Error("Please Enter Positive Number");
  }
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`FizzBuzz`);
    } else if (i % 3 == 0) {
      console.log(`Fizz`);
    } else if (i % 5 == 0) {
      console.log(`Buzz`);
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(36);
fizzBuzz(45);
