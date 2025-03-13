/*
 * Operations:
 * Arithmetic
 * Logical
 * Assignment
 * Comparison
 */

/**********************************/
// Arithmetic Operations
/**********************************/

// Binary Operations
let numberOne = 8;
let numberTwo = 3;

console.log(numberOne + numberTwo); // 11
console.log(numberOne - numberTwo); // 5
console.log(numberOne * numberTwo); // 24
console.log(numberOne ** numberTwo); // 512
console.log(numberOne / numberTwo); // 2.66666
console.log(numberOne % numberTwo); // 2

// Unary Operations
console.log(numberOne++); // 8
console.log(++numberOne); // 10
console.log(--numberTwo); // 2
console.log(numberTwo--); // 2
console.log(~numberOne); // -11

let num1 = 5;
let num2 = 10;

console.log(num1++ + ++num2); // 5 + 11
console.log(num1 + num2); // 6 + 11
console.log(--num1 - num2++); // 5 - 11
console.log(~num2 + ++num1); // -13 + 6

/**********************************/
// Logical Operations
/**********************************/

// Unary Operations
let a = true;
let b = false;
let c = true;

console.log(!a); // false
console.log(!b); // true

// Binary Operations
console.log(a && b); // false
console.log(a || b); // true
console.log(a || (b && c)); // true && true => true

/**********************************/
// Assignment Operations
/**********************************/

let d = -6;
let e = 12;

console.log((d += e)); // 6
console.log((d *= e)); // -72
console.log((d %= e)); // 0

/**********************************/
// Comparison Operations
/**********************************/

let x = 8;
let y = "8";
let z = 10;

console.log(x == y); // true
console.log(x === y); // false
console.log(x != z); // true
console.log(x !== y); // true

/**********************************/
// Mixed Operations
/**********************************/

let s = 10;
let t = 20;
let u = 0;

console.log(!(s <= t)); // false
console.log(s < t && s == u); // false
console.log(s > t || t > u); // true
console.log(s > t || u == 0); // true
console.log(u != 0 || t >= 10); // true
console.log(s-- > t++ && ++t < --s); // false

/**********************************/
// If Statements
/**********************************/

// Temperature Check
/*
 * >30     => Hot
 * 20 : 30 => Mild
 * <20     => Cold
 */

let temperature = 19;

if (temperature > 30) {
  console.log("Hot");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Mild");
} else if (temperature < 20) {
  console.log("Cold");
} else {
  console.log("Please Enter a Valid Temperature");
}

// Day Check
/*
 * sunday : thursday => work day
 * friday , saturday => holiday
 */

let day = "sunday";

if (day === "friday" || day === "saturday") {
  console.log("Holiday");
} else {
  console.log("Work Day");
}

// Number Check
/*
 * >0 => Positive
 * <0 => Negative
 */

let number = -10;

if (number < 0) {
  console.log("Negative");
} else if (number > 0) {
  console.log("Positive");
} else {
  console.log("Please Enter a Valid Number");
}

// Driving Eligibility
/*
 * age
 * drivinghistory
 * drivingtest
 */

let age = 17;
let drivingHistory = true;
let drivingTest = true;

if (age >= 18 && drivingHistory && drivingTest) {
  console.log("Acceptable");
} else {
  console.log("Unacceptable");
}

/**********************************/
// Switch
/**********************************/

//  Language Selection
/*
 * English => Hello
 * Arabic  => مرحبًا
 * Spanish => Hola
 * French  => Bonjour
 */

let language = "Arabic";
switch (language) {
  case "Arabic":
    console.log("مرحبًا");
    break;
  case "English":
    console.log("Hello");
    break;
  case "Spanish":
    console.log("Hola");
    break;
  case "French":
    console.log("Bonjour");
    break;
  default:
    console.log("Please Enter a Valid language");
}

// Bill Calculation
/*
 * Cafe       => 40 units
 * Restaurant => 50 units
 * Laundry    => 30 units
 * Delivery   => 20 units
 */

let serviceType = "Cafe";
switch (serviceType) {
  case "Cafe":
    console.log("40 units");
    break;
  case "Restaurant":
    console.log("50 units");
    break;
  case "Laundry":
    console.log("30 units");
    break;
  case "Delivery":
    console.log("20 units");
    break;
  default:
    console.log("Please Enter a Valid serviceType");
}

// Student Grades Calculation
/*
 * A => Excellent
 * B => Very Good
 * c => Good
 * D => Pass
 * E => Fail
 */
let grade = "A";
switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Very Good");
    break;
  case "c":
    console.log("Good");
    break;
  case "D":
    console.log("Pass");
    break;
  case "E":
    console.log("Fail");
    break;
  default:
    console.log("Please Enter a Valid grade");
}

/**********************************/
// for Loop
/**********************************/

// sum of numbers from 1 : 30
/*
 * start => 1
 * end   => 30
 */
