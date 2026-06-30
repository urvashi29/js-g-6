// OOPS

// pure function
const add = (a, b) => {
  console.log(a + b);
};

add(10, 20);
add(10, 20);

// impure function
let x = 10;
const subtract = (a, b) => {
  console.log(a - b + x);
};

subtract(10, 20);
subtract(10, 20);

// closure function
// var count = 0;//global

function incCount() {
  var count = 0;
  count += 1;
  console.log(count); //
}

incCount(); //
incCount(); //
incCount(); //

// using clousure
function main() {
  var c = 0; //lexical scope

  //   this is closure function
  return () => {
    c += 1;
    console.log(c);
  };
}

let inc = main();
inc();
inc();
inc();

entertainment = () => {
  var userType = "Guest";

  changeUserType = (type) => {
    userType = type;
    console.log(userType);
  };

  return changeUserType;
};

let update = entertainment();
update("Premium");

createBankAccount = () => {
  let balance = 1000;

  return {
    deposit: (amount) => {
      balance += amount;
      console.log(balance);
    },
    withdraw: () => {},
  };
};

const myAccount = createBankAccount();
myAccount.deposit(500);

// Array Methods ES6: map, filter, every, some, find, reduce, forEach
let numbers = [10, 2, 3, 5, 100, 200];

// callback parameter: ele, optional(index, arr)

// map: is used to iterate over an array. returns a new array
let mapResult = numbers.map((ele, index, arr) => {
  console.log(ele, index, arr);
  return ele * 2;
});

// similar to
// numbers.map((ele) =>  ele * 2);

console.log(mapResult);

// forEach: is used to iterate over an array
numbers.forEach((e, index, arr) => {
  console.log(e, index, arr);
});

// find: is used to return first element that pass the test/condtion
let findResult = numbers.find((e) => e >= 100);
console.log(findResult);

// filter: is used to return all the array elements that pass the test/condtion
let filterResult = numbers.filter((e) => {
  return e >= 5;
});

console.log(filterResult);

// every: return a boolean value, return true if all elements passed the conditions, else false
let everyResult = numbers.every((ele) => {
  return ele >= 5;
});

console.log(everyResult);

// some: return a boolean value, return true even if 1 element passed the conditions
let someResult = numbers.some((ele) => {
  return ele >= 5;
});

console.log(someResult);

// reduce: reduce the array to a single value
let salaries = [10000, 25000, 30000, 400000, 50000];

let total = salaries.reduce((val, s) => {
  console.log(val); //10000 35000 65000 105000
  console.log(s); //25000 30000 40000 50000
  return val + s;
});

console.log(total);

let t = salaries.reduce((val, s) => {
  return val + s;
}, 0); //initialise val

console.log(t);

// IIFE / self-invoking function
(function add(a, b) {
  var result = a + b; //local scope
  console.log(result);
})(10, 20);

console.log(result);

// global variable creation inside function: If you don't specify var/let/const for local scope variable, it is globally created
