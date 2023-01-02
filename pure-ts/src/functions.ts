let run: Function;

run = () => {
  // when function doesn't return anything, it's return type is void
  console.log("running like Usain Bolt");
};

//1

let multiply = (x: number, y: number, z?: string | number) => {
  // ? is used for optional params
  console.log(z); // undefined

  return x * y;
};

multiply(9, 5); // infers return type to number

//2

let maru = (a: string, b: string, c: string = "Dhamdhere") => {
  // default params
  return `${a}'s name is ${b} ${c}`;
};

console.log(maru("Maru", "Martand"));

// Type Alias

type StringOrNum = string | number;
type personObj = {
  personName: string;
  isMale: boolean;
};

let person1 = (name: personObj, age: StringOrNum) => {
  return `${name.personName} is a ${name.isMale ? "male" : "female"} and ${
    name.isMale ? "his" : "her"
  } age is ${age}`;
};

let person2 = (name: personObj, age: StringOrNum) => {
  return `${name.personName} is a ${name.isMale ? "male" : "female"} and ${
    name.isMale ? "his" : "her"
  } age is ${age}`;
};

console.log(person1({ personName: "Rakaa", isMale: true }, 21));
console.log(person2({ personName: "Kaira", isMale: false }, 20));

// Function Signature

//eg.1

let greet: (a: string, b: string) => void; // strictly follow this function signature

greet = (a, b) => {
  console.log(`${a} says ${b}`);
};

greet("Rolex", "Alright, it's alright!");

//eg.2

let whoIsBig: (a: number, b: number) => boolean;

whoIsBig = (a, b) => {
  return a > b;
};

whoIsBig(5, 9);