let num = 0;
for (let i = 1; i <= 30; i++) {
  num += i;
}
console.log(num);

// even number
/*
 * start => 0
 * end   => 20
 */

for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

/**********************************/
// while Loop
/**********************************/

/*
Write a program that starts with a specific number and increases it by 1 each
time until the number is greater than or equal to 10. The program should print
the number in each iteration.
 */

let numberFromUser = 5;
while (numberFromUser <= 10) {
  console.log(numberFromUser);
  numberFromUser++;
}

/*
Write a program that asks the user to input a number, then calculates the sum of even
numbers starting from that number up to 30.
 */

let input = 28;
let sum = 0;
while (input <= 30) {
  if (input % 2 == 0) {
    sum += input;
  }
  input++;
}
console.log(sum);

/**********************************/
// Do while Loop
/**********************************/

/*
Write a program that asks the user to input a word and continues asking for the word until
the user enters the word "quit". After each input, print the entered word.
 */

let word = "quit";
do {
  console.log(word);
} while (word !== "quit");

/*
Write a program that starts with the number 5, checks if the number is odd, and prints it. After
that, increment the number by 1 and terminate the program after executing the process once.
 */

let i = 5;
do {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
} while (i < 5);

/**********************************/
// Function
/**********************************/

/*
function that takes a number and returns its square
number => number * number
 */

function squareNumber(number) {
  return number * number;
}
console.log(squareNumber(20));

/*
Write a function that takes length and width and returns the area
area => length * width
 */

function rectangleArea(length, width) {
  return length * width;
}
console.log(rectangleArea(10, 5));

/*
Write a function that takes a person's name and age and prints a message containing these values
 */

function personDetails(name, age) {
  return name + " " + age;
}
console.log(personDetails("sama", 20));

/*
Write a function without parameters that prints "hello" when called
 */

function sayHello() {
  console.log("Hello");
}
sayHello();

/*
Write an anonymous function stored in a variable that prints your name when called
 */

let yourName = function (name) {
  return name;
};
console.log(yourName("Samasemo"));

/*
Write an arrow function that adds two numbers and returns the result
 */

let calc = (num1, num2) => {
  return num1 + num2;
};
console.log(calc(5, 15));

/*
Write a function in JavaScript that checks the value of a given number and returns:
'Zero'     => number= 0
'Positive' => number > 0
'Negative' => number < 0
 */

function checkForValue(number) {
  if (number == 0) {
    return "zero";
  } else if (number > 0) {
    return "Positive";
  } else {
    return "Negative";
  }
}
console.log(checkForValue(-4));

/*
Write a function in JavaScript that takes the user's age as input and checks:
'Adult' => age >= 18
'Minor' => age < 18
 */

function checkForAge(age) {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
}
console.log(checkForAge(20));

/**********************************/
// Object
/**********************************/

// pc
/*
 * brand
 * processor
 * storage
 * ram
 * gpu
 * os
 * color
 * screenSize
 * battery
 * weight
 */

let pc = {
  brand: "hp",
  processor: "Intel i7-10750H",
  storage: "512GB SSD",
  ram: "16GB",
  gpu: "512GB SSD",
  os: "Windows 10",
  color: "gray",
  screenSize: "15.6 inches",
  battery: "5000mAh",
  weight: "1.8kg",
};
console.log(pc.brand);
console.log(pc.color);

// pet
/*
 * type
 * name
 * age
 * color
 * gender
 * height
 * weight
 * vaccinations
 * health
 */

let pet = {
  type: "dog",
  name: "lele",
  age: "1 year",
  color: "white",
  gender: "female",
  height: "50 cm",
  weight: "1 kg",
  vaccinations: "done",
  health: "good",
};
console.log(pet.age);
console.log(pet.name);

// book
/*
 * title
 * genre
 * author
 * pages
 * price
 * publish date
 * rating
 * language
 */

let book = {
  title: "Ekaadoli",
  genre: "novel",
  author: "hanan lashin",
  pages: "385",
  price: "90",
  publishDate: "2017",
  rating: "4.8",
  language: "arabic",
};
console.log(book.author);
console.log(book.price);

/**********************************/
// Implement Number Methods
/**********************************/

// toString

function convertToString(value) {
  return value + "";
}
console.log(convertToString(10));

//Number

function convertToNumber(value) {
  return +value;
}
console.log(convertToNumber("40"));

//Math.max

function customMax(...value) {
  let max = value[0];

  for (let i = 1; i < value.length; i++) {
    if (value[i] > max) {
      max = value[i];
    }
  }

  return max;
}

console.log(customMax(10, 20, 60)); 

//Math.min

function customMin(...value) {
  let min = value[0];

  for (let i = 1; i < value.length; i++) {
    if (value[i] < min) {
      min = value[i];
    }
  }

  return min;
}

console.log(customMin(0, 20, 60)); 
