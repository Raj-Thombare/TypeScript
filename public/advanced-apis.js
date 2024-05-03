"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const x = sumOfAge({ name: 'raj', age: 22 }, { name: 'rohit', age: 37 });
console.log(x);
