import "./Cart.css";
import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import Button from "../Button/Button";

const Cart = () => {
  const { addedProducts, removeItem, clear, price } = useContext(CartContext);

  return (
    <article className="cart">
      {addedProducts.map((prod) => (
        <section key={prod.id} className="cart__item">
          <img
            className="item__Img"
            src={prod.pictureUrl}
            alt={`foto ${prod.title}`}
          />
          <div className="itemInfo">
            <h2 className="itemTitle">{prod.title}</h2>
            <p className="itemDescription">{prod.description}</p>
            <p className="itemQuantity">{prod.quantity}</p>
            <p className="price">{`$${prod.price}`}</p>
          </div>

          <button onClick={() => removeItem(prod.id)} className="remove_Btn">
            x
          </button>
        </section>
      ))}
      {addedProducts.length > 0 ? (
        <>
          <Button
            label="Vaciar carrito"
            // className="cleanCart_btn"
            clickHandler={() => clear()}
          ></Button>
          <p className="totalPrice">Total: {price}</p>
        </>
      ) : (
        <p>Su carrito esta vacío</p>
      )}
    </article>
  );
};

//

export default Cart;
