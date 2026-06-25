// pure function
// closure function
// Array Methods ES6

// Array Methods
// indexing starts from 0
let arr = [10, 2, 30, 40, 50, 100];

console.log(arr[1]); //2
console.log(arr.length);

// push & pop
// push: add element in the end
arr.push(200, 300);
console.log(arr);

arr.pop();
arr.pop();
console.log(arr);

// shift & unshift
arr.shift(); //remove from start
console.log(arr);

arr.unshift(100, 200);
console.log(arr);

// splice(): to add or remove in between in an array
// [100, 200, 10, 2, 30, 40, 50, 100]
arr.splice(2, 2, 60); //start index, number of elements, new elements to be added
console.log(arr);

//to add
arr.splice(1, 0, 80);

// to delete
arr.splice(5, 2);
console.log(arr);

// slice
let nums = [10, 2, 3, 4, 5, 6, 100];
console.log(nums.slice(2, 6)); //return array containing elements from 2nd till 5th index

nums.reverse();
console.log(nums);

console.log(nums.includes(100));
console.log(nums.indexOf(3));

// array to string
console.log(nums.join("*"));
console.log(nums.join(""));
console.log(nums.join());

// string to array
let str = "he-llo wor-ld";
console.log(str.split("-"));
console.log(str.split(""));

// String Methods
// index/position starts from 0
let strVal =
  "  front-end: html, css, js are the building blocks of front-end deve ... ";
console.log(strVal.length);
console.log(strVal[9]);

console.log(strVal.toUpperCase());
console.log(strVal.toLowerCase());
console.log(strVal.trim());

// search
//return -1 if not exists
console.log(strVal.indexOf("end", 15)); //return index of the first occurence of end (e)
console.log(strVal.lastIndexOf("end"));
console.log(strVal.search("end"));

console.log(strVal.replace("end", "END"));
console.log(strVal.replaceAll("end", "END"));

console.log(strVal.includes("end")); //return boolean value

// Arrays of objects
const products = [
  {
    id: 1,
    productName: "",
    price: 89,
  },
  {
    id: 2,
    productName: "",
    price: 100,
  },
  {
    id: 3,
    productName: "",
    price: 200,
  },
];

// callback function: a function passed as an argument to another function
function sum(r) {
  console.log(r);
}

function add(a, b, c) {
  let result = a + b;
  c(result); //calling the callback function
}

// r -> callback parameter
add(10, 20, function (r) {
  console.log(r);
});

add(100, 200, sum);

// Application of callback: Timing events, DOM methods, async prog, custom, Array ES6 methods

// high ordered function: is function which takes another function as argument or return a function
// add, addToCart -> HOF

// function addToCart(productId) {
//     return function () {

//     }
// }

// let fun = addToCart(2);

// Applications of HOF: Closure, throttling, debouncing

// first class objects: if function is passed as value (callback, function expression, returning a function)

// function declaration vs function expression (First session)

// this keyword: refer to object based on where it placed
console.log(this); //window (global object)

// window -> location, history, web storages, document, timing events

function sample() {
  console.log(this); //owner object of the functions
}

sample();

let person = {
  details: function () {
    console.log(this);
  },
};

person.details();

("use strict");
console.log(this); //undefined

var s = 10;

// arrow function/fat arrow (ES6): new syntax of defining a function
// 1. syntax
function display() {
  return "Hello";
}

console.log(display());

displayVal = () => {
  return "World";
};
// same as
displayVal = () => "World";
console.log(displayVal());

// 2. return

// 3. arguments
function multiply() {
  console.log(arguments, arguments[0]);
}

multiply(10, 2);

multiplyVal = () => {
  //   console.log(arguments); //error
};

multiplyVal(10, 2);

// 4. this keyword
let emp = {
  detail: function () {
    console.log(this);
  },
  details: () => {
    console.log(this); //window (allows)
  },
};

emp.detail();
emp.details();
