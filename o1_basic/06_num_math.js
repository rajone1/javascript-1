const score = 500;
// console.log(score);
const number2 = new Number(500.4321333);
// console.log(number2);

// console.log(number2.toString());
// console.log(number2.toString().length);
// console.log(number2.toFixed(3));

const othernumber = 123.89333;
// console.log(othernumber.toPrecision(4));

const bignumber = 100000000000;
// console.log(bignumber.toLocaleString("en-In"));

// *********math**********

// console.log(Math);
// console.log(Math.abs(-123));
// console.log(Math.abs(123));
// console.log(Math.round(12.55));
// console.log(Math.ceil(12.2));
// console.log(Math.floor(12.9));

// console.log(Math.min(3, 4, 5, 10));
// console.log(Math.max(3, 4, 5, 10));
// console.log(Math.random());
// nirdisto valur modhha asbe
console.log(Math.random() * 6);
// if add 1 value result not appear 0
console.log(Math.random() * 6 + 1);
// if fixd the number
console.log(Math.floor(Math.random() * 6 + 1));

// add minimum and maximum value

// const min = 10;
// const max = 20;
// console.log(Math.random() * (max - min + 1));
// console.log(Math.random() * (max - min + 1) + min);
// // with out point
// console.log(Math.floor(Math.random() * (max - min + 1) + min));

// *********date********

// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// interview

// console.log(typeof mydate);
let mydate = new Date("01-14-2023");
console.log(mydate.toLocaleString());

let mydate1 = new Date("01-14-2023");
console.log(mydate.getTime());

let myTimestamp = Date.now();
console.log(myTimestamp);
// convert second

let myTimestamp2 = Date.now();

// console.log(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000));

// ******Time******

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);

// `${newDate.getHours()} add date${newDate.getMonth()}
// `;

// other option

// mydate.toLocaleString("default", {
//   weekday: "long",
// });
