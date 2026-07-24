// throttling & Debouncing

// API Integration
// HTTP methods: get(), post(), patch(), put(), delete(id)
// HTTP status: 1xx(information), 2xx(success), 3xx(redirect), 4xx (client error), 5xx(server error)

// axios
// axios.get(api).then((res) => {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

const userApi = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  try {
    const users = await axios.get(userApi);
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

// fetch
const productApi = "https://dummyjson.com/products";

// fetch(productApi)
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

async function getProducts() {
  try {
    const response = await fetch(productApi);
    console.log(response);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const data = await response.json();
    console.log(data.products);
  } catch (err) {
    if (err.status == 404) {
      document.querySelector("#product-error").textContent = err.message;
    } else if (err.status == 500) {
    } else {
      console.log(err.message);
    }
  }
}

document.addEventListener("DOMContentLoaded", getProducts);

const product = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "BMW Pencil",
  }),
};

async function addProduct() {
  try {
    const response = await axios.post(
      "https://dummyjson.com/products/add",
      product,
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

// Try all the API's: https://dummyjson.com/docs/products

// GET Api's
// https://dummyjson.com/products
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
