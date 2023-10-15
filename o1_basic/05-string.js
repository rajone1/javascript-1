// ``

// const name = "shaon";
// or
const name = new String("Shaon ahommed");
const score = 25;
console.log(name);
// old system
// console.log(name + score + "add value");

// modern system

console.log(` my name is ${name} and my score is ${score} `);

const countryName = "Bangladesh";

console.log(countryName[1]);
console.log(countryName.length);
console.log(countryName.indexOf("n"));
console.log(countryName.toUpperCase());

// substring and slice

const sub = countryName.substring(0, 6);
console.log(sub);

// reverse

const slice2 = countryName.slice(0, 6);
console.log(slice2);

const slice1 = countryName.slice(0, 6);

// console.log(slice1);

const a = "hitesh";
const sl = a.slice(-8, 4);
console.log(sl);

// remove space

const fruit = "     banana     ";
console.log(fruit);
console.log(fruit.trim());

// replace
const url = "https://shaon%20ahommed.com";

console.log(url.replace("%20", ""));
