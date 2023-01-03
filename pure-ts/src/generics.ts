// Example 1

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

// Generics allow us reusable blocks of code which can be used with different types.
// Generics makes it easier to write reusable code.
// We dont need to explicitly define types

// below function is dynamic in termas of passing different types of args cause when using Generics, it infers the arg type based on value of arg passed!

let logAnything = <T>(x: T): T => {
  console.log(x);
  return x;
};

logAnything("Hello");
logAnything(true);
logAnything([99, 45, 8]);
logAnything({ username: "im.rakaa" });

// Example 2

let addUid = (obj: object) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

const egOne = addUid({ name: "Hasaranga", age: 28 });
console.log(egOne); //works but if you access prop of obj that is passed it gives error cause it doesn't know what props does that obj contain
// console.log(egOne.name); error

let addUid2 = <T extends object>(obj: T) => {
  let id = Math.floor(Math.random() * 100);
  return { ...obj, id };
};

const egTwo = addUid2({ name: "Hasaranga", age: 28 });
console.log(egTwo.name); // works cause when using Generics, it will know what kind of props are on obj

// const egThree = addUid2("Hello"); // if you want to define specific type that accepts as arg then use extends

// Generics with Type Alias
// Example 3

type Database<T> = { value: T };

const databaseValue: Database<string> = { value: "2" };
const databaseValue2: Database<number> = { value: 2 };
const databaseValue3: Database<boolean> = { value: true };

// Generics with interfaces
// Example 4

interface PlayerAge {
  age: number;
}

// generic constraints(extends) - compiler doesn't know that every obj will have .age property so it gives error,
// so we constraint in by extending it to PlayerAge so that whenever an obj doent have age prop then it will not give error and when a obj has age prop it will work

const getYoungestPlayer = <T extends PlayerAge>(arg: T[]) => {
  return arg.sort((a, b) => a.age - b.age)[0];
};

const player: PlayerAge[] = [{ age: 20 }, { age: 23 }, { age: 19 }];
getYoungestPlayer(player).age; // 19

interface MumbaiPlayer {
  name: string;
  age: number;
}

const MumbaiPlayers: MumbaiPlayer[] = [
  { name: "Rohit", age: 35 },
  { name: "Tilak", age: 20 },
  { name: "Brevis", age: 19 },
];

getYoungestPlayer(MumbaiPlayers); // can access age but name cannot
const player1 = getYoungestPlayer(MumbaiPlayers);
player1.name; // works with Generics
