"use strict";
// Example 1
// Suppose you want to make a function that logs every type of value!
const logObject = (a) => {
    console.log(a);
    return a;
};
logObject({ name: "Vasooli Bhai" }); // cannot accept param other than obj.
const logNumber = (b) => {
    console.log(b);
    return b;
};
logNumber(8); // cannot accept param other than number.
const logArray = (c) => {
    console.log(c);
    return c;
};
logArray(["Maru"]); // cannot accept param other than array.
// above functions are not dynamic in terms of accepting different type of args, they have specific defined type and are limited! Generics come handy here:
// Generics allow us reusable blocks of code which can be used with different types.
// Generics makes it easier to write reusable code.
// We dont need to explicitly define types
// below function is dynamic in termas of passing different types of args cause when using Generics, it infers the arg type based on value of arg passed!
let logAnything = (x) => {
    console.log(x);
    return x;
};
logAnything("Hello");
logAnything(true);
logAnything([99, 45, 8]);
logAnything({ username: "im.rakaa" });
// Example 2
let addUid = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const egOne = addUid({ name: "Hasaranga", age: 28 });
console.log(egOne); //works but if you access prop of obj that is passed it gives error cause it doesn't know what props does that obj contain
// console.log(egOne.name); error
let addUid2 = (obj) => {
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
const egTwo = addUid2({ name: "Hasaranga", age: 28 });
console.log(egTwo.name); // works cause when using Generics, it will know what kind of props are on obj
const databaseValue = { value: "2" };
const databaseValue2 = { value: 2 };
const databaseValue3 = { value: true };
// generic constraints(extends) - compiler doesn't know that every obj will have .age property so it gives error,
// so we constraint in by extending it to PlayerAge so that whenever an obj doent have age prop then it will not give error and when a obj has age prop it will work
const getYoungestPlayer = (arg) => {
    return arg.sort((a, b) => a.age - b.age)[0];
};
const player = [{ age: 20 }, { age: 23 }, { age: 19 }];
getYoungestPlayer(player).age; // 19
const MumbaiPlayers = [
    { name: "Rohit", age: 35 },
    { name: "Tilak", age: 20 },
    { name: "Brevis", age: 19 },
];
getYoungestPlayer(MumbaiPlayers); // can access age but name cannot
const player1 = getYoungestPlayer(MumbaiPlayers);
player1.name; // works with Generics
let resource1 = {
    id: 1,
    resourceName: "person",
    data: { name: "Travis" },
}; // can access all the props
console.log(resource1.data); // travis
let resource2 = {
    id: 1,
    resourceName: "shopping list",
    data: ["milk", "eggs", "bananas"],
};
console.log(resource2.data[1]); // eggs
