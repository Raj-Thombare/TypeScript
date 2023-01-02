const character = "Rakaa";

console.log(character);

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  console.log(input);
});

// Basic Types

let ac = "Raj"; // Type inference feature allow to define type without explicitely defining it!
let age = 21;
let isMale = true;
// isMale = "yes";  Type 'string' is not assignable to type 'boolean'

let eligible = null;
// eligible = "not valid"; since it type defined is null, it doesn't make any sence to assign something to it!

function sum(a, b: number): number | string {
  // Union type makes it possible for variables to have more than one type eg. number | string
  // TypeScript has a default type any. when you don't explicitely define types then TS implicitely set type to any.
  return a + b;
}

console.log(sum("2", 9)); // 29
