import React, { useState, useEffect } from "react";

const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [addedProducts, setAddedProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalProducts = 0;
    let totalPrice = 0;

    addedProducts.forEach((product) => (totalProducts += product.quantity));
    setCartQuantity(totalProducts);

    addedProducts.forEach(
      (product) => (totalPrice += product.price * product.quantity)
    );
    setTotal(totalPrice);
  }, [addedProducts]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      const newProduct = { ...item, quantity: quantity };
      const products = [...addedProducts, newProduct];
      setAddedProducts(products);
    } else {
      updateProductInCart(item.id, quantity);
    }
  };

  const isInCart = (id) => addedProducts.some((prod) => prod.id === id);

  const updateProductInCart = (id, quantity) => {
    const productsInCart = [...addedProducts];
    const productToUpdate = productsInCart.find((prod) => prod.id === id);
    const productIndex = productsInCart.findIndex((prod) => prod.id === id);
    productToUpdate.quantity = productToUpdate.quantity + quantity;
    productsInCart.splice(productIndex, 1, productToUpdate);
    setAddedProducts(productsInCart);
  };

  // Sólo sirve para el login
  const getQuantity = () => {
    let count = 0;
    addedProducts.forEach((prod) => {
      count = count + prod.quantity;
    });
    return count;
  };

  //
  const removeItem = (id) => {
    const productsInCart = [...addedProducts];
    const productIndex = productsInCart.findIndex((prod) => prod.id === id);
    productsInCart.splice(productIndex, 1);
    setAddedProducts(productsInCart);
  };

  const clear = () => {
    setAddedProducts([]);
  };

  return (
    <CartContext.Provider
      value={{
        addedProducts,
        cartQuantity,
        addItem,
        removeItem,
        clear,
        total,
        getQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
