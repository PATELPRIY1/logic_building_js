function countVowelsConsonants(str){
  str = str.toLowerCase();
  str = str.replace(/ /g,'');
  console.log(`Input after cleanup is: ${str}`);
  let vowels = 0;
  let consonants = 0;
 
  for(let i = 0; i < str.length; i++) {
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      vowels++;
    } else if(str[i] >= 'a' && str[i] <= 'z') {
      consonants++;
    }
    else {
      console.log(`${str[i]}: Is neither a vowel nor a consonant`);
    }
  }
  console.log(`Vowels: ${vowels}`);
  console.log(`Consonants: ${consonants}`)
}

countVowelsConsonants('2hello world');
countVowelsConsonants('hello world, how are you?');