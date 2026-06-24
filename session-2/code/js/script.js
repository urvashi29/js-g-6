// Array Methods
// String Methods

// let: is introduce to declare a block scoped variable(if, loops)
// 1. block scoped variable
var a = 10;

{
  let a = 20;
  a = 50;
  console.log(a); //
}

console.log(a); //

// 2. hoisting doesn't work
// d = 10;
// console.log(d);
// let d; //give error

// 3. re-declaration is not allowed
// let a = 90;//give error

// ideal
// let name = "Alina"

// const: is introduce to declare a block scoped variable with constant reference
// 1. block scoped variable
var z = 100;

{
  const z = 200;
  //   z = 500;//give error
  console.log(z);
}

console.log(z);

// 2. hoisting doesn't work
// lastName = "joe";
// console.log(lastName);
// const lastName;//give error

// 3. re-declaration is not allowed
// const a = 90;//give error

console.log("Opeartors");

// Operators
// Arithematic operator
console.log(20 - 10);
console.log(20 + 10);
console.log(20 / 2); //divisor
console.log(20 % 2); //remainder
console.log(2 ** 3); //power
console.log(2 * 10);

// increment/decrement
let i = 10;
i++; //i = i + 1
console.log(i);
i--; //i = i - 1
console.log(i);

// Comparison Operators
let x = 1;
let y = "1";
console.log(x == y); //compare only the value
console.log(x === y); //compare both datatype and value (strict checking)
console.log(x >= 10);
console.log(y <= 10);
console.log(x != 1); //compare only the value
console.log(y !== 1); //compare both datatype and value (strict checking)

// Logical opeartors (&&, ||, !)
console.log(x == y && x === y); //return true if all are true otherwise false
console.log(x == y || x === y); ////return true if any one statement is true otherwise false
console.log(!(x == y)); //reverse

// string operator (+)
let str = "hello";
let strTwo = "world";

console.log(str + strTwo); //concatenate the strings
console.log(str + 100);
console.log(str + 10 + 20);

// implicit coersion (automatic datatype convert)
console.log("20" - 10);
console.log(20 + "");
console.log("" - 20);
console.log(typeof NaN); //number
console.log("20" / 2);
// "" -> 0

// Operator precedence (priority of operator)
// brackets ()
// * /
// + -
// L -> R

// console.log(10 + 90 / 9 - 20 * 2);

// Rules
// 1. check operator precendence
// 2. if any of the operand is string and "+" is present, concatenate
// 3. if operator is not "+", check type of opearand is alpha string present, result is NaN
// 4. if numeric string is there, do automatic type concersion

// Explicit coersion
// str to number
console.log(Number("hello")); //
console.log(Number("100")); //
console.log(Number(""));
console.log(parseInt(10.56));
console.log(parseFloat(10.569));
console.log(parseInt("10.5fff690")); //10
console.log(parseFloat("10.5fff690")); //10.5
console.log(parseInt("ee310.5fff690")); //NaN

// number to string
let price = 20;
console.log(price.toString()); //"20"

// string to boolean
console.log(true.toString()); //"true"

// boolean to number
console.log(Number(true)); //1
console.log(Number(false)); //0

console.log(true > false);
console.log(true + false > 2); //
console.log(undefined == null); //true
console.log(undefined === null); //false

//  truth: 1 and above
//  falsy: 0, null, undefined, negative

// Logical statement
// ||: return first truth value if present, otherwise return last falsy value
console.log(1 || 0); //1
console.log(null || undefined || 0 || 2); //2
console.log(null || undefined || 0); //0

// &&: return first falsy value, otherwise last truth value
console.log(1 && 0); //0
console.log(1 && 2 && null && 3); //null
console.log(1 && 2 && 3); //3

// ternery operator (?:)
let last = "joe d";
last === "joe" ? console.log(last) : console.log("wrong input");

// optional chaining (?.)
let user = {
  firstName: "alaya",
  contact: {
    email: "admin@gmail.com",
  },
};

// console.log(user.location.city);//error
console.log(user.location?.city); //undefined
console.log(user.contact?.email);
