"use strict";
let run;
run = () => {
    // when function doesn't return anything, it's return type is void
    console.log("running like Usain Bolt");
};
//1
let multiply = (x, y, z) => {
    // ? is used for optional params
    console.log(z); // undefined
    return x * y;
};
multiply(9, 5); // infers return type to number
//2
let maru = (a, b, c = "Dhamdhere") => {
    // default params
    return `${a}'s name is ${b} ${c}`;
};
console.log(maru("Maru", "Martand"));
let person1 = (name, age) => {
    return `${name.personName} is a ${name.isMale ? "male" : "female"} and ${name.isMale ? "his" : "her"} age is ${age}`;
};
let person2 = (name, age) => {
    return `${name.personName} is a ${name.isMale ? "male" : "female"} and ${name.isMale ? "his" : "her"} age is ${age}`;
};
console.log(person1({ personName: "Rakaa", isMale: true }, 21));
console.log(person2({ personName: "Kaira", isMale: false }, 20));
