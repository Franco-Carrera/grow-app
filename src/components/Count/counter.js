import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const miFuncionRestar = () => {
    if (count > 0) setCount(count - 1);
    if (count === 0) {
      alert("ya es 0");
    }
  };
  // función suma en base a stocks

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => miFuncionRestar(count - 1)}>-</button>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Counter;

// Como imprimo Counter en mis productos?
