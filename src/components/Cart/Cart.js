import "./Cart.css";
import React, { useContext, useState, useEffect } from "react";
//import ItemList from "../ItemList/ItemList";
import UserContext from "../../context/UserContext";
import CartContext from "../../context/CartContext";
import NotificationContext from "../../context/NotificationContext";
import Button from "../Button/Button";
import { createOrder } from "../../services/firebase/firebase";

const Cart = () => {
  const [total, setTotal] = useState();
  const [processingOrder, setProcessingOrder] = useState(false);
  const { addedProducts, removeItem, clear, price } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    setTotal(price);
  }, [price]);

  const confirmOrder = () => {
    setProcessingOrder(true);

    const objOrder = {
      buyer: user,
      items: addedProducts,
      total: total,
    };

    createOrder(objOrder)
      .then((msg) => {
        setNotification("success", msg);
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
      {total > 0 && !processingOrder && <h3>Total: ${total}</h3>}
      {!processingOrder && addedProducts.length > 0 ? (
        <>
          <Button label="Vaciar carrito" clickHandler={() => clear()}></Button>
        </>
      ) : (
        <p className="clean__paragraph">Su carrito esta vacío</p>
      )}
      {!processingOrder && addedProducts.length > 0 && (
        <button onClick={() => confirmOrder()} className="buy__btn">
          Confirmar Compra
        </button>
      )}
    </article>
  );
};

//

export default Cart;
