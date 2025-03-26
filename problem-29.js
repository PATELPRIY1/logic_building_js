function checkPasswordStrong(str) {
  str = str.trim();
  if (str.length < 8) {
    return false; // Return false if the password is too short
  }

  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;
  let hasSpecialCharacter = false;

  const lowerCaseCharacter = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberCharacter = "0123456789";
  const specialCharacter = "!@#$%^&*()_+";

  for (let char of str) {
    if (lowerCaseCharacter.includes(char)) {
      hasLowerCase = true;
    } else if (upperCaseCharacter.includes(char)) {
      hasUpperCase = true;
    } else if (numberCharacter.includes(char)) {
      hasNumber = true;
    } else if (specialCharacter.includes(char)) {
      hasSpecialCharacter = true;
    }
  }

  return hasLowerCase && hasUpperCase && hasNumber && hasSpecialCharacter;
}

console.log(checkPasswordStrong("12345678")); // false
console.log(checkPasswordStrong("12345678A")); // false
console.log(checkPasswordStrong("12345678A!")); // true
console.log(checkPasswordStrong("12345678Aa!d")); // true