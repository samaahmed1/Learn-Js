/* //* Opetation :-
*Arithmetic
*Logical
*Assignment 
*Comparison
*/

//* Arithmetic :-

//? 1-
let numberOne = 8; 
let numberTwo = 3;

// binary :

console.log(numberOne + numberTwo); // 11
console.log(numberOne - numberTwo); // 5
console.log(numberOne * numberTwo); // 24
console.log(numberOne ** numberTwo);// 512
console.log(numberOne / numberTwo); // 2.66666
console.log(numberOne % numberTwo); // 2

// unary :

console.log(numberOne++); // 8
console.log(++numberOne); // 10
console.log(--numberTwo); // 2
console.log(numberTwo--); // 2
console.log(~numberOne);  // -11

//? 2-
let num1 = 5;
let num2 = 10;

// unary :

console.log(num1++ + ++num2); // 5 + 11
console.log(num1 + num2);     // 6 + 11
console.log(--num1 - num2++); // 5 - 11
console.log(~num2 + ++num1);  // -13 + 6

//* Logical :-

let a = true;
let b = false;
let c = true;

// unary :

console.log(!a); // false
console.log(!b); // true

// binary :

console.log(a && b);        // false
console.log(a || b);        // true
console.log((a || b) && c); // true && true => true

//* Assignment => binary :-

let d = -6;
let e = 12;

console.log(d += e); // 6
console.log(d *= e); // -72
console.log(d %= e); // 0

//* Comparison => binary :-

let x = 8;
let y = '8'; 
let z = 10;

console.log(x == y);  // true
console.log(x === y); // false
console.log(x != z);  // true
console.log(x !== y); // true

//* Mix (Operation) :-

let s = 10;
let t = 20;
let u = 0;

console.log(!(s <= t));                  // false
console.log((s < t) && (s == u));        // true && false => false
console.log((s > t) || (t > u));         // false || true => true
console.log((s > t) || (u == 0));        // false || true => true
console.log((u != 0) || (t >= 10));      // false || true => true
console.log((s-- > t++) && (++t < --s)); // (10 > 20 ) && (22 < 8) => false

////////////////////////////

//* If Statement :-

//? 1-
/*
* >30     => Hot
* 20 : 30 => Mild 
* <20     => Cold
*/
let temperature = 19;

if (temperature > 30) {
  console.log ("Hot");
} else if ((temperature >= 20) && (temperature <= 30)) {
  console.log("Mild")
} else if (temperature < 20) {
  console.log("Cold")
} else {
  console.log("Please Enter a Valid temperature")
}

//? 2- 

/*
* sunday : thursday => work day
* friday , saturday => holiday
*/

let day = "sunday";

if ((day === "friday") || (day === "saturday")) {
  console.log("holiday");
} else {
  console.log("work day");
}

//? 3- 

/*
* >0 => Positive
* <0 => Negative
*/

let number = -10;

if (number < 0) {
  console.log("Negative")
} else if (number > 0){
  console.log("Positive")
} else {
  console.log("Please Enter a Valid Number")
}

//? 4- 

/*
* age
* drivinghistory
* drivingtest
 */

let age = 17;
let drivingHistory = true;
let drivingTest = true;

if ((age >= 18) && (drivingHistory == true) && (drivingTest == true)) {
  console.log("Acceptaple")
} else {
  console.log("Unacceptaple")
}















