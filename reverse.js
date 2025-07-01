// Question 7: Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example:
const input = "hello";
const output = reverseString(input);
console.log(output);
