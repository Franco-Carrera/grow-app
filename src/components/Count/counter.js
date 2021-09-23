import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./counter.css";

const Counter = ({ stock, onConfirm }) => {
  const minium = 0;
  const addOne = () => {
    count < stock && setCount(count + 1);
  };
  const removeOne = () => {
    count > minium && setCount(count - 1);
  };

  const [count, setCount] = useState(0);
  const [clickThis, setClick] = useState(0);

  return (
    <div className="itemCount">
      {clickThis ? (
        <Fragment>
          <div className="itemCount__buttons">
            <button disabled>-</button>
            <p>{count}</p>
            <button disabled>+</button>
          </div>
          <Link to="/cart">
            <button className="addToCart_btn">Terminar compra</button>
          </Link>
        </Fragment>
      ) : (
        <Fragment>
          <div className="itemCount__buttons">
            <button disabled={count === minium} onClick={removeOne}>
              -
            </button>
            <p>{count}</p>
            <button disabled={count === stock} onClick={addOne}>
              +
            </button>
          </div>
          {count <= minium ? (
            <p>Cuantas unidades desea llevar?</p>
          ) : (
            <button
              onClick={() => {
                onConfirm(count);
                setClick(true);
              }}
              className="addToCart_btn"
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
