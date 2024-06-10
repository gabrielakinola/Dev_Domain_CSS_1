// console.log("This is my second javascript");

// //VARIABLES AND DATA TYPES
// let myFirstName = "chiamaka";
// var myLastName = "vivian";
// let number2 = 23.5;

// //Working with strings
// // const fullName = "chiamaka" + " vivian";
// const fullName = myFirstName + " " + myLastName;
// const fullNameTemp = `${myFirstName} ${myLastName}`; //ES6

// console.log(fullName);
// console.log(fullNameTemp);

// //Working with numbers
// let num1 = 15;
// let num2 = 3;

// const sum = num1 + num2;
// console.log(sum);

// if (true) {
//   console.log(fullName);
// }

// window.alert("Welcome to javascript class");

// prompt("What is your name?");

// confirm("Are you okay with this?");

// function nameSwitch(name) {
//   switch (name) {
//     case "chiamaka":
//       console.log("chiamaka is my name");
//       break;
//     case "john":
//       console.log("john is my name");
//       break;
//     case "saint":
//       console.log("saint is my name");
//       break;
//     default:
//       console.log("gabriel is my name");
//       break;
//   }
// }

// nameSwitch("john");

// switch (2) {
//   case 1:
//     return 1;
//     break;
//   case 2:
//     return 2;
//     break;
//   case 3:
//     return 2;
//     break;
// }

//Arrays and Objects
var names = ["chiamaka", "saint", "john"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// for (eachName in names) {
//   console.log(names[eachName]);
//   console.log(eachName);
// }

let i = 0;
while (i < names.length) {
  console.log(names[i]);
  i = i + 1;
}

var numbers = [5, 7, 3, 9, 20, 30, 40];

// 1st time
// sum = 5

// 2nd time
// sum = 12

// 3rd time
//sum= 15

//7th time
// sum=114

var sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}
console.log(sum);

//While loop
let count = 0;
let altSum = 0;
while (count < numbers.length) {
  altSum = altSum + numbers[count];
  count = count + 1;
}
console.log(altSum);

// for in loop
let newSum = 0;
for (eachNumberIndex in numbers) {
  newSum = newSum + numbers[eachNumberIndex];
}
console.log(newSum);

function sumArrayElement(numbersArray) {
  var sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    sum = sum + numbersArray[i];
  }
  console.log(sum);
}

sumArrayElement([2, 4, 6, 6, 7, 35, 92]);

var designBrands = ["givenchy", "versace"];

designBrands.pop();
console.log(designBrands);

designBrands.unshift("lacoste");
console.log(designBrands);

designBrands.push("louis vuitton");
// designBrands.push(...["uehdu", "uhwdeh"]);
console.log(designBrands);

designBrands.splice(2, 1);
console.log(designBrands);

designBrands.shift();

console.log(designBrands);

var array2 = ["john", "amaka", "saint"];

var array1 = [5, 6, 7, ...array2];
console.log(array1);

var student1 = {
  surname: "nwosu",
  age: 32,
  skinColor: "chocolate",
  email: "nwosuchiamaka@gmail.com",
  student: true,
};

var student2 = {
  surname: "emeka",
  age: 18,
  skinColor: "chocolate",
  email: "emeka@gmail.com",
  student: true,
};

var student3 = {
  names: {
    surname: "john",
    otherNames: ["james", "chukwuma"],
  },
  age: 10,
  skinColor: "chocolate",
  email: "john@gmail.com",
  student: true,
};

console.log(student1.surname);
console.log(student1["surname"]);

console.log(student3.names.otherNames[1]);
