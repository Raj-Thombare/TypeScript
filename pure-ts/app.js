var character = "Rakaa";
console.log(character);
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(input);
});
// Basic Types
var ac = "Raj"; // Type inference feature allow to define type without explicitely defining it!
var age = 21;
var isMale = true;
// isMale = "yes";  Type 'string' is not assignable to type 'boolean'
var eligible = null;
// eligible = "not valid"; since it type defined is null, it doesn't make any sence to assign something to it!
function sum(a, b) {
    // Union type makes it possible for variables to have more than one type eg. number | string
    // TypeScript has a default type any. when you don't explicitely define types then TS implicitely set type to any.
    return a + b;
}
console.log(sum("2", 9)); // 29
