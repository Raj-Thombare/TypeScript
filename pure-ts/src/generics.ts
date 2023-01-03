// Suppose you want to make a function that logs every type of value!

const logObject = (a: { name: string }) => {
  console.log(a);
  return a;
};
logObject({ name: "Vasooli Bhai" }); // cannot accept param other than obj.

const logNumber = (b: number) => {
  console.log(b);
  return b;
};
logNumber(8); // cannot accept param other than number.

const logArray = (c: string[]) => {
  console.log(c);
  return c;
};
logArray(["Maru"]); // cannot accept param other than array.

// above functions are not dynamic in terms of accepting different type of args, they have specific defined type and are limited! Generics come handy here:

// below function is dynamic in termas of passing different types of args cause when using Generics, it infers the arg type based on value of arg passed!

let logAnything = <T>(x: T): T => {
  console.log(x);
  return x;
};

logAnything("Hello");
