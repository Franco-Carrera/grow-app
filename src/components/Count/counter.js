import { useState } from "react";
import "./counter.css";

const Counter = ({ item, productsAdded, addProductFunction, stock }) => {
  const [quantity, setQuantity] = useState(0);
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

  const onAddCart = () => {
    setCount(quantity);
    setQuantity(0);
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
        <button className="addToCart-btn" onClick={() => onAddCart()}>
          Agregar al carrito
        </button>
      )}
      <p className="stock">Stock: {stock}</p>
    </div>
  );
};

export default Counter;

// Como imprimo Counter en mis productos?
