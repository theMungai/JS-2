//  Numbers
const myNumber = 42;
//  an iteger is a whole number.
//  A number with a decimal is a float.
//  JavaScript recognizes a float and an integer as a number data type.

// Number Methods.

// 1. Number.isInteger() method determines whether a number is an integer.

console.log(Number.isInteger(myNumber));

//  2. Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed in from the  arguement, it returns NaN.
console.log(Number.parseFloat("39.7"));

// 3. toFixed() method formats a number according to how many decimal points you provide as the parameter. It returns a number as a string.

console.log(typeof(myNumber.toFixed()));

// 4. parseInt method parses a string argument and returns an integer.
console.log(Number.parseInt("96.9")) /*expected output is 96 as a number data type. */

// 5. toString method returns a string representing the number.
console.log(myNumber.toString());