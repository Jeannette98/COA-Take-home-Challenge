// QUESTION 2.
// Problem Statement: Given a string, transform it based on the following rules:
// ● If the length of the string is divisible by 3, reverse the entire string.
// ● If the length of the string is divisible by 5, replace each character with its ASCII code.
// ● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
// both operations in the order specified above.

function transformString(input) {
    const length = input.length;
  
    // Check divisibility by 15, 5, and 3
    if (length % 15 === 0) {
      // Divisible by 15: Reverse the string and replace characters with ASCII codes
      const reversedString = input.split("").reverse().join("");
      return reversedString
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
    } else if (length % 5 === 0) {
      // Divisible by 5: Replace characters with ASCII codes
      return input
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
    } else if (length % 3 === 0) {
      // Divisible by 3: Reverse the string
      return input.split("").reverse().join("");
    } else {
      // No transformation needed
      return input;
    }
  }
  

const example1 = transformString("hey");
console.log(example1); // Output: yeh


const example2 = transformString("world");
console.log(example2); // Output: 119 111 114 108 100

const example3 = transformString("abcdef");
console.log(example3); // Output: fedcba


const example4 = transformString("example");
console.log(example4); // Output: example

  