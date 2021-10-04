import { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./counter.css";
import CartContext from "../../context/CartContext";

const Counter = ({ item }) => {
  const [count, setCount] = useState(0);
  const [clickThis, setClick] = useState(0);
  const { addItem } = useContext(CartContext);

  // const minium = 0;

  const addOne = () => {
    count < item.stock && setCount(count + 1);
  };
  const removeOne = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="itemCount">
      {clickThis ? (
        <Fragment>
          <div className="itemCount__buttons">
            <p>{count}</p>
            <button disabled>+</button>
            <button disabled>-</button>
          </div>
          <Link to="/cart">
            <button className="addToCart_btn">Terminar compra</button>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <div className="itemCount__buttons">
            <p>{count}</p>
            <button disabled={count === item.stock} onClick={addOne}>
              +
            </button>
            <button disabled={count === 0} onClick={removeOne}>
              -
            </button>
          </div>
          {count <= 0 ? (
            <p>Cuantas unidades desea llevar?</p>
          ) : (
            <button
              onClick={() => {
                addItem(item, count);
                setClick(true);
              }}
              className="addToCart_btn"
            >
              Agregar al carrito
            </button>
          )}
        </Fragment>
      )}
      <p className="stock">Stock: {item.stock}</p>
    </div>
  );
};

export default Counter;
