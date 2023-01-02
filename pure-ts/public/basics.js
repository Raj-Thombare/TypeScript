"use strict";
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
function sum(a, b) {
    // Union type makes it possible for variables to have more than one type eg. number | string
    // TypeScript has a default type any. when you don't explicitely define types then TS implicitely set type to any.
    return a + b;
}
console.log(sum("2", 9)); // 29
// Arrays & Objects
let players = ["Rohit Sharma", "Johnny Bairstow", "Ben Stokes"];
// players.push(29);
players.push("Rishabh Pant");
console.log(players);
let mixedArray = ["Rohit Sharma", 45, "Ben Stokes", 99];
mixedArray.push(67);
// mixedArray.push(false); error
let MI = {
    id: 1,
    name: "Jofra Archer",
    isForeiner: true,
};
// Valid
// MI = {
//   id: 22,
//   name: "Shreyas Iyer",
//   isForeiner: false,
// };
// Invalid cause can't update the structure of MI object
// MI = {
//   id: 22,
//   name: "Shreyas Iyer",
//   isForeiner: false,
//   age: 28,
// };
// Explicit Types
let microsoft;
microsoft = "best";
let PBKS;
PBKS = {
    player1: "Sam Curran",
    player2: "Bhajuka Rajpaksha",
    IplWon: 0,
};
let IplTeams = []; // contains only string
IplTeams.push("MI");
// IplTeams.push(false); error
// Union Types
let bblTeams = []; // contains only string & numbers
bblTeams.push("MI");
bblTeams.push(15);
let Meta;
Meta = true;
