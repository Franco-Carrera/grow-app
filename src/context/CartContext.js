import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState([]);

  const addItem = (item, quantity) => {
    const product = { ...item, quantity: quantity };
    const products = { ...addedProducts, product };
    setAddedProducts(products);
    console.log(addedProducts);
  };

  return (
    <CartContext.Provider value={{ addItem }}>{children}</CartContext.Provider>
  );
};

export default CartContext;
