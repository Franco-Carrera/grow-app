import { data } from "./data";

export const getList = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
};

// Sacar componentes que no use. repasada final.

// export const getCategories = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(data);
//     }, 500);
//   });
// };

// Fijarse como entregarlo en this rute.
