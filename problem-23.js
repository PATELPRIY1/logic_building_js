
function numberPyramid(num){
  for(let i = 1; i <= num; i++){
    let lineContent = "";
    for(let space = 1; space <= num - i; space++){
      lineContent = lineContent + " ";
    }
    for(let count = 1; count <= i; count++){
      lineContent = lineContent + count;
    }
    for(let reverseCount = i - 1; reverseCount >=1; reverseCount --){
      lineContent = lineContent + reverseCount;
    }
    console.log(lineContent)
  }
}

console.log(numberPyramid(10))