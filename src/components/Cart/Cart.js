import "./Cart.css";
import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import Button from "../Button/Button";
import {
  collection,
  addDoc,
  doc,
  writeBatch,
  Timestamp,
  getDoc,
} from "@firebase/firestore";
import { db } from "../../services/firebase/firebase";
import UserForm from "../UserForm/UserForm";

const Cart = () => {
  const { addedProducts, removeItem, clear, total } = useContext(CartContext);
  const [processingOrder, setProcessingOrder] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [generatedOrder, setGeneratedOrder] = useState();
  const [orderId, setOrderId] = useState();

  // const { setNotification } = useContext(NotificationContext);

  const confirmOrder = (buyer) => {
    setProcessingOrder(true);

    const order = {
      /**o user */
      buyer: buyer,
      items: addedProducts,
      date: Timestamp.fromDate(new Date()),
      total: total,
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    order.items.forEach((prod, index) => {
      getDoc(doc(db, "items", prod.id)).then((docSnap) => {
        if (docSnap.data().stock >= order.items[index].quantity) {
          batch.update(doc(db, "items", docSnap.id), {
            stock: docSnap.data().stock - order.items[index].quantity,
          });
        } else {
          outOfStock.push({ id: docSnap.id, ...docSnap.data() });
        }
      });
    });

    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), order)
        .then((ref) => {
          batch.commit();
          setOrderId(ref._key.path.segments[1]);
          setGeneratedOrder(true);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setProcessingOrder(false);
          clear();
        });
    }
  };

  return (
    <article className="cart">
      <h1>Carrito</h1>

      {!processingOrder ? (
        addedProducts.length === 0 ? (
          generatedOrder ? (
            <div className="container__orderId">
              <p className="p__orderId">{`Orden generada, el id de su compra es el #${orderId}`}</p>
            </div>
          ) : (
            <p>su carrito está vacío</p>
          )
        ) : (
          <>
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

                <button
                  onClick={() => removeItem(prod.id)}
                  className="remove_Btn"
                >
                  x
                </button>
              </section>
            ))}
            {/* ------------------- */}
            {addedProducts.length > 0 ? (
              <>
                <Button label="Vaciar carrito" clickHandler={() => clear()} />
                <Button
                  label="Confirmar compra"
                  clickHandler={() => setShowForm(true)}
                />
                <p className="totalPrice">TOTAL: ${total}</p>
                {showForm && (
                  <UserForm
                    showForm={setShowForm}
                    confirmOrder={confirmOrder}
                  />
                )}
              </>
            ) : (
              generatedOrder && (
                <p className="p__orderId">{`Orden generada, el id de su compra es el #${orderId}`}</p>
              )
            )}
          </>
        )
      ) : (
        <p>Procesando orden</p>
      )}
    </article>
  );
};

export default Cart;
