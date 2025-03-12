num = 15;
splitnumber = num.toString().split("");
console.log(splitnumber);
let sum = 0;
for (let i = 0; i < splitnumber.length; i++) {
    sum += Math.pow(parseInt(splitnumber[i]), 3);
}
console.log(sum);
if (sum === num) {
    console.log("Armstrong number");
} else {
    console.log("Not an Armstrong number");
}

// function armstrongNumber(num) {
//     splitnumber = num.toString().split("");
//     let sum = 0;
//     for (let i = 0; i < splitnumber.length; i++) {
//         sum += Math.pow(parseInt(splitnumber[i]), 3);
//     }
//     if (sum === num) {
//         return "Armstrong number";
//     } else {
//         return "Not an Armstrong number";
//     }
// }

// function armstrongNumber(num) {
//     splitnumber = num.toString().split("");
//     let sum = 0;
//     for (let i = 0; i < splitnumber.length; i++) {
//         sum += Math.pow(parseInt(splitnumber[i]), 3);
//     }
//     if (sum === num) {
//         return "Armstrong number";
//     } else {
//         return "Not an Armstrong number";
//     }
// }


function armstrongNumber(num) {
    splitnumber = num.toString().split("");
    let sum = 0;
    for (let i = 0; i < splitnumber.length; i++) {
        sum += splitnumber[i
        ] ** 3;
    }
    if (sum === num) {
        return "Armstrong number";
    } else {
        return "Not an Armstrong number";
    }
}


// lastnumber = num % 10;
// console.log(lastnumber);
// number = Math.floor(num / 10);
// console.log(number);

