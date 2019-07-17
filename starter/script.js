// console.log("hey whats up");

// const firstName = "John";
// const lastName = "Smith";
// let age = 21;
// let job = "Teacher";

// console.log(
//   `hey my name is ${firstName} ${lastName} I am ${age} years old. I work as a ${job}`
// );
// this is how you comment
/* multi line comment*/
// variable mtation and type coercion
var age = 21;
var firstName = "john";

console.log(firstName + " " + age);
var job, isMarried;
job = "teacher";
isMarried = false;

age = "twenty eight";
// console.log(
//   `hey my name is ${firstName}  I am ${age} years old. I work as a ${job}`
// );

let now = 2018;
const yearJohn = 1989;
let fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

let ageJohn = now - yearJohn;
let ageMark = 35;
let average = (ageJohn + ageMark) / 2;
console.log(average);

let x, y;
x = y = (2 + 5) * 4 - 6;
console.log(x, y);

// coding challenge
let markMass = 200; //kg
let johnMass = 175; //kg
let markHeight = 2; //meters
let johnHeight = 1.8; //meters

let markBmi = markMass / (markHeight * markHeight);
let johnBmi = johnMass / (johnHeight * johnHeight);
console.log(markBmi, johnBmi);
let highestBmi = markBmi > johnBmi;

console.log("is Mark's BMI higher than john's? " + highestBmi);
