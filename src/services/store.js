export const getProducts = () => new Promise((resolve) => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => resolve(data));
});

export const getProductById = (id) => new Promise((resolve) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => resolve(data));
});

export const addUser = (user) => new Promise((resolve) => {
  setTimeout(() => {
    resolve(console.log(user));
  }, 2000);
});
