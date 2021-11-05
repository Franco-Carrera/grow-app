import { Fragment, useContext, useState } from "react";
import "./Counter.css";
import CartContext from "../../context/CartContext";
import Button from "../Button/Button";

const Counter = ({ item, itemAdded }) => {
  const [count, setCount] = useState(1);
  const { addItem } = useContext(CartContext);

  const addOne = () => {
    count < item.stock && setCount(count + 1);
  };
  const removeOne = () => {
    count > 1 && setCount(count - 1);
  };

  const onClickHandler = (item, count) => {
    addItem(item, count);
    itemAdded(true);
  };

  return (
    <div className="itemCount">
      <Fragment>
        <div className="itemCount__buttons">
          <p className="parrafo__count">{count}</p>
          <button
            className="button__count"
            disabled={count === item.stock}
            onClick={addOne}
          >
            +
          </button>
          <button
            className="button__count"
            disabled={count === 1}
            onClick={removeOne}
          >
            -
          </button>
        </div>
        {count <= 0 ? (
          <p>Cuantas unidades desea llevar?</p>
        ) : (
          <Button
            label="Agregar al carrito"
            clickHandler={() => onClickHandler(item, count)}
          />
        )}
      </Fragment>

      <p className="stock">Stock: {item.stock}</p>
    </div>
  );
};

export default Counter;
