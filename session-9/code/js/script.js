// attach events from js
document.querySelector("#sample").addEventListener("click", function (e) {
  console.log(this);
  //   e -> event object (automatically created)
  console.log(e);
  console.log(e.target); //get the element on which it is attached
});

document.querySelector("#email").addEventListener("input", function (e) {
  let email = e.target.value;
  console.log(email);
});

document.querySelector("#password").addEventListener("keyup", function (e) {
  let password = e.target.value;
  console.log(password);
});

document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form is submited!");
});

// Event propogation
// addEventListener(event, function, boolean )
// bubbling -> false (default)
document.querySelector("#one").addEventListener(
  "click",
  function () {
    console.log("one");
  },
  false,
);

document.querySelector("#two").addEventListener(
  "click",
  function () {
    console.log("two");
  },
  false,
);

document.querySelector("#three").addEventListener(
  "click",
  function () {
    console.log("three");
  },
  false,
);

// capturing -> true
document.querySelector("#one").addEventListener(
  "click",
  function () {
    console.log("one");
  },
  true,
);

document.querySelector("#two").addEventListener(
  "click",
  function () {
    console.log("two");
  },
  true,
);

document.querySelector("#three").addEventListener(
  "click",
  function () {
    console.log("three");
  },
  true,
);

// stop propogation
document.querySelector("#one").addEventListener(
  "click",
  function (e) {
    console.log("one");
  },
  false,
);

document.querySelector("#two").addEventListener(
  "click",
  function (e) {
    console.log("two");
    e.stopPropagation();
  },
  false,
);

document.querySelector("#three").addEventListener(
  "click",
  function (e) {
    console.log("three");
    e.stopPropagation();
  },
  false,
);

// let obj = {
//     id: 90
// }

// Map object
const myMap = new Map();
myMap.set(404, "Not Found");
myMap.set("admin", "Alina");
let arr = [19, 3, 4, 5];
myMap.set(arr, 29);

console.log(myMap);
console.log(myMap.has(404));
console.log(myMap.get("admin"));
console.log(myMap.get(arr));
console.log(myMap.size);

//  Set object
const mySet = new Set([20, 20, 3, 3, 4, 5, 5]);
console.log(mySet);

mySet.add(100);
mySet.add(200);
console.log(mySet);
console.log(mySet.has(100));

console.log(mySet.size);
