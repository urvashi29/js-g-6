console.log("hello");

// variables
// var let const
var x = 10; //variable declaration and assigning a value

// Dataypes
// Primitive
// number
var y = 100,
  z = 10.6;
console.log(y);
console.log(typeof y, typeof z);

// string
// alpha string: "edkjeidjeo"
// numeric string: "78789989"
// non-numeric-> "I)*E)*iok"

var str = "09090-(*)(()*)()";
console.log(str, typeof str);

// Boolean
console.log(y == 100); //true

// undefined
var i; //declaring
console.log(i); //undefined
console.log(typeof i); //undefined

i = 200;
console.log(i);

// null
var first = null;
console.log(first); //null
console.log(typeof first); //object

// Non-Primitive
// object: key/value or property/value
// 1. object literal
var product = {
  productId: 10,
  productPrice: 1000,
  productTitle:
    "ANRABESS Womens Short Sleeve Henley Tops V Neck Dressy Casual Blouses Summer Trendy Tee S",
  sizes: ["xl", "l", "s", "m"],
  description: {
    about: "lore, ipsum",
  },
};

var employee = {
  empId: 1,
  department: "IT",
  empName: "Alina",
};

console.log(product["productTitle"]);
console.log(product["description"]["about"]);

console.log(product.productId);
console.log(product.description.about);

// updation
product.t = 100;
product.productPrice = 2000;
console.log(product);

for (x in product) {
  console.log(x);
  console.log(product[x]);
}

console.log(typeof product); //object

// Arrays
// index/position starts from 0
var nums = [10, 2, 3, 5, 6];
console.log(nums[2]);
console.log(typeof nums); //object

var colors = ["pink", "white", "orange"];
var mix = [null, undefined, "hello", 90];

// verification of arrays
console.log(Array.isArray(nums)); //it return true

var u = null;

// for checking
console.log(u == null);

// nullish operator ?? (ES2020)
var result = u ?? "default";
console.log(result);

// global scope
var p = 100;

console.log(add(20, 40)); //hoisted

// function declaration
//parameters
function add(a, b) {
  //local scope
  var sum = a + b + p;
  return sum;
}

// console.log(sum); //give error
console.log(add(10, 20)); //arguments
var r = add(100, 200);
console.log(r);

console.log(typeof add);

// function are first class objects: whenever we are using function as value

// hoisting: declaration are hoisted
d = 100; //assigning a value
console.log(d);
var d; //declaration

// console.log(details());//hoisting will not work

// function expression
var details = function (str) {
  return str;
};

console.log(details("Detailed added!"));
