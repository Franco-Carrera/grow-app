import React, { Fragment, useContext } from "react";
import CartContext from "../../context/CartContext";

const Cart = () => {
  const { addedProducts } = useContext(CartContext);

  return addedProducts.map((prod) => (
    <Fragment key={prod.id}>
      <h2>{prod.title}</h2>
      <img src={prod.pictureUrl} alt={`foto ${prod.title}`} />
      <p>{prod.shortDescription}</p>
    </Fragment>
  ));
};

export default Cart;
