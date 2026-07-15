// Map, set object
// Event propogation

// access
console.log(document.querySelector("#sample").textContent);

// update
document.querySelector("#test").textContent = "Hello!";

// Manipulating CSS
document.body.style.backgroundColor = "pink";

document.querySelector("#sample").style.fontSize = "20px";
document.querySelector("#sample").style.backgroundColor = "orange";
document.querySelector("#sample").style.color = "white";

// use class
// select all <li> which are children of element with id ="items"
// let item = document.querySelector("#items > li").classList;
// console.log(item);
// items.add("list-item");

let items = document.querySelectorAll("#items > li");

items.forEach((item) => {
  item.classList.add("list-item");
  item.classList.remove("card");
  //   item.classList.toggle("");
});

// creation DOM node
let div = document.createElement("div"); //<div></div>
div.textContent = "Hi!"; //<div>Hi!</div>
div.style.backgroundColor = "palevioletred"; //<div style="background-color: 'palevioletred' ">Hi!</div>
console.log(div);
document.body.appendChild(div);

let img = document.createElement("img");
// img.src = "";
// img.alt = ''
img.setAttribute(
  "src",
  "https://img.magnific.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg",
);
img.setAttribute("alt", "pattern");
img.style.height = "100px";
img.style.width = "100px";

document.querySelector("#items").before(img);

// document.querySelector("#items").after(img);

// capture User Input
function captureInput() {
  let age = document.querySelector("#age").value;
  let email = document.querySelector("#email").value;
  console.log(age); //string format
  console.log(email);

  // validation
  if (age.length >= 3 || Number(age) <= 0) {
    document.querySelector("#age-error").textContent = "Enter only 2 digits";
  } else {
    document.querySelector("#age-error").textContent = "";
  }
}

function validate() {
  let age = document.querySelector("#age").value;
  let email = document.querySelector("#email").value;
  console.log(age, email);
}

// value checking
// ==
// !=

// strict checking (value + datatype)
// ===
// !==

// Task
// create a list from JS and insert into DOM
// Form Validation (email, password, username, age, date)
