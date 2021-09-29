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

/*export const getProductById = (id) => {    
    return new Promise((resolve, reject) => {
        const product = products.find(prod => Number(prod.id) === Number(id))
        setTimeout(() => resolve(product), 1000)
    })
}
*/

// data es lo que resuelvo
// por props me llegan las categoryes de cda producto
