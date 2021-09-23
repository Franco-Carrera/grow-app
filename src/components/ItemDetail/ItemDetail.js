//import { useState } from "react";
import Counter from "../Count/counter";
import "./ItemDetail.css";

//Capittal Letter
const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

const ItemDetail = ({ item, productsAdded, addProdFunction }) => {
  //const [count, setCount] = useState(0)
  if (!item) {
    return <h3>{`Este producto no existe aún`}</h3>;
  }

  return (
    <section>
      {/* crear card styles */}
      <header>
        <h2 className="title">{capitalLetter(item.title)}</h2>
      </header>

      <main className="mainDetail">
        <img className="card__img" src={item.pictureUrl} alt="PictureDetail" />
        <div className="details">
          <p className="description">{capitalLetter(item.longDescription)}</p>
          <p className="price">${item.price}</p>
        </div>
      </main>
      {/* //  {coun != 0 button terminar ? } */}

      <footer>
        <Counter
          className="counter"
          item={item}
          productsAdded={productsAdded}
          addProdFunction={addProdFunction}
        />
      </footer>
    </section>
  );
};

///// Importar vista de un sólo producto

// Y aquí iria el renderizado
export default ItemDetail;
