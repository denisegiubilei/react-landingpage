import { dummyData } from './dummy';

const products = () => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyData);
    }, 500);
  })
);

const addUser = (user) => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(user));
    }, 2000);
  })
);

export {
  products,
  addUser,
};
