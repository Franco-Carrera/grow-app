import { useState } from "react";
import "./counter.css";

const Counter = ({ stock }) => {
  const [count, setCount] = useState(0);
  ///
  //const [quantity, setQuantity] = useState(0);
  //const [user, setUser] = useState(undefined);

  // const miStock = 10 /O En itemdetail

  const minium = 0;
  const addOne = () => {
    count < stock && setCount(count + 1);
  };
  const removeOne = () => {
    count > minium && setCount(count - 1);
  };

  // función suma en base a stocks

  return (
    <div className="itemCount">
      <div className="itemCount_buttons">
        <h1>{count}</h1>
        <button disabled={count === minium} onClick={removeOne}>
          -
        </button>
        <button disabled={count === stock} onClick={addOne}>
          +
        </button>
      </div>
      {count <= minium ? (
        <p>Cuantas unidades desea llevar?</p>
      ) : (
        <button className="addToCart-btn">Agregar al carrito</button>
      )}
      <p className="stock">Stock: {stock}</p>
    </div>
  );
};

export default Counter;

// Como imprimo Counter en mis productos?
