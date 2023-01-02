"use strict";
// const anchor = document.querySelector("a")!; // use ! at the end when you know value is certain
// if (anchor) {
//   console.log(anchor.href);
// }
// console.log(anchor.href);
// const form = document.querySelector("form")!; HTMLFormElement
// const form = document.querySelector(".new-item-form")!;  element
// TypeCasting means overriding element type.
const form = document.querySelector(".new-item-form");
// console.log(form.children);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
