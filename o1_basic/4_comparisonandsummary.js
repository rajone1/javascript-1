// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 === 1);
// console.log(2 != 1);

// types of operation ex

const score = 100;
const score2 = 100.5;

console.log(score2);
const login = true;
const outsideTemp = null;

const userEmail = "email";
console.log([login, outsideTemp, userEmail]);
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id == anotherId);

// non premitive

// ***array ,object ,function***

let arrayName = ["shaon", "rezwan", "eva"];

let object = {
  name: "shaon",
  age: 30,
  education: "mba",
};
let myFunction = function () {
  console.log("hello");
};

console.log(typeof myFunction);
// ************** stack(primitive) and heap (non-primitive)memory
