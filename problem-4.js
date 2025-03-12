// function checkNumber(num){
//   if(num % 2 == 0){
//    console.log("Even Number: " + num);
//   } else {
//     console.log("Odd Number: " + num);
//   }
// }
// checkNumber(25);
// checkNumber(20);
// checkNumber(-4);
// checkNumber(0);
// checkNumber(-3);

// function checkNumber(num){
//   num % 2 == 0 ? console.log("Even Number: " + num) : console.log("Odd Number: " + num);
// }

// checkNumber(25);
// checkNumber(20);
// checkNumber(-4);
// checkNumber(0);

// let checkNumber = (num) => num % 2 == 0 ? console.log("Even Number: " + num) : console.log("Odd Number: " + num);

// checkNumber(25); //Odd Number: 25
// checkNumber(20); //Even Number: 20

// function smallestNumber(num1, num2, num3) {
//   if (num1 < num2 && num1 < num3) {
//     console.log("Smallest Number: " + num1);
//   } else if (num2 < num1 && num2 < num3) {
//     console.log("Smallest Number: " + num2);
//   } else {
//     console.log("Smallest Number: " + num3);
//   }
// }

smallestNumber = (num1, num2, num3) => {
  num1 < num2 && num1 < num3 ? console.log("Smallest Number: " + num1) : num2 < num1 && num2 < num3 ? console.log("Smallest Number: " + num2) : console.log("Smallest Number: " + num3);
}

smallestNumber(25, 15, 30); // Smallest Number: 15

