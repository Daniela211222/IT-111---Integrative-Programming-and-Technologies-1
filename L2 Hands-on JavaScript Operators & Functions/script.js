function addNumbers(a, b) {
    return a + b;
  }
  console.log(addNumbers(5, 10)); // Output: 15
  
  let num1 = prompt("Enter the first number:");
  let num2 = prompt("Enter the second number:");
  
  let sum = addNumbers(parseFloat(num1), parseFloat(num2));
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);