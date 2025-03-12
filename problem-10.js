function findLargestArrayNumber(arrayOfNumbers) {
  let biggestNumber = 0;
 for(i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] > biggestNumber){
      biggestNumber = arrayOfNumbers[i];
    }
  }
  return biggestNumber;
}

console.log(findLargestArrayNumber([2,4,58,6,8]));
