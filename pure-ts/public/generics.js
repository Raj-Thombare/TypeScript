"use strict";
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
// Generics allow us reusable blocks of code which can be used with different types
// below function is dynamic in termas of passing different types of args cause when using Generics, it infers the arg type based on value of arg passed!
let logAnything = (x) => {
    console.log(x);
    return x;
};
logAnything("Hello");
logAnything(true);
logAnything([99, 45, 8]);
logAnything({ username: "im.rakaa" });
