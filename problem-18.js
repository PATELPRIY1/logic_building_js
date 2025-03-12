function countWords(str) {
  console.log(str);
  str = str.trim();
  console.log(str);
  const splitString = str.split(' ');
  const filteredString = splitString.filter((word) => word !== '');
  console.log(filteredString);
  return splitString.length;
}

console.log(countWords('I love to  code')); // 4