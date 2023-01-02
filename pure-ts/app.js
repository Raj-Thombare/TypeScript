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
// Arrays & Objects
var players = ["Rohit Sharma", "Johnny Bairstow", "Ben Stokes"];
// players.push(29);
players.push("Rishabh Pant");
console.log(players);
var mixedArray = ["Rohit Sharma", 45, "Ben Stokes", 99];
mixedArray.push(67);
// mixedArray.push(false); error
var MI = {
    id: 1,
    name: "Jofra Archer",
    isForeiner: true
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
var microsoft;
microsoft = "best";
var PBKS;
PBKS = {
    player1: "Sam Curran",
    player2: "Bhajuka Rajpaksha",
    IplWon: 0
};
var IplTeams = []; // contains only string
IplTeams.push("MI");
// IplTeams.push(false); error
// Union Types
var bblTeams = []; // contains only string & numbers
bblTeams.push("MI");
bblTeams.push(15);
var Meta;
Meta = true;
