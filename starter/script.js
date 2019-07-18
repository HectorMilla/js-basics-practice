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
// let markMass = 200; //kg
// let johnMass = 175; //kg
// let markHeight = 2; //meters
// let johnHeight = 1.8; //meters

// let markBmi = markMass / (markHeight * markHeight);
// let johnBmi = johnMass / (johnHeight * johnHeight);
// console.log(markBmi, johnBmi);
// let highestBmi = markBmi > johnBmi;

// console.log("is Mark's BMI higher than john's? " + highestBmi);

// if / else statements

// let civilStatus = "single";

// if (civilStatus === "single") {
//   console.log(firstName + " is not married");
// } else {
//   console.log(firstName + " is married");
// }

//boolean logic
age = 16;
if (age < 13) {
  console.log(firstName + " is a boy");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man");
} else {
  console.log(firstName + " is a man");
}

// the ternary Oprerator and switch statements

age >= 18
  ? console.log(firstName + " drinks beer.")
  : console.log(firstName + " drinks juice.");

let drink = age >= 18 ? "beer" : "juice";

console.log(drink);

switch (job) {
  case "teacher":
    console.log(firstName + " teaches kids how to code.");
    break;
  case "driver":
    console, log(firstName + " drives an uber in lisbon");
    break;
  default:
    console, log(firstName + " does something else");
}

// truthy and falsy calues and euality operators

// falsy values: undefined, null, 0 , '', nan
// truthy values: not falsy values

let height = 0;

if (height || height === 0) {
  console.log("variable is defined");
} else {
  console.log("variable is not defined");
}

// coding challeng #2

johnTeamAverage = (10 + 10 + 10) / 3;
mikeTeamAverage = (10 + 10 + 10) / 3;
maryTeamAverage = (10 + 10 + 10) / 3;

if (johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage) {
  console.log(
    "Johns team is the winner with an average score of " + johnTeamAverage
  );
} else if (
  mikeTeamAverage > johnTeamAverage &&
  mikeTeamAverage > maryTeamAverage
) {
  console.log(
    "Mikes team is the winner with an average score of " + mikeTeamAverage
  );
} else if (
  maryTeamAverage > johnTeamAverage &&
  maryTeamAverage > mikeTeamAverage
) {
  console.log(
    "Marys team is the winner with an average score of " + maryTeamAverage
  );
} else {
  console.log(
    "all teams have the same average score of " +
      johnTeamAverage +
      "its a draw!"
  );
}

/****************************
 * functions
 */
let calculateAge = birthYear => {
  return 2018 - birthYear;
};
console.log(calculateAge(1998));

const yearsUntilRetirement = (year, firstName) => {
  let age = calculateAge(year);
  let retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired");
  }
};

yearsUntilRetirement(1998, "john");

/********* function statements and expressions */
//expression
let whatDoYouDo = function(job) {};
// statement
function whatDoYouDo1(job) {}

/****** Arrays */

let names = ["john", "mark", "jane"];
let years = new Array(1990, 1995, 1889);
names.unshift("hect");
console.log(names);

/******** coding challenge #3 */
let bills = [124, 48, 268];
let tips = [];
let finalBill = [];

let tipCalc = bill => {
  let tip;
  if (bill < 50) {
    tip = bill * 0.2;
  } else if (bill >= 50 && bill <= 200) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.1;
  }
  tips.push(tip);
  finalBill.push(tip + bill);
};

for (i = 0; i < bills.length; i++) {
  let tip;
  if (bills[i] < 50) {
    tip = bills[i] * 0.2;
  } else if (bills[i] >= 50 && bills[i] <= 200) {
    tip = bills[i] * 0.15;
  } else {
    tip = bills[i] * 0.1;
  }
  tips.push(tip);
  finalBill.push(tip + bills[i]);
}
console.log(tips, finalBill);

/******** objects */

let jane = new Object();
jane.name = "jane";

console.log(jane);

/******* objects and methods */

let person = {
  firstName: "john",
  lastName: "smith",
  birthYear: "1990",
  job: "teacher",
  isMarried: false,
  calcAge: function() {
    this.age = 2019 - this.birthYear;
  }
};
person.calcAge();
console.log(person);

/**** coding challenge # 4 */

let mark = {
  firstName: "Mark",
  lastName: "Webster",
  mass: "164",
  height: "1.75",
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
mark.bmiCalc();
console.log(mark.bmi);
let john = {
  firstName: "John",
  lastName: "Snow",
  mass: "164",
  height: "1.75",
  bmiCalc: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
john.bmiCalc();
console.log(john.bmi);

mark.bmi > john.bmi
  ? console.log(
      mark.firstName + mark.lastName + " has the highest BMI of " + mark.bmi
    )
  : john.bmi > mark.bmi
  ? console.log(
      john.firstName + john.lastName + " has the highest BMI of " + john.bmi
    )
  : console.log(
      "both " +
        mark.firstName +
        mark.lastName +
        " and " +
        john.firstName +
        john.lastName +
        " have the same BMI of " +
        mark.bmi
    );
