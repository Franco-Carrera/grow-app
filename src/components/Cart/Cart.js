import "./Cart.css";
import React, { useContext, useState } from "react";
//import ItemList from "../ItemList/ItemList";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";
import NotificationContext from "../../context/NotificationContext";
import Button from "../Button/Button";
import { createOrder } from "../../services/firebase/firebase";

const Cart = () => {
  const [processingOrder, setProcessingOrder] = useState(false);
  const { addedProducts, removeItem, clear, price } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);

  const confirmOrder = () => {
    setProcessingOrder(true);

    const objOrder = {
      buyer: user,
      items: addedProducts,
      total: price,
    };

    createOrder(objOrder)
      .then((msg) => {
        setNotification("success", msg);
        console.log(setNotification);
      })
      .catch((error) => {
        setNotification("error", error);
      })
      .finally(() => {
        setProcessingOrder(false);
        clear();
      });
  };

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
      {!processingOrder && addedProducts.length > 0 ? (
        <>
          <Button
            label="Vaciar carrito"
            // className="cleanCart_btn"
            clickHandler={() => clear()}
          ></Button>
        </>
      ) : (
        <p>Su carrito esta vacío</p>
      )}
      {!processingOrder && addedProducts.length > 0 && (
        <div>
          <Button
            label="Confirmar compra"
            onClick={() => confirmOrder()}
            // className="Button o traer otro button"
          />
          <h3 className="totalPrice">Total: {price}</h3>
        </div>
      )}
    </article>
  );
};

//

export default Cart;
