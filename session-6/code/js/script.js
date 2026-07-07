// web storages (client storage)

// call()
let display = {
  fullName: function (countryOne, countryTwo) {
    console.log(
      "My name is " +
        this.firstName +
        " " +
        this.lastName +
        " " +
        countryOne +
        " " +
        countryTwo,
    );
  },
};

let person = {
  firstName: "Alex",
  lastName: "Joe",
};

// invoking immediately
display.fullName.call(person, "Canada", "USA");

// apply()
display.fullName.apply(person, ["Canada", "USA"]);

let arr = [10, 2, 3, 5, 6];

// Math = {
//     max: function (a, b, c, d) {

//     }
// }

console.log(Math.max(10, 3, 5, 6, 7));
Math.max.apply("", [10, 2, 3, 5, 6]);

// bind():
let employee = {
  id: 10,
  salary: 9000,
  designation: "Developer",
  details: function () {
    console.log(this.designation);
  },
};

let func = employee.details.bind(employee);
func();

// Template strings  (``)
let str = ` Gigame!
edtech `;
console.log(str.length);
console.log(str);

// Rest Operator(...): replacement arguments
add = (...arr) => {
  console.log(arr);
};

add(10, 2, 3, 4, 5, 6, 8, 100);

// Spread(...): is used to create a shallow copy for arrays & objects
let obj = {
  a: 1,
  b: 2,
};

// let objTwo = obj; //deep copy
// objTwo.a = 10;
// console.log(obj, objTwo);

// using spread: shallow copy
let objTwo = { ...obj, z: 100, a: 10, ...person };
console.log(obj, objTwo);

// for arrays
let one = [10, 2, 4, 5];
let two = [...one, 100, 200, "hello", {}, person];
console.log(two);

// variable and expression substitution
let first = "Alina";
let last = "Joe";
let country = "Australia";

console.log("My name is " + first + " " + last + " living in " + country);
console.log(`My name is ${first} ${last} living in ${country}`);

// re-structuring of object
// property shorthand
let newObj = {
  first,
  last,
  func,
};

console.log(newObj);

// de-structuring of objects
let user = {
  id: 1,
  isVerified: true,
};

const { id, isVerified } = user;
console.log(id, isVerified);

// de-structuring of arrays: use rest opeartor
let colors = ["pink", "lavender", "white", "green", "orange", "blue"];
const [a, b, , ...c] = colors;
console.log(a, b, c);

// JSON: javascript object notion
// array, object to JSON
let colorJson = JSON.stringify(colors);
let userJson = JSON.stringify(user);
console.log(colorJson);
console.log(userJson);

console.log(typeof colorJson);
console.log(typeof userJson);

console.log(JSON.parse(colorJson));
console.log(JSON.parse(userJson));
