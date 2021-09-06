const Accountant = (valor, funcion) => {
  return (
    <div>
      <article>
        <h1 style={{ color: "white" }}>{valor}</h1>
        <button onClick={() => funcion(valor - 1)}>Menos</button>
        <button onClick={() => funcion(valor + 1)}>Mas</button>
      </article>
    </div>
  );
};

export default Accountant;
