import { useState } from "react";

/**Este archivo luego se usará para renderizar un sólo objeto detallado */

const FetchSearch = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");

  //lógica
  const handleForm = (event) => {
    event.preventDefault();
    console.log(input);
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then((res) => {
        return res.json();
      })
      .then(function (respuesta) {
        setProducts(respuesta.results.slice(0, 10));
      });
  };

  ////////////
  const vocales = ["a", "e", "i", "o", "u"];
  const handlerKeyDown = (ev) => {
    ev.preventDefault();
    if (vocales.find((item) => ev.key.toLowerCase() === item)) {
    }
  };
  //corregir

  /**Aquí iría lo que se renderiza **/
  return (
    <section>
      <form onSubmit={handleForm}>
        <input type="text" onChange={(event) => setInput(event.target.value)} />
        {/* ------------------------------ */}
        <input onKeyDown={handlerKeyDown} />
        <button type="submit">Buscar</button>
      </form>

      <ul>
        {products.map((prod) => {
          return (
            <li style={{ color: "white" }} key={prod.id}>
              {prod.title}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FetchSearch;
