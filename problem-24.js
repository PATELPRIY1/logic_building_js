function countCharacter(str){
  const count = {};
  str = str.toLowerCase();
  for(let i = 0; i < str.length; i++){
    if(!count[str[i]]){
      count[str[i]] = 0;
    }
    count[str[i]] = count[str[i]] + 1;
  }
 return count;
}

console.log(countCharacter("Patel Priya"));