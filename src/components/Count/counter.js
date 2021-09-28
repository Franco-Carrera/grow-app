import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./counter.css";

const Counter = ({ item, stock, productsAdded, addProdFunction }) => {
  const [count, setCount] = useState(0);
  const [clickThis, setClick] = useState(0);

  const minium = 0;
  const addOne = () => {
    count < stock && setCount(count + 1);
  };
  const removeOne = () => {
    count > minium && setCount(count - 1);
  };

  const onAddToCart = () => {
    const newProduct = {
      ...item,
      count: count,
    };
    setCount(count);
    addProdFunction([...productsAdded, newProduct]);
  };

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
            <p>{count}</p>
            <button disabled={count === stock} onClick={addOne}>
              +
            </button>
            <button disabled={count === minium} onClick={removeOne}>
              -
            </button>
          </div>
          {count <= minium ? (
            <p>Cuantas unidades desea llevar?</p>
          ) : (
            <button
              className="addToCart_btn"
              onClick={() => {
                //onConfirm(count);
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
