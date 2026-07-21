console.log(10 + 20);

// Async programming

// callback function
// Application: DOM Manipulation, ES6 Array Methods

// Timing Events
let timeoutId = setTimeout(() => {
  console.log("Welcome!");
}, 2000);

// 1000ms = 1s

console.log("start");

// let intervalId = setInterval(() => {
//   const d = new Date();
//   console.log(d);
// }, 1000);

document.querySelector("#btn").addEventListener("click", () => {
  //   clearInterval(intervalId);
  clearTimeout(timeoutId);
});

console.log(1);
console.log(2);

// callback hell / Pyramid of Doom
// getData(function (user) {
//     getPost(user.id, function (posts) {
//         getComments(posts[0].id, function (comments) {

//         })
//     })
// })

// Promise
const myPromise = new Promise(function (res, rej) {
  //producing code
  let x = 0;
  if (x == 0) {
    res(x);
  } else {
    rej("error");
  }
});

console.log(myPromise);

// consuming code
myPromise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(10);
console.log(20);

// Application: axios, fetch

// async/await: always a promise object
async function add(a, b) {
  const result = (await a) + b;
  return result;
}

console.log(add(100, 500));
add(100, 500).then((value) => {
  console.log(value);
});

const getData = () => {
  //api call
  return { id: 2 };
};

async function displayData() {
  try {
    const user = await getData();
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0]);
    return comments;
  } catch (err) {
    console.log(err);
  }
}

Promise.all([
  new Promise((res, rej) => {
    res(20);
  }),
  Promise.resolve(10),
  Promise.resolve(100),
]).then(([a, b, c]) => {
  console.log(a, b, c);
});

Promise.race([
  new Promise((res, rej) => {
    res(20);
  }),
  Promise.resolve(10),
  Promise.resolve(100),
]).then((a) => {
  console.log(a);
});

// Task
//  Creating a Simple Promise: Write a function that returns a promise which resolves to a specific object after 1 second.
//  Create an object with a method that returns a promise. The promise should resolve with the object's properties after 2 seconds.
//  Write a function that accepts an object with two promises. Return a new promise that resolves when both resolve (Promise.all).
//  Write a function that takes a promise and a timeout. If the promise exceeds the timeout, reject with an error (Promise.race).
//  

let obj = {
  id: 1,
};

function promise() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(obj);
    }, 1000);
  });
}

const p = promise();
p.then((result) => {
  console.log(result);
});
