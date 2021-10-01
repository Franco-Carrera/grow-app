import React, { useState } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const products = [...addedProducts, { ...item, quantity: quantity }];
      setAddedProducts(products);
    } else {
      console.log("ya existe en el carrito");
    }
  };

  const isInCart = (id) => addedProducts.some((prod) => prod.id === id);

  return (
    <CartContext.Provider value={{ addedProducts, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
