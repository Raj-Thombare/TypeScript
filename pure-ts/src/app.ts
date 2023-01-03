// const anchor = document.querySelector("a")!; // use ! at the end when you know value is certain

// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);

// const form = document.querySelector("form")!; HTMLFormElement

// const form = document.querySelector(".new-item-form")!;  element

// TypeCasting means overriding element type.

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

// interfaces

interface User {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

let me: User = {
  name: "Rakaa",
  age: 21,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    return amount;
  },
};

let notMe = {
  name: "Rolex",
  age: 21,
};

console.log(me);

let greetPerson = (person: User) => {
  console.log("Hello, " + person.name);
};

greetPerson(me);

// greetPerson(notMe); error
