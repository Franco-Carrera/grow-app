import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import "./counter.css";
import NotificationContext from "../../context/NotificationContext";
import CartContext from "../../context/CartContext";

/// Ahora si renovar Count

// CartWidget y Cart VAN con CartContext

// NavBar solo para categoryes

// Sacar login  // puede investigarse o no en firebase

// Reveer última clase

const Counter = ({ item, setCount, stock }) => {
  const [quantity, setQuantity] = useState(0);
  const [clickThis, setClick] = useState(0);
  const { setNotification } = useContext(NotificationContext);
  const { addItem, isInCart, getProduct } = useContext(CartContext);

  useEffect(() => {
    if (isInCart(item.id)) {
      const oldQuantity = getProduct(item.id)?.quantity;
      setQuantity(oldQuantity);
    }
    return () => {
      setQuantity(0);
    };
  }, [item, getProduct, isInCart]);

  const minium = 0;

  const addOne = () => {
    quantity < stock && setQuantity(quantity + 1);
  };
  const removeOne = () => {
    quantity > minium && setQuantity(quantity - 1);
  };

  const onAddToCart = () => {
    addItem(item, quantity);
    setCount(quantity);
    setNotification("succes", `${item.title} ha sido agregado al carrito`);
  };

  return (
    <div className="itemquantity">
      {clickThis ? (
        <Fragment>
          <div className="itemCount__buttons">
            <button disabled>-</button>
            <p>{quantity}</p>
            <button disabled>+</button>
          </div>
          <Link to="/cart">
            <button className="addToCart_btn">Terminar compra</button>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <div className="itemCount__buttons">
            <p>{quantity}</p>
            <button disabled={quantity === stock} onClick={addOne}>
              +
            </button>
            <button disabled={quantity === minium} onClick={removeOne}>
              -
            </button>
          </div>
          {quantity <= minium ? (
            <p>Cuantas unidades desea llevar?</p>
          ) : (
            <button
              className="addToCart_btn"
              onClick={() => {
                //onConfirm(quantity);
                onAddToCart();
                setClick(true);
              }}
            >
              Agregar al carrito
            </button>
          )}
        </Fragment>
      )}
      <p className="stock">Stock: {stock}</p>
    </div>
  );
};

export default Counter;
