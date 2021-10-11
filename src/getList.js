import { data } from "./data";

export const getList = (categoryes) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      categoryes
        ? resolve(data.filter((prod) => prod.categoryes === categoryes))
        : resolve(data);
    }, 2000);
  });
};

// export const getCategories = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 500);
//   });
// };

// Fijarse como entregarlo en this rute.
