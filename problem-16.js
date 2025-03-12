function simpleInterest(principal, rate, time) {
  return (principal * rate * time) / 100;
}

// Test cases
console.log(simpleInterest(1000, 5, 2)); // 100
console.log(simpleInterest(1000, 10, 2)); // 200  