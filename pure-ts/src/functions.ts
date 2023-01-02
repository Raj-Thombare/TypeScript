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
