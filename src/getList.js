import { data } from "./data";

export const getList = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      category
        ? resolve(data.filter((prod) => prod.category === category))
        : resolve(data);
    }, 2000);
  });
};
