// Manipulating CSS
// creation DOM node
// capture User Input

// web storages (client storage)
// localStorage storage
let person = {
  id: 1,
  firstName: "Alex",
};

localStorage.setItem("firstName", "Alina"); //key, value
localStorage.setItem("person", JSON.stringify(person));

console.log(localStorage.getItem("person"));

// localStorage.clear();
localStorage.removeItem("firstName");

// session storage
sessionStorage.setItem("nums", JSON.stringify([19, 3, 4, 5]));

console.log(sessionStorage.getItem("nums"));

// sessionStorage.clear()
// sessionStorage.removeItem("nums")

// cookie
document.cookie =
  "username=alina;expires=Sat 11 Jul 2026 12:00:00 UTC; path=/; secure=true";
document.cookie = "lastname=joe";

// DOM
// Selectors
console.log(document.getElementById("sample")); //return the element having id -> sample
console.log(typeof document.getElementById("sample"));

// manipulation content
document.getElementById("sample").textContent = "Hello World";
document.getElementById("test").innerHTML = "<p>Hi</p>";

console.log(document.getElementById("list").textContent);
console.log(document.getElementById("list").innerHTML);

let items = document.getElementsByClassName("items");
console.log(items);

for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// document.getElementsByTagName("p")
// document.getElementsByName("name");

// new selector methods
// querySelector(css selector)
console.log(document.querySelector("#sample"));
console.log(document.querySelector(".items"));

let listItems = document.querySelectorAll(".items");
console.log(listItems);

let arr = [];

listItems.forEach((ele) => {
  console.log(ele);
  arr.push(ele.textContent);
});

console.log(arr);
